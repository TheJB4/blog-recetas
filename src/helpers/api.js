let URL_API = 'http://localhost:3000/recetas'

export const crearUnaReceta = async (datos) => {
    try{
        let response = await fetch(URL_API,{
            method: 'POST',
            body: JSON.stringify(datos)
        })

        return response
    }catch(err){
        return err
    }
}