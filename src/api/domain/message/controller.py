import api.domain.message.repository as Repository
from flask import jsonify,request
from api.models.message import Message
from datetime import datetime


def create_message(body):
    now = datetime.now()
    message = Message(body['farmer_id'], body['technician_id'], body['message'], body.get('date', now))# Aquí creas una instancia del modelo Message en lugar de un diccionario
    created_message = Repository.create_message(message)
    return created_message.serialize()

def get_farmer_convers(id):
        messages = Message.query.filter_by(farmer_id=id).all()
        convers = []
        for message in messages:
            convers.append(message.serialize())
        return convers
    
    
def get_technician_convers(id):
    messages = Message.query.filter_by(technician_id=id).all()
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
    
        