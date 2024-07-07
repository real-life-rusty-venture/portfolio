import React from "react";
// import { useState } from "react"
export default function ContactMe() {
    const [formData, setFormData] = React.useState({
        name : "",
        phoneNumber : "",
        email : "",
        message : ""
    })
    function handleChange(e) {
        setFormData(prev => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }
    //i dont think i even need this function??
    const formStyle = {
        paddingLeft : "90px",
        paddingRight : "90px",
        paddingTop : "55px",
    }
    const inputStyle = {
        display : "block",
        marginLeft : "400px",
        width : "350px",
        height : "50px"
    }
    const buttonStyle = {
        display : "block",
        marginLeft : "400px",
        width : "357px",
        height : "50px",
        backgroundColor : "#1B1212",
        color : "#E5E4E2"
    }




    const [formStyleState, setFormStyleState] = React.useState(formStyle)
    const [inputStyleState, setInputStyleState] = React.useState(inputStyle)
    const [buttonStyleState, setButtonStyleState] = React.useState(buttonStyle)
    const mediaQuery = window.matchMedia('(max-width: 600px)')


    


      function queryMatcher() {
        if (mediaQuery.matches) {
            // const smallDivStyle = {
            //     "backgroundColor" : "black",
            //     "color" : "white",
            //     "textAlign" : "center",
            //     "fontSize" : "20px",
            //     "paddingTop" : "4px",
            //     "paddingBottom" : "5px"
            // }
            const smallFormStyle = {
                textAlign : "center",
                // display : "flex"
                display : "grid",
                gridTemplateColumns : "1fr 2fr 1fr",
                paddingTop : "55px"
            }
            const smallInputStyle = {
                display : "block",
                // marginLeft : "400px",
                width : "350px",
                height : "50px",
                // alignItems : "center"
                gridColumn : "2/3"
                
            }
            const smallButtonStyle = {
                display : "block",
                // marginLeft : "400px",
                width : "357px",
                height : "50px",
                backgroundColor : "#1B1212",
                color : "#E5E4E2",
                gridColumn : "2/3"
            }

            setFormStyleState(smallFormStyle)
            setInputStyleState(smallInputStyle)
            setButtonStyleState(smallButtonStyle)
        }
      }
      React.useEffect(queryMatcher, [])







    return (
        <form action="https://formsubmit.co/ariannabrunson47@gmail.com" method="POST" style = {formStyleState}>
            <input name = "name" placeholder = "name" style = {inputStyleState} />
            <input name = "phoneNumber" placeholder = "phone number" style = {inputStyleState} />
            <input name = "email" placeholder = "email" style = {inputStyleState} />
            <textarea name = "message" placeholder = "message" style = {inputStyleState} />
            <button style = {buttonStyleState} >thank you for your message!</button>
        </form>
    )
}