import "./Navbar.css";
function Navbar(){
    return (
     <div className="navbar">
        <div className="logo">
        <img src="https://flowbite.com/docs/images/logo.svg"></img>
        <h1>Geekfoods</h1>
        
        </div>
        <div className="tag">
            <a href="#">Home</a>
            <a href="#">Quota</a>
            <a href="#">Resturants</a>
            <a href="#">Foods</a>
            <a href="#">Contact</a>
        </div>
        <button>Get Started</button>

     </div>
    );
}
export default Navbar;