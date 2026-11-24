/**
 * Joan's artist portfolio (11/23). The text is as it stood on her Format
 * site (kept verbatim in content/_source/portfolio-format-2026-11-22.md),
 * to be updated by her; the images are from her Google Drive folders, in
 * /assets/portfolio/<slug>/01.jpg, 02.jpg… in the order shown.
 *
 * TODO-JOAN: sharper originals for these (the Drive copies are ~550px wide);
 * Empty Contents still to add.
 *
 * `tint` is the work's own colour (r g b), which the index page's ground
 * takes on, gently, while the work is in focus.
 */
export type Work = {
  slug: string;
  title: string;
  year: string;
  count: number;
  cover: number;
  tint: string;
  /** Lines under the title: series, medium, season, place, size. */
  details: string[];
  materials?: string;
  /** Names or captions beneath particular images (by number). */
  captions?: Record<number, string>;
  /** A poem or longer text, paragraph by paragraph. */
  text?: string[];
  credits?: string[];
  /** Images shown narrower than the rest (a long scroll), by number. */
  narrow?: number[];
};

const chairs: Record<number, string> = {
  1: 'Schizophrenic Button-Up Doctor',
  7: 'Nailed Hair',
  12: 'Kinky Golden Girl',
  17: 'Discombobulated Child',
  22: 'Bumpy Baby Bride',
};

