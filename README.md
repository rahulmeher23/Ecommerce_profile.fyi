# My React E-commerce Application

## Overview

This is a React-based e-commerce application that allows users to browse products, view product details, manage their cart, and complete orders. The application is organized into components, pages, and routes to ensure a clean and maintainable structure.

## Project Structure

```plaintext
src/
│
├── appLayout/
│   ├── appLayout.jsx         # Main layout component for the application
│
├── appRouter/
│   ├── appRouter.jsx         # Router configuration for the application
│
├── assets/                   # Static assets like images, fonts, etc.
│
├── components/               # Reusable components
│   ├── cart/
│   │   ├── CartProductCard.jsx
│   ├── home/
│   │   ├── CategoriesCard.jsx
│   │   ├── Hero.jsx
│   ├── navbar/
│   │   ├── HamburgerMenu.jsx
│   │   ├── Navbar.jsx
│   ├── products/
│   │   ├── ProductsList.jsx
│
├── database/
│   ├── productsDB.js         # Mock database for products
│
├── pages/                    # Application pages corresponding to routes
│   ├── Cart.jsx              # Cart page
│   ├── Home.jsx              # Home page
│   ├── OrderPage.jsx         # Order page (e.g., payment success)
│   ├── PageNotFound.jsx      # 404 Page
│   ├── ProductDescription.jsx # Product description page
│   ├── ProductsList.jsx      # List of products
│
├── redux/                    # Redux store and slices
│   ├── slices/
│   ├── store.js
│
├── App.css                   # Global styles
├── App.js                    # Main entry point of the application


Routes Overview
"/" - Home page displaying an overview of the store.
"/products" - Lists all available products.
"/product/:id" - Shows detailed information for a specific product.
"/cart" - Displays the items in the user's cart.
"/payment-successful" - Displays a payment success message after an order is completed.
"*" - Catch-all route for 404 pages


Technologies Used
React: JavaScript library for building user interfaces.
React Router: For handling routing in the application.
Redux: For state management.
TailwindCSS: For styling the application.
```
