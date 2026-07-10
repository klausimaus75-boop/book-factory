# 0001: Use Architecture Decision Records

## Date

2026-07-10

## Status

Accepted

## Problem Statement

Book Factory is planned as a long-term, modular software project. Without a formal decision record, important architecture choices could become hidden in code, chat history, or memory.

This would make the project harder to maintain, harder to onboard into, and easier to accidentally contradict later.

## Decision

Book Factory will use Architecture Decision Records in `docs/adr/`.

Every fundamental architecture decision must be documented in a separate ADR before or alongside implementation.

## Rationale

ADRs create a reliable memory for the project. They help future development stay consistent and prevent repeated debates about decisions that were already made.

## Alternatives

- Keep decisions only in chat history.
- Keep decisions only in README files.
- Decide informally during implementation.

## Consequences

- Architecture decisions become easier to review.
- Future contributors can understand why the system works the way it does.
- The project requires discipline to keep ADRs updated.
- Changed decisions require new ADRs instead of silent rewrites.

