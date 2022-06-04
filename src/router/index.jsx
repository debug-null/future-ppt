import * as React from "react";
import { useRoutes } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: React.lazy(() => import("@/pages/home"))
  },
  {
    path: "/expenses",
    element: React.lazy(() => import("@/pages/expenses"))
  },
  {
    path: "/editor",
    element: React.lazy(() => import("@/pages/editor"))
  },
  {
    path: "/reveal",
    element: React.lazy(() => import("@/pages/reveal/index")),
    children: [
      { path: "/reveal/markup", element: React.lazy(() => import("@/pages/reveal/markup")) },
      { path: "/reveal/markdown", element: React.lazy(() => import("@/pages/reveal/markdown")) },
      { path: "/reveal/background", element: React.lazy(() => import("@/pages/reveal/background")) },
      { path: "/reveal/media", element: React.lazy(() => import("@/pages/reveal/media")) },
      { path: "/reveal/code", element: React.lazy(() => import("@/pages/reveal/code")) },
      { path: "/reveal/math", element: React.lazy(() => import("@/pages/reveal/math")) },
      { path: "/reveal/fragments", element: React.lazy(() => import("@/pages/reveal/fragments")) },
      { path: "/reveal/link", element: React.lazy(() => import("@/pages/reveal/link")) },
      { path: "/reveal/layout", element: React.lazy(() => import("@/pages/reveal/layout")) },
      { path: "/reveal/theme", element: React.lazy(() => import("@/pages/reveal/theme")) },
      { path: "/reveal/transition", element: React.lazy(() => import("@/pages/reveal/transition")) },
      { path: "/reveal/vertical", element: React.lazy(() => import("@/pages/reveal/vertical")) },
      { path: "/reveal/note", element: React.lazy(() => import("@/pages/reveal/note")) },
      { path: "/reveal/multiple", element: React.lazy(() => import("@/pages/reveal/multiple")) },



    ]
  },
  {
    path: "/invoices",
    element: React.lazy(() => import("@/pages/invoices")),
    children: [
      { index: true, element: React.lazy(() => import("@/pages/select")) },
      { path: "/invoices/:invoiceId", element: React.lazy(() => import("@/pages/invoice")) }
    ]
  },
  {
    path: "*",
    element: React.lazy(() => import("@/pages/404"))
  }
];

// 异步加载路由
const syncRouter = (routes) => {
  let routerTable = [];
  routes.forEach((route) => {
    routerTable.push({
      path: route.path,
      element: (
        <React.Suspense fallback={<div>路由加载中...</div>}>
          <route.element />
        </React.Suspense>
      ),
      children: route.children && syncRouter(route.children)
    });
  });

  return routerTable;
};
const Router = () => useRoutes(syncRouter(routes));

export { Router };
