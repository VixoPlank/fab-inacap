import { useState, useEffect } from "react";

const useForm = (initialState, localStorageKey) => {
  const [formData, setFormData] = useState(initialState);

  // Cargar los datos del localStorage al inicializar
  useEffect(() => {
    if (!localStorageKey) {
      return;
    }
    const storedData = localStorage.getItem(localStorageKey);
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setFormData(parsedData);
      } catch (error) {
        console.error("Error al analizar los datos del localStorage:", error);
      }
    }
  }, [localStorageKey]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const reset = () => {
    setFormData(initialState);
    // Limpiar los datos del localStorage al reiniciar el formulario
    localStorage.removeItem(localStorageKey);
  };

  const validateEmptyFields = () => {
    return Object.keys(formData).filter((key) => formData[key] === "");
  };

  // Guardar los datos en el localStorage como cadena JSON válida
  useEffect(() => {
    const dataToStore = JSON.stringify(formData);
    localStorage.setItem(localStorageKey, dataToStore);
  }, [formData, localStorageKey]);

  return { formData, handleChange, reset, validateEmptyFields };
};

export default useForm;
