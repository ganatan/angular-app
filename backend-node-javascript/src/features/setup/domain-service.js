import pg from 'pg';
const { Pool } = pg;

import config from '../../core/config/config.js';

class DomainService {
  constructor() {
    this.pool = null;
  }

  initPool = (env, databaseName) => {
    const localhost = config[env].db.localhost;
    this.pool = new Pool({
      user: 'postgres',
      host: localhost,
      database: databaseName,
      password: 'Trustno1',
      port: 5432,
    });
  };

  createDomains = async () => {
    const createDatabaseName = 'angular_backend_test';
    const env = process.env.NODE_ENV || 'development';

    this.initPool(env, createDatabaseName);
    const client = await this.pool.connect();
    console.log(`Connected to PostgreSQL as ${client.user}`);

    try {
      const domainsCreated = await this.createDomainsAll(client);

      return domainsCreated;
    } catch (err) {
      console.error('Error during domain creation:', err);

      return { message: 'Domains creation failed' };
    } finally {
      client.release();
      console.log('Connection released');
    }
  };

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

      return {};
    }
  };

  createDomainsAll = async (client) => {
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

  deleteOneDomain = async (client, name) => {
    const sql = `DROP DOMAIN IF EXISTS ${name}`;
    try {
      await client.query(sql);
      console.log(`Domain { ${name} } deleted successfully`);

      return { name: name, status: 'deleted' };
    } catch (err) {
      console.error(`Error deleting domain { ${name} }: ${err.message}`);

      return { name: name, status: 'failed' };
    }
  };

  deleteDomainsAll = async (client) => {
    const domains = [
      'dom_boolean',
      'dom_char',
      'dom_comment',
      'dom_comment_long',
      'dom_comment_xlong',
      'dom_lib',
      'dom_lib_short',
      'dom_lib_long',
      'dom_lib_xlong',
      'dom_text',
      'dom_date',
      'dom_datetime',
      'dom_time',
      'dom_float',
      'dom_fk',
      'dom_pk',
      'dom_integer',
      'dom_bigint',
      'dom_numeric',
      'dom_uuid',
    ];

    const results = [];
    for (const domain of domains) {
      const result = await this.deleteOneDomain(client, domain);
      results.push(result);
    }

    console.log('Domains deletion completed');

    return results;
  };

  deleteDomains = async () => {
    const deleteDatabaseName = 'angular_backend_test';
    const env = process.env.NODE_ENV || 'development';

    this.initPool(env, deleteDatabaseName);
    const client = await this.pool.connect();
    console.log(`Connected to PostgreSQL as ${client.user}`);

    try {
      const domainsDeleted = await this.deleteDomainsAll(client);

      return domainsDeleted;
    } catch (err) {
      console.error('Error during domain deletion:', err);

      return { message: 'Domains deletion failed' };
    } finally {
      client.release();
      console.log('Connection released');
    }
  };
}

export default DomainService;

