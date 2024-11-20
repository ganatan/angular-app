'use strict';

// const { pgPool } = require('./database-connection');
const { Pool } = require('pg');

const pgPostgresPool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'woper',
  password: 'Trustno1',
  port: 5432,
});

class DomainService {

  createOneDomain = async (client, name, dataType, defaultValue) => {
    let sql = `CREATE DOMAIN ${name} AS ${dataType}`;
    if (defaultValue !== '') {
      sql += ` DEFAULT ${defaultValue}`;
    }
    try {
      await client.query(sql);
      console.log(`Domain { ${name} } created successfully`);

      return { name };
    } catch (err) {
      console.error(`Error creating domain { ${name} }: ${err.message}`);
    }

    return {};
  };

  createDomainsAll = async (client) => {
    console.log('Starting domains creation...');
    const domains = [
      { name: 'dom_boolean', type: 'boolean', default: 'false' },
      { name: 'dom_char', type: 'char(1)', default: null },
      { name: 'dom_comment', type: 'varchar(200)', default: null },
      { name: 'dom_comment_long', type: 'varchar(400)', default: null },
      { name: 'dom_comment_xlong', type: 'varchar(1000)', default: null },
      { name: 'dom_lib', type: 'varchar(50)', default: null },
      { name: 'dom_lib_short', type: 'varchar(20)', default: null },
      { name: 'dom_lib_long', type: 'varchar(100)', default: null },
      { name: 'dom_lib_xlong', type: 'varchar(200)', default: null },
      { name: 'dom_text', type: 'text', default: null },
      { name: 'dom_date', type: 'date', default: null },
      { name: 'dom_datetime', type: 'timestamp with time zone', default: null },
      { name: 'dom_time', type: 'time', default: null },
      { name: 'dom_float', type: 'float', default: '0' },
      { name: 'dom_fk', type: 'integer', default: '111' },
      { name: 'dom_pk', type: 'integer', default: '' },
      { name: 'dom_integer', type: 'integer', default: '0' },
      { name: 'dom_bigint', type: 'bigint', default: '0' },
      { name: 'dom_numeric', type: 'numeric(15,2)', default: '0' },
      { name: 'dom_uuid', type: 'uuid', default: null },
    ];

    const results = [];
    for (const domain of domains) {
      const result = await this.createOneDomain(client, domain.name, domain.type, domain.default);
      results.push(result);
    }
    console.log('Domains creation completed');

    return results;
  };

  createDomains = async () => {
    pgPostgresPool.database = 'woper';
    const client = await pgPostgresPool.connect();
    console.log(`Connected to PostgreSQL as ${client.user}`);

    try {
      const domainsCreated = await this.createDomainsAll(client);

      return domainsCreated;
    } catch (err) {
      console.error('Error during :', err);

      return { message: 'Domains creation failed' };
    } finally {
      client.release();

      return { message: 'Domains creation completed' };
    }
  };

}

module.exports = DomainService;
