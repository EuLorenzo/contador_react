import * as Styled from "./styled"

interface buttonProps{
    content : string
    isBlack : boolean
    changeBackgroundColor : (a : boolean) => void
}

export default function Button( {changeBackgroundColor, isBlack, content} : buttonProps){

    function handleChangeBackground(){
        changeBackgroundColor(!isBlack)
    }

    return(
        <Styled.Button onClick={handleChangeBackground} isBlack={isBlack}>
            Turn to {content}
        </Styled.Button>
    )


}