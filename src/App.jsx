import {Route, Routes} from "react-router-dom";
// import { useState } from 'react'
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Topbar } from "./scenes/global/Topbar";
import {Sidebars} from "./scenes/global/Sidebar";
import {Dashboard} from "./scenes/dashboard";
import {Team} from "./scenes/team/index.jsx";
// import {Invoices} from "./scenes/invoices";
// import {Contacts} from "./scenes/contacts";
// import {Bar} from "./scenes/bar";
// import {Form} from "./scenes/form";
// import {Line} from "./scenes/line";
// import {Pie} from "./scenes/pie";
// import {FAQ} from "./scenes/faq";
// import {Geography} from "./scenes/geagraphy";
// import {Calendar} from "./scenes/calendar";
import "./App.css";

export function App() {
  const [theme, colorMode] = useMode();

  return (
    
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <div className="app">
          <Sidebars />
          <main className="content">
          
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              {/* <Route path="/invoices" element={<Invoices />} /> */}
              {/* <Route path="/contacts" element={<Contacts />} /> */}
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
              {/* <Route path="/calendar" element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

