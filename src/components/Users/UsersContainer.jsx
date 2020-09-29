import React from 'react';
import { connect } from "react-redux";
import {follow, unFollow, getUsers, getFollow, getUnFollow} from "../../Redux/usersReducer";
import { setActivePage } from "../../Redux/paginationReducer";
import Users from './Users';

class UsersContainer extends React.Component {

    componentDidMount() { this.props.getUsers(this.props.activePage, this.props.count); }

    onPageChanged = (pageNumber) => { this.props.getUsers(pageNumber); }

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
                    followingInProgress={this.props.followingInProgress}
                    getFollow={this.props.getFollow}
                    getUnFollow={this.props.getUnFollow}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default connect(
    mapStateToProps,
    {
        follow, unFollow, setActivePage, getUsers, getFollow, getUnFollow
    }
)(UsersContainer);