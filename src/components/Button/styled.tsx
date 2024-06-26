import Styled from "styled-components"

export const Button = Styled.button<{isBlack : boolean}>`

    color: ${props => props.isBlack ? '#ffffff' : '#090909'};
    background: ${props => props.isBlack ? '#333' : '#e8e8e8'};	
    padding: 0.7em 1.7em;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    border: 1px solid transparent;

    &:hover {
        border: 1px solid ${props => props.isBlack ? '#e8e8e8' : '#333'};
    }
    
    transition: all 0.3s;
`