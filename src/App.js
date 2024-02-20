import { Route, Routes } from "react-router-dom";

import style from "./App.module.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import { createContext, useState } from "react";

export const SearchContext = createContext();

function App() {
  const [searchValue, setSerchValue] = useState("");

  return (
    <div className={style.App}>
      <SearchContext.Provider value={{ searchValue, setSerchValue }}>
        <Header />
        <div className={style.conteiner}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
