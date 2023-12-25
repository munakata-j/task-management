import React from 'react';
import './styles/App.css';
import {ChakraProvider} from "@chakra-ui/react";
import {AppRoutes} from "./router/AppRoutes";
import {BrowserRouter as Router} from 'react-router-dom';
import {Header} from "./components/layout/Header";
import {TaskProvider} from "./context/taskContext";

function App() {
    return (
        <ChakraProvider>
            <TaskProvider>
                <Router>
                    <Header/>
                    <AppRoutes/>
                </Router>
            </TaskProvider>
        </ChakraProvider>
    );
}

export default App;
