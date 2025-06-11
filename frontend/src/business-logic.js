import {insertCompraCreditos,insertCompraRecurso,insertCompraRecursoUsandoCreditos,insertCompraSubscripcion} from "./supabase-consultas";



// Comprar recurso usando una tarjeta de credito y dinero real
export const comprarRecursoConDinero = async (_idRecurso,_emailUsuario,_nroTarjetaCredito) => {
    insertCompraRecurso(_emailUsuario,_nroTarjetaCredito,_idRecurso);
};

// Comprar recurso usando creditos (se resta el valor en creditos de un recurso, y se lo resta a los creditos que posea el usuario)
export const comprarRecursoConCreditos = async (_idRecurso,_emailUsuario) => {
    insertCompraRecursoUsandoCreditos(_emailUsuario,_idRecurso);
};

// Comprar recurso usando subscripción (se restan de la cantidad mensual contratada)
export const comprarRecursoConSubscripcion = async (setState,_idRecurso,_emailUsuario) => {

};

// Comprar creditos usando una tarjeta de credito y dinero real
export const comprarCreditosConDinero = async (_cantidadCreditos,_emailUsuario,_nroTarjetaCredito) => {
    insertCompraCreditos(_emailUsuario,_nroTarjetaCredito,_cantidadCreditos);
};

// Comprar subscripcion usando una tarjeta de credito y dinero real
export const comprarSubscripcionConDinero = async (_tipoSubscripcion,_emailUsuario,_nroTarjetaCredito) => {
    insertCompraSubscripcion(_emailUsuario,_nroTarjetaCredito,_tipoSubscripcion);
};

