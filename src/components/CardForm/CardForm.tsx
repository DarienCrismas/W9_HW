//EXTERNAL
import React from "react"; 
import { useDispatch, useStore } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form"; 
import { Button } from "@mui/material"; 

// INTERNAL
import {choosePokemon, chooseEdition, chooseEstimatedPrice, chooseCondition, chooseHitPoints, chooseMove1, chooseMove2, choosePromotional, chooseType } from "../../redux/slices/RootSlice"
import { CardState } from "../../redux/slices/RootSlice";
import { Input } from "../sharedComponents";
import { serverCalls } from "../../api";


interface CardFormProps{
    id?: string;
    data?: CardState;
};

export const CardForm = (props: CardFormProps) =>{
    const dispatch = useDispatch();
    const store = useStore();
    const {register, handleSubmit} = useForm<CardState>({})


    const onSubmit: SubmitHandler<CardState> =async (data, event) => {
        if (event) event.preventDefault()

        if(props.id){
            console.log(props.id)
            await serverCalls.update(props.id, data)
            console.log("Card has been updated")
            window.location.reload()
            if (event) event.target.reset()
        }else{
            dispatch(choosePokemon(data.pokemon))
            dispatch(chooseEdition(data.edition))
            dispatch(chooseEstimatedPrice(data.estimated_price))
            dispatch(chooseCondition(data.condition))
            dispatch(chooseType(data.pokemon_type))
            dispatch(choosePromotional(data.promotional))
            dispatch(chooseMove1(data.move_1))
            dispatch(chooseMove2(data.move_2))
            dispatch(chooseHitPoints(data.hit_points))

            console.log(store.getState())
        
            await serverCalls.create(store.getState() as CardState)
            window.location.reload()
            if (event) event.currentTarget.reset()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="pokemon">Pokemon</label>
                    <Input {...register("pokemon")} name="pokemon" placeholder="Name of Pokemon" />
                </div>
                <div>
                    <label htmlFor="edition">Edition</label>
                    <Input {...register("edition")} name="edition" placeholder="Card Edition" />
                </div>
                <div>
                    <label htmlFor="estimated_price">Estimated Price</label>
                    <Input {...register("estimated_price")} name="estimated_price" placeholder="Estimated Price" />
                </div>
                <div>
                    <label htmlFor="condition">Condition</label>
                    <Input {...register("condition")} name="condition" placeholder="Condition" />
                </div>
                <div>
                    <label htmlFor="pokemon_type">Type</label>
                    <Input {...register("pokemon_type")} name="pokemon_type" placeholder="Type" />
                </div>
                <div>
                    <label htmlFor="promotional">Promotional</label>
                    <Input {...register("promotional")} name="promotional" placeholder="Promo Card. True/False" />
                </div>
                <div>
                    <label htmlFor="move_1">Move 1</label>
                    <Input {...register("move_1")} name="move_1" placeholder="Move 1" />
                </div>
                <div>
                    <label htmlFor="move_2">Move 2</label>
                    <Input {...register("move_2")} name="move_2" placeholder="Move 2" />
                </div>
                <div>
                    <label htmlFor="hit_points">HP</label>
                    <Input {...register("hit_points")} name="hit_points" placeholder="Hit Points" />
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
};