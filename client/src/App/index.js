import React from 'react';
import Blog from './Blog';
import Menubar from './Menubar';
import {topLeft, topRight, bottomLeft, bottomRight, Tile} from './Tile';
import './index.css';

// convert to material ui
function App() {
  return (
    <div className="App">
			<Menubar />

			<div className="wrapper">
				<Tile text={topLeft}/>
				<Tile text={topRight}/>
			</div>

			<div className="wrapper">
				<Tile text={bottomLeft}/>
				<Tile text={bottomRight}/>
			</div>

      <Blog />
    </div>
  );
}

export default App;
