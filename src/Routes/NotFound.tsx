import { Routes, Route } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";


function NotFound() {
  return (
    <Routes>
      <Route path="/not-found" element={<PageNotFound />} />
     
    </Routes>
  );
}

export default NotFound;