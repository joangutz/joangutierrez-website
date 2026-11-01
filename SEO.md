# Search — for people and for AI assistants

## What the site now does

- **A clear title and description for every page**, in Joan's own words,
  shown as the headline and summary in Google results and link previews.
- **Structured data (schema.org)** on every page, describing Ma Somatrix
  as a professional practice in Chicago that also works online: its
  tagline, email, phone, booking link, founder, Substack and art site.
  Each page adds its own facts:
  - **Offerings:** each offering with its price ($1,800 three-month study;
    $580 monthly practice) and the waitlist and gatherings.
  - **About:** Joan as a person: her role, her training, and her modalities.
  - **Resources:** the Red Rose Visualization, free, with Stu Pender credited.
  - **Begin:** the page as the place to get in touch.
  Search engines and AI assistants read this directly, so an answer about
  Joan can quote facts instead of guessing them.
- **`/sitemap.xml`**: the list of pages for search engines.
- **`/llms.txt`**: a plain-text guide for AI assistants (ChatGPT,
  Claude, Perplexity, Google's AI answers) under the emerging llms.txt
  convention: what Ma Somatrix is, what it offers and at what price,
  where, and how to begin, with links. Built from the site's own text, so
  it updates itself.
- **`/robots.txt`**: open to all search engines and to the AI assistants by
  name. (See "A choice for Joan" below.)
- **A proper 404 page** for broken links, kept out of search.
- **Large image previews** allowed in results; old addresses that forward
  are kept out of search.
- **The basics, checked:** one main heading per page, descriptions on
  meaningful images, the share image, fast static pages, works on phones.

## What only Joan can do (in order of value)

1. **Move to her own domain.** Search engines treat
   `joangutz.github.io/joangutierrez-website` as a sub-folder of someone
   else's address; a domain of her own (masomatrix.com or masomatix.com —
   still to decide) is the single biggest step. It also makes `robots.txt`
   work, since search engines only read it at a domain's root. Steps are in
   `astro.config.mjs`.
2. **Google Business Profile** for Ma Somatrix in Chicago (free). This is
   how someone searching "somatic sex educator Chicago" finds her on the
   map, and AI answers lean on it heavily.
3. **Google Search Console** (free): add the site and submit the sitemap
   (`/sitemap.xml`). Bing Webmaster Tools too, since several AI assistants
   search through Bing.
4. **Answer the common questions** in WRITING.md section 3 ("Is this
   therapy?", "Is touch involved?" …). AI assistants favour pages that
   answer questions plainly; a questions section is the strongest thing
   the site can add for AI search, and it would get its own structured
   data.
5. **Testimonials**, if clients are willing. The site already has a place
   for them, and reviews build trust with people and search engines alike.
6. **The same name, address and links everywhere:** her Substack, Instagram,
   the Sexological Bodyworkers directory and any listings should all say
   *Ma Somatrix*, *Chicago, IL* and link to the site.

## A choice for Joan

AI companies run two kinds of crawler: ones that **search** (so assistants
can point people to her) and ones that **train** their models on what they
read. The site currently allows both. To stay findable in AI search but
stay out of training, change GPTBot, ClaudeBot, Google-Extended and
Applebot-Extended to `Disallow` in `src/pages/robots.txt.ts`.
