---
name: generate-qa-scenarios
description: Generate QA test scenarios from a user story or PR. Use when asked to create, generate or design test cases or scenarios.
---

# Generate QA scenarios

## Input
Read the user story (or work item) and, if given, the PR changes, so you understand the feature and the code that changed.

## Rules
- Do NOT write unit-level tests (e.g. internal functions). Those belong to developers.
- Every scenario gets an owner: `QA` (needs a tester's judgement or exploration) or `Dev` (better covered in code).
- For every scenario decide `Automate: Yes/No` and give a one-line reason (e.g. stable, high value, regression).
- Avoid overlapping scenarios. If two scenarios check the same outcome, merge them.
- Cover the happy path, the main error cases and edge cases from the acceptance criteria. Do not invent features.

## Output format
A table with these columns: `Title | Priority (High/Med/Low) | Owner | Automate | Reason`.

Then, for each scenario that is Automate: Yes, add steps:
1. One action per line
2. ...
Expected result: one clear sentence.

Keep steps short and plain.
