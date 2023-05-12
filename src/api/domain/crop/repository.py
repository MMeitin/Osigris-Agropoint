from api.models.index import db, Crop

def create_crop(body,user_id):
    crop = Crop(body["dimension_ha"], body["crop_type"], body["description"],farmer_id=user_id)
    db.session.add(crop)
    db.session.commit()
    return crop


def delete_crop(crop):
        db.session.delete(crop)
        db.session.commit()
        

def modify_crop():   
    db.session.commit()
    return ('crop modified successfully'), 200
