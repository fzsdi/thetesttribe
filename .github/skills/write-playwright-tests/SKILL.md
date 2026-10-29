---
name: write-playwright-tests
description: Write Playwright tests (TypeScript) from approved test scenarios. Use when asked to automate, script or write Playwright tests.
---

# Write Playwright tests

## Before writing
If the Playwright MCP is available, open the page and inspect the real elements. Use the locators you actually see. Do not guess.

## Rules
- Test title format: `<feature>: <behaviour> when <condition>` (one `test()` per scenario).
- NEVER skip, comment out, weaken or swallow an assertion to make a test pass. No `.catch(() => {})` on expectations, no empty `try/catch`, no removing the `expect`.
- If a step is not possible in the app, stop and tell me. Do not make the test pass by changing it.
- Prefer `getByRole`, `getByLabel`, `getByText`. Use ids or CSS only if there is no better option.
- Use web-first assertions (`await expect(locator)...`). No `waitForTimeout`.
- Every test needs at least one assertion on a visible result.
- Keep tests short and readable. No clever helpers for one test.

## After writing
Run the test. If it fails, explain why before changing anything.
