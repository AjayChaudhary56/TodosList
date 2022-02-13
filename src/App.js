// import logo from './logo.svg';
import "./App.css";
import { Header } from "./mycomponent/header";
import { Todos } from "./mycomponent/Todos";
import React, { useState, useEffect } from "react";
import { Footer } from "./mycomponent/Footer";
import { AddTodo } from "./mycomponent/AddTodo";
import { About } from "./mycomponent/About";

// import {Form1}  from "./mycomponent/form";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("i am onDelete of todo", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    console.log("i am adding this Todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  const [todos, setTodos] = useState(
    initTodo
    //     {
    //     sno:1,
    //     title:"Go to the Market",
    //     desc:"You need to go the Market to get this job done"
    //   },
    //  {
    //     sno:2,
    //     title:"Go to the Cinema",
    //     desc:"You need to go the Cinema to get this job done"
    //   },
    //   {
    //     sno:3,
    //     title:"Go to the Hotel",
    //     desc:"You need to go the Hotel to get this job done"
    //   }
  );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="MyTodosList" />

        <Switch>
          <Route
           exact path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                  {/* <Form1 /> */}
                </> )
            }}>
              
            </Route>
          <Route exact path="/about" component={About}>
            {/* <About /> */}
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
