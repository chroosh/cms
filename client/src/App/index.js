import React from 'react';
import Blog from './Blog';
import Menubar from './Menubar';
import {topLeft, topRight, bottomLeft, bottomRight, Tile} from './Tile';
import './index.css';

function App() {
  return (
    <div className="App">
			<Menubar />

			<div className="wrapper">
				<Tile pos={topLeft}/>
				<Tile pos={topRight}/>
			</div>

			<div className="wrapper">
				<Tile pos={bottomLeft}/>
				<Tile pos={bottomRight}/>
			</div>

      <Blog />
    </div>
  );
}

export default App;
