import styled, {keyframes} from 'styled-components'

export const Button1 =  styled.button`
/* styles go here */
color : #0000ff;
background-color: #0000ff;
`;

// export default Button;


export const TomatoButton = styled(Button1)`
  color: tomato;
  background-color: tomato;
`;

export const GradButton = styled(Button1)`
  color: tomato;
  border-color: tomato;
`;


const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(90deg);

  }
`

export const Animatedlogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 0.1s linear;
`



