import { Fragment } from "react";
import Header from "./Header";
import Content from "./Content";
import ContainerMain from './ContainerMain'


export default ({ children }: any) =>
(
	<Fragment>
    <ContainerMain>
    
      <Header/>
      <Content>{children}</Content>

    </ContainerMain>
  </Fragment>
);


