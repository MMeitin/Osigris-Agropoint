from api.models.db import db


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    password = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(255), nullable=False)


    def __repr__(self):
        return "<User %r>" % self.email 

    def __init__(self, email, password, role):
        self.email = email
        self.password = password
        self.role = role

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "role": self.role,
        }

