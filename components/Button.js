// import styled, {css} from 'styled-components'
import styled from 'styled-components/native';

export const Button = styled.button`
    title="Press me"
    onPress={() => setCount(count + 1)
    background-color: green;
    margin: 10px;
    font-size: 20px;
`


// export const Button = styled.button`
// background-color: ${props => (props.cta ? 'yellow' : 'green')};
// margin: 10px;
// font-size: 20px;
// padding: 8px;
// border-radius: 8px;

// &:hover {
//     background-color: red;
// }

// ${props => props.outlined && css`
//     background-color: transparent;
//     border: 2px solid black;
//     `
// }
// `