# 0006: First MVP Without User Accounts and Payment Features

## Date

2026-07-10

## Status

Accepted

## Problem Statement

User accounts, paid features, teams, and role management would add significant complexity before the core production workflow has been validated.

## Decision

The first MVP will not include user accounts, payment features, team features, or complex role management.

The MVP will focus on a single-user production workflow.

## Rationale

The most important early risk is whether Book Factory can guide a user through a complete book production workflow. Authentication and payments do not prove that core value.

Reducing scope keeps the first version easier to build, test, and understand.

## Alternatives

- Add user accounts from the beginning.
- Add payment features from the beginning.
- Design for teams before validating the single-user workflow.
- Build a SaaS foundation before the product workflow.

## Consequences

- The MVP can focus on workflow quality.
- Technical complexity is reduced.
- Future account and payment features will require separate architecture decisions.
- Data ownership and storage decisions still need to be made before implementation.

