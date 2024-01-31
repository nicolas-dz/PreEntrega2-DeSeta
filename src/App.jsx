import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/itemDetailContainer";
import NavBar from "./components/navBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";


const App = () => {
  return ( 
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
       <Route path={"/"} element = {<ItemListContainer />} />
       <Route path={"/category/:id"} element = {<ItemListContainer />} /> 
       <Route path={"/item/:id"} element = {<ItemDetailContainer/>} />  
       
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;