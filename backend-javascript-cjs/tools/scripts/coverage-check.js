'use strict';

const { execSync } = require('child_process');

const coverageThresholds = {
  branches: 80,
  functions: 80,
  lines: 90,
  statements: 90,
};

const coverageThresholdArg = JSON.stringify({ global: coverageThresholds }).replace(/"/g, '\\"');

try {
  execSync(`npx jest --coverage --coverageThreshold="${coverageThresholdArg}"`, {
    stdio: 'inherit',
  });

  console.log('\n✅ Coverage thresholds validated successfully.');
} catch {
  console.error('\n❌ Coverage thresholds not met.');
  process.exit(1);
}
