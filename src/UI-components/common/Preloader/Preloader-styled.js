import styled, {css, keyframes} from "styled-components"

const spin = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`

export const PreloaderStyled = styled.div`
  background-color: rgba(0,0,0,.7);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CircleContainer = styled.div`  
  width: 80px;
  height: 80px;
  margin-top: 80px;
  margin-left: 80px;
  border-radius: 50%;
  border-top: 6px solid white;
  border-right: 6px solid ${({theme}) => theme.colors.primary};
  animation: ${spin} 2s linear infinite;
`