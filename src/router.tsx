import { createHashRouter } from 'react-router-dom';
import Hosting from './pages/Hosting';
import CMSHosting from './pages/CMSHosting';

const router = createHashRouter([
  {
    path: '/',
    element: <Hosting />
  },
  {
    path: '/hosting',
    element: <Hosting />
  },
  {
    path: '/cms-hosting',
    element: <CMSHosting />
  },
  {
    path: '/reseller-hosting',
    element: <Hosting />
  },
  {
    path: '/cloud-vps',
    element: <Hosting />
  },
  {
    path: '/email-hosting',
    element: <Hosting />
  },
  {
    path: '/domains',
    element: <Hosting />
  },
  {
    path: '/ssl',
    element: <Hosting />
  }
]);

export default router;