import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/register.scss';

function Register({ handleChangeRegister, handleSubmitRegister }) {
  return (
    <>
      <section className="registration">
        <header className="registration__header">
          <h1 className="registration__title">Register</h1>
        </header>

        <form
          className="registration-frm"
          onSubmit={event => handleSubmitRegister(event)}
        >
          <div>
            <label
              className="registration-frm__namelabel show--screenreaders"
              htmlFor="firstName"
            >
              Name
            </label>
            <input
              className="registration-frm__name"
              placeholder="Name"
              onChange={event => handleChangeRegister(event)}
              type="text"
              name="firstName"
              pattern="[A-Za-z]{3,}"
              required
            />
            <span className="validity" />
          </div>

          <div>
            <label
              className="registration-frm__emaillabel show--screenreaders"
              htmlFor="registrationEmail"
            >
              Email
            </label>
            <input
              className="registration-frm__email"
              placeholder="Email"
              type="email"
              autoComplete="username"
              onChange={event => handleChangeRegister(event)}
              name="registrationEmail"
              required
            />
            <span className="validity" />
          </div>

          <div>
            <label
              className="registration-frm__passwordlabel show--screenreaders"
              htmlFor="registrationPassword"
            >
              Password
            </label>
            <input
              className="registration-frm__password"
              placeholder="Password"
              type="password"
              autoComplete="current-password"
              onChange={event => handleChangeRegister(event)}
              name="registrationPassword"
              required
            />
            <span className="validity" />
          </div>

          <button
            type="submit"
            className="registration-frm__submit btn btn__submit"
          >
            Register
          </button>
        </form>
      </section>
    </>
  );
}

Register.propTypes = {
  handleChangeRegister: PropTypes.func.isRequired,
  handleSubmitRegister: PropTypes.func.isRequired,
};

export default Register;
