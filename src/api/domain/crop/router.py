from flask import Flask, request, jsonify, url_for, Blueprint
from api.models.crops import Crop
import api.domain.crop.controller as Controller




api = Blueprint("api/crop", __name__)




@api.route('/', methods=['POST'])
def post_crop():
    body = request.get_json()
    crop = Controller.post_crop(body)
    return jsonify(crop.serialize())


# Get crops from an ID    
@api.route('/<int:farmer_id>', methods=['GET'])
def get_farmer_crops(farmer_id):
    farmer_crops = Controller.get_farmer_crops(farmer_id)       
    return jsonify(farmer_crops)