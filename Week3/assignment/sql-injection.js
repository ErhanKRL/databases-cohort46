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
    vulnerableGetPopulation('country', "' OR 1=1 --", "' OR 1=1 --", (err, population) =>{
        if (err) {
            console.error(err);
          } else {
            console.log('Population:', population);
          }
    });
    getPopulation('country', "' OR 1=1 --", "' OR 1=1 --", (err, population) =>{
        if (err) {
            console.error(err);
          } else {
            console.log('Population:', population);
          }
    });
  });

  function vulnerableGetPopulation(Country, name, code, cb) {
    conn.query(
      `SELECT Population FROM ${Country} WHERE Name = '${name}' and code = '${code}'`,
      function (err, result) {
        if (err) cb(err);
        if (result.length == 0) cb(new Error("Not found"));
        cb(null, result);
      }
    );
  };

  function getPopulation(Country, name, code, cb) {
    conn.query(
        `SELECT Population FROM ${Country} WHERE Name = ? AND code = ?`,
        [name, code],
        function (err, result) {
            if (err) {
                cb(err);
            } else {
                if (result.length == 0) {
                    cb(new Error("Not found"));
                } else {
                    cb(null, result);
                }
            }
        }
    );
    conn.end(); 
}

//Instead of directly inserting values into the SQL query string, we used placeholders "?" for parameters.
//When we invoke the second function, it should give Error: Not found 





