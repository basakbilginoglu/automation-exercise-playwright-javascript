



# Automation Exercise – Playwright Tests

## Overview

This project contains UI test automation for [Automation Exercise](https://automationexercise.com/) using Playwright and Javascript.

The goal is to validate important user flows, including product search, cart operations, and login validation.

## Tech Stack

- Playwright
- Javascript
- Node.js
- GitHub Actions

## Project Structure

```text
automation-exercise-playwright-javascript/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── api/
├── pages/
├── tests/
├── test-data/
├── playwright.config.ts
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/basakbilginoglu/automation-exercise-playwright-javascript.git
cd automation-exercise-playwright-javascript
```

```bash
npx playwright install
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests in a specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

Open the HTML report:

```bash
npx playwright show-report
```

## Test Scope

### 1. Product Search

- Search for a product using the search field.
- Check that the results contain relevant product information.

### 2. Cart

- Add a product to the cart.
- Verify the product name and price in the cart.

### 3. Negative Login

- Attempt to log in using invalid credentials.
- Verify that the expected error message is displayed.

## Design Decisions

- **Page Object Model (POM):** Page-specific interactions are organized into page classes to improve maintainability and reusability.
- **Business-critical assertions:** The cart test checks the product name and price, which are important details in the shopping flow.
- **Negative testing:** The login test verifies the application's response to invalid credentials.
- **Cross-browser configuration:** Playwright is configured for Chromium, Firefox, and WebKit.
- **CI integration:** GitHub Actions runs the test suite automatically on pushes and supports manual execution.
- **Separation of concerns:** Tests, page objects, test data, and API-related files are organized separately.

## CI Evidence

GitHub Actions is configured to run the Playwright test suite automatically on every push and can also be triggered manually using `workflow_dispatch`.

**Latest recorded successful run:** 9 tests passed in 34.7 seconds.

**Workflow:** [Playwright Tests – GitHub Actions](https://github.com/basakbilginoglu/automation-exercise-playwright-javascript/actions/workflows/playwright.yml)

**Successful run:** https://github.com/basakbilginoglu/automation-exercise-playwright-javascript/actions/runs/38300173433/job/114980900073

The successful run log reported:

```text

Running 9 tests using 1 worker
·········
  9 passed (34.7s)
```

### Postman Test Execution Evidence

The Postman collection was executed using Collection Runner.

![Postman test execution results](evidence/postman-run.png)


### API Response Validation

Both HTTP status codes and response bodies are validated in Postman tests.

- **Status code validation** checks whether the API returns the expected HTTP result.
- **Response body validation** checks whether the returned data or error message meets expectations.

Using both helps detect incorrect API behavior and prevents false-positive test results.

