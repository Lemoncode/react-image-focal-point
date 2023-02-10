import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const root = createRoot(document.getElementById('root')!);

root.render(<RouterProvider router={router} />);
