import { createBrowserRouter } from 'react-router-dom';

import App from "./pages/App/App";
import History from "./pages/History/History";
import Library from "./pages/Library/Library";
import RecordSongs from "./pages/RecordSongs/RecordSongs";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/history',
    element: <History/>
  },
  {
    path: '/library',
    element: <Library/>
  },
  {
    path: '/record_songs/:recordId',
    element: <RecordSongs/>
  },
]);

export default router;