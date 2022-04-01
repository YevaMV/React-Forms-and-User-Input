import { useState, useEffect } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnterdNameIsValid] = useState(false);
  const [enteredNameTouched, setEnterdNameTouched] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log('Name input is valid');
    }
  }, [enteredNameIsValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const forSubmitHandler = (event) => {
    event.preventDefault();

    setEnterdNameTouched(true);

    if (enteredName.trim() === '') {
      setEnterdNameIsValid(false);
      return;
    }

    setEnterdNameIsValid(true);
    console.log(enteredName);
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid '
    : 'form-control';

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
        {nameInputIsInvalid && (
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
