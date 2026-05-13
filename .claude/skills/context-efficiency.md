# Skill: context-efficiency
# Trigger: /skill context-efficiency
# Purpose: reduce token consumption during this Claude CLI session

## What This Skill Does

When invoked, remind the assistant of token-saving patterns and apply
them for the remainder of the session.

## Rules to Apply

### File Reading
- Read only the lines needed (`offset` + `limit` params on Read tool).
- When searching, use Grep before Read — don't read a whole file to find one symbol.
- Prefer Glob for file discovery over recursive Bash `find`.

### Responses
- No trailing summaries ("I just did X") — the diff speaks for itself.
- No preamble ("Sure! I'd be happy to…").
- Code blocks only when the user needs to copy something.
- Inline code for single identifiers.

### Context Management
- After a large tool result, extract only the relevant lines before continuing.
- If a file is >200 lines, read in targeted chunks, not all at once.

