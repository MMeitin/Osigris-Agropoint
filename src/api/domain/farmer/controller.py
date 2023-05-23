import api.domain.farmer.repository as Repository
from flask import jsonify,request
from api.models.index import Farmer, Technician

## Controller get farmer by user_id
def get_farmer_by_user_owner(id):    
   farmer = Repository.get_farmer_by_user_owner(id)
   if farmer is None:
        return jsonify('No existe el granjero')   
   return farmer
   
## FILTER TECH
def filter_tech(body):
    if body["name"]:
        print(body["name"])  
        tech = Repository.filter_tech_by_name(body["name"])
        return tech
    if body["ccaa"]:
       tech = Repository.filter_tech_by_ccaa(body["ccaa"])
       return tech
    if body["speciality"]:
        tech = Repository.filter_tech_by_speciality(body["speciality"])
        return tech
    else:
        tech = Repository.get_all_tech()
        return tech