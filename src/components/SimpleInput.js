import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnterdNameIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const forSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim() === '') {
      setEnterdNameIsValid(false);
      return;
    }

    setEnterdNameIsValid(true);
    console.log(enteredName);
  };

  const nameInputClasses = enteredNameIsValid
    ? 'form-control'
    : 'form-control invalid';

  return (
    <form onSubmit={forSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {!enteredNameIsValid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
