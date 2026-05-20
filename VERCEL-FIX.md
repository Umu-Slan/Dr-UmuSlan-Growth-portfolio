# الموقع الحي ما بيتحدّثش — خطوات الإصلاح

## التشخيص

| المكان | قسم Work in action |
|--------|-------------------|
| **GitHub** (صح) | Marketing · Shopify · Marketing · Shopify · Marketing |
| **drumuslan.pro** (قديم) | Marketing · Social Media Design · Content · Shopify · SEO |

يعني: التعديلات على GitHub موجودة، لكن **مشروع Vercel اللي مربوط بالدومين مش بينشر من الريبو ده**.

---

## الحل (5 دقائق)

### 1) تأكد من الريبو على GitHub

افتح: https://github.com/Umu-Slan/Dr-UmuSlan-Growth-portfolio/blob/main/index.html  

ابحث عن: `marketing and Shopify` — لازم تلاقيه.

### 2) Vercel — ربط الريبو الصح

1. ادخل https://vercel.com/dashboard  
2. افتح المشروع اللي فيه دومين **drumuslan.pro**  
3. **Settings** → **Git**  
4. لو مش مربوط أو ريبو تاني: **Connect Git Repository** → اختر `Umu-Slan/Dr-UmuSlan-Growth-portfolio` → فرع **main**  
5. **Settings** → **General** → **Root Directory** = فاضي (`.` مش `deploy-upload`)

### 3) نشر يدوي من آخر commit

1. **Deployments**  
2. **Create Deployment** (أو Redeploy)  
3. اختر فرع **main** و commit فيه: `Fix merge conflicts...` أو `site-build: 36d410a`  
4. انتظر **Ready** (دقيقة–دقيقتين)

### 4) تحقق من الموبايل

افتح الموقع → قسم **Work in action**:

- **صح:** تسميات Marketing / Shopify بالتناوب  
- **غلط:** Social Media Design / Content / SEO — لسه النشر القديم

---

## لو `vercel login` من الطرفية

```powershell
cd D:\.cursor\projects\agency\framer1
npx.cmd vercel login
npx.cmd vercel link
npx.cmd vercel --prod
```

---

## كاش المتصفح على الموبايل

بعد ما Vercel يخلص: افتح الموقع في **نافذة خاصة** أو امسح بيانات الموقع من إعدادات المتصفح.
