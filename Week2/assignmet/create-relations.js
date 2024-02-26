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
      "CREATE TABLE IF NOT EXISTS Research_Papers (paper_id INT PRIMARY KEY AUTO_INCREMENT, paper_title VARCHAR(255) NOT NULL, conference VARCHAR(255), publish_date DATE)",
      "CREATE TABLE IF NOT EXISTS Author_Paper (author_id INT, paper_id INT, PRIMARY KEY (author_id, paper_id),FOREIGN KEY (author_id) REFERENCES Authors(author_id),FOREIGN KEY (paper_id) REFERENCES Research_Papers(paper_id))"
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
//The author_paper table serves as a junction table to establish the many-to-many relationship between authors and research papers. 