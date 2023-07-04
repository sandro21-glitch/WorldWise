import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import CityList from "./components/CityList";
import SingleCity from "./components/SingleCity";
import CountryList from "./components/CountryList";
import Form from "./components/Form";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="cities" />} />
          <Route path="cities" element={<CityList />} />
          <Route path="cities/:id" element={<SingleCity />} />
          <Route path="countries" element={<CountryList />} />
          <Route path="form" element={<Form />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
