import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        let { className, text, name } = this.props;

        return <div className={"post " + className}>
            <h3>{name}</h3>
            <p>{text}</p>
        </div>
    },

    onChange: function(e) {
        this.props.onChange({
            post: this.refs.post.value
        });
    },

    onClick: function(e) {
        this.props.onSubmit({
            post: this.refs.post.value
        });
    }
});
