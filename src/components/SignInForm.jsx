import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        let { className, user } = this.props;

        return <form className={"sign-in-form " + className} onSubmit={this.onSubmit}>
            <input type="text" ref="name" name="name" value={ user.get('name') || "" } onChange={this.onChange} />
            <input type="button" value="Sign in" disabled={user.get('name') ? false : true} onClick={this.onSubmit} />
        </form>
    },

    onChange: function(e) {
        this.props.onChange({
            name: this.refs.name.value
        });
    },

    onSubmit: function(e) {
        this.props.onSubmit({
            name: this.refs.name.value
        });

        e.preventDefault();
        return false;
    }
});
