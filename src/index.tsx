import { createRoot } from 'react-dom/client';

import App from './app/App';

import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('app_mount');
if (!container) {
    throw new Error('Контейнер для инициализации не был найден');
}
const root = createRoot(container);


document.getElementById('app_mount')?.classList.add('app_mount');
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
);
