import React from 'react';
import style from './Search.module.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      users:  [{id: 0, name: 'niba', age: 23},
    { id: 1, name: 'hiba', age: 23}],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.value == 'google') {
      alert('Yandex круче. Но это не точно');

      event.preventDefault();
    } else {
      alert(this.state.value + this.state.users.id{0});
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
