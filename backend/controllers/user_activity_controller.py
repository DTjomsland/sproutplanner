from main import db
from flask import Blueprint, jsonify, request
from flask_cors import CORS, cross_origin
from flask_jwt_extended import get_jwt_identity, jwt_required
from marshmallow.exceptions import ValidationError
from models.user_activity import UserActivity
from models.user_icon import UserIcon
from schemas.user_activity_schema import user_activity_schema, user_activities_schema
from schemas.user_icon_schema import user_icon_schema, user_icons_schema

# Default route for all user activity requests
user_activity = Blueprint('user_activity', __name__, url_prefix='/useractivity')




@user_activity.route('/', methods=['GET'])
@cross_origin()
# Requires token
@jwt_required()
def get_all_user_activities():
    # Retrieve user information from jwt token
    user = get_jwt_identity()
    user_activities = UserActivity.query.filter_by(user_id=user).all()
    result = user_activities_schema.dump(user_activities)
    for activity in result:
        user_icons = UserIcon.query.filter_by(user_activity_id=activity['user_activity_id']).all()
        activity['icons'] = user_icons_schema.dump(user_icons)
    return jsonify(result)


# Get request for user activities based on category (Cateogires are attached to users)
@user_activity.route('/<int:user_category_id>', methods=['GET'])
def get_user_activities(user_category_id):
    # Search for all instances in the activity table where a row contains the category_id
    # Filter results so only ids/activity names are returned
    user_activities = db.session.query(UserActivity).with_entities(UserActivity.user_activity_id, UserActivity.user_activity_name).filter(UserActivity.user_category_id == user_category_id)
    # Returns jsonified activities for the specific category
    result = user_activities_schema.dump(user_activities)
    return jsonify(result)


# Post a new activity into the user activity table using associated category 
@user_activity.route('/<int:user_category_id>/create', methods=['POST'])
@jwt_required()
def new_activity(user_category_id):
    user = get_jwt_identity()
    # Rename category ID from route
    category = user_category_id
    # Takes in data from the POST
    activity_fields = user_activity_schema.load(request.json)
    # Check to see if the activity exists for user/return error if it does 
    activity_check = UserActivity.query.filter_by(user_category_id = category, user_activity_name = activity_fields["user_activity_name"]).first()
    if activity_check:
        return {"error": "An activity with that name already exists."}, 400
    # Creates a new activity object from entered information.
    activity = UserActivity(
        user_activity_name = activity_fields ['user_activity_name'],
        user_category_id = category,
        user_id = user
    )
    # Stage changes to the database
    db.session.add(activity)
    # Save the changes in the database
    db.session.commit()
    return jsonify((user_activity_schema).dump(activity))

# Update a specific user activity name
@user_activity.route("/<int:user_category_id>/<int:activity_id>", methods=["PUT"])
@jwt_required()
def update_activity(user_category_id, activity_id):
    # Rename category ID from route
    category = user_category_id
    # Find the activity in the database. Return error if it doesn't exist
    activity = UserActivity.query.get(activity_id)
    if not activity:
        return {"error": "Activity does not exist."}, 404
    # Retrieve the activity details 
    activity_fields = user_activity_schema.load(request.json)
    # Check to see if the activity exists for user/return error if it does 
    activity_check = UserActivity.query.filter_by(user_category_id = category, user_activity_name = activity_fields["user_activity_name"]).first()
    if activity_check:
        return {"error": "An activity with that name already exists."}
    # Update the activity name
    activity.user_activity_name = activity_fields["user_activity_name"]
    # Commit the changes to the database
    db.session.commit() 
    return jsonify(user_activity_schema.dump(activity)), 201  

# Delete user activity
@user_activity.route("/<int:activity_id>", methods=["DELETE"])
@jwt_required()
def delete_activity(activity_id):
    # Find the activity by id
    # Display error if activity is not found
    activity = UserActivity.query.get(activity_id)
    if not activity:
        return {"error": "Activity does not exist"}
    # Delete the activity from the database (Deletes all associated icons - cascade="all, delete-orphan)
    db.session.delete(activity)
    # Save the changes in the database
    db.session.commit()
    # Return message if deleted successfully
    return {"message": "Activity deleted successfully."}, 201

# Validation error messages
@user_activity.errorhandler(ValidationError)
def register_validation_error(error):
    return error.messages, 400