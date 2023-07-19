import { createSlice } from "@reduxjs/toolkit";


export interface CardState {
    pokemon: string;
    edition: string;
    estimated_price: number;
    condition: string;
    pokemon_type: string;
    promotional: boolean;
    move_1: string;
    move_2: string;
    hit_points: number;
};

const initialState: CardState = {
    pokemon: "",
    edition: "",
    estimated_price: 0,
    condition: "",
    pokemon_type: "",
    promotional: false,
    move_1: "",
    move_2: "",
    hit_points: 0,
};

const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers: {
        
        choosePokemon: (state, action) => { state.pokemon = action.payload },
        chooseEdition: (state, action) => { state.edition = action.payload },
        chooseEstimatedPrice: (state, action) => { state.estimated_price = action.payload },
        chooseCondition: (state, action) => { state.condition = action.payload },
        chooseType: (state, action) => { state.pokemon_type = action.payload },
        choosePromotional: (state, action) => { state.promotional = action.payload },
        chooseMove1: (state, action) => { state.move_1 = action.payload },
        chooseMove2: (state, action) => { state.move_2 = action.payload },
        chooseHitPoints: (state, action) => { state.hit_points = action.payload }
    }
});

// export reducers
export const reducer = rootSlice.reducer;
console.log(rootSlice)
export const {
    choosePokemon,
    chooseEdition,
    chooseEstimatedPrice,
    chooseCondition,
    chooseType,
    choosePromotional,
    chooseMove1,
    chooseMove2,
    chooseHitPoints
} = rootSlice.actions;