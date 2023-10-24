import './style.css'


// popular meals
const popularMeals = await fetch('www.themealdb.com/api/json/v1/1/categories.php')
// latest dishes
const latestDishes = await fetch('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')


// async function fetchRecipes() {
  // Code to fetch recipe data from an API
  // const response = await fetch('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');
  //   return await response.json();

  // Function to fetch meal images from the API
async function fetchMealImages() {
  try {
    const response = await fetch('www.themealdb.com/api/json/v1/1/categories.php');
    if (!response.ok) {
      throw new Error('Failed to fetch meal images.');
    }

    const data = await response.json();
    const mealImages = data.map((meal) => meal.image);

    // Display the meal images on the webpage
    const popular = document.getElementByClass('popular');
    mealImages.forEach((imageURL) => {
      const img = document.createElement('img');
      img.src = imageURL;
      popular.appendChild(img);
    });

  } catch (error) {
    console.error(error);
    // Handle error, display error message, or take appropriate actions
  }
}

// Call the function to fetch and display meal images
fetchMealImages();




// }
// loadRecipes().then(data => {
//   console.log(data)
//   recipes = data.recipes;
//   renderAllRecipe();
// });

// function displayRecipe(recipe) {
//   // Code to dynamically update the DOM with recipe information
// }


// // Call functions or set up initial functionality
// fetchRecipes();
// loadRecipe(apiLink1, apiLink2);