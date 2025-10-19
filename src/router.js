import { createBrowserRouter } from 'react-router-dom';
import Homepage from './components/Homepage';
import TextEditorPage from './components/TextEditorPage'; 
import CodeEditorPage from './components/CodeEditorPage';

const router = createBrowserRouter([
  { path: '/', element: <Homepage /> },
  { path: '/texteditor', element: <TextEditorPage /> },
  { path: '/codeeditor', element: <CodeEditorPage /> }
]);

export default router;
