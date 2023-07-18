// EXTERNAL
import React, {useState, useEffect} from "react";

// INTERNAL
import { serverCalls } from "../api";
import { CardState } from "../redux/slices/RootSlice";

export const useGetData = () =>{
    const [cardData, setData] = useState<CardState[]>([]); 

    async function handleDataFetch() {
        const result = await serverCalls.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch()
    }, [])

    return {cardData, getData: handleDataFetch}
}