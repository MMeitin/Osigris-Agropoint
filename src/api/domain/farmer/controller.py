import api.domain.farmer.repository as Repository
from flask import jsonify,request
from api.models.farmer import Farmer




def get_farmer(id):
    
    farmer = Farmer.query.get(id)
    if farmer:
        return farmer.serialize()
    else:
        return "farmer no encontrado",404
   
    