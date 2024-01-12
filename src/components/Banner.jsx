
const Banner = () => {
  return (
    <div>
         <div className="banner" style={{position:"relative",maxWidth:"1600px",width:"100%",overflow:"hidden",borderRadius:"10px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)"}}>
      <img src="src/assets/images/1.png" alt="Banner Image" style={{width:"100%",height:"500px",display:"block"}} />
      <div className="content" style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",color:"#fff"}}>
        <h1 style={{fontSize:"2em",marginBottom:"10px"}}>Your Product Name</h1>
        <p style={{fontSize:"1.2em",marginBottom:"20px"}}>Discover the elegance and sophistication.</p>
        <a style={{display:"inline-block",padding:"10px 20px",backgroundColor:"#3498db",color:"#fff",textDecoration:"none",borderRadius:"5px",transform:"background-color 0.3s ease"}} href="#">Explore Now</a>
      </div>
    </div>
    <hr style={{marginTop:"20px"}} />
    </div>
  )
}

export default Banner