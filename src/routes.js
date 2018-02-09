import PerformanceArchive from './pages/PerformanceArchive';
import Photos from './pages/Photos';
import Press from './pages/Press';

export default function addRoutes(router) {
  router.get('/', (req, res, next) => {
    res.locals.component = PerformanceArchive;
    res.locals.initialState = { name: 'claire'};
    next();
  });

  router.get('/PerformanceArchive', (req, res, next) => {
    res.locals.component = PerformanceArchive;
    next();
  });

  router.get('/Photos', (req, res, next) => {
    res.locals.component = Photos;
    next();
  });

  router.get('Press', (req, res, next) => {
    res.locals.component = Press;
    next();
  });
}
