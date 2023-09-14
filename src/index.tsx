import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import './components/css/footer.css'
import './components/css/Cart.css'
import './components/css/Home.css'
import './components/css/Details.css'






const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);

reportWebVitals();
