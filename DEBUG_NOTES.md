## Debugging Exercise

I intentionally changed the expected product price in the product-add-to-cart test to an incorrect value to trigger an assertion failure.

After running the test, Playwright reported a mismatch between the expected and actual prices.

To investigate the failure, I opened the generated trace file using the following command in the VS Code terminal:

npx playwright show-trace trace.zip


In Trace Viewer, I reviewed the test actions, error message, and page state around the failed assertion to identify the cause of the failure.

The investigation showed that the failure was caused by the incorrect expected price in the test, rather than an application defect.

I restored the correct expected value and reran the test. The test passed successfully after the correction.
