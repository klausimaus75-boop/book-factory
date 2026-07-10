# Naming Conventions

Consistent naming keeps the project understandable as it grows.

## General Naming

- Use clear English names for code, folders, and technical documentation.
- Use product-facing German text only where the user interface requires it.
- Avoid abbreviations unless they are widely understood.
- Prefer specific names over generic names.

## Folder Names

- Use lowercase kebab-case.
- Examples: `project-management`, `prompt-management`, `quality-control`

## File Names

- Use lowercase kebab-case for documentation files.
- Use descriptive names that explain the file purpose.
- Examples: `software-architecture.md`, `module-overview.md`

## Module Names

- Use business-oriented names.
- A module name should explain what responsibility it owns.

Good:

- Project Management
- Workflow Engine
- Prompt Management

Avoid:

- Common
- Misc
- Helpers

## ADR Names

ADR files use this format:

`0001-short-decision-title.md`

The number must be sequential and never reused.

