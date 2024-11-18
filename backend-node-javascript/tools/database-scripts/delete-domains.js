import DomainService from '../../src/features/setup/domain-service.js';

async function main() {
  try {
    console.log('Starting domains deletion');
    const domainService = new DomainService();
    const domainsDeleted = await domainService.deleteDomains();

    if (domainsDeleted && domainsDeleted.length > 0) {
      console.log('Domains deleted successfully:', domainsDeleted.map(domain => domain.name).join(', '));
    } else {
      console.log('No domains were deleted');
    }
  } catch (error) {
    console.error(`Error deleting domains: ${error.message}`);
    throw error;
  }
}

main().catch((error) => {
  console.error('Unhandled error:', error.message);
  throw error;
});
