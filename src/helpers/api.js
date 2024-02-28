let URL_API = 'http://localhost:3000'

export const obtenerUnaRecetaPorCategoria = async (categoria) => {
    try {

        let response = await fetch(`${URL_API}/recetas`)
        let data = await response.json()
        
        let recetasPorCategoria = data.filter(element => element.categorias.includes(categoria.toLowerCase()))
        return recetasPorCategoria
    } catch (err) {
        return err
    }
}


export const crearUnaReceta = async (datos) => {
    try {
        console.log(datos)
        let response = await fetch(`${URL_API}/recetas`, {
            method: 'POST',
            body: JSON.stringify(datos)
        })

        return response
    } catch (err) {
        return err
    }
}

export const editarUnaReceta = async (id, datos) => {
    try {
        let response = await fetch(`${URL_API}/recetas/${id}`, {
            method: 'PUT',
            body: JSON.stringify(datos)
        })

        return response
    } catch (err) {
        return err
    }
}

export const eliminarUnaReceta = async (id) => {
    try {
        let response = await fetch(`${URL_API}/recetas/${id}`, {
            method: 'DELETE'
        })

        return response
    } catch (err) {
        return err
    }
}

export const obtenerUsuarios = async () => {
    try{
        let response = await fetch(`${URL_API}/usuarios`)

        let data = await response.json()

        return data
    }catch(err){

    }
}


export const crearUnUsuario = async (usuario) =>{
    try{
        let usuarios = await obtenerUsuarios()
        let usuarioExistente = usuarios.find((user) => user.email === usuario.email)

        console.log(usuarioExistente)
        if(usuarioExistente){
            throw {
                message:`El usuario ${usuario.email} ya existe!`,
                status:400
            }
        }else{
            let response = await fetch(`${URL_API}/usuarios`,{
                method: 'POST',
                body:JSON.stringify(usuario)
            })
            
            return response
        }

    }catch(err){
        return err
    }
}