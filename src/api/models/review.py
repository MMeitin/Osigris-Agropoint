from api.models.index import db

class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(250), unique=False)
    date = db.Column(db.String(10))
    id_farmer = db.Column(db.Integer, db.ForeignKey('farmer.id'))
    id_technician = db.Column(db.Integer, db.ForeignKey('technician.id'))
    farmer = db.relationship("Farmer")
    technician = db.relationship("Technician")

    def __init__(self, text, date, id_farmer, id_technician):
        self.text = text
        self.date = date
        self.id_farmer = id_farmer
        self.id_technician = id_technician
    
    def serialize(self):
        return{
            "id" : self.id,
            "text" : self.text,
            "date" : self.date,
            "id_farmer" : self.id_farmer,
            "id_technician" : self.id_technician
        }
