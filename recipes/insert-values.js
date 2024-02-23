var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'hyfuser',
  password : 'hyfpassword',
  database : 'recipes'
});

connection.connect();
var insert_queries = {
    name: [
        "No-Bake Cheesecake",
        "Roasted Brussels Sprouts",
        "Mac & Cheese",
        "Tamagoyaki Japanese Omelette"
    ],
    category: [
        "Cake",
        "No-Bake",
        "Vegetarian",
        "Vegan",
        "Gluten-Free",
        "Japanese"
    ],
    ingredient: [
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
    step: [
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

for(var i in insert_queries){
    console.log("Going to run ", insert_queries[i]) // [] subscript operator : Of 
    connection.query(insert_queries[i], function (error, results, fields) {
        if (error) {
            throw error;
        }
        console.log("the reply is ", results[0]);
    });
}
connection.end();
