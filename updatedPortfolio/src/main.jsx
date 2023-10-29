import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
const ultraStyle = {
  backgroundColor : "#E5E4E2",
    color : "#1B1212",
    // font : "#36454F"
    font : "Arial"
}
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App style = {ultraStyle}/>
    </BrowserRouter>
  </React.StrictMode>
); 
