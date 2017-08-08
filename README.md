# arabic-nlp

Utility functions useful for doing Arabic NLP. It's still super early stage so please ping me for feature requests or issues.

Features currently supported:

# Tashkeel Removal

```javascript
const nlp = require('arabic-nlp');
nlp.remove_tashkeel('أَنا الَّذي نَظَرَ الأَعمى إِلى أَدَبي');
```

Output:
```
'أنا الذي نظر الأعمى إلى أدبي'
```

# Tatweel Removal

```javascript
const nlp = require('arabic-nlp');
nlp.remove_tatweel('كن جميـــلا ترى الوجــود جميـــــلا');
```

Output:
```
'كن جميلا ترى الوجود جميلا'
```

# Sanitization

Sanitization removes all tashkeel, tatweel, and standardizes the spelling of certain characters.

Example:

```javascript
const nlp = require('arabic-nlp');

const text = `أَنا الَّذي نَظَرَ الأَعمى إِلى أَدَبي ... وَأَسمَـعَت كَلِماتي مَن بِهِ صَمَمُ
أَنـامُ مِلءَ جُفوني عَن شَوارِدِهــا ... وَيَسهَرُ الخَلقُ جَرّاها وَيَختَصِمُ
وَجـــاهِلٍ مَدَّهُ في جَهلِهِ ضَحِكي ... حَتّى أَتَتهُ يَدٌ فَرّاسَــــــةٌ وَفَـــــمُ

nlp.sanitize(text);
```

Output:
```
انا الذي نظر الاعمي الي ادبي ... واسمعت كلماتي من به صمم
انام ملء جفوني عن شواردها ... ويسهر الخلق جراها ويختصم
وجاهل مده في جهله ضحكي ... حتي اتته يد فراسه وفم
```
