import { createBrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import TextEditorPage from "./components/TextEditorPage";
import CodeEditorPage from "./components/CodeEditorPage";
// Add any other pages you want

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/texteditor", element: <TextEditorPage /> },
  { path: "/codeeditor", element: <CodeEditorPage /> },
  // Add more paths as needed:
  // { path: "/contact", element: <Contact /> },
  // { path: "/description", element: <Description /> }
]);

export default router;
