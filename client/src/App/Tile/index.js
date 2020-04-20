import React, {Component} from 'react';

const topLeft = (
	<p>
		My name is Christopher Shi and I'm a final-year Computer Science and Finance student at the University of New South Wales, Sydney.
		<br /><br />
		I'm currently a teaching assistant for COMP9447 Security Engineering Workshop and ENGG1000 Engineering Design.
		<br /><br />
		During my spare time I also watch F1 🏎, make my own coffee ☕️ and play around with Photoshop to make stuff like ➡️
	</p>
);

const topRight = (
	<img src="./better-pixel-art-coming-soon.gif" alt="better pixel art coming soon"/>
);

const bottomLeft = (
	<>
	<b>Stuff Ive done (will do): </b>
	<ul>
		<li>Incoming Software Engineer at Atlassian (2021)</li>
		<li>Teaching Assistant for COMP9447, COMP9301, ENGG1000</li>
		<li>Organised a Cybersecurity Summit at UNSW for over 400 people</li>
		<li>Led UNSW Data Science Society in 2019 + running an international hackathon with a $5K aud prize pool</li>
		<li>Worked at 1Scope, helping bring more opportunities to Australian school children</li>
	</ul>
	</>
);

const bottomRight = (
	<>
	<b>Hobbies (mild addictions haha): </b>
	<ul>
		<li>Playing with pixel / isometric art</li>
		<li>Gymming</li>
		<li>Travel photography / videography</li>
		<li>Mechanical keyboards</li>
		<li>Vim</li>
		<li>80's music / eurobeat / 80's everything</li>
		<li>Doing things with the cloud / security / games</li>
		<li>Hobby coding</li>
	</ul>
	</>
);

class Tile extends Component {
	render() {
		return (
			<div className="tile">{this.props.pos}</div>
		);
	}
}

// TODO standardise exports across project
export {topLeft, topRight, bottomLeft, bottomRight, Tile}
