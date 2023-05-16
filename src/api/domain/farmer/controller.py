import api.domain.farmer.repository as Repository
from flask import jsonify,request
from api.models.index import Farmer



## Controller get farmer by user_id
def get_farmer_by_user_owner(id):    
   farmer = Repository.get_farmer_by_user_owner(id)
   if farmer is None:
        return jsonify('No existe el granjero')   
   return farmer.serialize()
   
    