import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        let { className, post } = this.props;

        return <form className={"post-form " + className} onSubmit={this.onSubmit}>
            <input type="text" ref="text" name="text" value={ post.get('text') || ''} onChange={this.onChange} />
            <input type="button" value="OK" disabled={post.get('text') ? false : true} onClick={this.onSubmit} />
        </form>
    },

    onChange: function(e) {
        this.props.onChange({
            text: this.refs.text.value
        });
    },

    onSubmit: function(e) {
        this.props.onSubmit({
            text: this.refs.text.value
        });

        e.preventDefault();
        return false;
    }
});