export const works: Work[] = [
  {
    slug: '28-day-cycle',
    title: '28 Day Cycle',
    year: '2024',
    count: 28,
    cover: 1,
    tint: '108 134 155',
    details: ['28 Piece Series', 'Collage on bookpage paper', 'Fall 2024 · Berkshires, MA', '28 x 35 inches'],
    credits: [
      'Images sourced from',
      'Five Girls, photographed by Sam Haskins',
      'Masterpiece Paintings from the MFA Boston',
      'Melons for the Passionate Grower by Amy Goldman',
    ],
  },
  {
    slug: 'empty-chairs',
    title: 'Empty Chairs',
    year: '2024',
    count: 27,
    cover: 7,
    tint: '161 157 154',
    details: ['5 Piece Series', 'Performative Sculpture', 'Spring 2024 · Mexico City, MX', '38 x 22 x 18 inches'],
    materials:
      'Wooden chairs, natural dyed hemp rope, sheets, thread, children’s book covers, the artist’s hair, nails, newspaper, button-up shirts, baby clothes, cloth mat, faux rose',
    captions: chairs,
  },
  {
    // 11/24: added from her Format text; the cover still is hers, the film to come.
    slug: 'hanging-from-the-earth',
    title: 'Hanging From the Earth',
    year: '2023',
    count: 1,
    cover: 1,
    tint: '140 52 66',
    details: ['Performance Film', 'Fall 2023 · Mexico'],
    materials:
      'Needle, thread, purple onion skins, red beets, orange-tangerine skins, eggs, green local herbs, milk, translucent plastic bags',
    credits: [
      'Credits',
      'Concept, Artistic Direction, Research, Costume Design, Performance: Joan Gutiérrez',
      'Cinematography, Editing: Camille Lacadee',
    ],
  },
  {
    slug: 'a-cicadas-cycle',
    title: 'A Cicada’s Cycle',
    year: '2023',
    count: 6,
    cover: 1,
    tint: '150 150 150',
    details: ['Performance Photography', 'Summer 2023 · Chicago, IL + Indiana Dunes, IN, USA'],
    materials: 'Cicada wings, hair, needles, thread, sand',
  },
  {
    slug: 'librito-del-viaje',
    title: 'Librito del Viaje',
    year: '2023',
    count: 23,
    cover: 10,
    tint: '205 196 184',
    details: ['Artist book · mixed media poetic collage', 'Winter 2022 – Summer 2023', 'MX, DE, FR, ES, MAR, CA, USA', '4 x 4.75 in.'],
    materials: 'Collage, ink, marker, dried flora, crayon, pencil, pastel',
    text: [
      'When they peel masks off the eyes split',
      'Write your death with archaic words on rock',
      'Let me hear the rock touch old fires of our breath',
      'To defy gravity rock the world in slow motion',
      'Burning poems written on seascapes under darkness',
      'Found our way by instinct. broke the moon in half',
      'If there are no words. invents them',
      'Softly, so no one will hear',
      'The mask is ripped where the sun is rich',
      'the taproots screwed into you',
      'The unholy fuck pulsates with them',
      'Songs rise in the imagination',
      'the night sky pours stars over',
      'of questions never asked',
      'Her small hands always tipped the scales',
      'the setting sun hung its apron like a ribcage',
      'the trick of knowing when to stop',
      'the red silence licks old wounds born',
      'Started life as a princess in a butcher shop.',
      'Your face floods with innocence I can’t wipe off.',
      'I want to lie next to you - grow into the earth',
      'Spatial symmetries.',
      'Hilma comes to me in my dreams.',
      'watch roads of light through doorways of breath.',
      'Not in a hurry to go anywhere nor to return',
      'Nobody knows the beginning of journey. where it will end',
    ],
  },
  {
    slug: 'brush-n-scroll',
    title: 'Brush n Scroll',
    year: '2023',
    count: 2,
    cover: 2,
    tint: '188 182 176',
    details: ['Performative Ink Drawing + Functional Sculpture', 'Autumn 2019 – Summer 2023', 'Upstate NY + NYC, USA'],
    captions: {
      1: 'Scroll · 8 x 123 in. · NY, NY, USA · 2023',
      2: 'Brush · 1 x 13 in. · Mt. Tremper, NY, USA · 2019',
    },
    narrow: [1],
    materials:
      'Scroll · sumi ink, lantern fly wings, red ink pen, thread on rice paper scroll. Brush · tree branch, embroidery floss, thread, hair salvaged from Haircut Piece Part II, made in collaboration with Jody Hojin Kimmel Sensei',
  },
  {
    slug: 'handmade',
    title: 'Handmade',
    year: '2023',
    count: 9,
    cover: 1,
    tint: '200 186 170',
    details: ['9 Piece Series', 'Mixed-media collage on paper', 'Winter 2023 · Berlin, DE', '6 x 9 in.'],
    captions: { 3: 'ink pen, marker, collage on paper' },
  },
  {
    slug: 'haircut-piece-part-ii',
    title: 'Haircut Piece Part II',
    year: '2019',
    count: 24,
    cover: 10,
    tint: '101 96 95',
    details: ['Durational + Live Performance', 'Fall 2019 · Mt. Tremper, NY, USA'],
    materials:
      'Analog self-portrait for each day of the year, masking tape, black garments, hair-tie, glass jar, water, hand held mirror, resting table, scissors, clippers, voiceover, hair',
    text: [
      'Cut an onion crosswise and you get a model of the universe. Honor of divinity. As the blossoms begin to unfold its structure can be seen clearly. On the outside are the modified leaf bases which during budding tightly enclose the whole flower and all of its delicate structures. Next are the petals, also modified leaves, colored in order to attract insects. The style with the stigma at its tip is dimly visible in the center of the flower. Soon the flower will be fully open and another life cycle can begin. Self-renewal from a leaf cutting like an African violet. In the coarse of a plant’s life its roots twist and turn many times. sometimes growing upward, sometimes downward, the highly sophisticated reaction of the root to auxin may well be the answer to these erratic ramblings of the root.',
      'So then, I think of you getting mandolin-clink mixed with your hair - feeling your knees among the supercilious chimneys. Dress deftly your flesh in stupid stuff to phrase the immense weapon of your hair.',
      'It’s funny...you will be dead some day. By you, the mouth hair eyes and I mean the unique and nervously obscene - need - it’s funny. They will all be dead. They are in me as in the hairy notching of clenched thighs. a friendless dingy female frenzy of bubbles. dead. Dark hair and nice hands with a little eye that rolled and made its print. in color. Hair. He put between her lips a moist mistake, whose fragrance hurls me into tears, as the dusty new-ness of her obsolete gaze begins to dye Hairy dead stars stink. Down. Inane, the poetic carcass of a girl.',
      'The bright rile of jovial hair frames the face in a hoop of grim ecstasy Her hair cannot contain as the evil to feel. unwieldy...the blood beat. Her hair was mussed and she coughed while tying strings dead’s more, even now how many ways of sitting on your head with your unnatural hair in the morning',
      'You, whose body is Egypt / whose hair is Nile',
      'Scarlet goes / with her white hot / face gashed by hair’s blue cold.',
      'Skin like the poisonous fragility of ice newly formed upon an old pool. Her nose small.exact.stupid.mouth normal.large.un-clever. hair genuinely artificial, unpleasantly tremendous. Secrets she won’t tell ’til you realize',
      'The moon is hiding in her hair',
    ],
  },
  {
    slug: 'wild-thing',
    title: 'Wild Thing',
    year: '2016',
    count: 8,
    cover: 3,
    tint: '61 43 33',
    details: ['Performance', 'Winter 2016 · Chicago, IL, USA'],
    materials:
      '100 lbs coffee grounds, plastic tarp, galvanized steel cleaning bucket, 25 layers of black garments-accessories, 8 GL hot water',
  },
];

export const workBySlug = (slug: string) => works.find((w) => w.slug === slug);
export const nextWork = (slug: string) => {
  const i = works.findIndex((w) => w.slug === slug);
  return works[(i + 1) % works.length];
};
