import React, { useState } from 'react';
import { Pagination, } from 'react-bootstrap';

const Pager = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.countPerPage); //totalPages = Math.ceil(totalItems / pageSize)

    let pageNumber = [];

    for (let num = 1; num <= pagesCount; num++) {
        pageNumber.push(num);
    }

    // console.log('countPerPage: ', props.countPerPage);
    // console.log('activePage: ', props.activePage);

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