import React from 'react'
import style from './Search.module.css'

class NameForm extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      user: [
        { name: "Anton", year: 2018 },
        { name: "Nton", year: 2016 },
        { name: "Ton", year: 2010 },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    if (this.state.value == "google") {
      alert("A name was submitted: " + "Yandex круче. Но это не точно");
      event.preventDefault();
    } else {
      alert("A name was submitted: " + this.state.value);
      alert(JSON.stringify(this.state.user.name, null, 4));
      event.preventDefault();
    }
  }

  render() {
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <label>
          Введите слово:
          <input
            className={style.searchIn}
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Поиск текста"
          />
        </label>
        <input className={style.searchBtn} type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm

