# Recipe Finder App

## Demo

[Live Demo](https://test-task-recipe-finder.netlify.app/)

## Project Description

Recipe Finder is a simple web application that allows you to search for recipes by keyword, select cuisine type, and set a maximum ready time. The app is built with Next.js (App Router), React, and Tailwind CSS.

- The homepage contains a search form.
- After submitting, users are redirected to a results page with filtered recipes.
- The results page displays a list of recipes, each linking to detailed recipe pages.
- Uses server-side fetching from the Spoonacular API.
- Loading state is shown on the form submit button.
- Responsive design with Tailwind CSS.

---

## Tech Stack

- Next.js (React, Server and Client Components)
- React (Client Components)
- Tailwind CSS
- TypeScript
- Spoonacular API for recipe data

---

### Features
- Loading state: The search button shows "Loading..." while navigating.

- Form validation: Submit button is enabled only if at least one input is filled.

- Dynamic URL parameters: Builds URL with query params for searching.

- Responsive: Uses Tailwind CSS for mobile and desktop layouts.

---

## Getting Started
### Clone the repository

```bash
git clone https://github.com/tonni004/recipe-finder.git
cd recipe-finder
```

### Install dependencies

```bash
npm install
```

### Run in development mode
```bash
npm run dev
```

### Open your browser at http://localhost:3000

## Images

### Home page

![Description 1](https://i.ibb.co/JjWHZJZ6/2025-06-13-17-07-43.png)

### Search list
![Description 2](https://i.ibb.co/n8t52mWc/2025-06-13-17-08-09.png)

### Recipe details
![Description 3](https://i.ibb.co/kgdh7RMN/2025-06-13-17-08-25.png)
