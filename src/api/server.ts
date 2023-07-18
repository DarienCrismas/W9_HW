// INTERNAL
import { CardState } from "../redux/slices/RootSlice";

let token = "b8c5a08d4f043beee5dbbe789fec3d276a0526f1b6c0c86a " 

export const serverCalls = {
    get:async () => {
        const response = await fetch(`https://flask-api-hw.glitch.me/api/cards`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": `Bearer: ${token}`
            },
        });
        if (!response.ok){
            throw new Error("Failed to fetch data"), response.status
        };
        return await response.json()
    },

    create:async (data:CardState) => {
        const response = await fetch(`https://flask-api-hw.glitch.me/api/cards`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": `Bearer: ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error("Failed to create data"), response.status
        };
        return await response.json()
    },
    update:async (id: string, data:CardState) => {
        const response = await fetch(`https://flask-api-hw.glitch.me/api/cards/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": `Bearer: ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error("Failed to update data"), response.status
        };
        return await response.json()
    },
    delete:async (id: string) => {
        const response = await fetch(`https://flask-api-hw.glitch.me/api/cards/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": `Bearer: ${token}`
            },
        });
        if (!response.ok){
            throw new Error("Failed to delete data"), response.status
        };
    },
};