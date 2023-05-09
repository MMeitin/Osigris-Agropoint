from api.models.index import db, Crop


def create_message(new_message):
    db.session.add(new_message)
    db.session.commit()
    return new_message

def delete_message(message):
    db.session.delete(message)
    db.session.commit()