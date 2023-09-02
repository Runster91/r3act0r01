const Eventos = () => {
    let contador = 1
    const handleClick = ()=> {
        console.log('le diste click')
    };

    return(
        <div style={{textAlign: "center", color: "white", backgroundColor: "black"}}>
        <h2>{contador}</h2>
        <button onClick={(event) =>{handleClick(event)}}>click</button>

        </div>
    )
}

export default Eventos