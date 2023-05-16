"""empty message

<<<<<<< HEAD:migrations/versions/bc9e5fa1dc3b_.py
Revision ID: bc9e5fa1dc3b
Revises: 
Create Date: 2023-05-16 09:15:54.435703
=======
<<<<<<<< HEAD:migrations/versions/4e34df1e6a12_.py
Revision ID: 4e34df1e6a12
Revises: 
Create Date: 2023-05-13 09:34:20.901081
========
Revision ID: 688c9be63a11
Revises: 
Create Date: 2023-05-13 09:37:58.247007
>>>>>>>> main:migrations/versions/688c9be63a11_.py
>>>>>>> main:migrations/versions/688c9be63a11_.py

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
<<<<<<< HEAD:migrations/versions/bc9e5fa1dc3b_.py
revision = 'bc9e5fa1dc3b'
=======
<<<<<<<< HEAD:migrations/versions/4e34df1e6a12_.py
revision = '4e34df1e6a12'
========
revision = '688c9be63a11'
>>>>>>>> main:migrations/versions/688c9be63a11_.py
>>>>>>> main:migrations/versions/688c9be63a11_.py
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('password', sa.String(length=255), nullable=False),
    sa.Column('role', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('farmer',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('country', sa.String(length=40), nullable=False),
    sa.Column('ccaa', sa.String(length=40), nullable=False),
    sa.Column('company', sa.String(length=50), nullable=True),
    sa.Column('pac_num', sa.String(length=150), nullable=True),
    sa.Column('user_owner', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_owner'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('pac_num')
    )
    op.create_table('technician',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('description', sa.String(length=300), nullable=False),
    sa.Column('phone_number', sa.Integer(), nullable=False),
    sa.Column('country', sa.String(length=40), nullable=False),
    sa.Column('ccaa', sa.String(length=40), nullable=False),
    sa.Column('speciality', sa.String(length=120), nullable=False),
    sa.Column('num_ropo', sa.Integer(), nullable=True),
    sa.Column('user_owner', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_owner'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('num_ropo'),
    sa.UniqueConstraint('phone_number')
    )
    op.create_table('crop',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('dimension_ha', sa.Integer(), nullable=False),
    sa.Column('crop_type', sa.String(length=50), nullable=False),
    sa.Column('description', sa.String(length=250), nullable=True),
    sa.Column('farmer_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['farmer_id'], ['farmer.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('message',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('farmer_id', sa.Integer(), nullable=False),
    sa.Column('technician_id', sa.Integer(), nullable=False),
    sa.Column('message', sa.String(length=250), nullable=False),
    sa.Column('date', sa.DateTime(), nullable=True),
    sa.Column('sender', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['farmer_id'], ['farmer.id'], ),
    sa.ForeignKeyConstraint(['technician_id'], ['technician.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('review',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('text', sa.String(length=250), nullable=True),
    sa.Column('date', sa.String(length=10), nullable=True),
    sa.Column('id_farmer', sa.Integer(), nullable=True),
    sa.Column('id_technician', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['id_farmer'], ['farmer.id'], ),
    sa.ForeignKeyConstraint(['id_technician'], ['technician.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('service',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('id_technician', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id_technician'], ['technician.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('id_technician'),
    sa.UniqueConstraint('name')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('service')
    op.drop_table('review')
    op.drop_table('message')
    op.drop_table('crop')
    op.drop_table('technician')
    op.drop_table('farmer')
    op.drop_table('user')
    # ### end Alembic commands ###
