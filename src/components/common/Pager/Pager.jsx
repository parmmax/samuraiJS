import React from 'react';
import { Pagination, } from 'react-bootstrap';

const Pager = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.count); //totalPages = Math.ceil(totalItems / pageSize)

    let pageNumber = []; 

    // let pager = {
    //     totalItems: totalItems,
    //     currentPage: currentPage,
    //     pageSize: pageSize,
    //     totalPages: totalPages,
    //     startPage: startPage,
    //     endPage: endPage,
    //     startIndex: startIndex,
    //     endIndex: endIndex,
    //     pages: pages
    // };

    for (let number = 1; number <= pagesCount; number++) {
        pageNumber.push(number);
    }

    return (
        <div className="d-flex flex-column align-items-end">
            <Pagination size="sm" className="text-secondary">
                <Pagination.First />
                <Pagination.Prev />
                {pageNumber.map(pageNumber => {
                    return (
                        <Pagination.Item key={pageNumber}
                            active={props.activePage === pageNumber}
                            onClick={() => { props.onPageChanged(pageNumber) }}
                        >
                            {pageNumber}
                        </Pagination.Item>
                    )
                })}
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
            
        </div>
    )
}

export default Pager;