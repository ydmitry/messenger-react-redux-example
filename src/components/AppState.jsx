import {connect} from 'react-redux';
import * as actionCreators from '../actionCreators';
import App from './App.jsx';

function mapStateToProps(state) {
    return {
        signedIn: state.get('signedIn'),
        authorName: state.get('authorName'),
        signInForm: state.get('signInForm'),
        posts: state.get('posts'),
        comments: state.get('comments'),
        postForm: state.get('postForm'),
        commentForms: state.get('commentForms'),
    };
}

export default connect(
    mapStateToProps,
    actionCreators
)(App);
