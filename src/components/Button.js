import styled from "styled-components";

export const ButtonContainer = styled.button`

  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid lightblue;
  border-radius: 0.5rem;
  padding 0.4rem 0.4rem;
  cursor:pointer;
  margin:0.2rem 0.5rem 0.2rem 0;
  transition:all 0.2s ease-in-out;
  &:hover{
    background:red;
    color:blue;
  }
  `;
