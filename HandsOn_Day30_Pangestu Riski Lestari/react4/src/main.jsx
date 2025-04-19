import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App.jsx";

import { TodosProvider } from "./context/todosProvider.jsx";

 

createRoot(document.getElementById("root")).render(

   <StrictMode>

      <TodosProvider>

         <App />

      </TodosProvider>

   </StrictMode>

);