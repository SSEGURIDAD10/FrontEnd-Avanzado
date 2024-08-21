import { BrowserRouter } from "react-router-dom";
import RoutesIndex from "./Routes/RoutesIndex";
import Header from "./Components/Header";
import { AuthProvider } from "@/Context/AuthContext";
import "./Components/Header/header.scss";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <RoutesIndex />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
