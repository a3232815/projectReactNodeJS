import "../cssPages/home.css"
function Home() {
  return (
    <>
      <div>
        <div className="bigImg" style={{
          backgroundImage: `url("https://3furniture.com/wp-content/uploads/2021/11/%D7%A1%D7%9C%D7%95%D7%9F-%D7%98%D7%95%D7%9E%D7%99-%D7%9B%D7%95%D7%A8%D7%A1%D7%90%D7%95%D7%AA-%D7%9C%D7%99%D7%A7%D7%94-%D7%A9%D7%95%D7%9C%D7%97%D7%A0%D7%95%D7%AA-%D7%A7%D7%9C%D7%99%D7%94.jpg")`

        }}></div>
        <div className="nextImg">
          <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTET9ReW7R0b2KNPF13Hulw474OJtZPSZAclg&usqp=CAU"></img>
        </div>
        
        {/* <img className="bigImg" src={"https://3furniture.com/wp-content/uploads/2021/11/%D7%A1%D7%9C%D7%95%D7%9F-%D7%98%D7%95%D7%9E%D7%99-%D7%9B%D7%95%D7%A8%D7%A1%D7%90%D7%95%D7%AA-%D7%9C%D7%99%D7%A7%D7%94-%D7%A9%D7%95%D7%9C%D7%97%D7%A0%D7%95%D7%AA-%D7%A7%D7%9C%D7%99%D7%94.jpg"} alt="Logo" /> */}


      </div>
      <h6 className="down">. <br />הסניפים שלנו:
          <br /> ירושלים: שמגר 18
          <br />02-5382911
          <br />בני ברק: רבי עקיבא 73
          <br />03-5702280
          <br/> תל אביב: אלנבי 10
          <br/> 03-5236666

        </h6>
    </>
  )


}

export default Home;


// export default Home;



