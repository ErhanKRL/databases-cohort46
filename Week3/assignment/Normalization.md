Violations of 1NF:

    1. member_id values (probably as a primary key) must be unique.
    2. dinner_date: Dates should be stored in a same format.
    3. food_code and food_description columns contain multiple values separated by commas, violating the atomicity rule of 1NF.

Entities to Extract:

    Members: Attributes include member_id, member_name, and member_address.
    Dinners: Attributes include dinner_id, dinner_date, venue_code(foreign key).
    Venues: Attributes include venue_code(primary key) and venue_description.
    Foods: Attributes include food_code and food_description.

Tables and Columns for 3NF Compliance:

    Members table:
        member_id (Primary Key)
        member_name
        member_address

    Dinners table:
        dinner_id (Primary Key)
        dinner_date
        venue_code (Foreign Key referencing Venues)

    Venues table:
        venue_code (Primary Key)
        venue_description

    Foods table:
        food_code (Primary Key)
        food_description

    Dinners_Members table (to manage the many-to-many relationship between members and dinners):
        dinner_id (Foreign Key referencing Dinners)
        member_id (Foreign Key referencing Members)
        
    Dinners_Venues table (to manage the many-to-many relationship between dinners and venues):
        dinner_id (Foreign Key referencing Dinners)
        venue_id (Foreign Key referencing Venues)

    Dinners_Foods table (to manage the many-to-many relationship between dinners and foods):
        dinner_id (Foreign Key referencing Dinners)
        food_id (Foreign Key referencing Foods)