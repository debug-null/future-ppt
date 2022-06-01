import * as React from "react";
import { useRoutes } from "react-router-dom";
import Expenses from "@/pages/expenses";
import Invoices from "@/pages/invoices";
import Invoice from "@/pages/invoice";
import Select from "@/pages/select";
import NotPage from "@/pages/404";

import Home from "@/pages/home";

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/expenses",
    element: <Expenses />
  },
  {
    path: "/invoices",
    element: <Invoices />,
    children: [
      { index: true, element: <Select /> },
      { path: "/invoices/:invoiceId", element: <Invoice /> }
    ]
  },
  {
    path: "*",
    element: <NotPage />
  }
];

const Router = () => useRoutes(routes);

export { Router };
