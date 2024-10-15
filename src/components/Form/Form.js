import "./Form.css";
import Avatar from "../../images/avatar.png";
import { FORM_DATAS } from "../../mocks/form-datas";
import { useState } from "react";

function Form() {
  const [values, setValues] = useState({});

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(values);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__avatar">
        <img className="form__foto" src={Avatar} alt=""></img>
        <button
          className="form__button form__button_avatar"
          type="button"
        ></button>
      </div>
      <div className="form__content">
        <fieldset className="form__fields">
          {FORM_DATAS.map((el) => (
            <div className="form__field" key={el.label}>
              <label htmlFor={el.htmlFor} className="from__label">
                {el.label}
              </label>
              {el.type === "input" ? (
                <input
                  onChange={handleChange}
                  name={el.name}
                  className="form_input"
                  placeholder={el.placeholder}
                  value={values[el.name] || ""}
                ></input>
              ) : (
                <select
                  onChange={handleChange}
                  name={el.name}
                  className="form_input form__select"
                  value={values[el.name] || ""}
                >
                  {el.options.map((option) => (
                    <option value={option.value || ""} key={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}
            </div>
          ))}
        </fieldset>
        <button className="form__button form__button_save" type="submit">
          Save
        </button>
      </div>
    </form>
  );
}

export default Form;
