from api.models.index import db, Service
from flask import jsonify
import api.domain.serv.repository as Repository

def create_serv(id_technician, body):
    try:
        # Check if technician ID and service name exist
        if id_technician is None or body['name'] is None:
            return jsonify({'error': 'Technician ID or service name not provided.'}), 400

        # Call create_serv function to create new service
        new_serv = Repository.create_serv(id_technician, body)

        # Return the new service
        return new_serv, 201

    except Exception as e:
        # Catch any other errors that may occur and return an appropriate error message
        return jsonify({'error': str(e)}), 500



