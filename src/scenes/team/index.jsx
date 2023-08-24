import { Box,Typography, useTheme } from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import {mockDataTeam} from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import { Header } from "../../components/Header";


export const Team=()=>{
    const theme = useTheme();

    const colors = tokens(theme.palette.mode);
    const columns = [
        {
        field: "id",headerName:"ID"
    },
    {
        field:"name", 
        headerName:"Nombre", 
        flex: 1,
        cellClassName:"name-column--cell"
    },
    {
        field:"email", 
        headerName:"correo",
        flex: 1,
    },
    {
        field:"age",
        headerName:"Edad",
        type:"number",
        headerAlign:"left",
        align:"left",
    },
    {
        field:'phone', 
        headerName:"Telefono",
        flex: 1,
    },
    {
        field:"access", 
        headerName:"Access Level",
        flex:1,
        renderCell: ({row:{access}}) =>{
            return(
                <Box 
                width="60%"
                m="0 auto"
                p="5px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                backgroundColor= {
                    access === 'admin' 
                    ? `${colors.greenAccent[600]}` 
                    : `${colors.greenAccent[700]}`

                }
                borderRadius="4px"


                >
                    { access === "admin" && <AdminPanelSettingsOutlinedIcon /> }                    
                    { access === "manager" && <SecurityOutlinedIcon /> }
                    { access === "user" && <LockOpenOutlinedIcon /> }
                    <Typography  color={colors.grey[100]} sx={{ml:"5px"}}>{access}</Typography>

                </Box>
            )

        }
    }
]

    return (
        <Box m="20px">
            <Header title="TEAM" subtitle="Managing the Team members"/>

            <Box m="40px">
                <DataGrid 
                    rows={mockDataTeam}
                    columns={columns}
                />
            </Box>
        </Box>
    )

}