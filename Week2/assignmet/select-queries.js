var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'hyfuser',
  password : 'hyfpassword',
  database : 'publications'
});


const queries = [
    { description: "names of all authors and their corresponding mentors", query: "SELECT a.author_name AS author_name, m.author_name AS mentor_name FROM Authors a LEFT JOIN  Authors m ON a.mentor = m.author_id;"},
    { description: "informations of all authors regardless of whether they have published papers or not", query: "SELECT A.*, RP.paper_title FROM Authors A LEFT JOIN Author_Paper AP ON A.author_id = AP.author_id LEFT JOIN Research_Papers RP ON AP.paper_id = RP.paper_id;"},
    { description: "All research papers and the number of authors that wrote that paper", query: "SELECT RP.paper_title, COUNT(AP.author_id) AS num_authors FROM Research_Papers RP LEFT JOIN Author_Paper AP ON RP.paper_id = AP.paper_id GROUP BY RP.paper_id;" },
    { description: "Sum of the research papers published by all female authors", query: "SELECT SUM(CASE WHEN A.gender = 'F' THEN 1 ELSE 0 END) AS total_papers_by_female_authors FROM Authors A JOIN Author_Paper AP ON A.author_id = AP.author_id;" },
    { description: "Average of the h-index of all authors per university", query: "SELECT university, AVG(h_index) AS avg_h_index FROM Authors GROUP BY university;"},
    { description: "Sum of the research papers of the authors per university", query: "SELECT A.university,COUNT(AP.paper_id) AS total_papers FROM Authors A JOIN Author_Paper AP ON A.author_id = AP.author_id GROUP BY A.university;" },
    { description: "Minimum and maximum of the h-index of all authors per university", query: "SELECT university,MIN(h_index) AS min_h_index, MAX(h_index) AS max_h_index FROM Authors GROUP BY university;" },
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

