# إضافة Results Gallery جديدة

## الملف: `work-samples-data.js`

كل عناصر Results Gallery تُعرِّف في `window.WORK_SAMPLES_DATA`.

### إضافة صورة جديدة:
```js
{
  src: 'assets/work-sample-5.png',
  alt: 'وصف الصورة',
  industry: 'B2B • Meta Ads',
  achievement: 'النتيجة • تكلفة النتيجة',
  cost: 2.5,      // أقل = أفضل (يُعرض أولاً)
  results: 450,   // أعلى = أفضل (في حالة تساوي cost)
  size: 'lg'      // 'lg' | 'wide' | 'tall' | null
}
```

### Placeholder (بدون صورة بعد):
```js
{
  placeholder: true,
  industry: 'الصناعة',
  achievement: 'الإنجاز',
  cost: 10,
  results: 0,
  size: null
}
```

### الترتيب:
- **cost** (تكلفة النتيجة): الأقل أولاً
- **results** (عدد النتائج): الأعلى أولاً عند تساوي cost

### حجم الخلية (`size`):
- `'lg'` — خلية كبيرة (2×2)
- `'wide'` — عريضة (2 أعمدة)
- `'tall'` — طويلة (2 صفوف)
- `null` — عادية

## رفع سكرين شوت (104 حالياً)

1. ضع الصور في `assets/` (مثلاً `work-sample-1.png` … `work-sample-104.png`)
2. عدّل `work-samples-data.js` وحدّث أو أضف العناصر
3. الصور تستخدم **lazy loading** تلقائياً لتحسين الأداء
