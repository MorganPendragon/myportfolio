import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// Exports for your images
export { default as Vms1 } from "./proj/vms/1.png";
export { default as Vms2 } from "./proj/vms/2.png";
export { default as Vms3 } from "./proj/vms/3.png";
export { default as Vms4 } from "./proj/vms/4.png";
export { default as Vms5 } from "./proj/vms/5.png";
export { default as tmg1 } from "./proj/taskmgr/1.png";
export { default as tmg2 } from "./proj/taskmgr/2.png";
export { default as tmg3 } from "./proj/taskmgr/3.png";
export { default as tmg4 } from "./proj/taskmgr/4.png";
export { default as mr1 } from "./proj/movierev/1.png";
export { default as mr2 } from "./proj/movierev/2.png";
export { default as mr3 } from "./proj/movierev/3.png";
export { default as mr4 } from "./proj/movierev/4.png";
export { default as cp1 } from "./proj/captiveportal/1.png";
export { default as cp2 } from "./proj/captiveportal/2.png";
export { default as cp3 } from "./proj/captiveportal/3.png";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/myportfolio">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
