const mysql      = require('mysql');

const conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'hyfuser',
  password : 'hyfpassword',
  database : 'world'
});

conn.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL server.');
    getPopulation('country', 'Netherlands', 'NLD', (err, population) =>{
        if (err) {
            console.error(err);
          } else {
            console.log('Population:', population);
          }
    });
  });

  function getPopulation(Country, name, code, cb) {
    // assuming that connection to the database is established and stored as conn
    conn.query(
      `SELECT Population FROM ${Country} WHERE Name = '${name}' and code = '${code}'`,
      //`SELECT Population FROM ${Country} WHERE Name = '${name}' and code = '${code}' or '1'='1' --`, // SQL injected code.
      function (err, result) {
        if (err) cb(err);
        if (result.length == 0) cb(new Error("Not found"));
        cb(null, result);
      }
    );
    conn.end();
  }



