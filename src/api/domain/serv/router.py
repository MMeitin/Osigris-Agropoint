import api.domain.serv.controller as Controller
from api.models.index import Service
from flask_jwt_extended import jwt_required

api = Blueprint("api/serv", __name__)

@api.route('/addServ', methods=['POST'])
def create_serv():
    body = request.get_json()
    serv = Controller.create_serv(id_technician, body)
    return jsonify(service.serialize())