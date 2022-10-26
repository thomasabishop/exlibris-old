import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Main from "./templates/Main"
import Home from "./pages/Home"
import AddBook from "./pages/AddBook"
import Stats from "./pages/Stats"
import "./index.scss"

function App() {
   return (
      <Router>
         <Main>
            <Routes>
               <Route path="/add-book" element={<AddBook />} />
               <Route path="/stats" element={<Stats />} />
               <Route path="/" element={<Home />} />
            </Routes>
         </Main>
      </Router>
   )
}

export default App
