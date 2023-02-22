import { Link } from "react-router-dom";
import Card from "../Card";
import Delete from "../../images/delete.png";
import "./style.css";

export default function Dashboard() {
  return (
    <body>
      <h1>Dashboard</h1>

      <div className="cardPrincipal">
        <Card 
          title="Saldo Total"
          value="R$ 1.000,00"/>
      </div>

      <div className="cardSecundario">
        <div className="cardContent">
          <Card 
          title="Receitas"
          value="R$ 3.000,00"
          />
          <Link to="">Visualizar Receitas</Link>
        </div>
        <div className="cardContent">
          <Card 
          title="Despesas"
          value="R$ 2.000,00"/>
          <Link to="/expenses">Visualizar Despesas</Link>
        </div>
      </div>
    </body>
  );
}
