import { redirect } from "react-router-dom"

// YOUR DEPLOYED API BASE URL
const URL = "localhost:3000"

//createAction => create a todo from form submissions to `/create`
export const createAction = async ({request}) => {
    // get form data
    const formData = await request.formData()

    // construct request body
    const newRun = {
        subject: formData.get("subject"),
        details: formData.get("details")
    }

    // send request to backend
    await fetch(URL + "/runs/", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newRun)
    })

    // redirect back to index page
    return redirect("/")
}

//updateAction => update a todo from form submissions to `/update/:id`
export const updateAction = async ({request, params}) => {
    // get form data
    const formData = await request.formData()

    // get todo id
    const id = params.id

    // construct request body
    const updatedRun = {
        subject: formData.get("subject"),
        details: formData.get("details")
    }

    // send request to backend
    await fetch(URL + `/runs/${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedRun)
    })

    // redirect back to show page page
    return redirect(`/post/${id}`)
}

//deleteAction => delete a todo from form submissions to `/delete/:id`
export const deleteAction = async ({params}) => {
    // get todo id
    const id = params.id

    // send request to backend
    await fetch(URL + `/runs/${id}/`, {
        method: "delete",
    })

    // redirect back to show page page
    return redirect("/")
}