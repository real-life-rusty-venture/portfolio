export default function ProjectCard(props) {
    console.log("props.img", props.img)
    const divStyle = {
        paddingTop : "50px",
        gridColumn : props.gridColumn,
        textAlign: "center",
        paddingLeft : "50px",
        paddingRight : "50px"
    }
    const imgStyle = {
        width : "300px"
    }
    const linkStyle = {
        paddingLeft : "10px",
        color : "#1B1212"
    }
    return (
        <div style = {divStyle}>
            <img src = {props.img} style = {imgStyle} ></img>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <a href = {props.viewLive} style = {linkStyle} target = "_blank" rel = "noreferrer">VIEW LIVE</a>
            <a href = {props.viewCode} style = {linkStyle} target = "_blank" rel = "noreferrer">VIEW CODE</a>
        </div>
    )
}