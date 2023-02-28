import url from "./url"

//indexLoader => get all todos for index route
export async function indexLoader() {
    // send request to backend
    const response = await fetch(url)

    // get data from response
    const data = await response.json()

    // return data
    return data
}

//showLoader => get a single todo for show route
export async function showLoader({params}) {
    const response = await fetch(url + params.id + "/")
    const data = await response.json()
    return data
}