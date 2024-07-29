import "./global.css";
import { Footer } from "./components/footer";
import { Mainbody } from "./components/mainbody";
import { Menu } from "./components/menu";
import { TopBanner } from "./components/topbanner";
import { TopBar } from "./components/topbar";
import { Films } from "./pages/films";
import { Home } from "./pages/home";
import { Routes, Route } from "react-router-dom";
import { About } from "./pages/about";
import { Blog } from "./pages/blog";
import { Service } from "./pages/service";
import { Pages } from "./pages/films";


function App() {
  return (
    <>

      <TopBar />
      <TopBanner />
      <Mainbody>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/films" element={<Films />} />


        </Routes>
      </Mainbody>
      <Footer />


    </>
  );
}


export default App;
