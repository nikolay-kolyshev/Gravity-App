import styled from 'styled-components'

export const ProblemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-content: center;
  grid-gap: 10px;
  background: #F5F7FA;
  border-radius: 16px;
  
  @media screen and (max-width: 340px) {
    grid-template-columns: 1fr;
  }
`
export const ProblemStyled = styled.div`
  display: flex;
  flex-direction: column;

  background: #F5F7FA;
  border-radius: 16px;
  padding: 44px 24px 30px 24px;
`