// import React from "react";
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"
export default function NavBar() {
    const navStyle= {
        backgroundColor : "#1B1212",
        color : "#E5E4E2",
        display : "flex"
    }
    const logoStyle = {
        paddingLeft  : "90px",
        paddingTop : "20px",
        paddingBottom : "20px",
        width : "60px"
    }
    const link1Style = {
        color : "#E5E4E2",
        paddingLeft : "700px",
        paddingTop : "30px"
    }
    const linkStyle = {
        color : "#E5E4E2",
        paddingLeft : "20px",
        paddingTop : "30px"
    }
    const githubLinkStyle = {
        paddingLeft : "20px",
        paddingRight : "5px",
        paddingTop : "28px",
        color : "#E5E4E2",
        fontSize : "larger"
    }
    const linkedInStyle = {
        paddingLeft : "20px",
        paddingTop : "28px",
        color : "#E5E4E2",
        fontSize : "larger"
    }
    return (
        <nav style = {navStyle}>
            {/* <h3 style = {logoStyle} >some sort of logo</h3> */}
            <img src = "https://i.pinimg.com/originals/36/af/ff/36afff72dc62fb3f7f304d303c90ff8c.png" style = {logoStyle}/>
            <NavLink to = "/" style = {link1Style} >HOME</NavLink>
            <NavLink to = "/Projects" style = {linkStyle} >PROJECTS</NavLink>
            <NavLink to = "/ContactMe" style = {linkStyle} >CONTACT</NavLink>
            <a style = {githubLinkStyle} href = "https://github.com/notifications?query=repo%3Areal-life-rusty-venture%2Fvschool-repository">GITHUB</a>
            <a style = {linkedInStyle} href = "https://www.linkedin.com/in/arianna-brunson-380595187/">LINKEDIN</a>
        </nav>
    )
}