# 📝 TASKY — Task Manager

A modern task management web application built with **Next.js and TypeScript**, designed to help users organize, manage, and keep track of their tasks through a clean and responsive interface.

The application uses a REST API for data communication, Axios for HTTP requests, Zustand for global state management, and cookie-based authentication to handle user sessions securely.

## Live Demo

[https://09-auth-eight-lime.vercel.app](https://09-auth-eight-lime.vercel.app)

## Features

- Create, manage, and organize tasks
- User authentication and authorization
- Cookie-based authentication and session management
- REST API integration using **Axios**
- Server-state management with **TanStack React Query**
- Global state management with **Zustand**
- Pagination for task and note listings
- Filtering and searching through tasks
- Debounced search for optimized API requests
- Automatic data fetching and caching
- Protected routes and session validation
- Responsive design for different screen sizes
- Loading and error states

## Tech Stack

- **Next.js**
- **React**
- **TypeScript**
- **Axios**
- **Zustand**
- **REST API**
- **Cookies**
- **React Paginate**
- **use-debounce**
- **CSS Modules**

## 🧠 What I Practiced

This project helped me practice working with:

- Next.js App Router and application architecture
- Server-side rendering (SSR)
- Client and server components
- REST API integration
- Asynchronous data fetching with Axios
- Server-state management with React Query
- Query caching and data synchronization
- Global state management with Zustand
- Cookie-based authentication
- Access and refresh token handling
- Protected routes and session management
- TypeScript interfaces and type safety
- Pagination and debounced search
- Component composition and reusable UI
- Separation of concerns and maintainable code

## 📂 Project Structure

The project is organized into application routes, reusable components, utility functions, and TypeScript types to maintain a clean and scalable codebase.

```text
src/
├── app/
│   ├── (auth)/
│   ├── (private routes)/
│   └── ...
│
├── components/
│   ├── ...
│
├── lib/
│   ├── ...
│
├── public/
│
├── types/
│   └── ...
│
├── proxy.ts
└── ...
```

## API & Authentication

The application communicates with a backend through a **REST API**, using Axios to handle HTTP requests and responses.

Authentication is implemented using cookies, with access and refresh token handling to manage user sessions. Protected routes are validated through server-side session checks.

**TanStack React Query** handles server-state management, including data fetching, caching, and synchronization, while Zustand manages global application state.

## 📌 Project Status

The project is actively being improved as part of my ongoing **Next.js and TypeScript learning journey**.

---

Built with ❤️ using **Next.js, TypeScript and REST API**.
