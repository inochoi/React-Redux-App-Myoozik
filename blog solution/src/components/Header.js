import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { resetDeletedPost, deletePost } from '../actions/posts';
import { withRouter } from 'react-router-dom';

const Header = (props) => {

	const dispatch = useDispatch();

	const { deletedPost } = useSelector(state => ({
		deletedPost: state.posts.deletedPost
	}));

	const renderLinks = () => {
		const { type } = props;
		if (type === 'posts_index') {
			return (
				<div className="container">
					<ul className="nav  nav-pills navbar-right">
						<li style={{ paddingRight: '10px' }} role="presentation">
							<Link style={{ color: '#337ab7', fontSize: '17px' }} to="/posts/new">
								New Post
    					</Link>
						</li>
					</ul>

				</div>
			);
		} else if (type === 'posts_new') {
			return (
				<div className="container">
					<ul className="nav  nav-pills navbar-left">
						<li style={{ paddingRight: '10px' }} role="presentation">
							<Link className="text-xs-right" style={{ color: '#337ab7', fontSize: '17px' }} to="/">Back To Index</Link>
						</li>
					</ul>
				</div>
			);
		} else if (type === 'posts_show') {
			return (
				<div className="container">
					<ul className="nav  nav-pills navbar-left">
						<li style={{ paddingRight: '10px', color: '#337ab7', fontSize: '17px' }} role="presentation"><Link to="/">Back To Index</Link></li>
					</ul>

					<div className="navbar-form navbar-right" style={{ paddingRight: '50px' }}>
						<button className="btn btn-warning pull-xs-right" onClick={() => dispatch(deletePost(props.postId)) }>Delete Post</button>
					</div>
				</div>
			);
		}
	};

	if (deletedPost.post) {
		dispatch(resetDeletedPost());
		props.history.push('/');
	}

	return (
		<nav className="navbar navbar-default navbar-static-top">
			<div id="navbar" className="navbar-collapse collapse">
				{renderLinks()}
			</div>
		</nav>
	);
}

export default withRouter(Header);