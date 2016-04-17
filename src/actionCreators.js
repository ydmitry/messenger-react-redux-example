export {default as addComment} from './actionCreators/addComment';
export {default as addPost} from './actionCreators/addPost';
export {default as sendSignIn} from './actionCreators/sendSignIn';
export {default as sendSignOut} from './actionCreators/sendSignOut';
export {default as sendShowComments} from './actionCreators/sendShowComments';

export function showSignInForm() {
    return {
        type: 'SIGN_IN'
    }
}

export function signInChange({ name }) {
    return {
        type: 'SIGN_IN_CHANGE',
        name
    }
}

export function showUser(name) {
    return {
        type: 'SHOW_USER',
        name
    }
}

export function signOut() {
    return {
        type: 'SIGN_OUT'
    }
}

export function showPosts(posts) {
    return {
        type: 'SHOW_POSTS',
        posts
    }
}

export function showComments(postId, comments) {
    return {
        type: 'SHOW_COMMENTS',
        postId,
        comments
    }
}

export function commentFormChange(postId, comment) {
    return {
        type: 'COMMENT_FORM_CHANGE',
        comment,
        postId
    }
}

export function postFormChange(post) {
    return {
        type: 'POST_FORM_CHANGE',
        post
    }
}


