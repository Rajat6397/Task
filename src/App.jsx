import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Body from "./Component/Body/Body";
import Footer from "./Component/Footer/Footer";


function App(){
  return (
    <div className="container">
      <Navbar/>
      <Body/>
      <Footer/>
    </div>
  )
}
export default App;