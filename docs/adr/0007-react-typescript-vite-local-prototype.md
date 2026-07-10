# 0007: React, TypeScript, Vite, and Local Storage for the First Prototype

## Date

2026-07-10

## Status

Accepted

## Problem Statement

Sprint 1 requires a locally runnable web application with project creation, editing, deletion, workflow status changes, progress calculation, local persistence, routing, and tests. No framework decision exists yet.

## Decision

The first prototype will use React, TypeScript, Vite, React Router, localStorage, and Vitest.

## Rationale

This stack is modern, common, lightweight, and maintainable. It supports a responsive single-page application without introducing backend complexity. localStorage is sufficient for the first local prototype and keeps the sprint aligned with the decision to avoid accounts, cloud storage, and external databases.

## Alternatives

- Build a static HTML, CSS, and JavaScript prototype.
- Use Next.js from the beginning.
- Use IndexedDB for the first persistence layer.
- Add a backend and database immediately.

## Consequences

- The application can be started locally with a simple development server.
- The first prototype remains frontend-only.
- Data is stored only in the user's browser.
- localStorage is not suitable for large data, backups, sync, or multi-device use and must be revisited in a later storage ADR.
