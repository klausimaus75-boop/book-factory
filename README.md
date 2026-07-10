# Book Factory

Book Factory is the production center for planning, managing, reviewing, and publishing book projects.

The application does not generate book content by itself. It organizes projects, workflows, prompts, results, quality checks, versions, and progress. Specialized ChatGPT GPTs perform the actual content work through the user's own ChatGPT account.

## Current Project Phase

Sprint 1: Local runnable prototype.

The repository contains the professional project basis and a first frontend-only prototype:

- project structure
- software architecture
- module overview
- development phases
- roadmap
- documentation structure
- GitHub workflow structure
- coding standards
- naming conventions
- Architecture Decision Records
- local project dashboard
- children's book project creation and editing
- local project persistence
- manual workflow status tracking

## Core Principle

Book Factory is not an AI system.

Book Factory is a production platform that prepares work orders, guides users through structured workflows, opens the correct specialized GPT, and stores the returned results inside the project.

## Documentation

Start here:

- [Documentation Index](docs/README.md)
- [Project Structure](docs/architecture/project-structure.md)
- [Software Architecture](docs/architecture/software-architecture.md)
- [Module Overview](docs/architecture/module-overview.md)
- [Development Phases](docs/roadmap/development-phases.md)
- [Roadmap](docs/roadmap/roadmap.md)
- [ADR Index](docs/adr/README.md)

## Development Rule

Before implementation starts, every important architectural decision must be documented as an ADR in `docs/adr/`.
