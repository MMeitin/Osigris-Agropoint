from api.models.index import db, Service, Technician
from flask import jsonify
import api.domain.serv.repository as Repository
import api.domain.technician.controller as TechController

def create_serv(user_id, body):
    try:
        tech = TechController.get_tech_by_user_owner(user_id)
        if not isinstance(tech, Technician):
            return jsonify({'error': 'User is not a technician.'}), 400
        if body is None or 'name' not in body:
            return jsonify({'error': 'Name is required.'}), 400
        return Repository.create_serv(tech.id, body)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def get_own_serv(user_id):
    tech = TechController.get_tech_by_user_owner(user_id)
    return get_own_serv_by_tech(tech.id)

def get_own_serv_by_tech(tech_id):
    return Repository.get_own_serv(tech_id)
            




