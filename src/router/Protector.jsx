import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router";

export default function Protector({
  children,
  beforeEnter = [],
  redirect: redirectPath,
}) {
  const getPermision = () => {
    if (beforeEnter.length < 1) return true;
    for (let index = 0; index < beforeEnter.length; index++) {
      if (!beforeEnter[index]()) return false;
    }
  };

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (redirectPath && pathname !== redirectPath) {
      navigate(redirectPath, { replace: true });
    }
  }, []);

  return getPermision() ? children : <Navigate to={-1} />;
}
