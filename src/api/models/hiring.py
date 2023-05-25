from api.models.db import db

class Hiring(db.Model):
     id = db.Column(db.Integer, primary_key=True)
     crop_id = db.Column(db.Integer, db.ForeignKey('crop.id'), nullable=False)
     service_id = db.Column(db.Integer, db.ForeignKey('service.id'), nullable=False)
     farmer_id = db.Column(db.Integer, db.ForeignKey('farmer.id'), nullable=False)
     technician_id = db.Column(db.Integer, db.ForeignKey('technician.id'), nullable=False)
     status = db.Column(db.String(15), nullable=False )

     def __init__(self, crop_id, service_id, farmer_id, technician_id, status):
          self.crop_id = crop_id
          self.service_id = service_id
          self.farmer_id = farmer_id
          self.technician_id = technician_id
          self.status = status

     def serialize(self):
          return{
               "id" : self.id,
               "crop_id" : self.crop_id,
               "service_id" : self.service_id,
               "farmer_id" : self.farmer_id,
               "technician_id" : self.technician_id,
               "status" : self.status
          }
