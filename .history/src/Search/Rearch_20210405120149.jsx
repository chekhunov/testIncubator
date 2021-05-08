import { useState } from 'react';
import style from './Search.module.css';



const Search = () => {
  
  const [output, setOutput] = useState('hi');

  // function (event) {
  //   setOutput(textInput.current.value);
  // }

  return (
    <div className={style.search}>
      <form className={style.form}>
        <label className={style.label}>
          Форма для поиска
          <input className={style.inputSearch} type="text" name="search" placeholder="Поиск слова" />
        </label>
        <button className={style.btn} type="submit" value="Найти">Найти</button>
        <h3>{output}</h3>
      </form>
    </div>
  )
}

export default Search