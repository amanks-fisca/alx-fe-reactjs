import { useState } from 'react';
import { useRecipeStore } from '../components/recipeStore';

function EditRecipeForm({ recipe }) {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (e) => {
    event.preventDefault();
    updateRecipe({ id: recipe.id, title, description });
    alert('Recipe updated!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Update Recipe</button>
    </form>
  );
}

export default EditRecipeForm;
