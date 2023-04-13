import { HeaderContent } from "./style";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

export default function Header(this: any) {

  return (
  
    <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12} lg={12} style={{ backgroundColor: "#8545" }}>
          <HeaderContent>
          <Box>
              <ul className="menu">
                <>
                  <li>
                    <NavLink to="/clientes/registrar" className="nav-link">
                      Registrar cliente
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/clientes/listar" className="nav-link">
                      Lista de clientes
                    </NavLink>
                  </li>
                </>
              </ul>
            </Box>
  
          </HeaderContent>
        </Grid>
      </Grid> 
  )
}