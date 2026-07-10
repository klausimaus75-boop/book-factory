# Contributing to Book Factory

Book Factory is developed as a long-term, modular software project. Changes should be understandable, documented, and easy to extend.

## Before Writing Code

1. Check whether the change affects architecture.
2. If it does, create or update an ADR in `docs/adr/`.
3. Check whether the change belongs to an existing module.
4. If it introduces a new module, document it in `docs/architecture/module-overview.md`.
5. Keep implementation work separate from documentation-only changes when practical.

## Pull Request Expectations

Every pull request should explain:

- what changed
- why it changed
- which module is affected
- whether an ADR is required
- how the change was verified

## Project Discipline

- Do not add hidden dependencies between modules.
- Do not introduce paid OpenAI API usage.
- Do not implement speculative features that are not documented.
- Prefer clear names over clever abstractions.
- Keep user workflows understandable for beginners.

