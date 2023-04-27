import api.domain.crop.repository as Repository
from flask import jsonify
from api.models.crops import Crop

#  Create Crop
def post_crop(body):
    print(body)
    if body['dimension_ha'] is None:
        return ('dimension_ha is empty', 400)
    if body['crop_type'] is None:
        return Response.response_error('crop_type is empty', 400)
    return Repository.create_crop(body)

def get_farmer_crops(farmer_id):
    
    farmer_crops = Crop.query.filter_by(farmer_id=farmer_id).all()
    
    print(farmer_crops)
    crops_data = []
    for crop in farmer_crops:
        crops_data.append(crop.serialize())
    return crops_data