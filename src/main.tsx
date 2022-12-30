import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import FyloDataStorage from "./FyloDataStorage";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <FyloDataStorage used={815} max={1000}/>
    </React.StrictMode>,
)
