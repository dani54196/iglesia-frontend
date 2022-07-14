import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2rem;
`;

export const Software = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 1rem 2rem;

  h1,
  div {
    margin: 5px;
    font-size: 2rem;
  }
`;

export const InfoMain = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;

  @media screen and (max-width: 970px) {
    display: block;
  }
`;

export const InfoIglesia = styled.div`
  p {
    margin: 5px;
  }
`;

export const Panel = styled.div`
  p {
    margin: 5px;
    padding: 1rem;
    background: #ff4040;
    color: #000;
  }
`;

export const InfoGeneral = styled.div`
  width: 100%;
  background-color: #cdcdcd;
  color: #000;
  display: inline-block;
  padding: 2rem;
  text-align: center;
`;
