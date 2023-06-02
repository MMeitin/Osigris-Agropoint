import React, { useEffect } from "react";
import Modal from "react-modal";
import CropForm from "../component/cropForm.jsx";

const AddCropModal = ({ isOpen, onRequestClose, onSave, editingCrop }) => {
  useEffect(() => {
    if (editingCrop) {
      // Rellena los campos del formulario con los datos del cultivo existente
    } else {
      // Limpia los campos del formulario para permitir la creación de un nuevo cultivo
    }
  }, [editingCrop]);

  return (
    <Modal ariaHideApp={false} isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>{editingCrop ? "Editar cultivo" : "Agregar nuevo cultivo"}</h2>
      <CropForm onSave={onSave} crop={editingCrop} />
      <button onClick={onRequestClose}>Cerrar</button>
    </Modal>
  );
};

export default AddCropModal;
