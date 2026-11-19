# Notes status — Joan's notes and the build-session notes, side by side

Checked on 1 November against the live build. **Done** means it is on the
site now. **Open** means it is waiting on something from Joan. **Clash**
means two notes pull different ways; what the site does now is described,
and the choice is Joan's.

## Joan's first spec (the big rebrand message)

| Note | Status |
|---|---|
| Navigation at the bottom of the page | **Done, then moved (clash)** — on 11/16 the site owner chose rendering B's menu at the top of the window, site-wide: transparent over each page's opening photograph, a solid blush bar once scrolled. One line in `Nav.astro` sets which |
| Name: Ma Somatix, in place of Joan Gutierrez | **Done** as **Ma Somatrix** (spelling corrected later) |
| Domain masomatix.com | **Open / clash** — the name is Soma**tr**ix but the domain is masoma**tix**. Joan to decide which to register; moving the site is three steps, listed in `astro.config.mjs` |
| Delete the Roots page and its CV; a simple About page | **Done** — old /roots address forwards to About |
| An image banner to open Work with me (now Services) / About / Resources / Begin | **Done** — each now opens full-screen, like the homepage: the page's name large on the photograph, Joan's line beside it |
| Drop-down tabs under Work with me and Resource | **Clash** — later replaced, in a build session, by four plain tabs. Every offering is a card on Work with me; the gift and Substack are cards on Resources (renamed from Resource) |
| The Red Rose Visualization as a gift that collects emails | **Done** — the card turns over to an email form (Kit form 10134888); after signing up, a player and a download link appear |
| "Recorded for my w.s at CPR" | **Open** — not stated on the site (an earlier guess at "CPR" was removed). WRITING.md asks where and for whom |
| Burnt / sepia salmon colour | **Clash** — superseded by later choices: a linen ground (Joan picked "D Linen") and now the **Driftwood** palette. The salmon-era Wine palette is saved and can be tried at `?palette=wine` |
| Stu Pender soundscape while browsing | **Built** — one site-wide player in the bar, playing across pages. Plays the Red Rose now (for readers who have signed up); the soundscape joins it when the audio file arrives (TODO-SOUND in `src/site.ts`) |
| Application form that lands in joankgutz@gmail.com | **Done** for now — it opens the visitor's email app addressed to Joan. **Open:** a Formspree address would let it send directly (TODO-FORM) |
| Homepage 1: the image, MA … SOMATRIX across the width, subtitle, Chicago and Beyond | **Done** — subtitle is now "Somatic education delivered with artistry for vibrant health" |
| Homepage 1: egg logo a little bigger, where it was | **Clash** — a build session asked to leave the logo out of the title card "for now" |
| Homepage 2: "What if the reason you're here…" | **Done** (now after the triangle, in the order set later) |
| Homepage 3: the triangle as "The sacred process of embodiment", Matrix / Ma / Soma with The Source / The Space / The Body, much larger, clickable, deletions | **Done** — clicking a bubble opens Joan's full definition beside it (her later note) |
| Homepage 4: Founder & Educator, colour photo, Learn more | **Done** — text updated to the 10/31 version |
| Erase "Sessions – Four Ways in"; Begin Here with the five offerings | **Done, then renamed (clash)** — the five are there; the label above them now reads **Services**, to match the renamed page. Joan's "Begin Here" is one word away |
| WORK WITH ME as the tab name | **Clash** — renamed **Services** in a later session (old /work-with-me/ and /offerings/ links forward) |
| Homepage 5: A Gift | **Done** — now the same card that turns over as on Resources, with the rose rippling under the pointer |
| Phone: content scrolling visibly behind the menu bar | **Done** — on phones and tablets the bar is solid and reaches the very bottom of the screen, with no gap while Safari's toolbar moves; it stays softly translucent only on desktop |
| WHERE: Chicago, IL — in-person / Internationally — online / Open to travel | **Done** — on Begin and in the phone menu |
| Descriptions to write (Spine Society, This Very Body, Erotic Embodiment weekly class, 1:1 short / medium / long, application questions, Inspiration and Library lists) | **Open** — Joan's to write; WRITING.md has prompts. Inspiration and Library appear on Resources automatically once written |
| "Only my words" | **Done** — every sentence on the site is Joan's; interface words are listed in WRITING.md |
| Triangle definitions shown in full, not summarised | **Done** |

## Joan's 10/31 notes

