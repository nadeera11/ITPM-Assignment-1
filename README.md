# Singlish to Sinhala Translator Test Suite

This project contains automated end-to-end tests for the [Swift Translator](https://www.swifttranslator.com/) Singlish to Sinhala translation feature using Playwright.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
- **npm** (comes with Node.js)
  - Verify installation: `npm --version`

## Installation

1. **Navigate to the project directory:**
   ```bash
   cd c:\Users\User\Documents\01-Y1S1\ITPM_Assignment_1
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

## Running Tests

### Run All Tests
Execute all tests across all browsers (Chromium, Firefox, WebKit):
```bash
npm test
```

### Run Tests in UI Mode
Interactive mode to see tests running in real-time:
```bash
npm run test:ui
```

### Run Tests in Headed Mode
See the browser window while tests are running:
```bash
npm run test:headed
```

### Run Tests on Specific Browsers

**Chromium only:**
```bash
npm run test:chromium
```

**Firefox only:**
```bash
npm run test:firefox
```

**WebKit only:**
```bash
npm run test:webkit
```

### Run Specific Test File
Run only the Singlish to Sinhala translation tests:
```bash
npm run test:singlish
```

### Debug Tests
Run tests in debug mode with Playwright Inspector:
```bash
npm run test:debug
```

### View Test Report
After tests complete, view the HTML report:
```bash
npm run test:report
```

## Test Suite Overview

The test suite includes **24 positive functional test cases** covering:

- Daily simple present tense sentences
- Compound sentences with future plans
- Complex sentences with conditions
- olite questions and requests
- Commands and urgency expressions
- Informal greetings and slang
- Past event narrations
- Mixed English terms (brands, technical terms)
- Long personal anecdotes
- Time, currency, and measurement formats
- Special characters and formatting
- Abbreviations (NIC, WhatsApp, etc.)

## Test Files Location

- **Test Specifications:** `tests/singlish-to-sinhala.spec.js`
- **Configuration:** `playwright.config.js`
- **Test Results:** `test-results/` (auto-generated)
- **HTML Report:** `playwright-report/` (auto-generated)

## Configuration

The tests are configured with:
- **Timeout:** 10-60 seconds per test (due to translator website response time)
- **Screenshots:** Captured on test failure
- **Parallel Execution:** Enabled
- **Browsers:** Chromium, Firefox, WebKit

## Troubleshooting

### Tests timing out
If tests fail due to timeouts, the translator website may be experiencing slow response times. The tests already include generous timeouts (10-30 seconds), but you can increase them further in the test file if needed.

### Browser installation issues
If browsers aren't installed properly:
```bash
npx playwright install --force
```

### Clear previous test results
```bash
rm -r test-results playwright-report
```

## Project Structure

```
ITPM_Assignment_1/
├── tests/
│   └── singlish-to-sinhala.spec.js   # Main test file
├── playwright.config.js               # Playwright configuration
├── package.json                       # Project dependencies
├── README.md                          # This file
├── test-results/                      # Test execution results
└── playwright-report/                 # HTML test reports
```

## Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Swift Translator Website](https://www.swifttranslator.com/)
- [Node.js Documentation](https://nodejs.org/docs/)

## Notes

- Tests interact with an external website (swifttranslator.com), so internet connection is required
- Test execution time varies based on website response speed (typically 5-10 minutes for full suite)
- Screenshots are automatically captured when tests fail for debugging purposes
