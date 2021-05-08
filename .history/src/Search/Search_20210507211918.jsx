import React from 'react';
import style from './Search.module.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      userName: '',
    };
    // console.log(this.state.userName);

    props.users.map((item) => {
      if (item.id == '1') {
        console.log(item.name);
        this.state.userName = item.name;
      }
    });

    this.handleChange = this.handleChange.bind(this);
    // this.findUser();
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
      alert(this.state.value);
      event.preventDefault();
    }
  }

  // findUser() {
  //   this.state.userName.map((item) => {
  //     if (item.id == '1') {
  //       console.log(item.name);
  //       this.setState({ userName: item.name });
  //     }
  //   });
  // }

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
