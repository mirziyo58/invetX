<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- Keep all document modes in the home studio with shared typed data and an isolated preview component so edits and exports render the same state.
- Export PDF and PNG client-side using the rendered document; projects download as JSON and remain session-only without pretending to offer persistent storage.
- Keep visual tokens and document template styling in the global design system so the editor and printable content remain consistent.
