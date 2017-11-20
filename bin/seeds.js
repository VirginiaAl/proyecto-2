const mongoose = require('mongoose');
const dbURL = "mongodb://localhost/fd"
mongoose.connect(dbURL);
const User = require('../models/User.js');

const users = [
  {
    username: 'Nicolas Cage',
    description: "Soy un programador cojonudo!!",
    email: 'cage@email.com',
    password:'1234',
    role:'developer',
    },
  {
    username: 'Jhon Travolta',
    description: "Soy un perito de la hostia!!",
    email: 'travolta@email.com',
    password:'1234',
    role:'proficient',
  },
  {
    username: 'Sean Penn',
    description: "Soy un emprendedor TO FLAMA!!",
    email: 'penn@email.com',
    password:'1234',
    role:'entrepeneur',
  },
];

// bin/seeds.js

// bin/seeds.js
User.create(users, (err, docs) => {
  if (err) { throw err };

  docs.forEach( (user) => {
    console.log(user.username);
  })
  mongoose.connection.close();
});
