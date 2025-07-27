import { useState } from "react";
import { useRecipeStore } from "../components/recipeStore";

function AddRecipeForm() {
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        style={{ display: "block", marginBottom: "10px" }}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        style={{ display: "block", marginBottom: "10px" }}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;
