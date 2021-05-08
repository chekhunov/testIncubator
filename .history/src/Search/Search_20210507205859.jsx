import React from 'react';
import style from './Search.module.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      userName: props.items,
    };
    // console.log(this.state.userName);

    // props.items.map((item) => {
    //   if (item.id == '1') {
    //     console.log(item.name);
    //     nameUser = item.name;
    //   }
    // });

    this.findUser();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.value == 'google') {
      alert('Yandex круче. Но это не точно' + this.state.userName);

      event.preventDefault();
    } else {
      alert(this.state.value);
      event.preventDefault();
    }
  }

  // findUser(event) {
  //   var nameUser;
  //   this.state.userName.map((item) => {
  //     if (item.id == '1') {
  //       console.log(item.name);
  //       nameUser = item.name;
  //     }
  //   });
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
