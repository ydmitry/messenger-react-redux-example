import React from 'react';
import Comments from './Comments';
import Post from './Post';
import CommentForm from './CommentForm';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        let { comments, form, postId, signedIn } = this.props;

        return <div className="comments">
            <h5>Comments</h5>
            { comments ? comments.map(comment => <div className="comments__item" key={comment.get('id')}>
                <p>
                    <b>{comment.get('name')}</b>
                    {" "}
                    {comment.get('text')}
                </p>
            </div>) : null}


            {signedIn ? <CommentForm
                postId={postId}
                comment={form}
                onChange={this.props.onCommentChange}
                onSubmit={this.props.onCommentSubmit}
            /> : null }
        </div>
    },

    onShowComments: function(e) {
        this.props.onShowComments(this.props.postId);
    }
});
