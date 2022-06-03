import * as React from "react";
import { useRoutes } from "react-router-dom";
import Expenses from "@/pages/expenses";
import Invoices from "@/pages/invoices";
import Invoice from "@/pages/invoice";
import Select from "@/pages/select";
import NotPage from "@/pages/404";
import Reveal from "@/pages/reveal/index";
import RevealMarkup from "@/pages/reveal/markup";
import RevealMarkdown from "@/pages/reveal/markdown";
import RevealBackground from "@/pages/reveal/background";
import RevealMedia from "@/pages/reveal/media";
import RevealCode from "@/pages/reveal/code";




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
    path: "/reveal",
    element: <Reveal />,
    children: [
      { path: "/reveal/markup", element: <RevealMarkup /> },
      { path: "/reveal/markdown", element: <RevealMarkdown /> },
      { path: "/reveal/background", element: <RevealBackground /> },
      { path: "/reveal/media", element: <RevealMedia /> },
      { path: "/reveal/code", element: <RevealCode /> }

    ]
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
console.log("🚀 ~ file: index.jsx ~ line 45 ~ routes", routes);

export { Router };
