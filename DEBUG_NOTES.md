### Controlled Failure Analysis

A controlled failure was introduced by temporarily changing the expected value of the price assertion in the add-to-cart test.

The test failed as expected. The failure was investigated by reviewing the CI logs and screenshot evidence.

- **Failure Commit:** [View Commit](https://github.com/basakbilginoglu/automation-exercise-playwright-javascript/commit/40fa33a1e5245c4cfbd013f8e2a33f9a8971648f)
- **Failed CI Run:** [View Failed Run](https://github.com/basakbilginoglu/automation-exercise-playwright-javascript/actions/runs/39233968607)

**Screenshot evidence:**

![Controlled Failure Screenshot](evidence/controlled-failure.png)

**Root Cause:** The failure was intentionally introduced by using an incorrect expected value in the assertion. This was a controlled test failure, not a confirmed application defect.

### Assertion Fix

The incorrect expected value was replaced with the expected price stored in the JSON test data. The test was then rerun to verify the correction.

- **Assertion Fix Diff:** [View Code Changes](https://github.com/basakbilginoglu/automation-exercise-playwright-javascript/commit/9bc81bb6a75ac63ba441f4e07d59f7c81ee9f415#diff-440edd5c2f550c980aa5e4181a5def42475207dccb1b81f9087347a1250b53af)
- **Successful Run:** [View GitHub Actions Run](https://github.com/basakbilginoglu/automation-exercise-playwright-javascript/actions/runs/39236673697)

The code diff shows the assertion correction made during the investigation.