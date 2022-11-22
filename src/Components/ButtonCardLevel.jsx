const Card = {
    width: "200px",
    height: "300px",
    backgroundColor: "red",
    border: "1px solid black",
}

const CardLevel = () => {
    return ( 
        <>
        <div class="container">
            <div class="row">
                <div class="col">
                      <div style={Card}></div>
                </div>
                <div class="col">
                    One of three columns
                </div>
                <div class="col">
                    One of three columns
                </div>
            </div>
        </div>
        </>
     );
}
 
export default CardLevel;