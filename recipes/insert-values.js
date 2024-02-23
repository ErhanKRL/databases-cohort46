const util = require('util');
const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'hyfuser',
  password : 'hyfpassword',
  database : 'recipes'
});


let insert_options = {
    recipes: [
        "No-Bake Cheesecake",
        "Roasted Brussels Sprouts",
        "Mac & Cheese",
        "Tamagoyaki Japanese Omelette"
    ],
    categories: [
        "Cake",
        "No-Bake",
        "Vegetarian",
        "Vegan",
        "Gluten-Free",
        "Japanese"
    ],
    ingredients: [
        "Condensed milk",
        "Cream Cheese",
        "Lemon Juice",
        "Pie Crust",
        "Cherry Jam",
        "Brussels Sprouts",
        "Lemon juice",
        "Sesame seeds",
        "Pepper",
        "Salt",
        "Olive oil",
        "Macaroni",
        "Butter",
        "Flour",
        "Pepper",
        "Milk",
        "Shredded Cheddar cheese",
        "Eggs",
        "Soy sauce",
        "Sugar",
        "Olive Oil"
    ],
    steps: [
        "Beat Cream Cheese",
        "Add condensed Milk and blend",
        "Add Lemon Juice and blend",
        "Add the mix to the pie crust",
        "Spread the Cherry Jam",
        "Place in refrigerator for 3h.",
        "Preheat the oven",
        "Mix the ingredients in a bowl",
        "Spread the mix on baking sheet",
        "Bake for 30'",
        "Cook Macaroni for 8'",
        "Melt butter in a saucepan",
        "Add flour, salt, pepper and mix",
        "Add Milk and mix",
        "Cook until mix is smooth",
        "Add cheddar cheese",
        "Add the macaroni",
        "Beat the eggs",
        "Add soya sauce, sugar and salt",
        "Add oil to a sauce pan",
        "Bring to medium heat",
        "Add some mix to the sauce pan",
        "Let is cook for 1'",
        "Remove pan from fire"
    ]
}
connection.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL server.');
    insertIntoTables();
  });
  async function insertIntoTables() {
    const execQuery = util.promisify(connection.query.bind(connection));
    try {      
        await Promise.all(insert_options.recipes.map(async recipe => {
            await execQuery(`INSERT INTO Recipes (recipe_name) VALUES (?)`, [recipe]);
        }));
        await Promise.all(insert_options.categories.map(async category => {
            await execQuery(`INSERT INTO Categories (category_name) VALUES (?)`, [category]);
        }));
        await Promise.all(insert_options.ingredients.map(async ingredient => {
            await execQuery(`INSERT INTO Ingredients (ingredient_name) VALUES (?)`, [ingredient]);
        }));
        await Promise.all(insert_options.steps.map(async instruction => {
            await execQuery(`INSERT INTO Steps (instruction) VALUES (?)`, [instruction]);
        }));
    } catch (error) {
        console.error(error);
    }
    connection.end();
}


