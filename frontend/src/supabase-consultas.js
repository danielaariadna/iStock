import supabase from "./supabase-client"; // Permite un singleton con la conexión a la base de datos
import { useState, useEffect } from "react";

// NOTA: el setState que se pasa por parametro es la función que se usará para actualizar el estado en el componente padre

// Recupera los recursos
export const fetchResources = async (setState) => {
    const { data, error } = await supabase
        .from('recursos')
        .select(`
          *,
          recurso_pertenecea_categoria (
            categoria_codigo
          )
        `);
    if (error) {
      console.error("Error fetching: ", error);
    } else {
      setState(data);
    }
};

// Recupera todos los Usuarios
export const fetchUsuarios = async (setState) => {
    const { data, error } = await supabase
        .from('usuarios')
        .select('*');
    if (error) {
      console.error("Error fetching users: ", error);
    } else {
      setState(data);
    }
};

// Inserta un Usuario a la base de datos


// Actualiza los datos de un Usuario (HACIENDOSE)
export const updateUsuario = async (setState,userId) => {
    const { data, error } = await supabase
        .from('usuarios')
        .select('*');
    if (error) {
      console.error("Error fetching users: ", error);
    } else {
      setState(data);
    }
};