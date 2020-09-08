import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (newTextFromTextarea) => {
            let action = updateNewPostTextActionCreator(newTextFromTextarea);
            dispatch(action);
        },
        addPost: () => {
            let addPostDispatch = addPostActionCreator();
            dispatch(addPostDispatch);
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer