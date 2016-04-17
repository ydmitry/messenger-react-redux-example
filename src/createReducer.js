import {Map, fromJS} from 'immutable';
import commentFormChange from './reducers/commentFormChange';
import postFormChange from './reducers/postFormChange';
import showPosts from './reducers/showPosts';
import showComments from './reducers/showComments';
import signIn from './reducers/signIn';
import signInChange from './reducers/signInChange';
import showUser from './reducers/showUser';
import signOut from './reducers/signOut';

export default function createReducer(model) {
    return function reducer(state = Map(), action = null) {
        switch (action.type) {
            case '@@INIT':
            case '@@redux/INIT':
                return fromJS({
                    model: model,
                    signedIn: false,
                    authorName: null,
                    posts: [],
                    comments: {}, // object postId => [comments]
                    signInForm: null, // or { name : "" }
                    postForm: null, // or { post : "" }
                    commentForms: {}, // object postId => {comment}
                });
            case 'SIGN_IN':
                return signIn(state);
            case 'SHOW_USER':
                return showUser(state, action.name);
            case 'SIGN_IN_CHANGE':
                return signInChange(state, action.name);
            case 'SIGN_OUT':
                return signOut(state);
            case 'SHOW_POSTS':
                return showPosts(state, action.posts);
            case 'SHOW_COMMENTS':
                return showComments(state, action.postId, action.comments);
            case 'POST_FORM_CHANGE':
                return postFormChange(state, action.post);
            case 'COMMENT_FORM_CHANGE':
                return commentFormChange(state, action.postId, action.comment);

            default:
                console.log('action not found', action);
        }
        return state;
    }
}
