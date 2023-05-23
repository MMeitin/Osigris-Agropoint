from api.models.index import db, Crop
from api.domain.farmer.repository import get_farmer_by_user_owner


def create_crop(body,user_id):
    farmer = get_farmer_by_user_owner(user_id)
    crop = Crop(body["dimension_ha"], body["crop_type"], body["description"], farmer_id=farmer.id)
    db.session.add(crop)
    db.session.commit()
    return crop

def delete_crop(crop):
    db.session.delete(crop)
    db.session.commit()
        
def modify_crop(crop):
    db.session.add(crop)
    db.session.commit()


