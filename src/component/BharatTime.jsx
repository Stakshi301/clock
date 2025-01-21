const BharatTime=()=>{

    let time=new Date();

    return(
        <>
        <p className="fw-bolder badge text-bg-primary ">This is the current time : {time.toLocaleDateString()}-{time.toLocaleTimeString()}</p>
        <p>This is the current time : {Date()}</p>
        </>
    )
}

export default BharatTime