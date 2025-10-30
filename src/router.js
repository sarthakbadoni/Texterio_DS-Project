import { createBrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import TextEditorPage from "./components/TextEditorPage";
import CodeEditorPage from "./components/CodeEditorPage";
import Contact from "./components/contactpage";
import DescriptionPage from "./components/descriptionpage"


const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/texteditor", element: <TextEditorPage /> },
  { path: "/codeeditor", element: <CodeEditorPage /> },
  { path: "/contact", element: <Contact /> },
  { path: "/description", element: <DescriptionPage /> }
]);

export default router;
