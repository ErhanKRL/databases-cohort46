var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'hyfuser',
  password : 'hyfpassword',
  database : 'recipes'
});


const queries = [
    { description: "All the vegetarian recipes with salt", query: "SELECT R.recipe_id, R.recipe_name, category_name, ingredient_name FROM Recipes AS R JOIN RecipeCategories AS RC ON R.recipe_id = RC.recipe_id JOIN Categories AS C ON C.category_id = RC.category_id JOIN RecipeIngredients AS RI ON R.recipe_id = RI.recipe_id JOIN Ingredients as I ON RI.ingredient_id = I.ingredient_id WHERE (category_name = 'Vegetarian' and ingredient_name = 'Salt')" },
    { description: "All the cakes that do not need baking", query: "SELECT R.recipe_id, R.recipe_name, category_name FROM Recipes AS R JOIN RecipeCategories AS RC ON R.recipe_id = RC.recipe_id JOIN Categories AS C ON C.category_id = RC.category_id WHERE category_name = 'Cake' and category_name = 'No-Bake'" },
    { description: "All the vegan and Japanese recipes", query: "SELECT R.recipe_id, R.recipe_name, category_name FROM Recipes AS R JOIN RecipeCategories AS RC ON R.recipe_id = RC.recipe_id JOIN Categories AS C ON C.category_id = RC.category_id WHERE category_name = 'Vegan' or category_name = 'Japanese'" },
];

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL server.');
    
    queries.forEach(({ description, query }, index) => {
        connection.query(query, (error, results, fields) => {
          if (error) {
            throw error;
          }
          console.log(`-------- ${description} ---------`);
          console.log(results);
        });
      });
    
    connection.end();
  });

