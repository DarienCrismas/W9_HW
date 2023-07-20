// EXTERNAL
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridRowSelectionModel} from "@mui/x-data-grid";
import {Accordion, AccordionDetails, AccordionSummary, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


// INTERNAL
import { serverCalls } from "../../api";
import { useGetData } from "../../custom-hooks";
import { CardForm } from "../CardForm";
import { theme } from "../../Theme/themes";



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
        field: "pokemon_type",
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

    const myAuth = localStorage.getItem("myAuth")
    if (myAuth === "true"){
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
                <Button variant="contained" sx={{backgroundColor: "red", "&:hover": { backgroundColor: "black",
            color: "white"
          },}} onClick={deleteData}>Delete</Button>
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
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="a1-content"
                        id="a1-header">
                        <Typography>About</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Web app for tracking your pokemon card collection.
                        </Typography>
                    </AccordionDetails>
                    </Accordion>
                    <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="a2-content"
                        id="a2-header">
                        <Typography>Instructions</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        If there was more functionality this is where I would put actual instructions. Maybe I'll expand this after capstone.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
            
        )}else{
            return(
            <Box>
                <Typography variant="h2">
                    You are not authorized to view this page, please sign in. 
                </Typography>
            </Box>
            )
     };
};
