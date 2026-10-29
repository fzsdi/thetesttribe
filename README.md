# QA + AI demo repo

A tiny shop page, two Playwright tests and four Copilot skills, for the talk
"Ways I Use AI to Test Smarter, Not Harder".

## Setup
```bash
npm install
npx playwright install chromium
npm test        # checkout test passes; flaky test passes or fails at random
```
Skills live in `.github/skills/`. Open the repo in VS Code with GitHub Copilot (agent mode).
Install the Playwright MCP for demo 2 if you want the agent to see the page.

## Demo 1: generate test cases
Prompt: `Use the generate-qa-scenarios skill on docs/user-story.md`
Point out: the owner and automate columns, and merge any overlapping scenario live.
(`docs/user-story.md` stands in for ADO MCP.)

## Demo 2: write Playwright tests
Prompt: `Use the write-playwright-tests skill to automate the "empty cart" scenario`
Point out: real locators, no skipped assertions. `tests/checkout.spec.ts` shows the style.
Bonus: remove the skill and run the same prompt to compare.

## Demo 3: self-healing
```bash
cp demo/pr-123-index.html app/index.html      # applies the "PR"
npm test -- checkout                          # fails: #checkout-btn not found
```
Prompt: `Use the fix-broken-test skill. The checkout test fails. Read demo/PR-123.md for the change.`
Ask the room: intentional change or bug?
Reset after: `git checkout app/index.html` (or re-copy the original from the zip).

## Demo 4: flaky triage
```bash
npx playwright test tests/flaky.spec.ts --repeat-each=20
```
Prompt: `Use the triage-flaky-test skill on tests/flaky.spec.ts. Use the latest run results and traces.`
Expected read: fixed 800 ms sleep versus random 200-1500 ms load, so a timing problem in the test.
Fix: replace the sleep and count with `await expect(page.locator('.product')).toHaveCount(3);`

## Tips
- Do a dry run first. Agent output varies, so record a backup video of each demo.
- Keep `app/index.html` original in git so you can reset between runs.
