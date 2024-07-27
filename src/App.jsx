import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar  from "./components/Navbar";
import Countres from "./components/Countres";
import CountryDetail from "./components/CountryDetail";
import { useEffect, useState } from "react";


function App() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");


  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

   return (
     <Router>
      <div className="bg-primary dark:bg-slate-800" >
      <Navbar  handleThemeToggle={ handleThemeToggle } theme= { theme }/>
       <Routes>
         <Route path="/" element={<Countres   />} />
         <Route path="/country/:countryName" element={<CountryDetail />} />
       </Routes>
      </div>
     </Router>
   );

 
}

export default App
