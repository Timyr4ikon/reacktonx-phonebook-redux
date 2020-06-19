import React, { useState, useEffect,useCallback } from "react";
import AddForm from "../AddForm/AddForm";
import FindForm from "../FindForm/FindForm";
import {useSelector,useDispatch} from 'react-redux'
import "./Phonebook.css";
import { CSSTransition } from "react-transition-group";
import {add} from '../../redux/actions/index'

export default () => {
  const [addFormName, setAddFormName] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState(false);
  const [title, setTitle] = useState(false);

  const contacts = useSelector((state) => state.usersList);
  const dispatch = useDispatch();

  useEffect(() => {
    setTitle(!title);
    if(localStorage.getItem('list')){
      JSON.parse(localStorage.getItem('list')).forEach(el => dispatch(add(el)))
    }
  }, []);


  const updateStorage = useCallback(() => {
    localStorage.setItem('list',JSON.stringify(contacts))
  }, [contacts]);

  useEffect(() => {
    updateStorage();
  }, [contacts]);

  const handleChange = (e) => {
    if (e.target.name === "addFormName") {
      setAddFormName(e.target.value);
      return;
    }
    if (e.target.name === "number") {
      setNumber(e.target.value);
    }
  };

  const reset = () => {
    setAddFormName("");
    setNumber("");
  };

  const busy = () => {
    setError(!error);
  };

  return (
    <section className="section">
      <CSSTransition
        in={title}
        classNames="title"
        timeout={{
          enter: 500,
          exit: 250,
        }}
        mountOnEnter
        unmountOnExit
      >
        <h2 className="title ">Phonebook</h2>
      </CSSTransition>

      <CSSTransition
        in={error}
        classNames="alert"
        timeout={{
          enter: 250,
          exit: 250,
        }}
        mountOnEnter
        unmountOnExit
      >
        <div className="alerts">Сontact is already taken!</div>
      </CSSTransition>

      <AddForm
        nameValue={addFormName}
        numberValue={number}
        onChange={handleChange}
        onReset={reset}
        error={busy}
      />
      <FindForm />
    </section>
  );
};
