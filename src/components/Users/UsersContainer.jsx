import React from 'react'
import { connect } from 'react-redux'
import {
   follow,
   unFollow,
   getFollowThunk,
   getUnFollowThunk, getUsersThunk,

} from '../../BLL/reducers/usersReducer'
import { setActivePage } from '../../BLL/reducers/paginationReducer'
import Users from './Users'
import { compose } from 'redux'
import {
   getActivePage,
   getCountPerPage,
   getFollowingInProgress,
   getIsFetching,
   getTotalCount,
   getUsers
} from '../../BLL/selectors/usersSelectors'

class UsersContainer extends React.Component {

   componentDidMount () {
      this.props.getUsersThunk(this.props.activePage, this.props.count)
   }

   onPageChanged = (pageNumber) => { this.props.getUsersThunk(pageNumber) }

   render () {
      console.log('render USERS')

      return (
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
            getFollow={this.props.getFollowThunk}
            getUnFollow={this.props.getUnFollowThunk}
         />
      )
   }
}

let mapStateToProps = (state) => {
   console.log('mapStateToProps USERS')
   return {
      users: getUsers(state),
      activePage: getActivePage(state),
      countPerPage: getCountPerPage(state),
      totalCount: getTotalCount(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state),
   }
}

export default compose(
   connect (mapStateToProps, { follow, unFollow, setActivePage, getUsersThunk, getFollowThunk, getUnFollowThunk, })
)(UsersContainer);