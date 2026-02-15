#!/usr/bin/env node

/**
 * Generates a changelog by fetching merged PRs from the GitHub repository.
 * This provides a history of changes made to the portfolio website.
 * 
 * Usage: node generate-changelog.js
 * 
 * Note: Set GITHUB_TOKEN environment variable for higher API rate limits
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const REPO_OWNER = 'indhra';
const REPO_NAME = 'indhra.github.io';
const OUTPUT_FILE = path.join(__dirname, 'changelog.json');
const MAX_PRS = 50; // Fetch last 50 merged PRs

/**
 * Make HTTPS request with promise
 */
function httpsRequest(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const defaultHeaders = {
      'User-Agent': 'changelog-generator',
      ...headers
    };
    
    if (process.env.GITHUB_TOKEN) {
      defaultHeaders['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    }
    
    https.get(url, { headers: defaultHeaders }, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${data}`));
        }
      });
    }).on('error', reject);
  });
}

/**
 * Fetch merged pull requests from GitHub
 */
async function fetchMergedPRs() {
  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=closed&sort=updated&direction=desc&per_page=${MAX_PRS}`;
  
  console.log('🔍 Fetching merged pull requests from GitHub...');
  
  try {
    const prs = await httpsRequest(url);
    
    // Filter only merged PRs (merged_at must not be null)
    const mergedPRs = prs
      .filter(pr => pr.merged_at !== null)
      .map(pr => ({
        number: pr.number,
        title: pr.title,
        description: pr.body || '',
        mergedAt: pr.merged_at,
        author: pr.user.login,
        url: pr.html_url,
        labels: pr.labels.map(label => label.name)
      }));
    
    console.log(`📊 Found ${prs.length} closed PRs, ${mergedPRs.length} are merged`);
    return mergedPRs;
  } catch (error) {
    console.warn('⚠️  Could not fetch PRs from GitHub:', error.message);
    console.log('💡 Tip: Set GITHUB_TOKEN environment variable for authenticated requests');
    return [];
  }
}

/**
 * Generate changelog file
 */
async function generateChangelog() {
  try {
    const mergedPRs = await fetchMergedPRs();
    
    const changelog = {
      lastUpdated: new Date().toISOString(),
      repository: `${REPO_OWNER}/${REPO_NAME}`,
      totalChanges: mergedPRs.length,
      changes: mergedPRs
    };
    
    // Write to file
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(changelog, null, 2), 'utf8');
    
    console.log('✅ Changelog generated successfully!');
    console.log(`📋 Found ${mergedPRs.length} merged pull request(s)`);
    console.log(`💾 Saved to: ${OUTPUT_FILE}`);
    
    if (mergedPRs.length > 0) {
      console.log('\n📝 Recent changes:');
      mergedPRs.slice(0, 5).forEach(pr => {
        const date = new Date(pr.mergedAt).toLocaleDateString();
        console.log(`   - [${date}] #${pr.number}: ${pr.title}`);
      });
    }
    
  } catch (error) {
    console.error('❌ Error generating changelog:', error.message);
    
    // Create a minimal changelog if fetch fails
    const fallbackChangelog = {
      lastUpdated: new Date().toISOString(),
      repository: `${REPO_OWNER}/${REPO_NAME}`,
      totalChanges: 0,
      changes: [],
      note: 'Changelog generation failed. This is a fallback.'
    };
    
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(fallbackChangelog, null, 2), 'utf8');
    console.log('💾 Created fallback changelog');
  }
}

// Run the script
generateChangelog();
