import React from "react";

function RecipeView({recipe, deleteRecipe}){
return (
    <tr>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td className="photo"><img src={recipe.photo} alt ="http://www.nopicavailable.com"/></td>
        <td className="content-td"><p>{recipe.ingredients}</p></td>
        <td className="content-td"><p>{recipe.preparation}</p></td>
        <td><button name="delete"  onClick={deleteRecipe}>Delete</button></td>
    </tr>
);
}

export default RecipeView;

