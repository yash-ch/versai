import {Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";

function WebsiteRoute() {
  return (
      <Routes>
        <Route path="/" element={<HomePage/>}>
        </Route>
        {/*<Route path="/player" element={<Player/>}>*/}
        {/*</Route>*/}
      </Routes>
  );
}

export default WebsiteRoute;