import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: ${(props) => props.theme.background};
  padding: 1vw;
  border-radius: 1vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.6); */
  .title {
    font-size: 0.7em;
    position: absolute;
    top: 0.3em;
    left: 0;
    width: 100%;
    text-align: center;
  }
  .content {
    font-size: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 100%;
    width: 100%;
  }
`;
