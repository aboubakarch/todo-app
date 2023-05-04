import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Todo from './pages/Todo';
import Counter from './pages/Counter';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Todo /> },
    { path: '/counter', element: <Counter /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
