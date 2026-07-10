# Data Model Draft

No database has been selected yet. This document describes the first conceptual data model only.

## Project

Purpose: Represents one book production project.

| Field | Type | Required | Relationships |
| --- | --- | --- | --- |
| id | string | yes | referenced by Workflow, Result, ProjectVersion |
| title | string | yes | none |
| bookTypeId | string | yes | belongs to BookType |
| status | enum | yes | related to Workflow |
| targetAudience | string | yes | used by PromptTemplate |
| ageRange | string | yes | used by QualityCheck |
| topic | string | yes | used by PromptTemplate |
| bookFormat | string | yes | used by WorkflowStep |
| pageCount | number | yes | used by WorkflowStep and QualityCheck |
| narrativePerspective | string | yes | used by PromptTemplate |
| styleAndTone | string | yes | used by PromptTemplate |
| createdAt | datetime | yes | none |
| updatedAt | datetime | yes | none |

## BookType

Purpose: Defines a supported type of book.

| Field | Type | Required | Relationships |
| --- | --- | --- | --- |
| id | string | yes | referenced by Project and Workflow |
| name | string | yes | none |
| description | string | yes | none |
| defaultWorkflowId | string | yes | references Workflow |
| isActive | boolean | yes | none |

## Workflow

Purpose: Defines ordered production steps for a book type.

| Field | Type | Required | Relationships |
| --- | --- | --- | --- |
| id | string | yes | referenced by Project |
| bookTypeId | string | yes | belongs to BookType |
| name | string | yes | none |
| description | string | optional | none |
| stepIds | string[] | yes | references WorkflowStep |
| version | string | yes | related to ProjectVersion |
| isActive | boolean | yes | none |

## WorkflowStep

Purpose: Represents one actionable workflow step.

| Field | Type | Required | Relationships |
| --- | --- | --- | --- |
| id | string | yes | referenced by Workflow |
| workflowId | string | yes | belongs to Workflow |
| name | string | yes | none |
| purpose | string | yes | none |
| order | number | yes | belongs to Workflow order |
| status | enum | yes | related to Result and QualityCheck |
| requiredInputFields | string[] | yes | references Project fields and prior Results |
| promptTemplateId | string | optional | references PromptTemplate |
| gptProfileId | string | optional | references GPTProfile |
| unlockCriteria | string[] | yes | related to QualityCheck |

## PromptTemplate

Purpose: Defines reusable prompt structure for a workflow step.

| Field | Type | Required | Relationships |
| --- | --- | --- | --- |
| id | string | yes | referenced by WorkflowStep |
| name | string | yes | none |
| workflowStepId | string | yes | belongs to WorkflowStep |
| requiredDataKeys | string[] | yes | references Project and Result data |
| templateBody | string | yes | used to create GeneratedPrompt |
| expectedOutputFormat | string | yes | matched with GPTProfile |
| version | string | yes | related to ProjectVersion |
| isActive | boolean | yes | none |

## GeneratedPrompt

Purpose: Stores the concrete prompt generated for a project step.

| Field | Type | Required | Relationships |
| --- | --- | --- | --- |
| id | string | yes | referenced by Result |
| projectId | string | yes | belongs to Project |
| workflowStepId | string | yes | belongs to WorkflowStep |
| promptTemplateId | string | yes | based on PromptTemplate |
| gptProfileId | string | yes | targets GPTProfile |
| content | string | yes | copied by user |
| generatedAt | datetime | yes | none |

## GPTProfile

Purpose: Represents one specialized ChatGPT GPT.

| Field | Type | Required | Relationships |
| --- | --- | --- | --- |
| id | string | yes | referenced by WorkflowStep |
| name | string | yes | none |
| description | string | yes | none |
| taskArea | string | yes | none |
| gptLink | string | yes | opened by user |
| supportedWorkflowStepIds | string[] | yes | references WorkflowStep |
| requiredInputData | string[] | yes | references Project and Result data |
| expectedOutputFormat | string | yes | used by Result intake |
| isActive | boolean | yes | none |

## Result

Purpose: Stores the returned output from a GPT interaction.

| Field | Type | Required | Relationships |
| --- | --- | --- | --- |
| id | string | yes | referenced by QualityCheck and ProjectVersion |
| projectId | string | yes | belongs to Project |
| workflowStepId | string | yes | belongs to WorkflowStep |
| generatedPromptId | string | optional | based on GeneratedPrompt |
| content | string | yes | pasted by user |
| format | string | optional | related to expected output format |
| status | enum | yes | reviewed by QualityCheck |
| createdAt | datetime | yes | none |
| updatedAt | datetime | yes | none |

## QualityCheck

Purpose: Records review status and checklist outcomes.

| Field | Type | Required | Relationships |
| --- | --- | --- | --- |
| id | string | yes | referenced by WorkflowStep release state |
| projectId | string | yes | belongs to Project |
| workflowStepId | string | yes | belongs to WorkflowStep |
| resultId | string | yes | reviews Result |
| checklistId | string | optional | references checklist definition |
| status | enum | yes | affects WorkflowStep unlock |
| findings | string | optional | none |
| approvedAt | datetime | optional | none |

## ProjectVersion

Purpose: Captures a meaningful project state for traceability.

| Field | Type | Required | Relationships |
| --- | --- | --- | --- |
| id | string | yes | belongs to Project |
| projectId | string | yes | references Project |
| label | string | yes | none |
| description | string | optional | none |
| includedResultIds | string[] | yes | references Result |
| createdAt | datetime | yes | none |

## UserSettings

Purpose: Stores local user preferences and GPT configuration choices.

| Field | Type | Required | Relationships |
| --- | --- | --- | --- |
| id | string | yes | none |
| defaultBookTypeId | string | optional | references BookType |
| preferredLanguage | string | optional | affects prompts and UI |
| gptProfileOverrides | object | optional | references GPTProfile |
| exportPreferences | object | optional | used by future export module |
| createdAt | datetime | yes | none |
| updatedAt | datetime | yes | none |

