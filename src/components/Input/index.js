import React, { useState, useEffect } from 'react';
import { validateInput, validate } from '../../helpers';
import './style.scss';

const Input = ({
  type = 'text',
  name,
  placeHolder = 'Place Holder',
  value,
  errorMsg = '',
  valErrorMsg,
  required = false,
  validateSelf = false,
  handleChange = () => {},
  reviel,
  setValidateSelf,
  attr = {},
  open = false,
  inputValidate = true,
  example,
}) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(errorMsg);
  const [internalValue, setInternalValue] = useState(value);
  const [typing, setTyping] = useState(false);

  const inputCon = React.createRef();
  const inputRef = React.createRef();

  useEffect(() => {
    if (validateSelf && required) {
      const isValid = validate(value, name);

      if (!isValid) {
        inputCon.current.classList.add('typing', 'invalid');
        inputCon.current.classList.remove('valid');
        setErrorMessage(errorMsg);
        setError(true);
      }
    }

    setInternalValue(value);

    return () => {};
  }, [inputCon, name, validateSelf, value, required, errorMsg, valErrorMsg]);

  useEffect(() => {
    if (internalValue === '' || !internalValue) {
      setErrorMessage(valErrorMsg);
      inputCon.current.classList.remove('typing');
    } else {
      inputCon.current.classList.add('typing');

      if (inputValidate) {
        const isValid = validate(value, name);

        if (!isValid) {
          inputCon.current.classList.add('invalid');
          inputCon.current.classList.remove('valid');
          setErrorMessage(errorMsg);
          setError(true);
        } else {
          inputCon.current.classList.add('valid');
          inputCon.current.classList.remove('invalid');
          setError(false);
        }
      } else {
        inputCon.current.classList.add('valid');
        inputCon.current.classList.remove('invalid');
      }
    }
    return () => {};
  }, [
    value,
    inputCon,
    valErrorMsg,
    open,
    errorMsg,
    inputValidate,
    name,
    required,
    internalValue,
  ]);

  function addCommas(x) {
    x = x.split(',').join('');

    if (x === '') return '';
    if (!Number(x)) return value;

    var parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  const validateOne = (event) => {
    if (type === 'formattednumber') {
      event.target.value = addCommas(event.target.value);
    }

    handleChange(event, error);

    if (!inputValidate) {
      if (value) {
        inputCon.current.classList.add('typing');
      }
      return;
    }

    setValidateSelf && setValidateSelf(false);
    if (!validateInput(event)) {
      inputCon.current.classList.add('invalid');
      inputCon.current.classList.remove('valid');

      setErrorMessage(errorMsg);
      setError(true);
    } else {
      inputCon.current.classList.remove('invalid');
      inputCon.current.classList.add('valid');

      setError(false);
    }

    setInternalValue(event.target.value);
  };

  return (
    <div className="input-div">
      <div className="input">
        <div className="input-con" ref={inputCon}>
          <input
            onFocus={() => setTyping(true)}
            onBlur={() => setTyping(false)}
            className="input-type"
            type={reviel ? 'text' : type}
            required={required}
            name={name}
            onChange={validateOne}
            value={value}
            ref={inputRef}
            {...attr}
            placeholder={example && (typing || error) ? example : ''}
          />

          <div className="el-spans">
            <span style={{ zIndex: '-1' }} className="place-holder">
              {placeHolder}
            </span>

            <span className="grow" />
          </div>

          <p className="error" style={{ display: error ? 'block' : 'none' }}>
            {errorMessage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Input;
