export default function Tabs({ children, buttons, ButtonsCointainer }) {
    // const ButtonsContainer = buttonsCointainer
    return <>
        <ButtonsCointainer>
            {buttons}
        </ButtonsCointainer>
        {children}
    </>

}