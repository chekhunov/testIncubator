import React from 'react'
import style from './Search.module.css'

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            className={style.searchIn} 
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Поиск текста"
          />
        </label>
        <input className={style.searchOut} type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm

