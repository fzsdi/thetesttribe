---
name: triage-flaky-test
description: Triage a flaky Playwright test from repeated runs and traces. Use when a test passes sometimes and fails sometimes.
---

# Triage a flaky test

## Evidence
Use the test code and results from several runs (for example `npx playwright test <file> --repeat-each=20`). Compare traces or logs from failed and passed runs.

## Output
1. What differs between failed and passed runs?
2. Classify: `timing`, `test data`, `shared state / order`, `environment`, or `product bug`.
3. Evidence for your pick, and what you would check to rule out the others.
4. Proposed fix for the root cause.

## Rules
- Do NOT suggest blanket retries.
- Do NOT suggest longer fixed timeouts or `waitForTimeout`. Wait for a response or a visible state instead.
- If the failures show wrong data or wrong behaviour, say it may be a product bug and do not touch the test.
- You propose, I confirm by reproducing. Do not claim certainty.
