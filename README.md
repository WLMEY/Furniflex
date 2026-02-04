# Furniflex — Furniture E‑Commerce (React)

واجهة متجر أثاث (Front-end) مبنية بـ **React** مع تنقّل بين الصفحات باستخدام **React Router**، واعتماد **JSON Server** كـ API محلي لعرض بيانات المنتجات والفلاتر. المشروع مناسب كـ Portfolio/CV لأنه يغطّي رحلة المستخدم الأساسية: تصفّح المنتجات → تفاصيل المنتج → السلة.

## Overview

- **Type**: Single Page Application (SPA)
- **Domain**: Furniture / E‑Commerce UI
- **Data source**: `json-server` (ملف `DataBase.json`)

## Features

- **Products listing**: عرض المنتجات من مصدر بيانات محلي.
- **Product details page**: صفحة تفاصيل المنتج.
- **Categories page**: صفحة تصنيفات.
- **Static pages**: About / Contact / Blog.
- **Cart page**: صفحة السلة (واجهة).

## Tech Stack

- **Frontend**: React 18 (Create React App)
- **Routing**: `react-router-dom` (React Router v7)
- **UI / Styling**: Bootstrap 5 + CSS (مع وجود TailwindCSS ضمن التبعيات)
- **Animations**: `motion`
- **Mock API**: `json-server`
- **Tooling**: CRA scripts + ESLint (react-app)

## Completed Pages (Ready & Wired in Routes)

هذه الصفحات **مكتملة ومربوطة فعليًا في الراوت** داخل `src/App.js`:

- **Home**: `/`
- **Products**: `/products`
- **Product Details**: `/products/ProductDetails`
- **Categories**: `/Categories`
- **About Us**: `/AboutUs`
- **Contact**: `/Contact`
- **Blog**: `/Blog`
- **Shopping Cart**: `/ShoppingCartMain`

**عدد الصفحات المكتملة (وموصولة بالراوت): 8**

### Pages Implemented (Exist in Codebase)

هذه الصفحات موجودة داخل `src/pages` لكنها **غير مضافة للراوت حاليًا** (يمكن ربطها لاحقًا بسهولة):

- **Checkout**
- **Order Completed**
- **Error Page**
- **Blog Details**

## Run Locally

### Requirements

- Node.js (يفضّل LTS)
- npm

### Install

```bash
npm install
```

### Start (App + API Server)

المشروع مهيّأ لتشغيل الواجهة + السيرفر معًا:

```bash
npm start
```

- **React app**: `http://localhost:3000`
- **JSON Server API**: `http://localhost:5000`

### API Notes

- **Database file**: `DataBase.json`
- **Main endpoint**: `/products`

## Scripts

- **start**: تشغيل `json-server` + `react-scripts start` معًا
- **server**: تشغيل `json-server` على بورت 5000
- **build**: بناء نسخة Production
- **test**: تشغيل الاختبارات (إن وجدت)

## Project Structure (High Level)

- `src/pages/`: صفحات الموقع (Home, Products, …)
- `src/component/`: مكوّنات واجهة قابلة لإعادة الاستخدام
- `src/styles/`: ملفات CSS لكل جزء/صفحة
- `public/Materials/`: صور وأصول المشروع
- `DataBase.json`: بيانات المنتجات + فلاتر (Mock API)

## CV Description (Copy‑Paste)

**Furniflex — Furniture E‑Commerce UI (React SPA)**  
Built a multi-page furniture e‑commerce front‑end using React and React Router, with a local mock API powered by JSON Server. Implemented product listing, product details, categories, cart page, and multiple informational pages, with responsive UI styling (Bootstrap/CSS) and animations.

**Technologies:** React, React Router, JavaScript, Bootstrap, CSS, JSON Server, Motion  
**Completed pages:** 8 (wired routes) — Home, Products, Product Details, Categories, About, Contact, Blog, Cart
