// CONTEXT tiene que ver con el manejo de estados globales en React
// Es decir, podemos compartir la misma información entre componentes
// De diferente jerarquia en el árbol de componentes.

import { createContext, useState, useEffect } from "react";
import canciones from "../Utils/listaCanciones.json";

// 1) Crear contexto
const SongContext = createContext(); // Va a empezar vacío mi contexto

//* 2) Creamos el proveedor del contexto, es decir maneja de donde se obtiene la info
//* y como se comparte
//* el proveedor va a envolver a todos los componentes que quieran consumir el contexto

function SongProvider({ children }) {
    const [list, setList] = useState([]); // lista canciones
    const [loading, setLoading] = useState(true); // ¿está cargando?
    const [selectedSong, setSelectedSong] = useState({}); // canción seleccionada

    //* Simular la llamada a la API
    useEffect(() => {
        setTimeout(() => {
            setList(canciones);
            setLoading(false); // cambia a false xk ya están cargando las canciones
        }, 2000);
    }, []);

    // Mandamos un objeto
    const data = {
        list,
        loading,
        selectedSong,
        setSelectedSong,
    };

    return (
        // RETURN DE UN COMPONENTE
        <SongContext.Provider value={data}>{children}</SongContext.Provider>
    );
}

export { SongContext, SongProvider };