| Note | Status |
|---|---|
| Updated ABOUT bio | **Done**, verbatim |
| About banner: delete "About", read "Hello, I am Joan." | **Done** |
| The quote as its own larger section below the bio, like the Audre Lorde quote | **Clash** — built that way, then moved back into the bio as a pull-quote (larger type, a hairline beside it) at a later request, where it stood in her first version of the bio. Either is a small change |
| LINEAGES as a drop-down in the ABOUT tab: Founder / Lineage of Modalities | **Done, adapted (clash)** — the bar no longer has drop-downs, so these are two tabs at the top of the About page. /about/#lineage opens the second. Each modality folds open |
| Homepage Founder & Educator text | **Done**, verbatim |
| Remove the text below BEGIN HERE ("five ways in…") | **Done** — nothing shows under the heading |
| Nav headers "all lead the header page when you click it" — delete | **Done as understood** — this was the drop-down tabs also opening their own page; with no drop-downs it no longer happens. **Check with Joan:** if she meant the photo banner at the top of each page, that would undo her first note asking for one |
| HAPPENINGS: RELATIONAL → HAPPENINGS | **Done** — the heading over the two gatherings on Work with me |
| Images "not so stretched out" | **Done in part** — no image is distorted; the Work with me banner was a tall photo cropped into a thin strip (now a wide photo), and About now keeps Joan in frame. **Open:** two originals are small for full width — `about.jpg` (1024 px) and `rose.jpg` (1062 px). Larger files (2000 px+) would make them crisp |

## Joan's 11/16 notes — homepage

| Note | Status |
|---|---|
| BOOK tab → BOOK A CALL, boxed like a button, linked to the booking page | **Done** — the last tab in the bar is a boxed **Book a Call**, filled on hover; boxed in the phone menu too. It opens the booking page (/begin/), whose label and title now read Book a Call |
| Remove the Get in Touch banner (Book a Complimentary Call) at the foot of the homepage | **Done** — the homepage now ends on the land acknowledgment. Other pages keep Get in Touch |
| Land acknowledgment at the very end, over an image of the lake water | **Done** — her text, verbatim, on a glass pane over her photo of Lake Michigan (`assets/photos/lake.jpg`), cropped to keep the horizon and the waves, under a light wash so the water's own colour shows |
| Intro banner: MA. SOMATRIX / new subtitle / Chicago & Beyond | **Done** — MA SOMATRIX without a full stop, at her later request. Subtitle shortened at her later request to "Holistic body-rooted care for liberated expression"; one line across the width, two even lines on phones |
| "I am Joan. Welcome." with her portrait, the welcome text, BELONG HERE → Services | **Done**, verbatim. Replaces the Founder & Educator section (her 10/31 text) on the homepage; that text remains in the source notes |
| WHAT IS MA SOMATRIX? text, ENTER MA → Book a Call page | **Done**, verbatim. The triangle stays in this section: her last line ("You are a living doorway…") waits beside it, and Ma / Soma / Matrix still open her definitions. **Clash:** the old heading "The sacred process of embodiment" and title "Ma. Soma. Matrix." are replaced by "What is Ma Somatrix?" |
| TESTIMONIAL | **Open** — the place is ready below What is Ma Somatrix? and appears as soon as there is a testimonial. Needs the words and the name to credit |
| 1:1 / Immersions / Relational Integrity Labs / Spine Society / Zen Shiatsu | **Done, two links provisional** — the five cards, in her order and names. **Check with Joan:** Services has no "Immersions" section, so that card opens This Very Body (the program); there is no Zen Shiatsu offering yet, so that card opens Zen Shiatsu Bodywork in the Lineage of Modalities on About. Liberate the Pelvis is no longer on the homepage (it stays on Services) |
| (Not in her list) "What if the reason you're here…", the Red Rose gift card | **Clash — removed from the homepage** to follow her order exactly. The gift is still on Resources; either can come back in a moment |

## Joan's 11/16 notes — Services

**Standing rule (11/16):** no text on the site that Joan has not given — no labels, headings or lines of our own. Removed under it: the "Services" label and the kind labels (1:1 / Program / Happenings) on the homepage cards, the "Modalities" label, the price-table headings, and a search description written for Services (now her own opening line).

Her notes as sent are kept in `content/_source/joan-2026-11-16-services.md`; the page before this one in `content/_source/services-before-2026-11-16.md`.

