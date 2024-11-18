'use strict';

const DomainService = require('../../src/features/setup/domain-service');

async function main() {
  try {
    console.log('Starting domains creation');
    const domainService = new DomainService();
    const domainsCreated = await domainService.createDomains();

    if (domainsCreated && domainsCreated.length > 0) {
      console.log('Domains created successfully:', domainsCreated.map(domain => domain.name).join(', '));
    } else {
      console.log('No domains were created');
    }
  } catch (error) {
    console.error(`Error creating domains: ${error.message}`);
    throw error;
  }
}

main().catch((error) => {
  console.error('Unhandled error:', error.message);
  throw error;
});
