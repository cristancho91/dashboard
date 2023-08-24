import { Box } from "@mui/material"
import { Header } from "../../components/Header";
// import { useTheme } from "@mui/material";
// import { tokens } from "../../theme";

export const Dashboard = ()=>{
    // const theme = useTheme();

    // const colors = tokens(theme.palette.mode);

    return <Box m="20px"> 
        <Box display="flex" justifyContent="space-between" alignItems="center" >
            
            <Header title="DASHBOARD" subtitle="Welcom to you dashboard" />

        </Box>
    </Box>

}