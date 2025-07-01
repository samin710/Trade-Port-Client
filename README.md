# 🛒 TradePort

<!--![TradePort Screenshot](https://your-image-url.com)--> <!-- Replace this with your screenshot URL -->

## 🔗 Live Website  
👉 [TradePort Live](https://b2b-wholesale-platform-57595.web.app/)

---

## 🖇️ Server Link 
👉 [Server Link](https://github.com/samin710/Trade-Port-Server)

---

## 🧠 Overview

***TradePort*** is a dynamic e-commerce web application where users can browse, buy, and manage products across various categories. Users must log in to access features such as adding new products, viewing all listings, and managing their own cart and posted items. The platform supports product display in both card and table formats, highlights discounts via a banner section, and enforces purchase rules like minimum selling quantity and stock limits. Users can only delete their own products, but editing is open to all. The cart system allows users to remove purchased items, automatically adjusting the product's available stock. The app also includes a theme toggle for dark/light modes and leverages a modern tech stack for an interactive, responsive UI.

---

## 🔥 Technologies Used

- **React 19** – Frontend framework  
- **Vite** – Development build tool  
- **Tailwind CSS + DaisyUI** – Styling and UI components  
- **React Router v7** – Client-side routing  
- **Firebase** – Authentication and backend services  
- **Framer Motion** – Smooth animations  
- **Lottie React** – Animation integration  
- **React Toastify** – Toast notifications  
- **Animate.css** – CSS animations  
- **Axios** – API requests  
- **Swiper** – Carousel/slider  
- **React Hook Form** – Form validation and handling  
- **React Tooltip** – Tooltips for UI hints  
- **React Intersection Observer** – Scroll-triggered animations  

---

## 🚀 Key Features

- 🛍️ Add, edit (all users), and delete (own) products  
- 📢 Dynamic discount banners  
- 🗂️ Browse by category and view product details  
- ✅ Quantity validation: min selling & available stock enforced  
- 🧾 Dual product view: card & table  
- 🛒 Personalized cart with real-time stock update on deletion  
- 🔒 Auth-required access to product actions and cart  
- 📦 "Available" filter for high-volume products  
- 🌙 Toggle between dark and light UI modes  

---

## 📦 Dependencies

```json
{
  "@tailwindcss/vite": "^4.1.8",
  "animate.css": "^4.1.1",
  "axios": "^1.9.0",
  "firebase": "^11.9.0",
  "framer-motion": "^12.18.1",
  "lottie-react": "^2.4.1",
  "motion": "^12.17.0",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-hook-form": "^7.57.0",
  "react-icon": "^1.0.0",
  "react-icons": "^5.5.0",
  "react-intersection-observer": "^9.16.0",
  "react-router": "^7.6.2",
  "react-toastify": "^11.0.5",
  "react-tooltip": "^5.28.1",
  "swiper": "^11.2.8",
  "tailwindcss": "^4.1.8"
}
```
---

## 🛠 How to Run This Project Locally
1. Clone the repository
2. Install dependencies: npm install
3. Create a .env file in the root directory and add your Firebase configuration (replace placeholders)
4. npm run dev
