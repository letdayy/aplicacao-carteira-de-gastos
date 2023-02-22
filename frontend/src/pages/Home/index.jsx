import Navigator from "../../components/Nav";
import "./style.css";

export default function Home() {
  return (
    <div>
        <Navigator />
        <body>
            <h1>
                Dashboard
            </h1>

            <div className="cardPrincipal">
                <span className="card">
                    <h3>Saldo total</h3>
                    <p>R$ 5.000,00</p>
                </span>
            </div>

            <div className="cardSecundario">
                <span className="card">
                    <h3>Saldo total</h3>
                    <p>R$ 5.000,00</p>
                </span>
                <span className="card">
                    <h3>Saldo total</h3>
                    <p>R$ 5.000,00</p>
                </span>
            </div>
        </body>
    </div>
  );
}
