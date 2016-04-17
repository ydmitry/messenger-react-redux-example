import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Map } from 'immutable';

export default React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        let { className, comment = Map(), postId } = this.props;

        return <form className={"comment-form " + className} onSubmit={this.onSubmit}>
            <input type="text" ref="text" name="text" value={ comment.get('text') || ""} onChange={this.onChange} />
            <input type="button" value="OK" disabled={comment.get('text') ? false : true} onClick={this.onSubmit} />
        </form>
    },

    onChange: function(e) {
        this.props.onChange(this.props.postId, {
            text: this.refs.text.value
        });
    },

    onSubmit: function(e) {
        this.props.onSubmit(this.props.postId, {
            text: this.refs.text.value
        });

        e.preventDefault();
        return false;
    }
});
