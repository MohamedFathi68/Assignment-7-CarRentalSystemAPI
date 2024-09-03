import mysql from "mysql2";

// Create a connection to the MySQL database

export const dbConnection = ()=>{

  // Replace these values with your own MySQL server credentials
  const connection = mysql.createConnection({
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || '',
    database: process.env.DB || 'customers and orders',
  });
  
  // Check if the connection is established successfully
  connection.connect((err) => {
    if (err) return console.log(err);;
    console.log("Connected to the MySQL database.");
  });

  return connection;
} 
