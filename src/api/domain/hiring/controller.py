import api.domain.hiring.repository as Repository
from api.models.index import Hiring, Farmer
import api.domain.farmer.repository as Farmer_Repositoy

## Get hiring's
def get_all_hiring(id):
    id_farmer = Farmer_Repositoy.get_only_farmer_id(id)
    hiring = Repository.get_all_hiring(id_farmer)
    return hiring

## POST HIRING
def post_hiring(body):
    hiring = Repository.post_hiring(body)
    return hiring
    
