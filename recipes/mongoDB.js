const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI

const dbName = 'recipes';

const categoriesData = [
    { 
        id: '65eb9ba5199deede96eed704',
        category_name: 'Cake' 
    },
    { 
        id:'65eb9ba5199deede96eed705',
        category_name: 'No-Bake' },
    { 
        id: '65eb9ba5199deede96eed706',
        category_name: 'Vegetarian' },
    { 
        id: '65eb9ba5199deede96eed707',
        category_name: 'Vegan' },
    { 
        id: '65eb9ba5199deede96eed708', 
        category_name: 'Gluten-Free' },
    { 
        id: '65eb9ba5199deede96eed709',
        category_name: 'Japanese' }
];

const ingredientsData = [
    { 
        id: '65eb9ba5199deede96eed70a',
        ingredient_name: 'Condensed milk' },
    { 
        id: '65eb9ba5199deede96eed70b',
        ingredient_name: 'Cream Cheese' },
    { 
        id: '65eb9ba5199deede96eed70c',
        ingredient_name: 'Lemon Juice' },
    { 
        id: '65eb9ba5199deede96eed70d',
        ingredient_name: 'Pie Crust' },
    { 
        id: '65eb9ba5199deede96eed70e',
        ingredient_name: 'Cherry Jam' },
    { 
        id: '65eb9ba5199deede96eed70f',
        ingredient_name: 'Brussels Sprouts' },
    { 
        id: '65eb9ba5199deede96eed70g',
        ingredient_name: 'Lemon juice' },
    { 
        id: '65eb9ba5199deede96eed70h',
        ingredient_name: 'Sesame seeds' },
    { 
        id: '65eb9ba5199deede96eed70i',
        ingredient_name: 'Pepper' },
    { 
        id: '65eb9ba5199deede96eed70j',
        ingredient_name: 'Salt' },
    { 
        id: '65eb9ba5199deede96eed70k',
        ingredient_name: 'Olive oil' },
    { 
        id: '65eb9ba5199deede96eed70l',
        ingredient_name: 'Macaroni' },
    { 
        id: '65eb9ba5199deede96eed70m',
        ingredient_name: 'Butter' },
    { 
        id: '65eb9ba5199deede96eed70n',
        ingredient_name: 'Flour' },
    { 
        id: '65eb9ba5199deede96eed70o',
        ingredient_name: 'Milk' },
    { 
        id: '65eb9ba5199deede96eed70p',
        ingredient_name: 'Shredded Cheddar cheese' },
    { 
        id: '65eb9ba5199deede96eed70q', 
        ingredient_name: 'Eggs' },
    { 
        id: '65eb9ba5199deede96eed70r',
        ingredient_name: 'Soy sauce' },
    { 
        id: '65eb9ba5199deede96eed70s', 
        ingredient_name: 'Sugar' 
    }
];

