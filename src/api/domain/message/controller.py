import api.domain.message.repository as Repository
from flask import jsonify,request
from api.models.message import Message
from datetime import datetime
from flask_jwt_extended import get_jwt_identity , jwt_required, get_jwt
from api.models.farmer import Farmer
from api.models.technician import Technician

def create_message(body,user):
    now = datetime.now()
    user_role = user['role']
    user_id = user['id']
    if  user_role== "farmer":
        farmer = Farmer.query.filter_by(user_owner=user_id).first()
        if farmer is not None:
            farmer_id = farmer.id
            message = Message(farmer_id=farmer_id, technician_id=body['technician_id'], message=body['message'], date=body.get('date', now), sender=user_id)
            created_message = Repository.create_message(message)
            return created_message.serialize()
        else:
            return {'error': 'Farmer not found'}
    if user_role == "tech":
        technician = Technician.query.filter_by(user_owner=user_id).first()
        if technician is not None:
            technician_id = technician.id
            message = Message(farmer_id=body['farmer_id'], technician_id=technician_id, message=body['message'], date=body.get('date', now), sender=user_id)
            created_message = Repository.create_message(message)
            return created_message.serialize()
        else:
            return {'error': 'Technician not found'}
    else:
        return {'error': 'No user with this ID'}
    

def get_farmer_convers(user_id):
    
    messages = Message.query.filter_by(farmer_id=farmer.id).all()
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
    

def delete_farmer_convers(user_id, id):
    farmer = Farmer.query.filter_by(user_owner=user_id).first()
    if farmer is not None:
        messages = Message.query.filter_by(farmer_id=farmer.id, technician_id=id).all()
        if messages:
            for message in messages:
                deleted_message = Repository.delete_message(message)
            return jsonify({'message': 'Messages deleted'})
        else:
            return jsonify({'message': 'No messages found'})
    else:
        return jsonify({'message': 'Farmer not found'})

def delete_technician_convers(user_id, id):
    technician = Technician.query.filter_by(user_owner=user_id).first()
    if technician is not None:
        messages = Message.query.filter_by(farmer_id=id, technician_id=technician.id).all()
        if messages:
            for message in messages:
                deleted_message = Repository.delete_message(message)
            return jsonify({'message': 'Messages deleted'})
        else:
            return jsonify({'message': 'No messages found'})
    else:
        return jsonify({'message': 'Technician not found'})     