| Note | Status |
|---|---|
| OFFERINGS: You belong here if you want to: | **Done**, verbatim — her second, grouped list (Body and belonging / Pleasure and desire / Healing and transition / Boundaries and agency), with her two closing lines set apart. **Check with Joan:** she sent two versions of this list; the first, ungrouped one is saved in the source file |
| WHAT TO EXPECT, GET IN TOUCH → Book a Call page | **Done**, verbatim; "ACSB" links to the code of ethics. Her accent marks standing in for apostrophes ("we´ll") are set as apostrophes. Her closing wish is set apart, then the Get in Touch button |
| 1:1 SESSIONS prices | **Done** — line by line exactly as she wrote them (no added column headings). Search engines and llms.txt read the same prices |
| Somatic Sexology, Holistic Pelvic Care, Ancestral Nutrition, Shiatsu; Events / Workshops; This Very Body: Movement Archive | **Built, then taken back off** at the site owner's request: "the old view was better" — the old cards section returned in their place (the colour swatch row on top, the 1:1 Sessions and Liberate the Pelvis cards with their old text, This Very Body with Join the Waitlist, and the Happenings tiles: Relational Integrity Labs and Spine Society), under the title **Services** ("Say Services"). Her modality text is kept in the source file. |
| Page order and layout (site owner, 11/16) | **Done** — You belong here → Services → What to Expect → her quote → Get in Touch and the Discovery Form. You belong here is four even tiles, each with a small mark and a bar of colour. Services holds the swatch row, her 1:1 prices (one tile per length), the cards and Happenings, on a swell of tone. What to Expect: her opening lines large, then her paragraphs grouped into boxes in a hairline grid, each with a small line mark and her own words in bold as its lead (option A); then where, her wish, and Get in Touch. Every word is hers, unchanged — checked against her text |
| Card prices | **Done** — both cards' prices are now the hourly 1:1 prices (they were never shown on the cards; only search engines and llms.txt read them, and the $1,800 / $580 there is gone) |
| "Discovery Form —" | **Done as understood** — the form at the foot of the page is now headed Discovery Form |
| Her quote ("The body is the road back to what is true…") – Joan | **Done** — set large before the close |
| The notes after the Movement Archive: the "– breath, mindfulness practices…" line; "What is Erotic Embodiment" / "What is Sexological Bodywork"; "What our sessions can include" | **Held, not on the page** — they read as drafts: two are questions with no answer yet, and the list overlaps What to Expect. **Check with Joan** which, if any, she wants and where |
| (Not in her outline) the session arc, How consent works here | **Removed** to follow her outline; What to Expect now speaks to consent. Kept in `content/_source/` |
| (Not in her outline) Note on all plans; the banner line "Every session is collaborative…" | **Removed** at her request: only text she has given is on the page. Both are kept in `content/_source/services-before-2026-11-16.md` |

## Joan's 11/16 notes — Booking page and the discovery call

| Note | Status |
|---|---|
| No more free call: a $15 call, the fee applied; buttons say "Book a Discovery Call" | **Done** — every booking button now reads **Book a Discovery Call** (Get in Touch on every page, the Booking page, the phone menu, The Work). **Open:** the buttons still go to her old free 20-minute Cal.com link (cal.com/joan.gutierrez/20min). The new 30-minute, $15 event needs setting up in Cal.com (with payment), and its link put in `src/site.ts` (TODO-JOAN there) |
| BOOK A SESSION page text | **Done**, verbatim: Book a Session, her three opening lines, the button, then her paragraph on the 30-minute Zoom call and the $15 fee, and "I look forward to meeting you where you are." Still one screen, no scrolling, at every size. Her email, number and where stay beside it. The nav tab still reads Book a Call (her earlier homepage note) |
| Delete "Cheers to being alive" | **Done** |
| "Available to Travel" in place of "Open to Travel" | **Done** — on the Booking page, and everywhere the same line appears (the phone menu, search descriptions, llms.txt) |
| Pricing on the back side of the cards | **Done** — the hourly 1:1 prices are on the turned side of the 1:1 Sessions and Liberate the Pelvis cards, under "1:1 Sessions", one line per price; the price tiles are gone from the front of the page |

## The Services redesign (11/16, rendering B2)

| Note | Status |
|---|---|
| "We like the home-yness, intimate-ness … like you are sitting in the sheets" — renderings | **Done** — three renderings (A In the sheets, B Through the terrain, C Beside her), then B2: B with A's split opening and B's menu, and a soft curve of skin behind What to Expect in place of the fingers photo |
| Build B2 into Services | **Done** — opens split (her quote on the blush, the close photograph of skin beside it); You belong here across the sheets photograph; the Services cards on the blush; What to Expect as six numbered passages on the soft-skin photograph, then where, her wish and Get in Touch; the page closes on the lake with Get in Touch and the Discovery Form. A new light serif, Cormorant Garamond (OFL), carries her words on this page. "true" and "sovereign" in her quote are set in italics, as in the rendering — emphasis only |
| B's menu, site-wide | **Done** — see the first table |
| What to Expect's button | **Book a Call** (it opens the Book a Call page), at the site owner's request; was Get in Touch |
| The homepage in the same style | **Done** — her subtitle in the soft serif's italic, centred under MA SOMATRIX; I am Joan. Welcome. split, her welcome on the blush and her portrait beside it, held in view while it is read; What is Ma Somatrix? on light through leaves, softened, the triangle and its definitions working as before; the five cards with their names in the soft serif; the land acknowledgment on the lake as before |
| About and Resources in the same style | **Rendered, waiting** — mockups saved in `design/renderings/` to look at again |

