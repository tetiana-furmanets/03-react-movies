import 'modern-normalize/modern-normalize.css';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './style.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
