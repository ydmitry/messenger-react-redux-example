import '../styles/app.less';
import React from 'react';
import Header from './Header.jsx';
import Posts from './Posts.jsx';
import PostForm from './PostForm.jsx';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        return <div className="app">
            <Header
                signedIn={this.props.signedIn}
                authorName={this.props.authorName}
                signInForm={this.props.signInForm}
                onShowSignInForm={this.props.showSignInForm}
                onSignInChange={ this.props.signInChange }
                onSignInSubmit={ this.props.sendSignIn }
                onSignOut={ this.props.sendSignOut }
            />

            {this.props.signedIn && !this.props.postForm ?
                <div className="app__post-button" onClick={this.onAddPost}>Add post</div>
                : null}

            {this.props.signedIn && this.props.postForm ?
                <PostForm
                    post={this.props.postForm}
                    onChange={ this.props.postFormChange }
                    onSubmit={ this.props.addPost }
                />
                : null}

            <Posts
                posts={this.props.posts}
                comments={this.props.comments}
                commentForms={this.props.commentForms}
                signedIn={this.props.signedIn}
                onCommentChange={ this.props.commentFormChange }
                onCommentSubmit={ this.props.addComment }
                onShowComments={ this.props.sendShowComments }
            />
        </div>
    },

    onAddPost: function() {
        this.props.postFormChange({});
    }
});
