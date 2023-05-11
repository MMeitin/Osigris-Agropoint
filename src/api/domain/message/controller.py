import api.domain.message.repository as Repository
from flask import jsonify,request
from api.models.message import Message
from datetime import datetime
from flask_jwt_extended import get_jwt_identity , jwt_required, get_jwt

def create_message(body):
    now = datetime.now()
    user = get_jwt_identity()
    user_sender = user['id']
    
    
    
    message = Message(body['farmer_id'], body['technician_id'], body['message'], body.get('date', now), sender=user_sender)
    created_message = Repository.create_message(message)
    return created_message.serialize()

def get_farmer_convers(user_id):
        messages = Message.query.filter_by(sender=user_id).all()
        convers = []
        for message in messages:
            convers.append(message.serialize())
        return convers
    
    
def get_technician_convers(user_id):
    messages = Message.query.filter_by(sender=user_id).all()
    convers = []
    for message in messages:
        convers.append(message.serialize())
    return convers

def delete_convers(farmer_id, technician_id):
    messages = Message.query.filter_by(farmer_id=farmer_id, technician_id=technician_id).all()
    if messages:
        for message in messages:
            deleted_message = Repository.delete_message(message)
        return jsonify({'message': 'messages deleted'})
    else:
        return jsonify({'message': 'No messages found '})
    
        