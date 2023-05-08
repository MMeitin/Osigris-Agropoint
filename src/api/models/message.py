from api.models.db import db
from datetime import datetime
class Message(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    farmer_id = db.Column(db.Integer,db.ForeignKey('farmer.id'), nullable=False)
    technician_id = db.Column(db.Integer,db.ForeignKey('technician.id'), nullable=False)
    message = db.Column(db.String(250), nullable=False)
    date = db.Column(db.DateTime, nullable=True)
    farmer = db.relationship ("Farmer")
    technician = db.relationship("Technician")
    
    def __init__(self, farmer_id, technician_id, message,  date):
        self.farmer_id = farmer_id
        self.technician_id = technician_id
        self.message = message
        self.date = datetime.utcnow()
        
        

    def serialize(self):
        return{
            "id" : self.id,
            "message": self.message,
            "date": self.date,
            "farmer_id": self.farmer_id,
            "technician_id": self.technician_id
        }
    