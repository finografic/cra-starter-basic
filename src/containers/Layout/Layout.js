import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { Spinner } from 'components/Spinner';

// ROUTES
import { routes } from '_config';
const NotFound = React.lazy(() => import('containers/NotFound'));

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <React.Fragment>
      <main>
        <React.Suspense fallback={<Spinner page />}>
          <Switch>
            {/* CLEAN TRAILING SLASH */}
            <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
            {routes.map((route, index) => {
              return (
                <Route
                  exact={route.exact}
                  strict={route.strict}
                  path={route.path}
                  render={(props) => <route.component {...props} {...route} />}
                  key={index}
                />
              );
            })}
            <Redirect from="/" to="/" />
            <Route component={NotFound} />
          </Switch>
        </React.Suspense>
      </main>
    </React.Fragment>
  );
};

export default Layout;
