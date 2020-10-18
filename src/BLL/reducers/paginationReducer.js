const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
// const SET_COUNT_PER_PAGE = 'SET_COUNT_PER_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

let initialState = {
    activePage: 1,          // (currentPage) активная, текущая страница
    countPerPage: 10,       // (pageSize) кол-во items на одной странице
    totalCount: 0,          // (totalItemsCount) всего counts
    isFetching: false       // получаются данные? (true/false)
};

const paginationReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_ACTIVE_PAGE: {
            return { ...state, activePage: action.activePage }
        }
        // case SET_COUNT_PER_PAGE: {
        //     return { ...state, countPerPage: action.countPerPage }
        // }
        case SET_TOTAL_COUNT: {
            return { ...state, totalCount: action.totalCount }
        }
        default:
            return state;
    }
};

export const setActivePage = (activePage) => ({ type: 'SET_ACTIVE_PAGE', activePage });
// export const setCountPerPage = (countPerPage) => ({ type: 'SET_COUNT_PER_PAGE', countPerPage });
export const setTotalCount = (totalCount) => ({ type: 'SET_TOTAL_COUNT', totalCount });

export default paginationReducer;