var assert = require('assert');
var arabic_nlp = require('../index.js');

describe('#remove_tashkeel()', function() {
  it('should remove all tashkeel from text.', function() {
    const text = `أَنا الَّذي نَظَرَ الأَعمى إِلى أَدَبي ... وَأَسمَعَت كَلِماتي مَن بِهِ صَمَمُ
أَنامُ مِلءَ جُفوني عَن شَوارِدِها ... وَيَسهَرُ الخَلقُ جَرّاها وَيَختَصِمُ
وَجاهِلٍ مَدَّهُ في جَهلِهِ ضَحِكي ... حَتّى أَتَتهُ يَدٌ فَرّاسَةٌ وَفَمُ`

    const actual = arabic_nlp.remove_tashkeel(text);

    const expected = `أنا الذي نظر الأعمى إلى أدبي ... وأسمعت كلماتي من به صمم
أنام ملء جفوني عن شواردها ... ويسهر الخلق جراها ويختصم
وجاهل مده في جهله ضحكي ... حتى أتته يد فراسة وفم`

    assert.equal(expected, actual);
  });
});

describe('#remove_tatweel()', function() {
  it('should remove all tatweel from text.', function() {
    const text = "جميــــل"

    const actual = arabic_nlp.remove_tatweel(text);

    const expected = "جميل"

    assert.equal(expected, actual);
  });
});

describe('#sanitize()', function() {
  it('should remove all alif hamzas from text.', function() {
    const text = "أنا اسمى آدم إدريس حمزة"

    const actual = arabic_nlp.sanitize(text);

    const expected = "انا اسمي ادم ادريس حمزه"

    assert.equal(expected, actual);
  });

  it('should remove hamzas, tashkeel, and tatweel from text.', function() {
    const text = `أَنا الَّذي نَظَرَ الأَعمى إِلى أَدَبي ... وَأَسمَـعَت كَلِماتي مَن بِهِ صَمَمُ
أَنـامُ مِلءَ جُفوني عَن شَوارِدِهــا ... وَيَسهَرُ الخَلقُ جَرّاها وَيَختَصِمُ
وَجـــاهِلٍ مَدَّهُ في جَهلِهِ ضَحِكي ... حَتّى أَتَتهُ يَدٌ فَرّاسَــــــةٌ وَفَـــــمُ`

    const actual = arabic_nlp.sanitize(text);

    const expected = `انا الذي نظر الاعمي الي ادبي ... واسمعت كلماتي من به صمم
انام ملء جفوني عن شواردها ... ويسهر الخلق جراها ويختصم
وجاهل مده في جهله ضحكي ... حتي اتته يد فراسه وفم`

    assert.equal(expected, actual);
  });
});
