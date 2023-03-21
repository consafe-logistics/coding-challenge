import { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppWrapper from "../components/AppWrapper";
import Home from "../pages/home/Home";
import SearchPage from "../pages/search/Search";

export default function RoutesProvider(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppWrapper />}>
          <Route index element={<Home />} />
          <Route path='search' element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
