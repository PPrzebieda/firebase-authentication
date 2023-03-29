import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";

function App() {
  return (
    <>
      <AuthProvider>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Routes>
              <Route exact path="/" element={<PrivateRoute />}>
                <Route exact path="/" element={<Dashboard />} />
                <Route
                  exact
                  path="/update-profile"
                  element={<UpdateProfile />}
                />
              </Route>
              <Route exact path="/signup" element={<Signup />} />
              <Route
                exact
                path="/firebase-authentication/login"
                element={<Login />}
              />
              <Route
                exact
                path="/forgot-password"
                element={<ForgotPassword />}
              />
            </Routes>
          </div>
        </Container>
      </AuthProvider>
    </>
  );
}

export default App;
