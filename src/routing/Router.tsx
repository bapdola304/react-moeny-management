import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { appRoutes } from "./Routes";
import MainLayout from "../layout/main_layout/MainLayout";

const getRoutes = (routes: any) => {
  return (
    <>
      {routes.map((route: any, index: number) => (
        <Route
          key={index}
          path={route.layout + route.path}
          element={route.element}
        />
      ))}
    </>
  );
};

const AppRouter = () => {
  return <Routes>{getRoutes(appRoutes)}</Routes>;
};

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/" element={<Navigate to="/app" replace />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<MainLayout />}>
            {getRoutes(appRoutes)}
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export { MainRouter, AppRouter };
