import api.domain.message.repository as Repository
from flask import jsonify,request
from api.models.message import Message
from datetime import datetime


def create_message(body):
    now = datetime.now()
    message = Message(body['farmer_id'], body['technician_id'], body['message'], body.get('date', now))# Aquí creas una instancia del modelo Message en lugar de un diccionario
    
    return Repository.create_message(message)

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