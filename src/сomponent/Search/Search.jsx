import React from 'react';

import s from './Search.module.css'

const Search = () => {
    return (
        <div className={s.inputGroup}>
            <div className={s.searchW}>
                <input placeholder="Поиск" />
                <button>Найти</button>
            </div>
        </div>
    )
}

export default Search;