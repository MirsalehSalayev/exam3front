import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import BasketPage from "./pages/BasketPage";
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/basketpage" element={<BasketPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
