# 0003: Avoid Paid OpenAI API Usage

## Date

2026-07-10

## Status

Accepted

## Problem Statement

Book Factory should support users who work with their own ChatGPT account and specialized GPTs. The application should not require paid OpenAI API usage or API key setup for its normal workflow.

## Decision

Book Factory will not use paid OpenAI APIs for core content generation.

The application will prepare structured work orders, allow users to copy prompts, open the correct specialized GPT, and accept returned results through manual or documented import flows.

## Rationale

This keeps the application aligned with the intended user workflow, avoids unexpected API costs, and separates production coordination from AI content generation.

## Alternatives

- Use OpenAI API calls directly.
- Offer both API and manual GPT workflows from the beginning.
- Build Book Factory as a fully automated AI generation system.

## Consequences

- Users remain in control of GPT interactions.
- The system avoids normal-use API key requirements.
- Some workflows require manual copy, paste, or import steps.
- Future integrations must be reviewed carefully to ensure they do not introduce paid API dependency.

