# 0002: Build Book Factory as a Modular Production Platform

## Date

2026-07-10

## Status

Accepted

## Problem Statement

Book Factory must support many book types, workflows, prompts, quality checks, and production stages over time. If all behavior is built as one tightly coupled application, every new book type or workflow could require risky changes across the whole system.

## Decision

Book Factory will be designed as a modular production platform.

Each major responsibility will belong to a clearly documented module. New book types and workflows should be added through configuration and module extension wherever possible, not by rewriting core behavior.

## Rationale

A modular architecture supports long-term growth. It also makes the application easier to test, document, and reason about.

## Alternatives

- Build one simple application first and modularize later.
- Build each book type as a separate application.
- Build a generic automation system without book-specific module boundaries.

## Consequences

- Early planning takes more time.
- Module boundaries must be documented and respected.
- Future book types can be added with less risk.
- The project can grow without becoming a single unstructured codebase.

