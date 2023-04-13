import Grid from '@mui/material/Grid';
import { TextField, FormControl, FormGroup, Card, Button } from '@material-ui/core';
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import { useEffect, useState } from 'react';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import { fetchClients, actionDeleteClient } from '../../redux/store/fetchActions';
import { useDispatch, useSelector } from 'react-redux';
import store, { RootState } from '../../redux/store';
import { Link } from 'react-router-dom';


const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    display: "flex",
    borderRadius: 70,
    height: 36,
    width: 130,
    alignItems: "center",
    flexDirection: "collum",
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    justifyContent: "center",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 70,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const ClientScreen = () => {

  const dispatch = useDispatch();
  const { clients }: any = useSelector((state: RootState): any => state.clients) ?? [];
  console.log(clients)
  useEffect(() => {
    dispatch(fetchClients());
  }, [])

  const handleClientDelete = (clientId: any) => {
    store.dispatch(actionDeleteClient(clientId));
  }

  const handleProductEdit = (clientData: any) => {
    const clientNew = {
      'id': clientData.id,
      "name": clientData.name,
      "cpf": clientData.cpf,
      "address_detail": clientData.address[0]?.address_detail,
      "state_id": clientData.address[0]?.address_state[0].id,
      "city_id": clientData.address[0]?.address_city[0].id,
      'gender': clientData.gender,
      'date_of_birth': clientData.date_of_birth
    }

    localStorage.setItem("clientData", JSON.stringify(clientNew))
  }

  return (
    <Grid container spacing={0} style={{ borderRadius: 70, marginTop: 20 }}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Card style={{ padding: 40 }}>
          <img style={{ width: 120, height: 100 }} src="https://c.na207.content.force.com/servlet/servlet.ImageServer?id=0150L00000APKa2QAH&oid=00DE0000000c48tMAA" alt="" />
          <div style={{ padding: 20, border: "1px solid #1e1e1f", borderRadius: 15 }}>
            <label htmlFor="" style={{ fontWeight: "bold", fontSize: 22, color: "#764bb5" }}>Consulta cliente</label>
            <FormControl style={{ flexDirection: "row" }}>
              <FormGroup style={{ margin: 12, display: "flex", flexDirection: "row", alignItems: "center" }}>
                CPF: <TextField type="number" InputProps={{ style: { borderRadius: '20px', width: 150 } }} hiddenLabel size="small" variant="outlined" style={{ background: '#fff' }} name="name_client" />
              </FormGroup>

              <FormGroup style={{ margin: 12, display: "flex", flexDirection: "row", alignItems: "center" }}>
                Nome: <TextField InputProps={{ style: { borderRadius: '70px', width: 180 } }} hiddenLabel size="small" variant="outlined" style={{ background: '#fff', borderWidth: "1" }} name="delivery_address" />
              </FormGroup>

              <FormGroup style={{ margin: 12, display: "flex", flexDirection: "row", alignItems: "center" }}>
                Data de Nascimento: <input style={{ width: 140, borderRadius: 15, height: '36px' }} type="date" />
              </FormGroup>

              <FormGroup style={{ margin: 12, display: "flex", flexDirection: "row", alignItems: "center" }}>
                <FormControl style={{ margin: 12, display: "flex" }}>
                  <RadioGroup style={{ display: "flex", flexDirection: "row", justifyContent: "center", height: 40, alignItems: "center" }} name="activated" sx={{ my: 1 }}>
                    <div style={{ display: "flex" }}>
                      <label htmlFor="" style={{ marginLeft: 20 }}>Sexo</label>
                      <Radio style={{ marginLeft: 20 }} value={'1'} label="Masculino" />
                      <Radio style={{ marginLeft: 20 }} value={'0'} label="Feminino" />
                    </div>
                  </RadioGroup>
                </FormControl>
              </FormGroup>
            </FormControl>

            <FormControl style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <FormGroup style={{ margin: 12, display: "flex", flexDirection: "row", alignItems: "center" }}>
                <InputLabel id="demo-select-small">Estado:</InputLabel>
                <Select
                  labelId="demo-customized-select-label"
                  id="demo-select-small"
                  name="state_id"
                  value="valor"
                  input={<BootstrapInput />}
                >
                  <MenuItem value="valor">Tocantins</MenuItem>
                  <MenuItem value="valor">Goiás</MenuItem>
                  <MenuItem value="valor">Brasília</MenuItem>
                </Select>
              </FormGroup>

              <FormGroup style={{ margin: 12, display: "flex", flexDirection: "row", alignItems: "center" }}>
                <InputLabel id="demo-select-small">Cidade:</InputLabel>
                <Select
                  labelId="demo-customized-select-label"
                  id="demo-select-small"
                  name="state_id"
                  value="valor"
                  size="medium"
                  input={<BootstrapInput />}
                >
                  <MenuItem value="valor">Tocantins</MenuItem>
                  <MenuItem value="valor">Goiás</MenuItem>
                  <MenuItem value="valor">Brasília</MenuItem>
                </Select>
              </FormGroup>
            </FormControl>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <FormControl style={{ display: "flex", flexDirection: "row", justifyContent: "end" }}>
                <FormGroup style={{ margin: 12, display: "flex", flexDirection: "row", alignItems: "center" }}>
                  <Button style={{ height: 40, width: 100 }} type="submit" variant="contained" color="primary">
                    Pesquisar
                  </Button>

                  <Button style={{ marginLeft: 10, height: 40, width: 100 }} type="submit" variant="contained" color="primary">
                    Limpar
                  </Button>
                </FormGroup>
              </FormControl>
            </Grid>
          </div>
        </Card>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Card style={{ padding: 40 }}>
          <div style={{ padding: 20, border: "1px solid #1e1e1f", borderRadius: 15, justifyContent: "center" }}>
            <label htmlFor="" style={{ fontWeight: "bold", fontSize: 22, color: "#4b73b5" }}>Resultado da pesquisa</label>
            <FormControl style={{ display: 'flex', justifyContent: "center", marginTop: 40 }} >
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell></StyledTableCell>
                      <StyledTableCell align="right">Cliente</StyledTableCell>
                      <StyledTableCell align="right">CPF</StyledTableCell>
                      <StyledTableCell align="right">Data Nasc.</StyledTableCell>
                      <StyledTableCell align="right">Estado</StyledTableCell>
                      <StyledTableCell align="right">Cidade</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {clients.data?.map((row: any) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          <Link to={`/clientes/editar/${row.id}`}>
                            <Button onClick={() => handleProductEdit(row)} style={{ height: 40, width: 100, backgroundColor: "#4b8e2f", color: "#fff" }} type="submit" variant="contained">
                              Editar
                            </Button>
                          </Link>

                          <Button onClick={() => handleClientDelete(row.id)} style={{ height: 40, width: 100, marginLeft: 10, backgroundColor: "#c13226", color: "#fff" }} type="submit" variant="contained" color="primary">
                            Excluir
                          </Button>
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.name}</StyledTableCell>
                        <StyledTableCell align="right">{row.cpf}</StyledTableCell>
                        <StyledTableCell align="right">{row.date_of_birth}</StyledTableCell>
                        <StyledTableCell align="right">{row.address[0]?.address_state[0].letter}</StyledTableCell>
                        <StyledTableCell align="right">{row.address[0]?.address_city[0].title}</StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </FormControl>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ClientScreen;