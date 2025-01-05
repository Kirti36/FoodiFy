# Foodify

A dynamic web application that allows users to search for meals and view detailed recipes, including instructions and images, fetched from **TheMealDB API**.

## Features
- **Search Meals:** Users can search for meals using a search bar.
- **Meal Cards:** Display meal results as interactive cards with images and names.
- **Recipe Details:** Clickable meal cards show a detailed recipe page with instructions and a recipe image.
- **Hover Effects:** Stylish hover animations for better user experience.
- **Responsive Design:** Ensures usability across various screen sizes.

## Tech Stack
- **React.js**: Core framework for building the user interface.
- **React Router**: For managing dynamic routing in the app.
- **JavaScript (ES6+)**: Logic and asynchronous data fetching.
- **CSS3**: Custom styling with animations and transitions.
- **TheMealDB API**: Data source for meal information.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/Kirti36/FoodiFy.git
   ```
2. Navigate to the project directory:
   ```bash
   cd foodify
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open the app in your browser at `http://localhost:3000`.

## API Reference
- **TheMealDB**: `https://www.themealdb.com/api.php`

  Example request to fetch meal by ID:
  ```
  https://www.themealdb.com/api/json/v1/1/lookup.php?i=MEAL_ID
  ```

## Accessibility
- Added `alt` attributes to all images for improved accessibility.

## Improvements
- **Loading Indicator:** Implement a loader while fetching data.
- **Error Handling:** Add graceful error handling for failed API requests.
- **Pagination:** Display more meals with pagination or infinite scroll.

