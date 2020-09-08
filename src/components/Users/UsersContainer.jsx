import React from 'react';
import { connect } from "react-redux";
import * as axios from 'axios';
import Users from './Users';
import { follow, unfollow, setUsers, } from "../../Redux/usersReducer";
import { setActivePage, setTotalCount, } from "../../Redux/paginationReducer";
import { toggleIsFetching } from "../../Redux/preLoaderReducer";
// import PreLoader from '../common/PreLoader/PreLoader';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.count}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setActivePage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.count}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);
            });
    }

    render() {
        return (
            <>
                {/* {this.props.isFetching ? <PreLoader /> : } */}
                <Users
                    activePage={this.props.activePage}
                    count={this.props.count}
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
        activePage: state.pageSwitch.activePage,
        count: state.pageSwitch.count,
        totalCount: state.pageSwitch.totalCount,
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