# First User Workflow: Children's Book

This workflow describes the first complete Book Factory production flow for a children's book project.

## 1. Create Project

Purpose: Start a new structured book project.

Required inputs: Project title.

Generated handover prompt: None.

Responsible GPT: None.

Expected result: A new project record exists.

Quality check: Project title is clear and not empty.

Release criterion: Project has a title and selected book type.

Next action: Select children's book as book type.

## 2. Select Children's Book

Purpose: Set the production path to the children's book workflow.

Required inputs: Book type selection.

Generated handover prompt: None.

Responsible GPT: None.

Expected result: Children's book workflow is assigned to the project.

Quality check: Correct book type is selected.

Release criterion: Workflow steps are available.

Next action: Enter basic project data.

## 3. Enter Basic Data

Purpose: Collect the minimum context required for all later prompts.

Required inputs: Target audience, age range, topic, book format, page count, narrative perspective, style, and tone.

Generated handover prompt: None.

Responsible GPT: None.

Expected result: Project has complete basic data.

Quality check: Required fields are filled and internally consistent.

Release criterion: Basic data is complete enough to generate the concept prompt.

Next action: Create book concept.

## 4. Create Book Concept

Purpose: Turn the basic idea into a structured children's book concept.

Required inputs: Basic project data.

Generated handover prompt: A concept prompt containing project context, target audience, age range, topic, format, desired tone, and requested output structure.

Responsible GPT: Children's Book Planning GPT.

Expected result: Structured concept with premise, learning or emotional goal, setting, conflict, resolution, and suitability notes.

Quality check: Concept matches target age, topic, tone, and format.

Release criterion: Concept is approved or revised until suitable.

Next action: Define main characters.

## 5. Define Main Characters

Purpose: Create consistent characters for the story.

Required inputs: Approved book concept and basic project data.

Generated handover prompt: A character prompt requesting main characters, supporting characters, motivations, relationships, visual traits, and age-appropriate behavior.

Responsible GPT: Character Development GPT.

Expected result: Character profiles with names, roles, traits, motivations, and consistency notes.

Quality check: Characters fit the concept, age range, and story tone.

Release criterion: Main characters are complete and usable for story structuring.

Next action: Structure the plot.

## 6. Structure Plot

Purpose: Build a logical beginning, middle, and end.

Required inputs: Approved concept and character profiles.

Generated handover prompt: A plot structure prompt requesting story arc, key scenes, conflict, turning point, resolution, and child-friendly pacing.

Responsible GPT: Story Structure GPT.

Expected result: Structured plot outline.

Quality check: Plot is logical, age-appropriate, and free of contradictions.

Release criterion: Plot outline supports the requested page count and format.

Next action: Create page or spread plan.

## 7. Create Page or Spread Plan

Purpose: Convert the plot into a page-by-page or spread-by-spread structure.

Required inputs: Plot outline, book format, page count, and target age.

Generated handover prompt: A layout planning prompt requesting one entry per page or spread, including text purpose and visual idea.

Responsible GPT: Page Planning GPT.

Expected result: Page or spread plan with story beat, text intention, and illustration note for each unit.

Quality check: Page count is respected and pacing is balanced.

Release criterion: Every page or spread has a clear purpose.

Next action: Create manuscript.

## 8. Create Manuscript

Purpose: Produce the complete story text.

Required inputs: Approved concept, characters, plot, page plan, style, tone, and narrative perspective.

Generated handover prompt: A manuscript prompt requesting final story text mapped to the page or spread plan.

Responsible GPT: Children's Book Manuscript GPT.

Expected result: Complete manuscript structured by page or spread.

Quality check: Language, tone, length, continuity, and age suitability are checked.

Release criterion: Manuscript is approved for review.

Next action: Review manuscript.

## 9. Review Manuscript

Purpose: Identify issues before visual and publishing preparation.

Required inputs: Complete manuscript, project data, concept, and quality checklist.

Generated handover prompt: A review prompt requesting structured feedback, issue list, and improvement suggestions.

Responsible GPT: Children's Book Quality Review GPT.

Expected result: Review report with pass/fail notes and revision recommendations.

Quality check: All checklist items are addressed.

Release criterion: Critical issues are resolved or explicitly accepted.

Next action: Create image prompt structure.

## 10. Create Image Prompt Structure

Purpose: Prepare consistent illustration prompts for later image generation outside Book Factory.

Required inputs: Approved manuscript, character descriptions, visual traits, page plan, and style direction.

Generated handover prompt: An image prompt structure prompt requesting one image prompt per page or spread.

Responsible GPT: Image Prompt GPT.

Expected result: Structured image prompt list aligned with manuscript and characters.

Quality check: Image prompts match text, characters, and page order.

Release criterion: Every required page or spread has a usable image prompt.

Next action: Create cover concept.

## 11. Create Cover Concept

Purpose: Define a cover direction that matches the book.

Required inputs: Book concept, characters, tone, target audience, topic, and visual direction.

Generated handover prompt: A cover concept prompt requesting front cover idea, title treatment notes, mood, composition, and KDP suitability notes.

Responsible GPT: Cover Concept GPT.

Expected result: Structured cover concept.

Quality check: Cover concept matches theme, age range, tone, and genre expectations.

Release criterion: Cover concept is approved.

Next action: Prepare KDP metadata.

## 12. Prepare KDP Metadata

Purpose: Draft publishing metadata for later Amazon KDP preparation.

Required inputs: Approved concept, manuscript summary, target audience, topic, and book positioning.

Generated handover prompt: A KDP metadata prompt requesting title options, subtitle options, description, keywords, categories, and audience notes.

Responsible GPT: Amazon KDP GPT.

Expected result: Draft KDP metadata package.

Quality check: Metadata is clear, accurate, and aligned with the book.

Release criterion: Metadata draft is complete and ready for human review.

Next action: Complete project.

## 13. Complete Project

Purpose: Mark the structured children's book project as complete.

Required inputs: Approved results from all required workflow steps.

Generated handover prompt: None.

Responsible GPT: None.

Expected result: Project completion state with all major outputs stored.

Quality check: Required steps are complete, reviewed, and saved.

Release criterion: No required workflow step remains open.

Next action: Export, archive, or start a future production phase.

