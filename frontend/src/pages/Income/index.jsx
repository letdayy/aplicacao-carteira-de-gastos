import Card from "../../components/Card";
import NavBar from "../../components/NavBar";
import Delete from "../../images/delete.png";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
`

const Body = styled.body`
    background-color: #D8F1E8;
    height: 100vh;
    width: 100vw;
`

const Title = styled.h1`
    margin: 100px 150px;
    font-size: 50px;
`

const CardList = styled.div`
display: flex;
justify-content: center;
`



export default function Income() {
  return (
    <Div>
      <NavBar />
    <Body>
        <Title>Receitas</Title>
        <CardList>
        <Card
        width={"60%"}
        title="Nome da receita"
        value="Trabalho"
        title2="Valor"
        value2="R$1500,00"
        img={Delete}
        display="flex" />
        </CardList>
    </Body>
    </Div>
  );
}