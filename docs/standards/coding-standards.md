# Coding Standards

No application code exists yet. These standards define the expectations for future implementation.

## General Rules

- Prefer readability over cleverness.
- Keep modules small and focused.
- Avoid hidden dependencies between modules.
- Make data flow explicit.
- Validate user input at module boundaries.
- Write code that a future maintainer can understand quickly.

## Architecture Rules

- Each feature belongs to a documented module.
- Shared utilities must not become a dumping ground.
- Cross-module communication must be intentional and documented.
- Architecture changes require an ADR.

## UI Rules

- Desktop and mobile must both be supported.
- Important actions must be visible and understandable.
- The user should always know the next workflow step.
- Error messages should explain what happened and how to continue.

## Testing Rules

- Critical workflow behavior must be tested.
- Data transformations must be tested.
- Regression-prone logic must be covered before expansion.
- Manual test notes should be documented when automated tests do not yet exist.

## Dependency Rules

- Add dependencies only when they solve a real problem.
- Prefer established, maintained libraries.
- Document major dependency decisions in ADRs.
- Do not add paid OpenAI API dependencies.

