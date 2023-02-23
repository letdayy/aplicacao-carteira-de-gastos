import Dashboard from "../../components/Dashboard";
import NavBar from "../../components/NavBar";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
`

export default function Home() {
  return (
    <Div>
        <NavBar />
        <Dashboard />
    </Div>
  );
}
