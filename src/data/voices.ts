import type { Lang } from '../i18n';

/**
 * Two clients' words (11/21): "welcome" on Get in Touch (moved from Home, 11/21),
 * "ease" on Offerings in What to Expect (the client's choice of four
 * layouts). Named as the client gave them (11/21).
 *
 * The Spanish is a DRAFT for Joan to review, written gender-neutral for the
 * clients' voices.
 */
type Voice = { quote: string; lead?: string; cite: string; short?: string };

const en: Record<'welcome' | 'ease', Voice> = {
  welcome: {
    lead: 'All of you is welcome here.',
    // Trimmed at the client's direction: the opening "I LOVE working with
    // Joan!" and the aside "– which is what I want".
    quote: 'In my sessions with Joan, we have been able to meet vulnerable places with tenderness and curiosity, laughter and love. Her openness and presence help me to relax into the work, even if I am nervous or a little scared. When she tells me that ‘all of you is welcome here,’ I can finally believe it’s actually true.',
    cite: 'Ashley H., Kona Island, Iowa & Chicago',
    // Shortened for Get in Touch: whole sentences only.
    short: 'In my sessions with Joan, we have been able to meet vulnerable places with tenderness and curiosity, laughter and love. When she tells me that ‘all of you is welcome here,’ I can finally believe it’s actually true.',
  },
  ease: {
    quote: "I didn't know what to expect and was nervous to approach my erotic exploration, but Joan put me at ease with their calm, professionalism and authority. Joan has a gift for stopping time still and holding space at very vulnerable moments. Learning about my body and how to name my needs has cultivated a self confidence that has radiated beyond the erotic to my actual sense of self. A gifted healer and teacher.",
    cite: 'Bethie B., Chicago',
  },
};

const es: Record<'welcome' | 'ease', Voice> = {
  welcome: {
    lead: 'Todo lo que eres es bienvenido aquí.',
    quote: 'En mis sesiones con Joan, hemos podido encontrarnos en lugares vulnerables con ternura y curiosidad, risas y amor. Su apertura y su presencia me ayudan a relajarme en el trabajo, aun cuando siento nervios o un poco de miedo. Cuando me dice que «todo lo que eres es bienvenido aquí», por fin puedo creer que es verdad.',
    cite: 'Ashley H., Isla de Kona, Iowa y Chicago',
    // 11/21, the client's words.
    short: 'En mis sesiones con Joan, hemos podido encontrarnos en lugares vulnerables con ternura y curiosidad, risas y amor. Cuando me dice que «todo lo que eres es bienvenido aquí», por fin puedo creer que es verdad.',
  },
  ease: {
    // 11/21, the client's words (accents added: brindó, más, mí misma).
    quote: 'No sabía qué esperar y me sentía nerviosa ante la idea de adentrarme en mi exploración erótica, pero Joan me brindó tranquilidad con su calma, su profesionalismo y su autoridad. Joan tiene el don de detener el tiempo y sostener el espacio en los momentos más vulnerables. Conocer mi cuerpo y aprender a expresar mis necesidades me ha ayudado a cultivar una confianza en mí misma que ha irradiado más allá de lo erótico, hasta mi propio sentido de quién soy. Una sanadora y maestra con un don.',
    cite: 'Bethie B., Chicago',
  },
};

export const voicesFor = (lang: Lang) => (lang === 'es' ? es : en);
