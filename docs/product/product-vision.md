# Product Vision

## Purpose

Book Factory is the production center for structured book projects. It helps users turn a book idea into an organized project with defined workflow steps, prepared prompts, collected GPT results, quality checks, and progress tracking.

Book Factory does not create content by itself. It coordinates the production process.

## Target Audience

The first target audience is a single user who wants to create book projects systematically with the help of specialized ChatGPT GPTs.

The user may be a beginner and should not need to understand software architecture, prompt engineering, or publishing workflows in detail before starting.

## Main Problem

Book production with ChatGPT can easily become scattered across chats, copied text files, unclear prompts, forgotten decisions, and inconsistent results.

Book Factory solves this by giving the user one structured place for:

- project data
- workflow steps
- generated handover prompts
- GPT links
- returned results
- quality checks
- progress state

## Value

Book Factory reduces confusion and repeat work. It helps users know:

- what to do next
- which GPT to use
- which input data is required
- which result is expected
- when a step is complete enough to continue

## Clear Boundary

Book Factory is not an AI writing tool, image generator, publishing service, or payment platform.

It does not replace specialized GPTs. It prepares structured work for them and stores their returned results inside the project.

## No OpenAI API

The core workflow must not require:

- OpenAI API keys
- paid OpenAI API calls
- automatic data transfer to OpenAI APIs

The user works through their own ChatGPT account.

## Specialized ChatGPT GPTs

Different production tasks are handled by specialized GPTs, for example:

- children's book planning GPT
- character development GPT
- story structure GPT
- manuscript GPT
- image prompt GPT
- cover concept GPT
- KDP metadata GPT
- quality review GPT

Each GPT should have a clear responsibility and be referenced through the GPT Directory.

## Manual Handover

Book Factory prepares a complete prompt for the current workflow step. The user copies the prompt, opens the linked GPT, pastes the prompt into ChatGPT, receives the result, and copies the result back into Book Factory.

This manual handover keeps the system simple, transparent, and independent from paid API usage.

