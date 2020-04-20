import React, {Component} from 'react';
import './index.css';

class Menubar extends Component {
	render() {
		return (
			<nav id="menubar">
				<ul className="nav">
					<li className="home">
						<a href="/">
							<u>Hello!</u>
						</a>
					</li>
				</ul>
			</nav>
		)
	}
}

export default Menubar;

