import React, { useState } from "react";

const CropForm = ({ crop, onSave }) => {
  const [cropType, setCropType] = useState(crop ? crop.crop_type : "");
  const [description, setDescription] = useState(crop ? crop.description : "");
  const [dimensionHa, setDimensionHa] = useState(crop ? crop.dimension_ha : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid =
      validateField(cropType) &&
      validateField(description) &&
      validateField(dimensionHa);

    if (isValid) {
      onSave({
        crop_type: cropType,
        description: description,
        dimension_ha: dimensionHa,
      });
    } else {
      console.log("Error al agregar el nuevo cultivo", error);
    }
  };

  const validateField = (value) => {
    if (value.trim() === "") {
      return false;
    }
    return true;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tipo de cultivo"
        value={cropType}
        onChange={(e) => setCropType(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Dimensión (ha)"
        value={dimensionHa}
        onChange={(e) => setDimensionHa(e.target.value)}
      />
      <button type="submit">{crop ? "Editar cultivo" : "Crear cultivo"}</button>
    </form>
  );
};

export default CropForm;
