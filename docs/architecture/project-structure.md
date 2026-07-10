# Project Structure

This document describes the intended repository structure for Book Factory.

```text
book-factory/
  .github/
    ISSUE_TEMPLATE/
    PULL_REQUEST_TEMPLATE.md
  config/
  docs/
    adr/
    architecture/
    documentation/
    github/
    roadmap/
    standards/
  public/
    assets/
  scripts/
  src/
    modules/
  tests/
```

## Root Files

- `README.md` introduces the project and links to key documentation.
- `CONTRIBUTING.md` defines collaboration expectations.
- `SECURITY.md` records security principles.
- `.gitignore` prevents local and generated files from entering Git.

## Folder Purpose

### `.github/`

Contains GitHub pull request and issue templates.

### `config/`

Reserved for future project-level configuration files.

No runtime configuration format has been selected yet.

### `docs/`

Contains all binding project documentation.

### `public/`

Reserved for future static assets.

### `scripts/`

Reserved for future project scripts.

Scripts should not be added until the related tooling decision is documented.

### `src/`

Reserved for future application source code.

No application code exists yet.

### `src/modules/`

Reserved for future feature modules.

Each implemented module must have a documented responsibility.

### `tests/`

Reserved for future automated tests.

The testing approach must be documented before broad implementation begins.

