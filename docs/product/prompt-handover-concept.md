# Prompt Handover Concept

Book Factory coordinates work between the project and specialized ChatGPT GPTs through manual prompt handover.

## Handover Flow

1. Book Factory collects project data.
2. Book Factory generates a complete prompt for the current workflow step.
3. The user copies the prompt.
4. Book Factory opens the matching GPT link.
5. The user pastes the prompt into ChatGPT.
6. The GPT generates the result.
7. The user copies the result back into Book Factory.
8. Book Factory saves the result.
9. Book Factory guides the user through quality checking.
10. Book Factory continues the workflow when the release criteria are met.

## Important Boundaries

- No direct API communication is used.
- No API keys are required.
- No automatic transfer to ChatGPT is performed.
- The user works through their own ChatGPT account.
- The user controls what is pasted into ChatGPT and what is copied back.

## Prompt Requirements

Each generated prompt should include:

- project title
- book type
- target audience
- age range
- topic
- format and page count
- previous approved results required for the step
- exact task instruction
- expected output format
- quality expectations

## Result Requirements

Returned GPT results should be structured enough to support later processing.

Preferred result formats may include:

- headings
- numbered sections
- tables
- JSON-like structures when useful
- explicit revision notes

## Beginner-Friendly Requirement

The user should never need to guess which GPT to open, what to paste, or what result to bring back. The workflow step should make the next action obvious.

