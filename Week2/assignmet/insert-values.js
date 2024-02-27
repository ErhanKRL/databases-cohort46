const util = require('util');
const mysql = require('mysql');
const insert_options = require('./insert-options');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'hyfuser',
  password : 'hyfpassword',
  database : 'publications'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL server.');
    insertIntoTables();
  });
  async function insertIntoTables() {
    const execQuery = util.promisify(connection.query.bind(connection));
    try {      
        await Promise.all(insert_options.authors.map(async author => {
            await execQuery(`INSERT INTO Authors SET ?`, author);
        }));
        await Promise.all(insert_options.researchPapers.map(paper =>{
            execQuery('INSERT INTO Research_Papers SET ?', paper);
        }));
        await Promise.all(insert_options.authorsPapers.map(authorPaper =>{
            execQuery('INSERT INTO Author_Paper SET ?', authorPaper);
        }));
        await Promise.all(insert_options.mentors.map(async mentor => {
            await execQuery(`UPDATE Authors SET mentor = ? WHERE author_id = ?`, [mentor.mentor, mentor.author_id]);
        }));
    } catch (error) {
        console.error(error);
    }
    connection.end();
}





