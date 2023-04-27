from api.models.index import db, Crop



def create_crop(body):
    
    crop = Crop(body["dimension_ha"], body["crop_type"], body["description"],body["farmer_id"])
    print("AAAAAAAAAAAAAAAAAAAAAA",crop)
    db.session.add(crop)
    db.session.commit()
    return crop