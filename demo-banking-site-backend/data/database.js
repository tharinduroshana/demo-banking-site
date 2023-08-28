import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const dbConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
};

const dbConfigWithDb = {
  ...dbConfig,
  database: process.env.DATABASE_NAME,
};

const USERS_TABLE_SQL =
  "CREATE TABLE users (national_id VARCHAR(255) PRIMARY KEY, firstname VARCHAR(255), lastname VARCHAR(255), address VARCHAR(255), sex VARCHAR(255), birthday DATETIME, profession VARCHAR(255), email VARCHAR(255))";

const ACCOUNTS_TABLE_SQL =
  "CREATE TABLE accounts (account_number VARCHAR(255) PRIMARY KEY, account_type VARCHAR(255), balance DOUBLE, user_id VARCHAR(255), creation_date DATETIME, status VARCHAR(255))";

const TRANSACTIONS_TABLE_SQL =
  "CREATE TABLE transactions (transaction_id VARCHAR(255) PRIMARY KEY, transaction_type VARCHAR(255), account_id VARCHAR(255), amount DOUBLE, transaction_date DATETIME, status VARCHAR(255), recipient_account_id VARCHAR(255))";

const initConnection = mysql.createConnection(dbConfig);
initConnection.query(
  `CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE_NAME}`,
  (err, res) => {
    if (err) {
      throw new Error();
    }
    if (res["warningCount"] === 0) {
      const connection = mysql.createConnection(dbConfigWithDb);

      console.info("Creating Tables");
      createTable(connection, USERS_TABLE_SQL, "users");
      createTable(connection, ACCOUNTS_TABLE_SQL, "accounts");
      createTable(connection, TRANSACTIONS_TABLE_SQL, "transactions");

      initConnection.end();
      connection.end();
    }
  },
);

export const createDatabase = () => {
  const connection = mysql.createConnection(dbConfigWithDb);

  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to the database:", err.stack);
      return;
    }

    console.log("Connected to the database as ID", connection.threadId);
  });

  return connection;
};

const createTable = (connection, sql, tableName) => {
  console.info(`Creating ${tableName} table`);
  connection.query(sql, (err2, res2) => {
    if (err2) {
      throw new Error();
    }
    console.info(`${tableName} table created!`);
  });
};
