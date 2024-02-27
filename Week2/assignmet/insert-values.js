const util = require('util');
const mysql = require('mysql');
const insert_options = require('./insert-options');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'hyfuser',
  password : 'hyfpassword',
  database : 'recipes'
});

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
        await Promise.all(insert_options.recipe_categories.map(category =>{
            execQuery('INSERT INTO RecipeCategories SET ?', category);
        }));
        await Promise.all(insert_options.recipe_ingredients.map(ingredient =>{
            execQuery('INSERT INTO RecipeIngredients SET ?', ingredient);
        }));
        await Promise.all(insert_options.recipe_steps.map(step =>{
            execQuery('INSERT INTO RecipeSteps SET ?', step);
        }));
    } catch (error) {
        console.error(error);
    }
    connection.end();
}


