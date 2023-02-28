import url from "./url"
import { redirect } from "react-router-dom"





//createAction => create a todo from form submissions to `/create`
export async function createAction({request}) {
    // get data from request
    const formData = await request.formData()

    const newRun = {
        subject: formData.get("subject"),
        details: formData.get("details"),
    };

    // request to create route in backend
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newRun),

    });
    
    // redirect to index route
    return redirect("/")
}

export async function updateAction({request, params}) {
    // get data from request
    const formData = await request.formData()

    const newRun = {
        subject: formData.get("subject"),
        details: formData.get("details"),
    };

    // request to create route in backend
    await fetch(url + params.id + "/", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newRun),

    });
    
    // redirect to index route
    return redirect("/")
}

export async function deleteAction({params}) {
    //get the id
    const id = params.id
    
    // request to create route in backend
    await fetch(url + id + "/", {
        method: "DELETE",
    });
    
    // redirect to index route
    return redirect("/")
}