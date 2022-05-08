import React from 'react'
import ReactDOM from 'react-dom'
import './style/css/index.css'
import NuvButtons from './buttons_description/nav_button';
import Header from './header/header';


// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<NuvButtons />)

const header = ReactDOM.createRoot(document.getElementById("header"))
header.render(<Header />)

