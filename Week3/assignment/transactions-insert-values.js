const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'transactions',
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL server.');
  createTables();
});

  const queries = {
    createTables: [
      "INSERT INTO account (account_number, balance) VALUES (101, 5000.00), (102, 3000.00);",
      "INSERT INTO account_changes (account_number, amount, remark) VALUES (101, 5000.00, 'Initial deposit'), (102, 3000.00, 'Initial deposit');"
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
