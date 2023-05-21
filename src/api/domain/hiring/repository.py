from api.models.index import db, Hiring, Farmer

## GET HIRING
def get_all_hiring(user_id):
    id_farmer = Farmer.query.filter_by(user_owner=user_id).first()
    hiring = Hiring.query.filter_by(farmer_id=id_farmer).all()
    all_hiring = list(map(lambda x : x.serialize(), hiring))
    return all_hiring

    