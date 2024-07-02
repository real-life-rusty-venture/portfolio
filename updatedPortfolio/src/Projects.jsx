import React from "react"
import {useState} from "react"
import ProjectCard from "./ProjectCard"
// import brockSamson from "\brock_samson.png"
// import artProject from "\art_project.png"
import brockSamson from "../public/brock_samson.png"
import artProject from "../public/art_project.png"
// import catsWebsite from "C:/Users/bensh/OneDrive/portfolio_real/updatedPortfolio/src/cats_webiste.png"
import catsWebsite from "../public/cats_website.png"
export default function Projects() {
    const divStyle = {
        paddingLeft : "90px",
        paddingRight : "150px",
        display : "grid",
        gridTemplateColumns : "1fr 1fr",
        gridTemplateRows : "1fr",
        backgroundColor : "#E5E4E2",
        height : "100vh"
    }
    const projects = [
        {
            img : artProject,
            title : "Art Website",
            description : "On this website I am looping over an api to display art made by people with various mental illnesses. This website includes a homepage, a navbar, a footer, and different pages for different mental illnesses.",
            viewLive : "https://my-art-collection.onrender.com/",
            //learn how to do the viewLive
            viewCode : "https://github.com/real-life-rusty-venture/vschool-repository/tree/main/4_art_project/art",
            gridColumn : "1/2",
            gridRow : "1/2"
        },
        {
            img : catsWebsite, 
            title : "Cats Website",
            description : "On this website, I am utilizing various dependencies like vite, mongodb,  mongoose, bcrypt, cors, dotenv, express, express-jwt, morgan, and more, to create a website where the user can make an account, log in, and post, edit, view, and delete pictures of cats.",
            viewLive : "https://catsanddogslivingtogethermasshysteria.onrender.com/Profile",
            viewCode : "https://github.com/real-life-rusty-venture/catproject/tree/master",
            gridColumn : "2/3",
            gridRow : "1/2" //this could be 2/3 and it wouldnt make a difference
        }
    ]
    const [projectData, setProjectData] = useState(projects)
    const projectMap = projectData.map(item => {
        return (
            <ProjectCard gridColumn = {item.gridColumn} img = {item.img} title = {item.title} description = {item.description} viewLive = {item.viewLive} viewCode = {item.viewCode} />
        )
    })






    const [divState, setDivState] = React.useState(divStyle)
    const mediaQuery = window.matchMedia('(max-width: 600px)')


    


      function queryMatcher() {
        if (mediaQuery.matches) {
            const smallDivStyle = {
                "textAlign" : "center",
                "fontSize" : "20px",
                "paddingTop" : "4px",
                "paddingBottom" : "5px",
                margin : "20px",
                height: "100vh",
                backgroundColor : "#E5E4E2"
            }
            setDivState(smallDivStyle)
        }
      }
      React.useEffect(queryMatcher, [])



      //this isnt done!!!!!





    
    return (
        <div style = {divState} >
            {projectMap}
        </div>
    )
}