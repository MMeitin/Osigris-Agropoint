from api.domain.hiring.repository as Repository
from api.models.index import Hiring

## Get hiring's
def get_all_hiring(id):
    hiring = Repository.get_all_hiring(id)
    return hiring

## POST HIRING
def post_hiring(body, user_id):
    
