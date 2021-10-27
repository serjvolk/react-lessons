import React from "react";
import css from './Paginator.module.css';

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }

    return  (
        <div className={css.navigation}>
            {pages.map(p => {
                return <span className={currentPage === p && css.selectedPage}
                             onClick={(e) => {onPageChanged(p) }}>{p}</span>
            })}
        </div>
    );
}

export default Paginator;