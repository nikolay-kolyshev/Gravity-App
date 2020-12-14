import styled,{css} from 'styled-components'

const List = styled.div`
    display:flex;
    width: ${({icon}) => (icon)?'300px':'260px'};
    flex-wrap: wrap;
`
export const EmojiListStyled = styled(List)`
    
`