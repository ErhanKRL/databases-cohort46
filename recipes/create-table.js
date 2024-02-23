const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'recipes',
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL server.');
  createDatabase();
});

function createDatabase() {
  connection.query('DROP DATABASE IF EXISTS recipes', (err) => {
    if (err) throw err;
    console.log('Database dropped (if existed).');
    connection.query('CREATE DATABASE recipes', (err) => {
      if (err) throw err;
      console.log('Database created.');
      connection.query('USE recipes', (err) => {
          if (err) throw err;
          console.log('Database selected.');
          createTables();
      });
    });
  });
}

  const queries = {
    createTables: [
      "CREATE TABLE IF NOT EXISTS Recipes (recipe_id INT PRIMARY KEY AUTO_INCREMENT, recipe_name VARCHAR(255) NOT NULL)",
      "CREATE TABLE IF NOT EXISTS Ingredients (ingredient_id INT PRIMARY KEY AUTO_INCREMENT, ingredient_name VARCHAR(255) NOT NULL)",
      "CREATE TABLE IF NOT EXISTS Steps (step_id INT PRIMARY KEY AUTO_INCREMENT, instruction TEXT NOT NULL)",
      "CREATE TABLE IF NOT EXISTS Categories (category_id INT PRIMARY KEY AUTO_INCREMENT, category_name VARCHAR(255) NOT NULL)",
      "CREATE TABLE IF NOT EXISTS RecipeSteps (recipe_id INT, step_id INT, step_number INT, PRIMARY KEY (recipe_id, step_id), FOREIGN KEY (recipe_id) REFERENCES Recipes(recipe_id), FOREIGN KEY (step_id) REFERENCES Steps(step_id))",
      "CREATE TABLE IF NOT EXISTS RecipeCategories (recipe_id INT, category_id INT, PRIMARY KEY (recipe_id, category_id), FOREIGN KEY (recipe_id) REFERENCES Recipes(recipe_id), FOREIGN KEY (category_id) REFERENCES Categories(category_id))",
      "CREATE TABLE IF NOT EXISTS RecipeIngredients (recipe_id INT, ingredient_id INT, PRIMARY KEY (recipe_id, ingredient_id), FOREIGN KEY (recipe_id) REFERENCES Recipes(recipe_id), FOREIGN KEY (ingredient_id) REFERENCES Ingredients(ingredient_id))"
    ]
  };

  async function createTables() {
  
    const execQuery = util.promisify(connection.query.bind(connection));
    try {
      await Promise.all[queries.createTables.forEach(query => execQuery(query))];   
    } catch (error) {
      console.error(error);
    }
    connection.end();
  }
