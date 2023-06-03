import api.domain.hiring.repository as Repository
from api.models.index import Hiring, Farmer, Technician
import api.domain.farmer.repository as Farmer_Repositoy
import api.domain.technician.repository as Tech_Repository

## Get hiring's
def get_all_hiring(id):
    id_farmer = Farmer_Repositoy.get_only_farmer_id(id)
    hiring = Repository.get_all_hiring(id_farmer)
    return hiring

## GET ALL TECH HIRINGS
def get_all_tech_hiring(id):
    id_tech = Tech_Repository.get_idtech_by_user_owner(id)
    hiring = Repository.get_all_tech_hiring(id_tech)
    return hiring

## POST HIRING
def post_hiring(body):
    hiring = Repository.post_hiring(body)
    return hiring
    
## PUT HIRING
def put_hiring(body, hiring_id):
    hiring_to_modify = Hiring.query.get(hiring_id)
    hiring_to_modify.status = body.get("status")
    put_hiring = Repository.put_hiring(hiring_to_modify)
    return put_hiring
