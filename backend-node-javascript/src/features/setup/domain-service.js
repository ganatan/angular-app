import pg from 'pg';
const { Pool } = pg;

import config from '../../core/config/config.js';

class DomainService {

  createDomains = async () => {

    const createDatabaseName = 'angular_backend_test';

    const env = process.env.NODE_ENV || 'development';
    const localhost = config[env].db.localhost;

    this.pool = new Pool({
      user: 'postgres',
      host: localhost,
      database: createDatabaseName,
      password: 'Trustno1',
      port: 5432,
    });

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

      return { message: 'Domains creation completed' };
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

}

export default DomainService;

