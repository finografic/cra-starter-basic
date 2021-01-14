import { useMemo } from 'react';
import { useParams, useLocation, useHistory, useRouteMatch, matchPath } from 'react-router-dom';
import queryString from 'query-string';

export function useRouter() {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  // BASIC ROUTER VALUES
  const values = {
    pathname: location.pathname,
    query: {
      ...queryString.parse(location.search),
      ...params,
    },
    match,
    location,
    history,
    goBack: history.goBack,
  };

  // NEW: DYNAMIC PATH DETETCTION AND PATTERNS
  const matchPathStatic = matchPath(location.pathname, { path: '/:pathRoot' });
  const matchPathDynamic = matchPath(location.pathname, { path: '/:pathRoot/:slug' });

  // ADD STATIC PATH VALUES
  if (matchPathStatic?.isExact) {
    const {
      path,
      params: { pathRoot },
    } = matchPathStatic;
    const pathDef = path.replace(':pathRoot', pathRoot);
    values.isPathDynamic = false;
    values.pathDef = pathDef;
    values.pathRoot = `/${pathRoot}`;
    values.pathSlug = null;
  }

  // ADD DYNAMIC PATH VALUES
  if (matchPathDynamic?.isExact) {
    const {
      path,
      params: { pathRoot, slug },
    } = matchPathDynamic;
    const pathDef = path.replace(':pathRoot', pathRoot);
    values.isPathDynamic = true;
    values.pathDef = pathDef;
    values.pathRoot = `/${pathRoot}`;
    values.pathSlug = slug;
  }

  return useMemo(() => values, [
    params,
    match,
    location,
    history, 
  ]);
}
