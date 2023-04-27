from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Crop(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    dimension_ha = db.Column(db.Integer, nullable=False)
    crop_type = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(250), nullable=True)
    property = db.Column(db.Integer, ForeignKey('farmer.id'))
    technician_agr = db.Column(db.Integer, ForeignKey('technician.id'))
    farmer = db.relationship('Farmer')
    technician = db.relationship('Technician')

    def __init__(self, dimension_ha, crop_type, description):
        self.dimension_ha = dimension_ha
        self.crop_type = crop_type
        self.description = description

    def serialize(self):
        return{
            "id": self.id,
            "dimension_Ha": self.dimension_Ha,
            "crop_type":self.crop_type
        }