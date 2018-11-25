import React, { useState } from "react";
import ReactDOM from "react-dom";
import List from './containers/List';
import { Router, Link } from '@reach/router'

let Nav = () => (<div>
	<h1>Gripe away</h1>
	<nav>
		<Link to="/">Home</Link> |{" "}
		<Link to="list">List</Link>
	</nav>
</div>
)

let Home = () => <div>Gripes</div>

let Routing = () => (
	<div>
		<Nav />
		<Router>
			<Home path="/" />
			<List path="list" />
		</Router>
	</div>

		)


ReactDOM.render(<Routing />, document.getElementById("app"));