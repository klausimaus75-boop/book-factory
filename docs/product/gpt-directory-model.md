# GPT Directory Model

The GPT Directory defines the specialized ChatGPT GPTs that Book Factory can route users to.

Book Factory does not communicate with these GPTs through an API. It stores their metadata, generates the correct prompt, and opens the GPT link for the user.

## GPT Entry Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| id | string | yes | Stable internal identifier |
| name | string | yes | Human-readable GPT name |
| description | string | yes | Short explanation of what the GPT does |
| taskArea | string | yes | Main responsibility of the GPT |
| gptLink | string | yes | URL opened by the user |
| supportedWorkflowSteps | string[] | yes | Workflow steps this GPT can support |
| requiredInputData | string[] | yes | Data the prompt must provide |
| expectedOutputFormat | string | yes | Structure expected from the GPT result |
| isActive | boolean | yes | Whether the GPT can currently be used |

## Example Task Areas

- children's book planning
- character development
- story structure
- manuscript writing
- manuscript review
- image prompt planning
- cover concept
- KDP metadata

## Management Rules

- A GPT should have one primary responsibility.
- Inactive GPTs must not be offered as active workflow targets.
- Every workflow step that uses a GPT must reference a GPT entry.
- Expected output formats should be structured enough for later parsing.
- GPT links may change and should be editable without changing workflow logic.

