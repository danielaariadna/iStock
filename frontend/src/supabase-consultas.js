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

// Recupera un recurso usando su id
export const fetchResourceByID = async (setState,resourceID) => {
    const { data, error } = await supabase
        .from('recursos')
        .select(`
          *,
          recurso_pertenecea_categoria (
            categoria_codigo
          )
        `).eq("id",resourceID);
    if (error) {
      console.error("Error fetching by ID: ", error);
    } else {
      setState(data[0]);
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

// Recupera un usuario usando su email
export const fetchUsuarioByID = async (setState,userID) => {
    const { data, error } = await supabase
        .from('usuarios')
        .select().eq('email',userID)
    if (error) {
      console.error("Error fetching users: ", error);
    } else {
      if (data.length > 0){
        setState(data[0]);
        console.log("query return: ",data);
        console.log("id usuario a buscar: ",userID);
      }

    }
};


// Recupera el nombre de un usuario usando su id
export const fetchNombreUsuarioByID = async (setState,userID) => {
    const { data, error } = await supabase
        .from('usuarios')
        .select().eq('email',userID)
    if (error) {
      console.error("Error fetching users: ", error);
    } else {
      if (data.length > 0){
        setState(data[0].nombre);
        console.log("query return: ",data);
        console.log("id usuario a buscar: ",userID);
        console.log("nombre usuario: ",data[0].nombre);
      }
    }
};

// Recuperar los nombres de las categorias de un recurso (HACIENDOSE)
export const fetchCategoriasByResourceID = async (setState,resourceID) => {
    const { data, error } = await supabase
        .from('recurso_pertenecea_categoria')
        .select('categorias_recursos(nombre)').eq("recurso_id",resourceID);
    if (error) {
      console.error("Error fetching categorias: ", error);
    } else {
      console.log("Categorias del recurso ",resourceID," es: ",data);
      // Construir string de categoria
      var categoriasString = "";
      data.forEach(function(e){
        categoriasString += e.categorias_recursos.nombre + ' | ';
      });
      console.log(categoriasString);
      setState(categoriasString);
    }
};

// Inserta un Usuario a la base de datos
export const insertUsuarioBasico = async (_email,_contraseña,_pais,_enableNotif,setSucessState) => {
    const userDataObj = {
      email: _email,
      contraseña: _contraseña,
      pais: _pais,
      recibir_notificaciones: _enableNotif
    }

    console.log("Objeto de usuario listo para insertar: ",userDataObj);
    const { data, error } = await supabase
        .from('usuarios')
        .insert(userDataObj).single();
    if (error) {
      console.error("Error inserting usuarios: ", error);
      setSucessState(1); // Error en la inserción
      //return false;
    } else {
      console.log("Insercion de ",userDataObj, " exitosa");
      setSucessState(2); // Exito en la insercion
      //return true;
    }
};

// Modifica un Usuario de la base de datos acorda a los parametros de nombre, apellido, username.
export const updateUsuarioCompleto = async (_email,_firstName,_lastName,_username) => {
    const userDataObj = {
      first_name : _firstName,
      last_name : _lastName,
      nombre : _username
    }

    console.log("Objeto de usuario listo para insertar: ",userDataObj);
    const { data, error } = await supabase
        .from('usuarios')
        .update(userDataObj).eq("email",_email);
    if (error) {
      console.error("Error updating usuarios: ", error);
      return false;
    } else {
      console.log("Modificacion de ",userDataObj, " exitosa");
      return true;
    }
};

