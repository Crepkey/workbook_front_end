import React from 'react';

import './App.css';

import Controller from "./Controller/Controller";
import NavBar from "./components/NavBar";


export default function App() {
    return (
            <div>
                <NavBar/>
                <Controller/>
            </div>
    );
}

