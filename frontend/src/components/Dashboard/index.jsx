import { Link } from "react-router-dom";
import Card from "../Card";
import styled from "styled-components";

const Body = styled.body`
    background-color: #D8F1E8;
    height: 100vh;
    width: 100vw;
`;

const Title = styled.h1`
    margin: 100px 150px;
    font-size: 50px;
`;

const CardPrincipal = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
`

const CardSecundario = styled.div`
    margin: 150px 0;
    display: flex;
    justify-content: space-around;
    width: 100vw;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LinkCard = styled(Link)`
    margin: 10px 0;
    text-decoration: none;
    color: #81BAEF;
    font-size: 20px;
`






export default function Dashboard() {
  return (
    <Body>
      <Title>Dashboard</Title>

      <CardPrincipal>
        <Card 
          title="Saldo Total"
          value="R$ 1.000,00"/>
      </CardPrincipal>

      <CardSecundario>
        <Content>
          <Card 
          title="Receitas"
          value="R$ 3.000,00"
          />
          <LinkCard to="/income">Visualizar Receitas</LinkCard>
        </Content>
        <Content>
          <Card 
          title="Despesas"
          value="R$ 2.000,00"/>
          <LinkCard to="/expenses">Visualizar Despesas</LinkCard>
        </Content>
      </CardSecundario>
    </Body>
  );
}
