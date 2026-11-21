import type { Lang } from '../i18n';

/**
 * Two clients' words (11/21): "welcome" on Home after Joan's welcome,
 * "ease" on Offerings in What to Expect (the client's choice of four
 * layouts). Named as the client gave them (11/21).
 *
 * The Spanish is a DRAFT for Joan to review, written gender-neutral for the
 * clients' voices.
 */
type Voice = { quote: string; lead?: string; cite: string };

const en: Record<'welcome' | 'ease', Voice> = {
  welcome: {
    lead: 'All of you is welcome here.',
    // Trimmed at the client's direction: the opening "I LOVE working with
    // Joan!" and the aside "– which is what I want".
    quote: 'In my sessions with her, we have been able to meet vulnerable places with tenderness and curiosity, laughter and love. Her openness and presence help me to relax into the work, even if I am nervous or a little scared. When she tells me that ‘all of you is welcome here,’ I can finally believe it’s actually true.',
    cite: 'Ashley H., Kona Island',
  },
  ease: {
    quote: "I didn't know what to expect and was nervous to approach my erotic exploration, but Joan put me at ease with their calm, professionalism and authority. Joan has a gift for stopping time still and holding space at very vulnerable moments. Learning about my body and how to name my needs has cultivated a self confidence that has radiated beyond the erotic to my actual sense of self. A gifted healer and teacher.",
    cite: 'Bethie B., Chicago',
  },
};

const es: Record<'welcome' | 'ease', Voice> = {
  welcome: {
    lead: 'Todo lo que eres es bienvenido aquí.',
    quote: 'En mis sesiones con ella hemos podido encontrarnos con lugares vulnerables con ternura y curiosidad, risa y amor. Su apertura y su presencia me ayudan a relajarme en el trabajo, aun cuando siento nervios o un poco de miedo. Cuando me dice que ‘todo lo que eres es bienvenido aquí’, por fin puedo creer que es verdad.',
    cite: 'Ashley H., Isla de Kona',
  },
  ease: {
    quote: 'No sabía qué esperar y sentía nervios al acercarme a mi exploración erótica, pero Joan me dio tranquilidad con su calma, su profesionalismo y su autoridad. Joan tiene el don de detener el tiempo y sostener el espacio en momentos muy vulnerables. Aprender sobre mi cuerpo y a nombrar mis necesidades ha cultivado en mí una confianza que ha irradiado más allá de lo erótico, hasta mi propio sentido de quién soy. Una sanadora y maestra con un don.',
    cite: 'Bethie B., Chicago',
  },
};

export const voicesFor = (lang: Lang) => (lang === 'es' ? es : en);
