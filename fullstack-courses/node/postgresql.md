
# Node : postgresql

## posqtgresql without pool

```javascript
const dbConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'backend_admin',
  password: 'Trustno1',
  port: 5432,
};

const { Client } = require('pg');

const connectToDatabase = async () => {

  const client = new Client(dbConfig);
  try {
    await client.connect();
    console.log(`Connected to PostgreSQL as ${client.user}`);
    const result = await client.query('select name from continent');
    console.log('Heure actuelle depuis la base de données :', JSON.stringify(result.rows));
  } finally {
    await client.end();
  }

};
connectToDatabase();
```


## posqtgresql with pool

```javascript
const dbConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'backend_admin',
  password: 'Trustno1',
  port: 5432,
};

var Pool = require('pg-pool')

const connectToDatabase = async () => {

  var pool = new Pool(dbConfig);
  var client = await pool.connect()
  try {
    const result = await client.query('select name from continent');
    console.log('Heure actuelle depuis la base de données :', JSON.stringify(result.rows));
  } finally {
    client.release();
    // await pool.end();
  }

};
connectToDatabase();
```

