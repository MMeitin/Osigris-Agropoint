from api.models.index import db, Service

def create_serv(id_technician, body):
    new_serv = Service(id_technician,body['name'])
    db.session.add(new_serv)
    db.session.commit()
    return new_serv.serialize()

def get_own_serv(tech_id):
    return Service.query.filter_by(id_technician=tech_id).all()