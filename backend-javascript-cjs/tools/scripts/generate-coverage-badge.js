'use strict';

const fs = require('fs');
const path = require('path');

const coverageSummaryPath = path.resolve(__dirname, '../../coverage/coverage-summary.json');
const badgePath = path.resolve(__dirname, '../../README.md');

function getCoveragePercent() {
  if (!fs.existsSync(coverageSummaryPath)) {
    console.error('❌ Coverage summary not found. Run coverage first.');
    process.exit(1);
  }

  const summary = JSON.parse(fs.readFileSync(coverageSummaryPath, 'utf-8'));
  const linesPct = summary.total.lines.pct;

  return Math.round(linesPct);
}

function getColor(percentage) {
  if (percentage >= 90) {
    return 'brightgreen';
  }
  if (percentage >= 80) {
    return 'green';
  }
  if (percentage >= 70) {
    return 'yellow';
  }
  if (percentage >= 50) {
    return 'orange';
  }

  return 'red';
}

function updateBadge(percentage) {
  const color = getColor(percentage);
  const badgeMarkdown = `![Coverage Badge](https://img.shields.io/badge/Coverage-${percentage}%25-${color})`;

  let readme = fs.readFileSync(badgePath, 'utf-8');

  if (readme.includes('![Coverage Badge]')) {
    readme = readme.replace(/!\[Coverage Badge\]\(.*?\)/, badgeMarkdown);
  } else {
    readme = `${badgeMarkdown}\n\n${readme}`;
  }

  fs.writeFileSync(badgePath, readme, 'utf-8');
  console.log(`✅ Coverage badge updated: ${percentage}%`);
}

const coverage = getCoveragePercent();
updateBadge(coverage);
