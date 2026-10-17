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

## Project rules
- Site content lives in `src/data/` (site.ts, constitution.ts), copied verbatim from the original pdaic.ca; never invent people, events or prices.
- Images are local files in `public/images/` (kebab-case .webp); never use Lovable asset pointers, because the site deploys to Cloudflare from GitHub.
- Legacy Chinese URL slugs (e.g. /關於協會, /events-1/$slug) are preserved as route files so old links keep working.
- Forms have no backend: they validate, then open the visitor's email app; never show a fake "sent/subscribed" success.
- Upcoming vs past events is computed from the event date at render time.
- The introductory text slide remains in normal flow to define a stable carousel height; photo slides fill that frame using object-cover and top alignment with head-safe local crops, so narrow screens crop the sides instead of adding empty space.
