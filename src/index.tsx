import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.querySelector('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// let's use semantic release action https://github.com/marketplace/actions/action-for-semantic-release
// with a locally configured semantic release docker plugin https://github.com/esatterwhite/semantic-release-docker
