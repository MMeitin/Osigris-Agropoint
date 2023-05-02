from flask import Flask, request, jsonify, url_for, Blueprint
from api.models.crops import Crop
import api.domain.crop.controller as Controller




api = Blueprint("api/crop", __name__)

@api.route('/addFarm', methods=['POST'])
def post_crop():
    body = request.get_json()
    crop = Controller.post_crop(body)
    return jsonify(crop.serialize())


# Get crops from an ID    
@api.route('/<int:farmer_id>', methods=['GET'])
def get_farmer_crops(farmer_id):
    farmer_crops = Controller.get_farmer_crops(farmer_id)       
    return jsonify(farmer_crops)

#Delete Crop from an ID
@api.route('/<int:crop_id>', methods=['DELETE'])
def delete_crop(crop_id):
    crop = Crop.query.get(crop_id)
    crop = Controller.delete_crop(crop)
    return jsonify("crop deleted succesfully",200)

#Modify Crop from an ID
@api.route('/<int:crop_id>', methods=['PUT'])
def modify_planet(crop_id):
    crop = Crop.query.get(crop_id)
    modified_crop=Controller.modify_crop(crop)
    return jsonify(modified_crop)