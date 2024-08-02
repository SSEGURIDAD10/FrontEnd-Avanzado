import { BrowserRouter } from "react-router-dom";
import RoutesIndex from "./Routes/RoutesIndex";
import Header from "./Components/Header"
import './Components/Header/header.scss'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App;
