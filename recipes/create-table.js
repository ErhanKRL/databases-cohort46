const mysql = require('mysql');

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'hyfuser',
    password : 'hyfpassword',
    database : 'recipes',
    // port : 3307
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL server: ' + err.stack);
      return;
    }
  });

  const queries = {
    createTables: [
      "CREATE TABLE Recipes (recipe_id INT PRIMARY KEY, recipe_name VARCHAR(255) NOT NULL)",
      "CREATE TABLE Ingredients (ingredient_id INT PRIMARY KEY, ingredient_name VARCHAR(255) NOT NULL)",
      "CREATE TABLE Steps (step_id INT PRIMARY KEY, instruction TEXT NOT NULL)",
      "CREATE TABLE Categories (category_id INT PRIMARY KEY, category_name VARCHAR(255) NOT NULL)",
      "CREATE TABLE RecipeSteps (recipe_id INT, step_id INT, step_number INT, PRIMARY KEY (recipe_id, step_id), FOREIGN KEY (recipe_id) REFERENCES Recipes(recipe_id), FOREIGN KEY (step_id) REFERENCES Steps(step_id))",
      "CREATE TABLE RecipeCategories (recipe_id INT, category_id INT, PRIMARY KEY (recipe_id, category_id), FOREIGN KEY (recipe_id) REFERENCES Recipes(recipe_id), FOREIGN KEY (category_id) REFERENCES Categories(category_id))",
      "CREATE TABLE RecipeIngredients (recipe_id INT, ingredient_id INT, PRIMARY KEY (recipe_id, ingredient_id), FOREIGN KEY (recipe_id) REFERENCES Recipes(recipe_id), FOREIGN KEY (ingredient_id) REFERENCES Ingredients(ingredient_id))"
    ]
  };

  queries.createTables.forEach(query => {
    connection.query(query, function (error, results, fields) {
      if (error) {
        throw error;
      }
      console.log("the reply is ", results[0]);
    });
  });
  
connection.end();