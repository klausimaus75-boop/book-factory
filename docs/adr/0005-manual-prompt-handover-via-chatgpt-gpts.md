# 0005: Manual Prompt Handover and Result Intake via ChatGPT GPTs

## Date

2026-07-10

## Status

Accepted

## Problem Statement

Book Factory must coordinate work with specialized ChatGPT GPTs without requiring paid OpenAI API usage, API keys, or automatic data transfer.

## Decision

Book Factory will use manual prompt handover and manual result intake for the MVP.

The application will generate a complete prompt, let the user copy it, open the matching GPT link, and provide a place for the user to paste the returned result back into the project.

## Rationale

This approach matches the intended workflow: each user works through their own ChatGPT account and remains in control of what is sent and received.

It also keeps the MVP technically simpler and avoids API cost, credential handling, and automation risks.

## Alternatives

- Use OpenAI API calls directly.
- Use browser automation to paste prompts automatically.
- Store ChatGPT credentials and automate GPT sessions.
- Delay GPT integration until later.

## Consequences

- The MVP avoids API keys and paid API usage.
- The user controls all external handover steps.
- Copy and paste remains a manual part of the workflow.
- Prompt and result formats must be clear enough to avoid user confusion.

