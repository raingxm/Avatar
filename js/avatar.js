var Avatar = React.createClass({

	getDefaultProps: function() {
		return {
			path: 'http://nick.mtvnimages.com/nick/properties/avatar/show-thumb-avatar-web.jpg?quality=0.75&maxdimension=600'
		}
	},
	
	render: function() {
		return (
			<a href={ this.props.path }>
			<img src={ this.props.path } />
			</a>
			
			);
	}
});

React.render(<Avatar />, document.body);