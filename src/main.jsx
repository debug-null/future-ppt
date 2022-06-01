import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import App from "./App";
import { Router } from "./router/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Router />
    {/* <Routes>
      <Route path="/" element={<App />}>
        <Route path="/expenses" element={<Expenses />}></Route>
        <Route path="/invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />}></Route>
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>未匹配到任何路由</p>
            </main>
          }
        ></Route>
      </Route>
    </Routes> */}
  </BrowserRouter>
);
