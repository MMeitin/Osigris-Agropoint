from api.models.db import db



class Crop(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    dimension_ha = db.Column(db.Integer, nullable=False)
    crop_type = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(250), nullable=True)
    farmer_id = db.Column(db.Integer, db.ForeignKey('farmer.id'))
    farmer = db.relationship('Farmer')
    

    def __init__(self, dimension_ha, crop_type, description, farmer_id):
        self.dimension_ha = dimension_ha
        self.crop_type = crop_type
        self.description = description
        self.farmer_id = farmer_id
    def serialize(self):
        return{
            "id": self.id,
            "dimension_ha": self.dimension_ha,
            "crop_type":self.crop_type,
            "farmer_id":self.farmer_id,
            "description":self.description
        }