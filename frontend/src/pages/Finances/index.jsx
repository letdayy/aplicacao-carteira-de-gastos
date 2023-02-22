import Card from "../../components/Card";
import Delete from "../../images/delete.png";
import Navigator from "../../components/Nav";
import "./style.css";

export default function Finances() {
  return (
    <body className="financesBody">
      <Navigator />
        <h1>Despesas</h1>
        <div className="CardList">
        <Card
        width={"900px"}
        title="Nome do gasto"
        value="Uber"
        title2="Custo"
        value2="R$50,00"
        img={Delete}
        display="inline" />
        </div>
    </body>
  );
}