const stepsData = [
    { 
        id: '65eb9ba5199deede96eed71d',
        instruction: 'Beat Cream Cheese' },
    { 
        id: '65eb9ba5199deede96eed71e',
        instruction: 'Add condensed Milk and blend' },
    { 
        id: '65eb9ba5199deede96eed71f',
        instruction: 'Add Lemon Juice and blend' },
    {
        id: '65eb9ba5199deede96eed71g', 
        instruction: 'Add the mix to the pie crust' },
    { 
        id: '65eb9ba5199deede96eed71h',
        instruction: 'Spread the Cherry Jam' },
    { 
        id: '65eb9ba5199deede96eed71i',
        instruction: 'Place in refrigerator for 3h.' },
    { 
        id: '65eb9ba5199deede96eed71j',
        instruction: 'Preheat the oven' },
    { 
        id: '65eb9ba5199deede96eed71k',
        instruction: 'Mix the ingredients in a bowl' },
    { 
        id: '65eb9ba5199deede96eed71l',
        instruction: 'Spread the mix on baking sheet' },
    { 
        id: '65eb9ba5199deede96eed71m',
        instruction: 'Bake for 30\'' },
    { 
        id: '65eb9ba5199deede96eed71n',
        instruction: 'Cook Macaroni for 8\'' },
    { 
        id: '65eb9ba5199deede96eed71o',
        instruction: 'Melt butter in a saucepan' },
    { 
        id: '65eb9ba5199deede96eed71p',
        instruction: 'Add flour, salt, pepper and mix' },
    { 
        id: '65eb9ba5199deede96eed71q', 
        instruction: 'Add Milk and mix' },
    { 
        id: '65eb9ba5199deede96eed71r', 
        instruction: 'Cook until mix is smooth' },
    { 
        id: '65eb9ba5199deede96eed71s', 
        instruction: 'Add cheddar cheese' },
    { 
        id: '65eb9ba5199deede96eed71t', 
        instruction: 'Add the macaroni' },
    { 
        id: '65eb9ba5199deede96eed71u', 
        instruction: 'Beat the eggs' },
    { 
        id: '65eb9ba5199deede96eed71v', 
        instruction: 'Add soya sauce, sugar and salt' },
    { 
        id: '65eb9ba5199deede96eed71w', 
        instruction: 'Add oil to a sauce pan' },
    { 
        id: '65eb9ba5199deede96eed71x', 
        instruction: 'Bring to medium heat' },
    { 
        id:'65eb9ba5199deede96eed71y',
        instruction: 'Add some mix to the sauce pan' },
    { 
        id: '65eb9ba5199deede96eed71z',    
        instruction: 'Let is cook for 1\'' },
    { 
        id: '65eb9ba5199deede96eed72a', 
        instruction: 'Remove pan from fire'
     }
];


const recipesData = [
    {
        recipe_name: 'Roasted Brussels Sprouts',
        categories: [
            '65eb9ba5199deede96eed706' 
        ],
        ingredients: [
            '65eb9ba5199deede96eed70f', 
            '65eb9ba5199deede96eed70g', 
            '65eb9ba5199deede96eed70h', 
            '65eb9ba5199deede96eed70i'  
        ],
        steps: [
            '65eb9ba5199deede96eed71j', 
            '65eb9ba5199deede96eed71k', 
            '65eb9ba5199deede96eed71l', 
            '65eb9ba5199deede96eed71m'  
        ]
    },
    {
        recipe_name: 'Mac & Cheese',
        categories: [
            '65eb9ba5199deede96eed706' 
        ],
        ingredients: [
            '65eb9ba5199deede96eed70i', 
            '65eb9ba5199deede96eed70j', 
            '65eb9ba5199deede96eed70k', 
            '65eb9ba5199deede96eed70l', 
            '65eb9ba5199deede96eed70m', 
            '65eb9ba5199deede96eed70n', 
            '65eb9ba5199deede96eed70o', 
            '65eb9ba5199deede96eed70p'  
        ],
        steps: [
            '65eb9ba5199deede96eed71n',
            '65eb9ba5199deede96eed71o', 
            '65eb9ba5199deede96eed71p', 
            '65eb9ba5199deede96eed71q', 
            '65eb9ba5199deede96eed71r', 
            '65eb9ba5199deede96eed71s', 
            '65eb9ba5199deede96eed71t'  
        ]
    },
    {
        recipe_name: 'Tamagoyaki Japanese Omelette',
        categories: [
            '65eb9ba5199deede96eed709' 
        ],
        ingredients: [
            '65eb9ba5199deede96eed71q',
            '65eb9ba5199deede96eed71r', 
            '65eb9ba5199deede96eed71s', 
            '65eb9ba5199deede96eed71j', 
            '65eb9ba5199deede96eed71k', 
            '65eb9ba5199deede96eed71l', 
            '65eb9ba5199deede96eed71m', 
            '65eb9ba5199deede96eed71n'  
        ],
        steps: [
            '65eb9ba5199deede96eed71u', 
            '65eb9ba5199deede96eed71v', 
            '65eb9ba5199deede96eed71w', 
            '65eb9ba5199deede96eed71x', 
            '65eb9ba5199deede96eed71y', 
            '65eb9ba5199deede96eed71z', 
            '65eb9ba5199deede96eed72a'  
        ]
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

