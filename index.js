const TASHKEEL = [
  "\u0610", // ( ؐ) arabic sign sallallahou alayhe wassallam
  "\u0611", // ( ؑ) arabic sign alayhe assallam
  "\u0612", // ( ؒ) arabic sign rahmatullah alayhe
  "\u0613", // ( ؓ) arabic sign radi allahou anhu
  "\u0614", // ( ؔ) arabic sign takhallus
  "\u0615", // ( ؕ) arabic small high tah
  "\u0616", // ( ؖ) arabic small high ligature alef with lam with yeh
  "\u0617", // ( ؗ) arabic small high zain
  "\u0618", // ( ؘ) arabic small fatha
  "\u0619", // ( ؙ) arabic small damma
  "\u061a", // ( ؚ) arabic small kasra
  "\u064b", // ( ً) arabic fathatan
  "\u064c", // ( ٌ) arabic dammatan
  "\u064d", // ( ٍ) arabic kasratan
  "\u064e", // ( َ) arabic fatha
  "\u064f", // ( ُ) arabic damma
  "\u0650", // ( ِ) arabic kasra
  "\u0651", // ( ّ) arabic shadda
  "\u0652", // ( ْ) arabic sukun
  "\u0653", // ( ٓ) arabic maddah above
  "\u0654", // ( ٔ) arabic hamza above
  "\u0655", // ( ٕ) arabic hamza below
  "\u0656", // ( ٖ) arabic subscript alef
  "\u0657", // ( ٗ) arabic inverted damma
  "\u0658", // ( ٘) arabic mark noon ghunna
  "\u065a", // ( ٚ) arabic vowel sign small v above
  "\u065b", // ( ٛ) arabic vowel sign inverted small v above
  "\u065c", // ( ٜ) arabic vowel sign dot below
  "\u065d", // ( ٝ) arabic reversed damma
  "\u065e", // ( ٞ) arabic fatha with two dots
]

const TASHKEEL_REGEX = new RegExp("[" + TASHKEEL.join() + "]", 'g');
const TATWEEL_REGEX = /ـ/g;

/**
 * Remove all tashkeel from text.
 *
 * e.g.
 *   Input: "`أَنا الَّذي نَظَرَ الأَعمى إِلى أَدَبي"
 *   Output: "`أنا الذي نظر الأعمى إلى أدبي"
 */
function remove_tashkeel(text) {
  return text.replace(TASHKEEL_REGEX, '');
}

/**
 * Remove all tatweel from text.
 *
 * e.g.
 *   Input: "جميـــل"
 *   Output: "جميل"
 */
function remove_tatweel(text) {
  return text.replace(TATWEEL_REGEX, '');
}

module.exports = {
  remove_tashkeel,
  remove_tatweel,
}