## Joan's 11/16 notes — About

Her text is in `content/about/about.md`, verbatim (her ¨ marks around "spirit of a child…" set as quotation marks). Her notes are kept in `content/_source/joan-2026-11-16-about.md`.

| Note | Status |
|---|---|
| Page design like "The Middle Path" by Sima Kumar | **Done** — the opening: Joan Gutierrez large in the soft serif, Founder \| Artist \| Somatic Sexologist, her line, and Learn more →, on the ground, with a tall portrait set in beside them (not run to the edge). The bar stays solid over it |
| Her letter, signed | **Done**, verbatim — its first line a little larger; the sign-off in italics |
| Background | **Done**, verbatim — her path through the arts, then a photograph (by the sea), then her line "My first and most profound teacher has been my own body." set apart, and the rest of her story |
| My Work With You | **Done**, verbatim |
| Band at the bottom (like creativeliving.world): her question and GET IN TOUCH → Discovery Call scheduling | **Done** — her question large on a field of colour (the 1:1 swatch red, one setting to change), and a white pill button to the booking link. **Open:** the booking link is still the old free 20-minute Cal.com call until the new $15 Discovery Call link arrives (TODO-JOAN in `src/site.ts`) |
| Membership stamps: ACSB, ASIS, Trusted Bodywork | **Off the page for now** (11/16, at the site owner's request). Kept in `content/about/about.md`; when they return, they'll need their artwork and links |
| (Not in her outline) "Hello, I am Joan.", the 10/31 bio, the Founder / Lineage of Modalities tabs | **Clash — removed** to follow her outline. The Lineage of Modalities text is kept in `content/pages/lineage.md`; the homepage Zen Shiatsu card, which opened it, now opens the Services cards. **Check with Joan** whether the Lineage should return somewhere |

## Joan's 11/17 notes — Services

Her text is in `content/offerings/*.md` (and the 1:1 prices in `content/sessions/sessions.md`), verbatim; her accent marks for apostrophes ("won´t") set as apostrophes. Her instructions are summarised in `content/_source/joan-2026-11-17-services.md`. The old Liberate the Pelvis (scar-tissue monthly practice) and the old 1:1 file are kept in `content/_source/`.

| Note | Status |
|---|---|
| 1:1 SESSIONS — not a 3-month study; delete it from the card | **Done** — "Three-Month Study" is gone, and (her next note) the three-month lines on the back: the 3-3-3 paragraph and "Three months is the honest container." **Check with Joan:** three lines still speak of a month — "Six hours of session time each month…", "Brief check-ins throughout the month…", "A monthly practice map…" |
| 1:1 prices: 60 $100 online · 75 $120 online / $150 in-person · 90 $200 in-person · 120 $250 in-person | **Done** — on the card's turned side, and what search engines and llms.txt read |
| Spine Society — leave alone | **Left alone** — still a tile, now under Happenings by itself |
| LIBERATE YOUR PELVIS (and the homepage card, was IMMERSIONS) | **Done** — the card: HALF-DAY · FULL DAY · MULTI–DAY, the name, her line; turned over, her text, Choose your depth as three tiers, A taste of what we may compose together, Personal Ethics, where, and Begin with a conversation → Inquire here (to the Book a Call page). The homepage card reads Liberate Your Pelvis and opens it |
| Relational Integrity Labs | **Done** — her line on the front; turned over, her text, HOW?, WHO?, the two lists, the three prices. **Open:** Join the next Lab has no link of its own yet — it opens the Discovery Form page with the Lab named (TODO-JOAN) |
| Zen Shiatsu | **Done** — a card of its own; the homepage Zen Shiatsu card now opens it. **Open:** Book a Free Shiatsu Treatment has no booking link yet — it opens the Discovery Form page with the treatment named (TODO-JOAN) |
| This Very Body: Movement Archive (coming soon), the waitlist form | **Done** — her fields (First name, IG handle, Email address) and button (I'm in) on the card's turned side, with her five elemental bodies and the 7 weeks. Until Kit's waitlist form is set (`kit.waitlistAction` in `src/site.ts`), I'm in opens an email to Joan with the three answers; once it is set, it sends to Kit (first name and IG handle as Kit fields first_name and ig_handle) |
| The Services index | **Done** — in her order: 1:1 Sessions, Spine Society, Liberate Your Pelvis, Relational Integrity Labs, Zen Shiatsu, This Very Body: Movement Archive (coming soon) |
| The Discovery Form as its own page | **Done** — /discovery-form/, not in the menu: one glass pane on a photograph, as Book a Session is. The cards' buttons open it with what it is about in the address, carried into the email. Services now ends on Get in Touch alone |
| Interface word | The button that turns the new cards reads **Explore** (1:1 keeps Includes; This Very Body reads Join the waitlist, her words). **Check with Joan** for a word she prefers |

## Homepage and site-wide (11/17)

| Note | Status |
|---|---|
| Try the laughing photograph (white sweet peas) as the homepage portrait | **Done** — `assets/portraits/joan-laugh.jpg`, in colour, beside I am Joan. Welcome. The earlier portrait, `joan-home.jpg`, is kept; set `portrait: joan-home.jpg` in `content/home/home.md` to go back |
| Mobile menu: the lines alone, the cross alone, no words | **Done** — screen readers still hear Menu and Close menu |
| Offerings instead of Services | **Done** — the menu tab, the page's title and its section heading, The Work's link, what search engines and llms.txt read. The address stays /services/ so links already shared keep working. The small OFFERINGS label above You belong here is gone too, at her request |
| No "On this page" on a phone; side bookmarks only on larger screens | **Done** |
| The bar on larger screens: Book a Call becomes Get In Touch, in italic, no box | **Done** — the soft serif in italic, beside the three tabs in small capitals; still opens the Book a Session page |
| Web design and sound credit in the footer | **Removed (11/17)** — added earlier the same day, then no longer needed: the foot of every page (Book a Session and the Discovery Form included) shows only the copyright. The player's glass tray still names Stu Pender, linked, under Pacific Equinox |
| Offerings: Book a Call (after What to Expect) becomes Start a Conversation — less of a sale | **Done** — still opens the Book a Session page. Book a Discovery Call (her 11/16 words) remains on the Get in Touch closes and the Book a Session button |
| Book a Session page: main button becomes Let's Begin | **Done (11/17)** — still opens the Cal.com booking link. Book a Discovery Call remains on the Get in Touch closes and The Work's button |
| Book a Session page: remove "Feel free to reach out", "Collaborations are welcomed", the 30-minute call paragraph, and the phone number | **Done (11/17)** — the page now reads: Feeling tender, hopeful, messy, alive, curious? / I would love to hear from you. / Let's Begin / I look forward to meeting you where you are; beside it her email and Where. The number is also gone from the search-engine data and site settings |
| Sound button: no written word beside the waveform | **Done (11/17)** — the waveform alone, on every screen size (it was already alone on phones). Screen readers still hear "Sound" |
| Book a Session copy: Feeling tender, / hopeful, / messy, / alive, / curious? / I would love to meet you where you are. | **Done (11/17)** — one word to a line, as written, then the closing line, then Let's Begin. Replaces "I would love to hear from you" and "I look forward to meeting you where you are" |
| Homepage welcome (I am Joan. Welcome.): revised text | **Done (11/17)** — verbatim. Changes from 11/16: "devoted care" → "deep care"; the paragraph beginning "This freedom can begin by addressing pain" removed; "loosen their grip and … can be listened to. From there, ease opens up" → "can lighten so … can express. Possibility opens up"; "what feels good" → "what feels true". Closing line unchanged |
| About: revised opening letter | **Done (11/17)** — verbatim. Changes from 11/16: "I embody" → "I carry"; "all these dimensions" → "these and many other dimensions"; "Through my practice I am here" → "I am here". The rest and the sign-off unchanged |
| About: signature Joan in a cursive font; Gutiérrez with the accent | **Done (11/17)** — Joan at the foot of her letter is set in Ms Madi (OFL, handwritten script, self-hosted), chosen from four rendered (Mrs Saint Delafield, Ms Madi, Pinyon Script, Monsieur La Doulaise). The name at the top of About now reads Joan Gutiérrez, as everywhere else on the site |
| About: link her teachers and trainings, hidden in the names | **Done (11/17)** — in Background: Pacific Center of Somatic Sexology, Ellen Heed, PhD (the first mention), Zen Shiatsu Chicago, Seki Method, Tami Lynn Kent, Holistic Pelvic Care, each to the address given, opening in a new tab. Set apart only by a lighter earth tone; a hairline draws in beneath on hover. Written in about.md as [name](address) |
| Offerings quote: "…Pause. Sense. Feel. Dare tend, with integrity, …" | **Done (11/17)** — "Then dare to tend" → "Dare tend", verbatim; the rest and — JOAN unchanged |
| Offerings: a different photograph beside the quote (it repeated the homepage banner) | **Done (11/17)** — two hands folded together in warm sun (`offerings-hands.jpg`), option 1 of seven compared on desktop and phone. Metadata stripped |
| Offerings: new order of the list | **Done (11/17)** — the index now reads 1:1 Sessions, Liberate Your Pelvis, Zen Shiatsu, Relational Integrity Labs, Spine Society, This Very Body: Movement Archive. The cards below follow the same order (Zen Shiatsu now third, Relational Integrity Labs fourth); Spine Society stays as its tile under Happenings |
| This Very Body card (turned side): closing paragraphs | **Done (11/17)** — "Over 7 weeks" → "Over 7 months"; the second paragraph already read exactly as given |
| Get in Touch (Book a Session): remove the large heading; the stacked words in the site's type; button Schedule a Call | **Done (11/17)** — the heading is out of view (kept for screen readers and search). The words are set in the soft serif of the Offerings quote, sizes varying line to line, italics on tender, messy, curious? and "where you are." Button: Schedule a Call (was Let's Begin). Fits one screen on desktop, iPhone 13 and SE |
| Offerings list: Liberate Your Pelvis note "Immersions" | **Done (11/17)** — in the index beside its name, set like "free monthly gathering" and "coming soon" |
| Offerings list: Zen Shiatsu under Relational Integrity Labs | **Done (11/17)** — now 1:1 Sessions, Liberate Your Pelvis, Relational Integrity Labs, Zen Shiatsu, Spine Society, This Very Body. The cards below follow |
| Liberate Your Pelvis card: line | **Done (11/17)** — "A ceremonial immersion into the ground substance of your pelvic root" (was "descent") |
| 1:1 card: Includes → Rates; add What to Expect ↓ | **Done (11/17)** — chose **Rates** over Investment (a coaching-sales word, against the "less business sales" note) and Pricing (shop-like): plain and quiet. Beside it, WHAT TO EXPECT with a hairline arrow down, linking to the What to Expect section further down the page |
| 1:1 card, turned side: delete Includes, Entails, On duration | **Done (11/17)** — the back now holds the rates and, at its foot, WHAT TO EXPECT ↓ (also kept on the front beside Rates). The deleted text is kept in content/_source/one-to-one-back-before-2026-11-17b.md |
| 1:1 card, turned side: heading over the prices | **Done (11/17)** — RATES (was 1:1 SESSIONS, repeating the title); it takes the word on the front's button |
| About: a space between "May you radiate…" and "With infinite Great Love," | **Done (11/17)** |
| Relational Integrity Labs card: new paragraph at "Here you can practice…" | **Done (11/17)** |
| Relational Integrity Labs card: revised left column (opening, HOW?, WHO?) | **Done (11/17)** — verbatim, with the client's paragraph breaks. Changes: HOW? split into short paragraphs; "…a field of experimentation for discovering…" → "…a field of experimentation." + "May you discover, nourish, and strengthen who you already are by embracing what you desire and where you draw your lines."; WHO? split in two; "are welcome" → "belong" |
| Relational Integrity Labs card: revised right column and prices | **Done (11/17)** — Together we practice: "asking for what you want out loud"; "attuning how and where a true ‘yes’ and ‘no’ emerge" (was "attuning to your authentic yes and no"); new: "noticing the different textures of ‘no’ — how it differs from maybe". Prices now $20 drop-in, $35 monthly (2 classes), $90 quarter (6 classes); were $15 / $25 / $60. You belong here list unchanged |
| Spine Society: Free → Pay-from-the-heart monthly gathering | **Done (11/17)** — its note in the Offerings list and on its Happenings tile |
| Offerings opening photograph: a grainy, ethereal quality | **Done (11/17)** — treatment A (gentle) of three compared: faded warm beige, lifted shadows, a soft glow, film grain baked in (plus the site's moving grain). Original kept in content/_source/photos; recipe in assets/photos/README.md |
| Homepage Land Acknowledgment: revised | **Done (11/17)** — verbatim; the one change: "wetlands, and woodlands" → "wetlands, woodlands, and now concrete jungles" |
| Resources: a new opening banner image | **Done (11/17)** — the translucent wing (`resources-wing.jpg`), option 8 of eight compared on desktop and phone. Metadata stripped. The file is 1014px wide, a little small for a full-screen banner on large screens; a larger original would be sharper if there is one |
| Resources banner: the Offerings photograph's faded, grainy treatment | **Done (11/18)** — same recipe, warmed slightly so the near-white wing lands on the same beige as the hands; enlarged before the grain so it stays fine. Original kept in content/_source/photos |
| Resources banner: back to the untouched wing, to see it plain | **Done (11/18)** — the toned version is kept as content/_source/photos/resources-wing-toned.jpg, ready to swap back |
| Resources banner: decision | **Decided (11/18)** — the client keeps the untouched wing. The Offerings photograph keeps its treatment |
| Resources: the Substack card named Erotic Becoming; its link reads Substack Newsletter | **Done (11/18)** — still links to eroticbecoming.substack.com (new tab). New images for this card and the Red Rose card: options compared, awaiting the client's choice |
| Resources: new images for the Red Rose and Erotic Becoming cards | **Done (11/18)** — Red Rose: hands offering a rose on dark red velvet (option 1 of two), front and turned side. Erotic Becoming: the hands collage with the drawn line (option 2 of four). Metadata stripped; earlier images kept |
| Spine Society: out of view for now (homepage card, Offerings list, Happenings tile) | **Done (11/18)** — kept in src/site.ts with `hidden: true` (both lists); set it to false to bring it back, image and words unchanged. Happenings heading hides while it has nothing; the homepage row now four across (phones: two by two). Offerings keeps its side bookmarks with three sections (`<ChapterRail min={3} />`; the default is four) || Mobile menu: no Get in Touch lines at the foot, no boxed button; a Get In Touch link set like the others | **Done** — Offerings, About, Resources, Get In Touch (to the Book a Session page). The Where lines at the foot went with them; they are in every page's footer. The bar on larger screens keeps its boxed Book a Call |
| Red Rose Visualization: subtitle | **Done (11/18)** — "A doorway for softening and opening" (was "A doorway for the inner eye"), on the Resources card, under its name in the sound player's tray, and in the search data |
| Red Rose Visualization: no subtitle | **Done (11/18)** — the line under its name removed ("blank and simple"), on the card, in the sound tray and in the search data |
| About: the closing banner (What if the reason you're here…) on the fire photograph | **Done (11/18)** — the ceremonial fire (`happenings.jpg`) under the softer plum veil, chosen over a deep veil and the plain red; the site's still grain over it. The thin white line seen along its top in the comparison was the screenshot catching a row of page above the banner, not the photograph |
| Erotic Becoming card: link reads Newsletter | **Done (11/18)** — was Substack Newsletter; still goes to eroticbecoming.substack.com |
| Page endings line up: one closing photograph, the footer on it | **Done (11/18)** — About and Resources ended on a separate photo strip holding only the footer, which read as a second image framing the page. About: the question and Get in Touch now sit on the fire, the footer on the same picture (Base `closingPhoto` + new `closingVeil`, a soft plum veil). Resources: ends with Get in Touch on the shared closing photograph, the footer beneath on the same image, as Offerings does. Get in Touch page unchanged (one image) |
| Resources ending: no Get in Touch, no closing photograph | **Done (11/18)** — at the client's wish the page ends on its cards, then the footer's own plain dark band (Base `plainClose`) |
| Red Rose Visualization: new image | **Done (11/18)** — the rose over the painted waves (`rose-waves.jpg`), front and turned side; replaces the hands offering a rose (kept) |
| Resources: remove the box under Erotic Becoming | **Done (11/18)** — the latest-posts list from the Substack feed (built in at deploy; showing her placeholder post "Coming soon"), redundant to the Newsletter link. src/substack.ts kept, unused |
| Resources: Art → Inspiration, a card that turns | **Done (11/18)** — same turning card as the Red Rose (GiftCard, now taking its own id, image, label, name, turn word and back content). Front: Inspiration, EXPLORE →. Turned side for now: Joan’s Artist Portfolio, linked to joangutz.com (new tab). **Open:** the client's copy and links for it |
| Resources: Library Archive card under Inspiration | **Done (11/19)** — turning card, EXPLORE →; image option 3 of nine (the pelvis with a peony among book stacks, `library-archive.jpg`), cropped low (50% 60%) so the whole flower shows. **Open:** its copy and links for the turned side |
| Inspiration card: the Spine Society collage | **Done (11/19)** — `roots-territories.jpg` (the carved figure with a halved cantaloupe), in place of the melons on cloth (`work-1.jpg`, kept). Spine Society, hidden for now, still points to the same image |
| Homepage welcome: "how you love" → "how you express" | **Done (11/19)** — "It touches how you hold yourself, how you express, and how deeply you drink in your days." (briefly "how you creatively express") The next sentence already read as given |
| Homepage: Enter Ma links to Offerings | **Done (11/19)** — was the Book a Session page |
| Resources: Erotic Becoming's image the same size as the others | **Done (11/19)** — it was the one card built differently (a link card, not a turning card), its picture narrower and shorter; now half the card and the same height as Inspiration and Library Archive (`matchTurning`), its name a touch smaller so it stays on one line |
| Inspiration card, turned side: the list of inspirations | **Done (11/19)** — in two groups as the client set them: EDUCATION (Beautiful Cervix Project, Egg Release Magic - Ovulation, Hysterectomy information, Scarleteen - Queer sex ed for ALL, Women of Color Sexual Health Network, SexEd Project) and ART (Audre Lorde - Uses of the Erotic, The Great Wall of Vulva, Self-Obliteration - Yayoi Kusama, My Mother - Kazuo Ohno, Before the Dawn - Yumiko Yoshioka, Annie Sprinkle), every name linked (new tab), then Joan’s Artist Portfolio. YouTube share-tracking trimmed |
| The soundscape: Stu Pender's Pacific Equinox, a sound button, on repeat | **Done** — the control in the bar (SOUND on larger screens, the moving lines alone on a phone); never plays by itself; keeps playing from page to page; remembers the choice. Made to loop without a seam: the last fifteen seconds (the fade) blended into the first fifteen, so the end flows on into the beginning (details in `public/audio/README.md`). Her upload is kept in `content/_source/audio/` |
| The sound button: a waveform, lines of varied weight, moving with the actual audio | **Done** — nine fine lines of uneven weight, still when off. Playing, each follows one band of the recording's sound (low at the centre, higher toward the edges), taller and a touch heavier as it swells; read from a small file made from each recording (`*.wave.json`, ~60 KB, loaded on first play), so a phone keeps playing with its screen locked. Works for the Red Rose too |
| A gentle fade out when paused (about 5.5 s), no drop at the end | **Done** — 5.5 seconds, an S-curve squared: it leaves softly, falls evenly to the ear, lands softly at silence; the waveform settles with it. On iPhone and iPad a page cannot change volume, so there it pauses at once rather than play on at full volume |
| Credit Stu Pender, linked to his site, in the player; then the tray in the site's glass, no arrow symbol | **Done** — the small arrow beside the sound button drops a pane of the site's glass (as on Book a Session): Pacific Equinox in the soft serif, and under it STU PENDER in small capitals with a hairline beneath, linked to beingsound.studio (new tab). The arrow beside the button is now always there |

## Build-session notes this round

| Note | Status |
|---|---|
| Resources as cards: the gift turns over, ripples when touched; Substack as a card; empty Inspiration / Library hidden until written | **Done** |
| Begin as one invitation: photograph, glass pane, one large action, quiet email and phone, WHERE as a line, "Cheers to being alive." | **Done** |
| Search and AI search (SEO / GEO): titles, descriptions, structured data, sitemap, robots.txt, llms.txt, 404 | **Done** — details in SEO.md |
| Services banner image | **Done** — the fire photograph (option D) |

## Next steps, for later

Everything still open, in one list. The first group is search (from
SEO.md); the rest are the open items above.

### Search and AI search — Joan's to do

1. **Her own domain.** The biggest single step for search: a GitHub
   address reads as a sub-folder of someone else's site, and `robots.txt`
   only takes effect at a domain's root. Decide masomatrix.com vs
   masomatix.com first; the three steps are in `astro.config.mjs`.
2. **Google Business Profile** for Ma Somatrix, Chicago (free) — the map
   listing, which AI answers lean on heavily.
3. **Google Search Console** and **Bing Webmaster Tools** (free): add the
   site, submit `/sitemap.xml`.
4. **Answer the common questions** (WRITING.md §3). A plain questions
   section is the strongest addition for AI search; it would get its own
   structured data.
5. **Testimonials**, where clients are willing — the site has a place
   ready for them.
6. **One name, place and link everywhere:** Substack, Instagram, the
   Sexological Bodyworkers directory and any listings should say *Ma
   Somatrix*, *Chicago, IL*, and link to the site.
7. **AI training — a choice.** The site is open to AI search and AI
   training crawlers alike. To stay findable but out of training, switch
   the training crawlers to Disallow in `src/pages/robots.txt.ts`.

### Waiting on Joan

- Two more **Kit forms**, each pasted into `src/site.ts`: a **This Very
  Body waitlist** form (`waitlistAction`, TODO-KIT-WAITLIST), which turns the
  card's Join the Waitlist into an email field; and a general **mailing
  list** form (`newsletterAction`, TODO-KIT-NEWS), which adds a small "Stay
  in touch" field to the closing pane on every page. Both are built and
  tested; they appear the moment their form addresses are set.
- A **Formspree address**, so the application form sends directly
  (TODO-FORM).
- The **soundscape file** from Stu Pender (TODO-SOUND).
- **Her writing** for the open descriptions (WRITING.md): This Very Body
  Program, Relational Integrity Labs, Spine Society, the Erotic Embodiment
  weekly class, 1:1 short and medium forms, application questions,
  Inspiration and Library — each appears on the site once written.
- **Larger originals** of `about.jpg` and `rose.jpg` (2,000 px or wider).
- **Where and for whom** the Red Rose Visualization was recorded ("CPR").

### Choices for Joan (the clashes above)

- Title screen: what sits at the foot (options A–F were mocked up;
  Chicago and beyond stays for now).
- Begin Here vs Services as the homepage label; Work with me vs
  Services as the page name.
- Her quote on About: within the bio, or its own section.
- The egg logo on the title screen.

