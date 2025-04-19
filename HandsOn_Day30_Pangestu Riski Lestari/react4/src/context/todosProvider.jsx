import axios from "axios";

import { createContext, useState } from "react";

 

export const TodosContext = createContext();

 

export const TodosProvider = ({ children }) => {

   const [todos, setTodos] = useState([]);

 

   const getTodos = () => {

      try {

         axios

            .get("https://jsonplaceholder.typicode.com/todos")

            .then((res) => {

               console.log("todos", res);

               setTodos(res.data);

            })

            .catch((err) => console.log(err));

      } catch (error) {

         console.log(error.response);

      }

   };

 

   return (

      <TodosContext.Provider value={{ todos, setTodos, getTodos }}>

         {children}

      </TodosContext.Provider>

   );

};