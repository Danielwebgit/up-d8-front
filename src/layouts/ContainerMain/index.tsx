import Container from '@mui/material/Container';

const  ContainerMain = ({ children }: any) => {
	return (
  <Container maxWidth={false} style={{ backgroundColor: "#cfd3d566", width: "70%", marginTop: 10, marginBottom: 40}}>
      {children}
  </Container>
  );
}

export default ContainerMain;