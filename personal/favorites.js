let results = null;

//get random recipe from API
async function getRecipe() {
  let url = "https://www.themealdb.com/api/json/v1/1/random.php";
  let response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // convert response
    let data = await response.json();
    displayRecipe(data);
    results = data;
  }
    
};

function addToPlanner() {
  window.location.href = "./meal-planning.html";
  // displayRecipe(results);
};

//put data from API on the page
function displayRecipe(results) {
  const output = document.querySelector('#output');
  const recipeCard = document.createElement('div');
  recipeCard.className = "fav-recipe-box";
  output.appendChild(recipeCard);

  const recipeName = document.createElement('h2');
  recipeName.innerHTML = `${results.meals[0].strMeal}`;
  recipeName.id = "recipe-name";
  recipeCard.appendChild(recipeName);

  const ingredientsTitle = document.createElement('h3');
  ingredientsTitle.innerHTML = 'Ingredients:';
  ingredientsTitle.id = "ingredients-title";
  recipeCard.appendChild(ingredientsTitle);

  const ingredients1 = document.createElement('ul');
  ingredients1.innerHTML = `<li>${results.meals[0].strMeasure1} ${results.meals[0].strIngredient1}</li>
    <li>${results.meals[0].strMeasure3} ${results.meals[0].strIngredient3}</li>
    <li>${results.meals[0].strMeasure5} ${results.meals[0].strIngredient5}</li>
    <li>${results.meals[0].strMeasure7} ${results.meals[0].strIngredient7}</li>
    <li>${results.meals[0].strMeasure9} ${results.meals[0].strIngredient9}</li>
    <li>${results.meals[0].strMeasure11} ${results.meals[0].strIngredient11}</li>
    <li>${results.meals[0].strMeasure13} ${results.meals[0].strIngredient13}</li>
    <li>${results.meals[0].strMeasure15} ${results.meals[0].strIngredient15}</li>
    <li>${results.meals[0].strMeasure17} ${results.meals[0].strIngredient17}</li>
    <li>${results.meals[0].strMeasure19} ${results.meals[0].strIngredient19}</li>`;
  ingredients1.id = 'col-1';
  recipeCard.appendChild(ingredients1);

  const ingredients2 = document.createElement('ul');
  ingredients2.innerHTML = `<li>${results.meals[0].strMeasure2} ${results.meals[0].strIngredient2}</li>
    <li>${results.meals[0].strMeasure4} ${results.meals[0].strIngredient4}</li>
    <li>${results.meals[0].strMeasure6} ${results.meals[0].strIngredient6}</li>
    <li>${results.meals[0].strMeasure8} ${results.meals[0].strIngredient8}</li>
    <li>${results.meals[0].strMeasure10} ${results.meals[0].strIngredient10}</li>
    <li>${results.meals[0].strMeasure12} ${results.meals[0].strIngredient12}</li>
    <li>${results.meals[0].strMeasure14} ${results.meals[0].strIngredient14}</li>
    <li>${results.meals[0].strMeasure16} ${results.meals[0].strIngredient16}</li>
    <li>${results.meals[0].strMeasure18} ${results.meals[0].strIngredient18}</li>
    <li>${results.meals[0].strMeasure20} ${results.meals[0].strIngredient20}</li>`;
  ingredients2.id = 'col-2';
  recipeCard.appendChild(ingredients2);

  const recipePhoto = document.createElement('img');
  recipePhoto.id = 'recipe-photo';
  recipePhoto.src = `${results.meals[0].strMealThumb}`;
  recipePhoto.alt = 'thumbnail';
  recipeCard.appendChild(recipePhoto);
  
  const instructionsTitle = document.createElement('h3');
  instructionsTitle.innerHTML = 'Instructions:';
  instructionsTitle.className = 'instructions-title';
  recipeCard.appendChild(instructionsTitle);

  const instructions = document.createElement('p');
  instructions.innerHTML = `${results.meals[0].strInstructions}`;
  instructions.className = "instructions";
  recipeCard.appendChild(instructions);

  const favButton = document.createElement('input');
  favButton.type = 'button';
  favButton.id = 'favorites-button';
  favButton.className = "button";
  favButton.value = 'Add to Favorites';
  recipeCard.appendChild(favButton);

  const plannerButton = document.createElement('input');
  plannerButton.type = 'button';
  plannerButton.id = 'planner-button';
  plannerButton.className = 'button';
  plannerButton.value = 'Add to Planner';
  plannerButton.addEventListener('click', addToPlanner);
  recipeCard.appendChild(plannerButton);


  //logs data in the console, this was helpful to me while writing the program
  console.log("first: ", results);
};

getRecipe();
getRecipe();
getRecipe();