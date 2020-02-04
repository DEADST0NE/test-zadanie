import React from 'react';

import s from './Search.module.css'

const Search = () => {
    return (
        <div className={s.inputGroup}>
            <input placeholder="Поиск" />
            <button>Найти</button>
        </div>
    )
}

export default Search;