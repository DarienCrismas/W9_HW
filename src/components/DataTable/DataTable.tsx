// EXTERNAL
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridRowSelectionModel} from "@mui/x-data-grid";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";


// INTERNAL
import { serverCalls } from "../../api";
import { useGetData } from "../../custom-hooks";
import { CardForm } from "../CardForm";



const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "pokemon",
        headerName: "Pokemon",
        width: 150,
    },{
        field: "edition",
        headerName: "Edition",
        width: 150,
    },{
        field: "estimated_price",
        headerName: "Estimated Price",
        width: 150,
        type: "number"
    },{
        field: "condition",
        headerName: "Condition",
        width: 150,
    },{
        field: "type",
        headerName: "Type",
        width: 100,
    },{
        field: "promotional",
        headerName: "Promotional Card",
        width: 150,
        type: "boolean"
    },{
        field: "move_1",
        headerName: "Move 1",
        width: 150,
    },{
        field: "move_2",
        headerName: "Move 2",
        width: 150,
    },{
        field: "hit_points",
        headerName: "HP",
        width: 100,
        type: "number"
    }
];


export const DataTable = () =>{
    const {cardData, getData} = useGetData();
    const [open, setOpen] = useState(false);
    const [gridData, setData] = useState<GridRowSelectionModel>([])

    const handleOpen = () =>{
        setOpen(true);
    };
    const handleClose = () =>{
        setOpen(false);
    };

    const deleteData = () =>{
        serverCalls.delete(`${gridData[0]}`)
        getData()
    };

    return (
        <Box sx={{height: 400, width: "100%"}}>
            <DataGrid 
                rows={cardData}
                columns={columns}
                initialState={{
                    pagination:{
                        paginationModel:{
                            pageSize: 5
                        }
                    }
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                onRowSelectionModelChange={(newSelectionModel) => setData(newSelectionModel)}
                />
            <Button onClick={handleOpen}>Update</Button>
            <Button variant="contained" color="warning" onClick={deleteData}>Delete</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update A Card</DialogTitle>
                <DialogContent>
                    <DialogContentText>Card id: {gridData[0]}</DialogContentText>
                    <CardForm id={`${gridData[0]}`} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="error">Cancel</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
};
