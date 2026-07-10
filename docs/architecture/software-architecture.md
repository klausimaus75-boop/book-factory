# Software Architecture

## Purpose

Book Factory is a modular production platform for managing the complete workflow of book creation and publication.

It coordinates work, stores project state, generates structured work orders, opens specialized GPTs, and captures returned results. It does not perform paid AI generation through OpenAI APIs.

## Architectural Principles

1. Modularity first
2. Clear module ownership
3. Minimal coupling
4. Explicit workflow state
5. Documented decisions before implementation
6. Beginner-friendly user guidance
7. Extensibility for new book types
8. No paid OpenAI API dependency

## Conceptual Layers

### User Interface Layer

Responsible for screens, navigation, forms, dashboards, and responsive user interaction.

### Workflow Layer

Responsible for workflow definitions, workflow progress, step transitions, task status, and validation rules.

### Project Layer

Responsible for project metadata, book type configuration, project assets, versions, and result storage.

### Prompt Layer

Responsible for prompt templates, generated work orders, prompt history, and GPT routing metadata.

### Quality Layer

Responsible for review checklists, quality gates, manual review states, and result acceptance.

### Integration Layer

Responsible for opening external GPT URLs and handling import/export flows. This layer must not require paid OpenAI API usage.

### Persistence Layer

Responsible for saving projects, settings, versions, workflow states, and imported results.

## Module Boundary Rule

Each module owns its data model, workflows, and documentation. Other modules may interact through documented interfaces only.

## Initial Architecture Decision

The project starts with documentation, ADRs, and structure before implementation. This prevents early code from silently becoming the architecture.

See:

- [ADR 0001](../adr/0001-use-architecture-decision-records.md)
- [ADR 0002](../adr/0002-modular-production-platform.md)
- [ADR 0003](../adr/0003-no-paid-openai-api-usage.md)

