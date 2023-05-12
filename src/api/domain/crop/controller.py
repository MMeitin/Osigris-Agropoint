import api.domain.crop.repository as Repository
from flask import jsonify,request
from api.models.crops import Crop
from flask_jwt_extended import get_jwt_identity , jwt_required, get_jwt
#  Create Crop
def post_crop(body,user_id):
    if body['dimension_ha'] is None:
        return ('dimension_ha is empty', 400)
    if body['crop_type'] is None:
        return Response.response_error('crop_type is empty', 400)
    return Repository.create_crop(body,user_id)

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

    if crop is None or crop=='':
        return "No crops yet", 400

    data = request.get_json()

    if data["crop_type"] is None or data["crop_type"] =='':
        return 'crop type not valid',400
    if data["dimension_ha"] is None or data["dimension_ha"] =='':
        return 'dimension_ha not valid',400
    if data["description"] is None or data["description"] =='':
        return 'description not valid',400
    
    crop.crop_type = data["crop_type"]
    crop.dimension_ha = data["dimension_ha"]
    crop.description = data["description"]

    Repository.modify_crop()
    
    
    return 'crop modified succesfully',200