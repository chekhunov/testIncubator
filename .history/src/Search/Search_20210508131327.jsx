import React from 'react';
import style from './Search.module.css';

class NameForm extends React.Component {
  // array = [1, 5, 8, 9, 4, 92, 3];

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
        // console.log(item.name);
        userTmp = item.name;
      }
    });

    // console.log(this.findMinAndMaxElement(this.array));
    console.log(this.maxElement(this.list));
    this.findUser(userTmp);
    this.superSum(2, 5);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  list = [1, 5, 8, 9, 4, 92, 3];
  findmax(array) {
    var max = 0,
      a = array.length,
      counter;

    for (counter = 0; counter < a; counter++) {
      if (array[counter] > max) {
        max = array[counter];
      }
    }
    return max;
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
