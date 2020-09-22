import React from 'react';
import { connect } from "react-redux";
import * as axios from 'axios';
import { follow, unfollow, setUsers, } from "../../Redux/usersReducer";
import { setActivePage, setTotalCount, } from "../../Redux/paginationReducer";
import { toggleIsFetching } from "../../Redux/preLoaderReducer";
import Users from './Users';

class UsersContainer extends React.Component {
    debugger;
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.count}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setActivePage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.count}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.setUsers(response.data.items);
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