---
name: fix-broken-test
description: Investigate and fix a failing Playwright test after an app change. Use when a test fails and I give you the error, trace or a PR.
---

# Fix a broken test (human in the loop)

## Steps
1. Read the failure (error message, trace, screenshot).
2. Read the PR or code changes that landed since the test last passed.
3. Decide and say clearly: is this an **intentional app change** or a **real bug**?
4. Intentional change: update the test (usually the locator). Show the diff and explain it.
5. Real bug or behaviour change you are unsure about: do NOT touch the test. Explain what you found so I can raise it.

## Rules
- Only fix locator-level changes on your own.
- Never remove or loosen an assertion to get green.
- Do not change app code.
- Keep the fix as small as possible, and keep the assertions the same.
