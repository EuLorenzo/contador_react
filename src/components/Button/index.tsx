import * as Styled from "./styled"

interface buttonProps{
    content : string
    isBlack : boolean
    changeBackgroundColor : Function
}

export default function Button( props : buttonProps){

    function handleChangeBackground(){
        props.changeBackgroundColor(!props.isBlack)
        console.log(props.isBlack)

    }

    return(
        <Styled.Button onClick={handleChangeBackground} isBlack={props.isBlack}>
            Turn to {props.content}
        </Styled.Button>
    )


}