import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./About";
import { Signup } from "./Signup";
import { PostsNew } from "./PostsNew";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/new" element={<PostsNew />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
