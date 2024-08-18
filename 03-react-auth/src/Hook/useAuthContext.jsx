// Consumir el contexto
import { useContext } from "react";
import { AuthContext } from '@/Context/AuthContext';

export const useAuthContext = () => {
    // Quiero usar mi contexto y esto lo guardo en Context
    const context = useContext(AuthContext)
    // Si no se crea el contexto mando un error, si e undefined lanzo el error
    if(!context) {
        throw Error('useAuthContext debde ser usado dentro de AuthProvider')
    }
    return context
}