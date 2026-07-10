# Book Format Source

This document records the external source that Book Factory should treat as the authoritative basis for book format, bleed, page count, margin, gutter, and later full-cover calculations.

## Source File

`J:\Meine Ablage\Buch Automatisierung von Codex\Master_Buchsystem\01_Systemregeln\Buchmaße.md`

## Binding Rules

Book Factory should collect these parameters at project creation:

- book format / trim size
- bleed for the interior
- estimated page count

These values are required later for:

- interior page layout
- margin and gutter calculations
- full-cover PDF generation
- front cover, spine, and back cover sizing

## Implementation Note

The current prototype stores the selected book format and page count. It now also stores whether interior bleed is enabled.

Later cover generation must use these project values instead of asking the same format questions again.
