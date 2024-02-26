const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'publications',
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL server.');
  createTables();
});

  const queries = {
    createTables: [
      "CREATE TABLE IF NOT EXISTS Authors (author_id INT PRIMARY KEY AUTO_INCREMENT, author_name VARCHAR(255) NOT NULL, university VARCHAR(255) NOT NULL, date_of_birth DATE NOT NULL, h_index INT, gender CHAR(1) )",
      "ALTER TABLE Authors ADD COLUMN mentor INT, ADD CONSTRAINT fk_mentor FOREIGN KEY (mentor) REFERENCES authors(author_id)"
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
