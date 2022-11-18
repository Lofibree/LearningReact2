import React from 'react';
import s from './Paginator.module.css'

const Paginator = (props) => {

    const getPagesArr = () => {
        let pagesArr = [];
        if (props.totalUsersCount && props.pageSize) {
            let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
            for (let i = 1; i <= pagesCount; i++) {
                pagesArr.push(i);
            }
            return pagesArr;
        } else if (props.charactersCount && props.pageSize) {
            pagesArr = [1, 2, 3, 4, 5, 6, 7];
            return pagesArr;
        } else {
            pagesArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            return pagesArr;
        }
    }


    return (
        <div className={s.pagesNumberBox}>
            {getPagesArr().map((p) => {
                if (p <= 10) {
                    return <span
                        className={
                            props.currentPage === p
                                ? s.selectedPage
                                : undefined
                        }
                        onClick={() => {
                            props.onPageChanged(props.pageSize, p)
                        }}
                    >
                        {p}
                    </span>
                }
            })}
        </div>
    )
};

export default Paginator;