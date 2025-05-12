# 📌 **LoopAPI - A Curated Collection of Free APIs**

![LoopAPI Banner](https://res.cloudinary.com/do5xzpecm/image/upload/v1740815590/Screenshot_2025-03-01_131002_zfz8nw.png)

LoopAPI is an open-source platform that provides a **curated collection of free APIs** across multiple categories. Whether you are a **developer, student, or enthusiast**, LoopAPI helps you discover, explore, and integrate APIs seamlessly into your projects.

🌍 **Why use LoopAPI?**

- Searching for free APIs is time-consuming, and many API lists are outdated.
- LoopAPI solves this by maintaining an **up-to-date, organized, and user-friendly** API directory.
- APIs are categorized for easy navigation, and **detailed documentation** is available for each.

🔗 **[Live Demo](https://1998amansinha.github.io/loop_api/)**

---

## 🚀 **Features of LoopAPI**

### 🔍 **Easily Discover Free APIs**

- Explore **hundreds of public APIs** across various categories, including:
  - **Weather** ☁️
  - **Movies & TV Shows** 🎬
  - **Finance & Cryptocurrency** 💰
  - **Sports & Fitness** 🏆
  - **AI & Machine Learning** 🤖
  - **And many more!**

### 📂 **Organized & User-Friendly Interface**

- APIs are **grouped by category**, making it easy to browse.
- Each API entry contains:
  - **API Name**
  - **Description**
  - **Base URL**
  - **Authentication requirements**
  - **Documentation link**

### 🔐 **User Authentication & Contributions**

- Users can **sign up or log in** using:
  - **Google**
  - **GitHub**
  - **Email/Password**
- **Authenticated users** can:
  - Submit new APIs to the platform
  - Manage their API submissions
  - Rate and review APIs

### 🚀 **High Performance & Optimized Experience**

- **Fast API loading** using caching & lazy loading.
- **React Suspense** ensures smooth data fetching.
- Mobile-friendly design for **seamless browsing on all devices**.

---

## 🎯 **How LoopAPI Works**

### 🔍 **Browsing APIs**

1️⃣ Visit **[LoopAPI](https://loopapi.com/)**  
2️⃣ Click on a category to see all APIs in that section  
3️⃣ Select an API to view details such as:

- Base URL
- Authentication type (if required)
- Example requests & responses

### 🔍 **Searching for APIs**

- Use the **search bar** on the homepage to quickly find APIs by name or category.

### 📤 **Submitting an API**

1️⃣ Sign in using Google, GitHub, or email  
2️⃣ Click on **"Submit API"** in the navigation menu  
3️⃣ Fill in the form with:

- API Name
- API URL
- Description
- Category  
  4️⃣ Click **Submit** 🚀

💡 **Your submitted API will be reviewed** before being added to the public directory.

---

## 📚 **LoopAPI Structure & Sections**

### 🏠 **Home Page**

- **Left Sidebar Navigation** → Always visible for easy category selection
- **Top Section** → Random APIs (changes periodically)
- **Bottom Section** → Popular APIs based on user ratings

### 📖 **Documentation Section**

- **API Fetching Guide** → Learn how to retrieve APIs from LoopAPI
- **Authentication Guide** → How to log in and submit APIs
- **Code Snippets** → Ready-to-use examples in JavaScript & Python

### 🛠️ **Admin Panel**

- Admins can **approve, reject, or edit** submitted APIs.
- Ensures that only **verified and working APIs** are added.

---

## 📥 **Fetching API Data**

You can retrieve API data from LoopAPI using a simple `fetch` request:

```js
fetch(
  "https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents/apis"
)
  .then((response) => response.json())
  .then((data) => console.log(data));
```

This will return a JSON object containing **all available APIs**.

---

## 🤝 **Contributing to LoopAPI**

LoopAPI is an **open-source project**, and we welcome contributions!

### 🛠️ **How to Contribute**

1️⃣ **Fork the repository**  
2️⃣ **Create a new branch**

```sh
git checkout -b feature-new-api-category
```

3️⃣ **Make your changes & commit**

```sh
git commit -m "Added new API category"
```

4️⃣ **Push changes to GitHub**

```sh
git push origin feature-new-api-category
```

5️⃣ **Open a Pull Request** and describe your changes

💡 **Ways to contribute:**

- Add new API categories
- Improve UI & UX
- Fix bugs & optimize performance
- Enhance documentation

---

## 📜 **License**

LoopAPI is released under the **MIT License**, meaning you’re free to use, modify, and distribute it with proper attribution.

---

## 📧 **Contact & Support**

💬 **Join Our Community** – Discuss, share, and contribute  
📧 **Email:** support@loopapi.com

---

### 🚀 **Made with ❤️ for Developers!**

If you find LoopAPI helpful, consider ⭐ starring the repo and sharing it with your fellow developers.

Happy coding! 🎉
