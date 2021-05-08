import React from 'react';
import style from './Search.module.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  const = (user = [
    { name: 'Anton', year: 2018 },
    { name: 'Nton', year: 2016 },
    { name: 'Ton', year: 2010 },
  ]);

  handleSubmit(event) {
    if (this.state.value == 'google') {
      alert('Yandex круче. Но это не точно' + this.state.users.name);

      event.preventDefault();
    } else {
      alert(this.state.value);
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
        <input className={style.searchBtn} type="submit" value="Найти" />
      </form>
    );
  }
}

export default NameForm;
