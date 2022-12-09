import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialFormState = {
    name:"",
    cuisine:"",
    photo:"",
    ingredients:"",
    preparation:"",
  };

  const [formData, setFormData] = useState({...initialFormState});
  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: [target.value]
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData({...initialFormState});
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name" >
                <input 
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={formData.name}
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input 
                id="cuisine"
                type="text"
                placeholder="Cuisine"
                name="cuisine"
                onChange={handleChange}
                value={formData.cuisine}
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input 
                id="photo"
                type="text"
                name="photo"
                placeholder="Photo"
                onChange={handleChange}
                value={formData.photo}
                />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea 
                id="ingredients"
                name="ingredients"
                type="text"
                placeholder="Ingredients"
                onChange={handleChange}
                value={formData.ingredients}
                />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea 
                id="preparation"
                type="text"
                name="preparation"
                placeholder="Preparation"
                onChange={handleChange}
                value={formData.preparation}
                />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
