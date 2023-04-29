from api.models.db import db

class Farmer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    country = db.Column(db.String(50), unique=False, nullable=False)
    ccaa = db.Column(db.String(50), nullable=False, unique=False)
    company = db.Column(db.String(50),nullable=True, unique=False)
    pac_num = db.Column(db.String(150), nullable=True, unique=True)
    user_owner = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship("User")

    def __init__(self, country, ccaa, company, pac_num, user_id):
        self.country = country
        self.ccaa = ccaa
        self.company = company
        self.pac_num = pac_num
        self.user_owner = user_id

    def serialize(self):
        return{
            "id" : self.id,
            "country": self.id
        }
    
