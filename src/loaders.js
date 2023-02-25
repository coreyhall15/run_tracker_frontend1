// YOUR DEPLOYED API BASE URL
const URL = "localhost:3000"

//indexLoader => get all todos for index route
export const indexLoader = async () => {
    const response = await fetch(URL + "/runs/")
    const runs = await response.json()
    return runs
}

//showLoader => get a single todo for Show route
export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/run/${params.id}/`)
    const run = await response.json()
    return run
}