import {createTheme} from "@mui/material"
import { red } from "@mui/material/colors"
import { fontFamily, typography } from "@mui/system"

export const theme = createTheme({
    palette:{
        primary: red,
    },
    typography:{
        fontFamily: "monospace"
    },
})