import React from 'react';
import Comments from './Comments';
import Post from './Post';
import {List, Map} from 'immutable';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        let { posts = List(), comments = Map(), commentForms = Map()} = this.props;

        return <div className="posts">
            { posts.map(post => <div className="posts__item" key={post.get('id')}>
                <Post
                    text={post.get('text')}
                    name={post.get('name')}
                />

                <Comments
                    signedIn={this.props.signedIn}
                    comments={comments.get(post.get('id'))}
                    form={commentForms.get(post.get('id'))}
                    postId={post.get('id')}
                    onCommentChange={this.props.onCommentChange}
                    onCommentSubmit={this.props.onCommentSubmit}
                    onShowComments={this.props.onShowComments}
                />
            </div>)}
        </div>
    }
});
