import {
  BrowserRouter as 
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "./home/Home";
export function DashboardRouter() {
  return (
    <>
      <main>
        <div className="context-body">
          <div className="container-fuid">
            <Routes>
              <Route path="/dashboard/home">
                <Home />
              </Route>
              <Route
                path="*"
                element={<Navigate to="/dashboard/home" replace />}
              ></Route>
            </Routes>
          </div>
        </div>
      </main>
    </>
  );
}
