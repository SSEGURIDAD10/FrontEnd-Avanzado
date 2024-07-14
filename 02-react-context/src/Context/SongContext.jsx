// CONTEXT tiene que ver con el manejo de estados globales en React
// Es decir, podemos compartir la misma información entre componentes
// De diferente jerarquia en el árbol de componentes.

import {createContext, useSatate, useEffect} from 'react'
import canciones from '../Utils/listaCanciones.json'

// 1) Crear contexto
const SongContext = createContext() // Va a empezar vacío mi contexto