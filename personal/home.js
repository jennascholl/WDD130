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
  }
};

//put data from API on the page
function displayRecipe(data) {
  const outputElement = document.querySelector("#output");
  results = data;
  //for some reason the ingredients are not in an array on the API so I couldn't use a loop here
  const html = `<div id="recipe-box">                 
                  <img src="${results.meals[0].strMealThumb}" alt="Image of ${results.meals[0].strMeal}">
                </div>
                <div id="description-box">
                    <h2 id="recipe-name">${results.meals[0].strMeal}</h2>
                    <input type="button" id="favorite" value="Add to Favorites">
                    <input type="button" id="planner" value="Add to Planner">
                </div>
                <div id="cooking-info">
                  <ui>
                    <h3>Ingredients:</h3>
                    <li>${results.meals[0].strMeasure1} ${results.meals[0].strIngredient1}</li>
                    <li>${results.meals[0].strMeasure2} ${results.meals[0].strIngredient2}</li>
                    <li>${results.meals[0].strMeasure3} ${results.meals[0].strIngredient3}</li>
                    <li>${results.meals[0].strMeasure4} ${results.meals[0].strIngredient4}</li>
                    <li>${results.meals[0].strMeasure5} ${results.meals[0].strIngredient5}</li>
                    <li>${results.meals[0].strMeasure6} ${results.meals[0].strIngredient6}</li>
                    <li>${results.meals[0].strMeasure7} ${results.meals[0].strIngredient7}</li>
                    <li>${results.meals[0].strMeasure8} ${results.meals[0].strIngredient8}</li>
                    <li>${results.meals[0].strMeasure9} ${results.meals[0].strIngredient9}</li>
                    <li>${results.meals[0].strMeasure10} ${results.meals[0].strIngredient10}</li>
                    <li>${results.meals[0].strMeasure11} ${results.meals[0].strIngredient11}</li>
                    <li>${results.meals[0].strMeasure12} ${results.meals[0].strIngredient12}</li>
                    <li>${results.meals[0].strMeasure13} ${results.meals[0].strIngredient13}</li>
                    <li>${results.meals[0].strMeasure14} ${results.meals[0].strIngredient14}</li>
                    <li>${results.meals[0].strMeasure15} ${results.meals[0].strIngredient15}</li>
                    <li>${results.meals[0].strMeasure16} ${results.meals[0].strIngredient16}</li>
                    <li>${results.meals[0].strMeasure17} ${results.meals[0].strIngredient17}</li>
                    <li>${results.meals[0].strMeasure18} ${results.meals[0].strIngredient18}</li>
                    <li>${results.meals[0].strMeasure19} ${results.meals[0].strIngredient19}</li>
                    <li>${results.meals[0].strMeasure20} ${results.meals[0].strIngredient20}</li>
                  </ui>
                    <h3>Instructions:</h3>
                    <p>${results.meals[0].strInstructions}</p>
                </div>`;
  outputElement.innerHTML = html;
  //logs data in the console, this was helpful to me while writing the program
  console.log("first: ", results);
};

//run function getRecipe when the generate button is clicked
document.querySelector('#generate').addEventListener('click', getRecipe);

//gets current year for copyright in the footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();