from api.models.db import db

class Service(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    id_technician = db.Column(db.Integer,db.ForeignKey('technician.id'), unique=True, nullable=False)
    technician = db.relationship('Technician')
    
    def __init__(self, id_technician, description, name):
        self.name = name
        self.id_technician =  id_technician
        

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "id_technician": self.id_technician
            
        }