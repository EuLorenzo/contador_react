import styled, { createGlobalStyle } from "styled-components"

export const globalStyle = createGlobalStyle<{ isBlack: boolean }>`
    body{
        display: flex;
        justify-content: center;
        align-items: center;

        color: ${props => props.isBlack ? 'white' : 'black'};
        background-color: ${props => props.isBlack ? 'black' : 'white'};
        transition: background-color, 0.5s;
    }    
`

export const Header = styled.header`
    position: fixed;
    top: 10px;
    right: 10px;
`

export const Principal = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;

    height: 50px;
    width: 300px;

    border: 1px solid #219ebc;
    border-radius: 5px;
`

export const Filhos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 33%;
    padding: 10px; 
    cursor: pointer;
    /*Só para o usuário não fica selecionando toda hora*/
    user-select: none;
`

