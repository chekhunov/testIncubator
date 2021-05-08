import React from 'react';
import style from './Search.module.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      userName: '',
    };

    var userTmp;
    props.items.map((item) => {
      if (item.id == '1') {
        console.log(item.name);
        userTmp = item.name;
      }
    });

    this.findUser(userTmp);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  first = 5;
  last = 2;
  superSum(first, last) {
    return first + last;
  }

  findUser(userTmp) {
    this.state.userName = userTmp;
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.value == 'google') {
      alert('Yandex круче. Но это не точно' + ' ' + this.state.userName + ' ' + this.superSum());

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
