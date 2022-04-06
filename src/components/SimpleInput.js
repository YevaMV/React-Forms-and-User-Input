import { useState } from 'react';

import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '');

  const [enteredMail, setEnteredMail] = useState('');
  const [enteredMailTouched, setEnteredMailToched] = useState(false);

  const enteredMailIsValid = enteredMail.includes('@');
  const mailInputIsInValid = !enteredMailIsValid && enteredMailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredMailIsValid) {
    formIsValid = true;
  }

  const mailInputChangeHandler = (event) => {
    setEnteredMail(event.target.value);
  };

  const mailInputBlurHandler = (event) => {
    setEnteredMailToched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredMailToched(true);

    if (!enteredNameIsValid) {
      return;
    }

    if (!enteredMailIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredMail);

    resetNameInput();

    setEnteredMail('');
    setEnteredMailToched(false);
  };

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const mailInputClasses = mailInputIsInValid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={mailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={mailInputChangeHandler}
          onBlur={mailInputBlurHandler}
          value={enteredMail}
        />
        {mailInputIsInValid && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
