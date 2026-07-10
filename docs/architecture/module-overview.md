# Module Overview

This document lists planned Book Factory modules. It is not an implementation promise; it defines the intended module boundaries before coding begins.

## Core Modules

### Project Management

Manages book projects, project metadata, project status, and project lifecycle.

### Book Type Catalog

Manages supported book types such as children's books, coloring books, fact books, activity books, puzzle books, and guides.

New book types must be addable without restructuring the entire application.

### Workflow Engine

Manages workflow definitions, active workflow steps, transitions, dependencies, and completion status.

### Prompt Management

Manages prompt templates, generated work orders, prompt versions, and prompt history.

### GPT Directory

Manages specialized GPT entries, their purpose, URLs, supported task types, and usage guidance.

### Result Intake

Manages returned GPT results, manual paste/import flows, parsing status, and assignment to workflow steps.

### Quality Control

Manages checklists, review states, quality gates, and approval decisions.

### Versioning

Manages project versions, result versions, prompt versions, and rollback concepts.

### Dashboard

Provides project overview, progress, next actions, warnings, and status summaries.

### Import and Export

Handles structured import and export of project data and final production assets.

### Settings

Manages user preferences, local configuration, GPT links, and workflow options.

## Cross-Cutting Concerns

- validation
- error handling
- accessibility
- responsive design
- local data protection
- documentation
- testing

## Beginner Workflow Requirement

Every module should help the user understand the next action. The application should reduce uncertainty instead of exposing internal complexity.

