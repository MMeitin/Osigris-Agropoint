import api.domain.crop.repository as Repository
from flask import jsonify,request
from api.domain.farmer.repository import get_farmer_by_user_owner
from api.models.crops import Crop
from flask_jwt_extended import get_jwt_identity , jwt_required, get_jwt
#  Create Crop
def post_crop(body, user_id):
    # Validar campos requeridos
    if 'dimension_ha' not in body or body['dimension_ha'] is None:
        return ('dimension_ha is empty', 400)
    if 'crop_type' not in body or body['crop_type'] is None:
        return ('crop_type is empty', 400)

    # Obtener farmer_id a partir del user_id
    farmer = get_farmer_by_user_owner(user_id)
    if not farmer:
        return ('Farmer not found for the given user_id', 404)

    # Crear crop con el farmer_id correcto
    crop = Repository.create_crop(body, farmer.id)
    if not crop:
        return ('Failed to create crop', 500)

    return crop.serialize()


def get_farmer_crops(farmer_id):
    
    farmer_crops = Crop.query.filter_by(farmer_id=farmer_id).all()
    
    
    crops_data = []
    for crop in farmer_crops:
        crops_data.append(crop.serialize())
    return crops_data

def delete_crop(crop):
     
    deleted_crop = Repository.delete_crop(crop)
    if deleted_crop is None:
        return jsonify('crop not found',404)
    
    return jsonify('crop deleted',200)

def modify_crop(crop):
    if crop is None:
        return jsonify({"message": "Crop not found"}), 404

    data = request.get_json()

    if data.get("crop_type"):
        crop.crop_type = data["crop_type"]
    if data.get("dimension_ha"):
        crop.dimension_ha = data["dimension_ha"]
    if data.get("description"):
        crop.description = data["description"]

    Repository.modify_crop(crop)
    
    return jsonify({"message": "Crop modified successfully"}), 200