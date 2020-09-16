import React from 'react';
import { connect } from "react-redux";
import { follow, unfollow, setUsers, } from "../../Redux/usersReducer";
import { setActivePage, setTotalCount, } from "../../Redux/paginationReducer";
import { toggleIsFetching } from "../../Redux/preLoaderReducer";
import Users from './Users';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {
    debugger;
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.activePage, this.props.count).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalCount(data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setActivePage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.count).then(data => {
                this.props.setUsers(data.items);
                this.props.toggleIsFetching(false);
            });
    }

    render() {
        return (
            <>
                <Users
                    activePage={this.props.activePage}
                    countPerPage={this.props.countPerPage}
                    totalCount={this.props.totalCount}
                    isFetching={this.props.isFetching}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    onPageChanged={this.onPageChanged}
                />
            </>
        )
    }
};

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        activePage: state.pagination.activePage,
        countPerPage: state.pagination.countPerPage,
        totalCount: state.pagination.totalCount,
        isFetching: state.preLoader.isFetching
    }
};

export default connect(
    mapStateToProps,
    {
        follow, unfollow, setUsers,
        setActivePage, setTotalCount,
        toggleIsFetching
    }
)(UsersContainer);