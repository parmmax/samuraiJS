import React, {useState} from 'react';
import {Pagination,} from 'react-bootstrap';

type PropsType = {
    totalCount: number
    countPerPage: number
    activePage?: number
    onPageChanged?: (pageNumber: number) => void
    portionSize?: number
}

let Pager: React.FC<PropsType> = ({
                                      totalCount, countPerPage,
                                      activePage = 1,
                                      onPageChanged = x => x,
                                      portionSize = 10
                                  }) => {

    let pagesCount = Math.ceil(totalCount / countPerPage);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (
        <Pagination size="sm">
            {portionNumber > 1 &&
            <Pagination.Prev className="bg-dark"
                             onClick={() => {
                                 setPortionNumber(portionNumber - 1)
                             }}/>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return (
                        <Pagination.Item key={p}
                                         className="text-dark"
                                         onClick={(e) => {
                                             onPageChanged(p)
                                         }}>
                            {p}
                        </Pagination.Item>
                    )
                })}
            {portionCount > portionNumber &&
            <Pagination.Next onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}/>}
        </Pagination>
    )
};

export default Pager;