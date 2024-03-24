
let URL_API = 'https://blog-recetas-api.vercel.app/api/recetas'

export const obtenerRecetas = async () => {
    try {
        let response = await fetch(`${URL_API}`)
        let data = await response.json()

        return data
    } catch (err) {
        return err
    }
}


export const obtenerUnaRecetaPorCategoria = async (categoria) => {
    try {

        let response = await fetch(`${URL_API}`)
        let data = await response.json()

        let recetasPorCategoria = data.filter(element => element.categorias.includes(categoria.toLowerCase()))
        return recetasPorCategoria
    } catch (err) {
        return err
    }
}


export const crearUnaReceta = async (datos) => {
    console.log(datos)
    try {
        let response = await fetch(`${URL_API}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos)
        })

        return response
    } catch (err) {
        return err
    }
}

export const editarUnaReceta = async (id, datos) => {
    try {
        console.log(datos)
        let response = await fetch(`${URL_API}/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos)
        })

        return response
    } catch (err) {
        return err
    }
}

export const eliminarUnaReceta = async (id) => {
    try {
        let response = await fetch(`${URL_API}/${id}`, {
            method: 'DELETE'
        })

        return response
    } catch (err) {
        return err
    }
}

export const loginUsuario = async (data) => {
    try {
        let response = await fetch(`https://blog-recetas-api.vercel.app/api/usuarios/${data.email}`, {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data)
        })

        return response
    } catch (err) {

    }
}


export const crearUnUsuario = async (usuario) => {
    try {
        console.log(usuario)
        let response = await fetch(`https://blog-recetas-api.vercel.app/api/usuarios`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(usuario)
        })

        return response
    } catch (err) {
        return err
    }
}