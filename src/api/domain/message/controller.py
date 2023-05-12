import api.domain.message.repository as Repository
from flask import jsonify,request
from api.models.message import Message
from datetime import datetime
from flask_jwt_extended import get_jwt_identity , jwt_required, get_jwt
from api.models.farmer import Farmer
from api.models.technician import Technician
def create_message(body,user):
    now = datetime.now()

    
    user_id = user['id']
    if user['role'] == "farmer":
        farmer_id = Farmer.query.filter_by(id=user_id).first().id
        message = Message(farmer_id=farmer_id, technician_id=body['technician_id'], message=body['message'], date=body.get('date', now), sender=user_id)
        created_message = Repository.create_message(message)
        return created_message.serialize()
    elif user['role'] == "technician":
        technician_id = Technician.query.filter_by(id=user_id).first().id
        message = Message(farmer_id=body['farmer_id'], technician_id=technician_id, message=body['message'], date=body.get('date', now), sender=user_id)
        created_message = Repository.create_message(message)
        return created_message.serialize()
    else:
        return jsonify("no user with this ID")
    

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

def delete_farmer_convers(user_id,id):
    messages = Message.query.filter_by(farmer_id=user_id, technician_id=id).all()
    if messages:
        for message in messages:
            deleted_message = Repository.delete_message(message)
        return jsonify({'message': 'messages deleted'})
    else:
        return jsonify({'message': 'No messages found '})
    
def delete_technician_convers(user_id,id):
    messages = Message.query.filter_by(farmer_id=id, technician_id=user_id).all()
    if messages:
        for message in messages:
            deleted_message = Repository.delete_message(message)
        return jsonify({'message': 'messages deleted'})
    else:
        return jsonify({'message': 'No messages found '})        