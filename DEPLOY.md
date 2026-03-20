# نشر الموقع على Vercel

دليل سريع لنشر الموقع كموقع حقيقي على الويب.

## المتطلبات

- حساب على [GitHub](https://github.com)
- حساب على [Vercel](https://vercel.com) (مجاني)

---

## الخطوة 1: رفع المشروع على GitHub

### إذا لم يكن المشروع على Git بعد:

```bash
# تهيئة Git
git init

# إضافة الملفات
git add .

# أول commit
git commit -m "Initial commit: portfolio ready for deployment"

# إنشاء repo جديد على GitHub ثم:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### إذا كان المشروع موجوداً على Git:

```bash
git add .
git commit -m "Add Vercel deployment config"
git push
```

---

## الخطوة 2: ربط المشروع على Vercel

1. ادخل إلى **[vercel.com](https://vercel.com)** وسجّل الدخول بـ **GitHub**.
2. اضغط **Add New…** → **Project**.
3. اختر الـ repository الخاص بالمشروع.
4. **Build Settings** (يجب أن تكون كالتالي تلقائياً):
   - **Framework Preset:** Other
   - **Build Command:** (فارغ)
   - **Output Directory:** (فارغ)
   - **Install Command:** (فارغ)
5. اضغط **Deploy**.

---

## الخطوة 3: بعد النشر

- ستحصل على رابط مثل: `https://your-project.vercel.app`
- يمكنك ربط دومين خاص من **Settings** → **Domains**
- كل push على `main` يحدث deploy تلقائي

---

## ملاحظات

- **HTTPS:** مجاني تلقائياً
- **CDN:** الموقع يُوزَّع عالمياً
- **الملفات:** `vercel.json` و `.gitignore` مضافة مسبقاً
