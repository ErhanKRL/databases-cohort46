const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'meetup',
});


connection.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL server.');
    createDatabase();
  });

  function createDatabase() {
    connection.query('DROP DATABASE IF EXISTS meetup', (err) => {
      if (err) throw err;
      console.log('Database dropped (if existed).');
      connection.query('CREATE DATABASE meetup', (err) => {
        if (err) throw err;
        console.log('Database created.');
        connection.query('USE meetup', (err) => {
            if (err) throw err;
            console.log('Database selected.');
            createTables();
        });
      });
    });
  }

async function createTables() {

  const CREATE_INVITEE_TABLE = `
    CREATE TABLE IF NOT EXISTS invitee (
      invitee_no INT PRIMARY KEY,
      invitee_name VARCHAR(50),
      invited_by VARCHAR(50)
    );`;
  const CREATE_ROOM_TABLE = `
    CREATE TABLE IF NOT EXISTS room (
      room_no INT PRIMARY KEY,
      room_name VARCHAR(50),
      floor_number VARCHAR(50)
    );`;
  const CREATE_MEETING_TABLE = `
    CREATE TABLE IF NOT EXISTS meeting (
      meeting_no INT PRIMARY KEY,
      meeting_title VARCHAR(50),
      starting_time TIMESTAMP,
      ending_time TIMESTAMP,
      room_no INT,
      FOREIGN KEY(room_no) REFERENCES room(room_no)
    );`;
  const CREATE_MEETING_INVITEE_TABLE = `
    CREATE TABLE meeting_invitee (
      meeting_no INT,
      invitee_no INT,
      FOREIGN KEY (meeting_no) REFERENCES meeting(meeting_no),
      FOREIGN KEY (invitee_no) REFERENCES invitee (invitee_no)
  );
  `
  const INSERT_INVITEE_SET = 'INSERT INTO invitee SET ?'
  const INSERT_ROOM_SET = 'INSERT INTO room SET ?';
  const INSERT_MEETING_SET = 'INSERT INTO meeting SET ?';

    const invitees = [
        {
          invitee_no: 1,
          invitee_name: 'Ben Sasone',
          invited_by: 'Serge Sand',
        },
        {
          invitee_no: 2,
          invitee_name: 'Ali Abdani',
          invited_by: 'Sarah Tjack',
        },
        {
          invitee_no: 3,
          invitee_name: 'Zach Mander',
          invited_by: 'Do Kwon',
        },
        {
          invitee_no: 4,
          invitee_name: 'Sam Altman',
          invited_by: 'Bill Gates',
        },
        {
          invitee_no: 5,
          invitee_name: 'Reid Hoffman',
          invited_by: 'Paul Allen',
        },
        
      ];
      
  const meetings = [
    {
      meeting_no: 1,
      meeting_title: 'Tech Innovation Summit',
      starting_time: '2024-02-19 10:00:00',
      ending_time: '2024-02-19 12:00:00',
      room_no: 101,
    },
    {
      meeting_no: 2,
      meeting_title: 'T Security Briefing',
      starting_time: '2024-02-20 10:00:00',
      ending_time: '2024-02-20 12:00:00',
      room_no: 201,
    },
    {
      meeting_no: 3,
      meeting_title: 'Data Science Workshop',
      starting_time: '2024-02-21 10:00:00',
      ending_time: '2024-02-21 12:00:00',
      room_no: 301,
    },
    {
      meeting_no: 4,
      meeting_title: 'AI Strategy Meeting',
      starting_time: '2024-02-21 10:00:00',
      ending_time: '2024-02-21 12:00:00',
      room_no: 401,
    },
    {
      meeting_no: 5,
      meeting_title: 'Cloud Computing Forum',
      starting_time: '2024-02-21 10:00:00',
      ending_time: '2024-02-21 12:00:00',
      room_no: 501,
    },
  ];
  const rooms = [
    {
      room_no: 101,
      room_name: 'Rose',
      floor_number: 1,
    },
    {
        room_no: 201,
        room_name: 'Daisy',
        floor_number: 2,
      },
      {
        room_no: 301,
        room_name: 'Lily',
        floor_number: 3,
      },
      {
        room_no: 401,
        room_name: 'Orchid',
        floor_number: 4,
      },
      {
        room_no: 501,
        room_name: 'Iris',
        floor_number: 5,
      },
    
  ];
 

  const execQuery = util.promisify(connection.query.bind(connection));
  try {

    await Promise.all[execQuery(CREATE_INVITEE_TABLE), execQuery(CREATE_ROOM_TABLE), execQuery(CREATE_MEETING_TABLE), execQuery(CREATE_MEETING_INVITEE_TABLE)];
    
    await Promise.all(
      invitees.map(invitee =>{
      execQuery(INSERT_INVITEE_SET, invitee)
    }),
      rooms.map(room =>{
      execQuery(INSERT_ROOM_SET, room)
    }),
    meetings.map(meeting =>{
      execQuery(INSERT_MEETING_SET, meeting)
    })
    );
  } catch (error) {
    console.error(error);
  }

  connection.end();
}

