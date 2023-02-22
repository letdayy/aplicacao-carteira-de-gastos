import styled from "styled-components"

const IndividualCard = styled.span`
    background-color: #fff;
    width: ${props => props.width || "220px"};
    height: 100px;
    border-radius: 20px;
    filter: drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.25));
    flex-wrap: wrap;
    padding-left: 10px;
`

const TitleCard = styled.h3`
    color: #A9A9A9;
    font-size: 20px;
    margin: 10px 0;
    display: flex;
    justify-content: center;
`

const ValueCard = styled.p`
    margin: 0 auto;
    font-size: 35px;
    font-weight: bold;
`

const DeleteIcon = styled.img`
    display: ${props => props.display || "none"};
    width: 20px;
    align-self: end;
    margin: 20px 30px;
`


export default function Card(props) {
  return (
    <IndividualCard
    width={props.width}
    >
      <TitleCard>{props.title}</TitleCard>
      <ValueCard>{props.value}</ValueCard>
      <TitleCard>{props.title2}</TitleCard>
      <ValueCard>{props.value2}</ValueCard>
      <DeleteIcon src={props.img}
      display={props.display} />
    </IndividualCard>
  );
}
