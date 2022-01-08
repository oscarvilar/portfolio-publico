import './App.css';
import { useContext } from "react";
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import ProductList from './components/productList/ProductList';
import Toogle from './components/toggle/Toogle';
import { ThemeContext } from "./context";
import Footer from './components/footer/Footer';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toogle />
      <Intro />
      <ProductList />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
