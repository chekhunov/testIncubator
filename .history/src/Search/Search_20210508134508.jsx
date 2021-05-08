import React from 'react';
import style from './Search.module.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      userName: '',
      sum: '',
    };

    var userTmp;
    props.items.map((item) => {
      if (item.id == '1') {
        userTmp = item.name;
      }
    });

    var array = [1, 5, 8, 9, 4, 92, 3];
    console.log(this.findMin(array));
    console.log(this.findMax(array));
    this.findUser(userTmp);
    this.superSum(2, 5);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  findMax(array) {
    var max = array[0],
      a = array.length,
      counter;

    for (counter = 0; counter < a; counter++) {
      if (array[counter] > max) {
        max = array[counter];
      }
    }
    return max;
  }

  findMin(array) {
    var min = array[0],
      a = array.length,
      counter;

    for (counter = 0; counter < a; counter++) {
      if (array[counter] < min) {
        min = array[counter];
      }
    }
    return min;
  }

  superSum(first, last) {
    let sum = first + last;
    this.state.sum = sum;
  }

  findUser(userTmp) {
    this.state.userName = userTmp;
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.value == 'google') {
      alert('Yandex круче. Но это не точно' + ' ' + this.state.userName + ' ' + this.state.sum);

      event.preventDefault();
    } else {
      alert(this.state.value + ' ' + this.state.userName + ' ' + this.state.sum);
      event.preventDefault();
    }
    setTimeout(alert(this.findMax(array), 3000));
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
