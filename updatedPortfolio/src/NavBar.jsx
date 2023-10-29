import React from "react";
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
    const linkedinStyle = {
        paddingLeft : "20px",
        paddingTop : "28px",
        color : "#E5E4E2",
        fontSize : "larger"
    }







    const [navState, setNavState] = React.useState(navStyle)
    const [logoState, setLogoState] = React.useState(logoStyle)
    const [link1State, setLink1State] = React.useState(link1Style)
    const [linkState, setLinkState] = React.useState(linkStyle)
    const [githubLinkState, setGithubLinkState] = React.useState(githubLinkStyle)
    const [linkedinState, setLinkedinState] = React.useState(linkedinStyle)
    const mediaQuery = window.matchMedia('(max-width: 600px)')
      function queryMatcher() {
        if (mediaQuery.matches) {
            const smallNavStyle = {
                backgroundColor : "#1B1212",
                color : "#E5E4E2",
                "display" : "grid",
                "gridTemplateColumns" : "1fr 1fr 1fr 1fr 1fr"
            }
            const smallLogoStyle = {
              "display" : "none"
            }
            const smallLinkStyle = {
                "fontSize" : "20px",
                color : "#E5E4E2",
                "textAlign" : "center",
                "paddingTop" : "5px",
                "paddingBottom" : "15px",
                "paddingLeft" : "5px"
            }
            setNavState(smallNavStyle)
            setLogoState(smallLogoStyle)
            setLink1State(smallLinkStyle)
            setLinkState(smallLinkStyle)
        }
      }
      React.useEffect(queryMatcher, [])







    return (
        <nav style = {navStyle}>
            {/* <h3 style = {logoStyle} >some sort of logo</h3> */}
            <img src = "https://i.pinimg.com/originals/36/af/ff/36afff72dc62fb3f7f304d303c90ff8c.png" style = {logoState}/>
            <NavLink to = "/" style = {link1State} >HOME</NavLink>
            <NavLink to = "/Projects" style = {linkState} >PROJECTS</NavLink>
            <NavLink to = "/ContactMe" style = {linkState} >CONTACT</NavLink>
            <a style = {linkState} href = "https://github.com/notifications?query=repo%3Areal-life-rusty-venture%2Fvschool-repository">GITHUB</a>
            <a style = {linkState} href = "https://www.linkedin.com/in/arianna-brunson-380595187/">LINKEDIN</a>
        </nav>
    )
}