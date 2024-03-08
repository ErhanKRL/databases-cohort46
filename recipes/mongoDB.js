const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI

const dbName = 'recipes';

const categoriesData = [
    { category_name: 'Cake' },
    { category_name: 'No-Bake' },
    { category_name: 'Vegetarian' },
    { category_name: 'Vegan' },
    { category_name: 'Gluten-Free' },
    { category_name: 'Japanese' }
];

const ingredientsData = [
    { ingredient_name: 'Condensed milk' },
    { ingredient_name: 'Cream Cheese' },
    { ingredient_name: 'Lemon Juice' },
    { ingredient_name: 'Pie Crust' },
    { ingredient_name: 'Cherry Jam' },
    { ingredient_name: 'Brussels Sprouts' },
    { ingredient_name: 'Lemon juice' },
    { ingredient_name: 'Sesame seeds' },
    { ingredient_name: 'Pepper' },
    { ingredient_name: 'Salt' },
    { ingredient_name: 'Olive oil' },
    { ingredient_name: 'Macaroni' },
    { ingredient_name: 'Butter' },
    { ingredient_name: 'Flour' },
    { ingredient_name: 'Milk' },
    { ingredient_name: 'Shredded Cheddar cheese' },
    { ingredient_name: 'Eggs' },
    { ingredient_name: 'Soy sauce' },
    { ingredient_name: 'Sugar' }
];

const stepsData = [
    { instruction: 'Beat Cream Cheese' },
    { instruction: 'Add condensed Milk and blend' },
    { instruction: 'Add Lemon Juice and blend' },
    { instruction: 'Add the mix to the pie crust' },
    { instruction: 'Spread the Cherry Jam' },
    { instruction: 'Place in refrigerator for 3h.' },
    { instruction: 'Preheat the oven' },
    { instruction: 'Mix the ingredients in a bowl' },
    { instruction: 'Spread the mix on baking sheet' },
    { instruction: 'Bake for 30\'' },
    { instruction: 'Cook Macaroni for 8\'' },
    { instruction: 'Melt butter in a saucepan' },
    { instruction: 'Add flour, salt, pepper and mix' },
    { instruction: 'Add Milk and mix' },
    { instruction: 'Cook until mix is smooth' },
    { instruction: 'Add cheddar cheese' },
    { instruction: 'Add the macaroni' },
    { instruction: 'Beat the eggs' },
    { instruction: 'Add soya sauce, sugar and salt' },
    { instruction: 'Add oil to a sauce pan' },
    { instruction: 'Bring to medium heat' },
    { instruction: 'Add some mix to the sauce pan' },
    { instruction: 'Let is cook for 1\'' },
    { instruction: 'Remove pan from fire' }
];


const recipesData = [
    {
        recipe_name: 'No-Bake Cheesecake',
        categories: [1, 2, 3],
        ingredients: [1, 2, 3, 4, 5],
        steps: [1, 2, 3, 4, 5, 6]
    },
    {
        recipe_name: 'Roasted Brussels Sprouts',
        categories: [3],
        ingredients: [6, 7, 8, 9],
        steps: [7, 8, 9, 10]
    },
    {
        recipe_name: 'Mac & Cheese',
        categories: [3],
        ingredients: [9, 10, 11, 12, 13, 14, 15, 16],
        steps: [11, 12, 13, 14, 15, 16, 17]
    },
    {
        recipe_name: 'Tamagoyaki Japanese Omelette',
        categories: [6],
        ingredients: [17, 18, 19, 20, 21, 22, 23, 24],
        steps: [18, 19, 20, 21, 22, 23, 24]
    }
];

async function createRecipesDatabase() {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(dbName);

        await Promise.all([
            dropCollectionIfExists(db, 'categories'),
            dropCollectionIfExists(db, 'ingredients'),
            dropCollectionIfExists(db, 'steps'),
            dropCollectionIfExists(db, 'recipes')
        ]);

        console.log('Existing collections dropped');

        await Promise.all([
            createCollectionAndInsertData(db, 'categories', categoriesData),
            createCollectionAndInsertData(db, 'ingredients', ingredientsData),
            createCollectionAndInsertData(db, 'steps', stepsData),
            createCollectionAndInsertData(db, 'recipes', recipesData)
        ]);

        console.log('Data insertion complete');
    } catch (err) {
        console.error('Error:', err);
    } finally {
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}

async function dropCollectionIfExists(db, collectionName) {
    const collections = await db.listCollections({ name: collectionName }).toArray();
    if (collections.length > 0) {
        await db.collection(collectionName).drop();
        console.log(`Dropped collection: ${collectionName}`);
    }
}
async function createCollectionAndInsertData(db, collectionName, data) {
    const collection = db.collection(collectionName);
    await collection.insertMany(data);
    console.log(`Inserted ${data.length} documents into collection: ${collectionName}`);
}

createRecipesDatabase();
