# Testimonials

Drop one `.md` file per testimonial in this folder and it appears on Home
(between the story and the Red Rose Meditation) and on Sessions (just under
the price grid). Until then the section renders nothing at all — no empty
frame, no placeholder quote.

One file per quote, named however you like — `maria.md`, `01.md`:

```md
---
quote: The sentence, exactly as they said it.
attribution: M., Chicago
context: Erotic Embodiment Education, six months   # optional
order: 1                                            # optional, low first
---
```

Only `quote` and `attribution` are required.

Two things worth holding to:

- **Get permission in writing**, and let them choose how they are named. A
  first initial and a city is plenty, and for this work it is often the most
  a client will want.
- **Do not edit the words** beyond trimming. If a quote needs a sentence
  removed, cut whole sentences rather than rewriting inside one.

With one testimonial the prev/next control does not appear. With two or more
it does, and it never advances on its own — the reader moves it.
