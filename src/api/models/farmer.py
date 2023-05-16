from api.models.db import db

class Farmer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    sur_name = db.Column(db.String(50), nullable=False)
    country = db.Column(db.String(40), nullable=False)
    ccaa = db.Column(db.String(40), nullable=False)
    company = db.Column(db.String(50))
    pac_num = db.Column(db.String(150), unique=True)
    user_owner = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship("User")

    def __init__(self,name, sur_name, country, ccaa, company, pac_num, user_id):
        self.name = name
        self.sur_name = sur_name
        self.country = country
        self.ccaa = ccaa
        self.company = company
        self.pac_num = pac_num
        self.user_owner = user_id

    def serialize(self):
        return{
            "id" : self.id,
            "name": self.name,
            "sur_name": self.sur_name,
            "country": self.id,
            "ccaa": self.ccaa,
            "company": self.company,
            "pac_num": self.pac_num,
            "user_owner":self.user_owner
        }
    
