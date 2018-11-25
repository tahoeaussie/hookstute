import React, { useState, useEffect } from 'react';
import { Form, Text, Select, Option } from 'informed';
import faker from 'faker';
import Moment from 'moment';

import Filters from './filters.js';
import Gripe from './gripe.js';


const populate = num =>  {
		let population = []
		for(var i = num; i > 0; i--) {
			population.push({
				city: faker.address.city(),
				company: faker.company.companyName(),
				price: faker.commerce.price(),
				complaint: faker.lorem.sentences(),
				who: faker.name.firstName(),
				post: faker.date.past()
			});
		}
		return population
}

const List = () => {
	const [ population, setPopulation ] = useState(populate(3));
	const [ filter, setFilter ] = useState('');
	const [ count, setCount ] = useState('');

	useEffect(() => {
		setCount(population.length);
		document.title = count + ' Gripes - Get it off your Chest';
	})

	return(
			<div id="List">
				<Filters onSubmit={match => setFilter(match)} onReset={() => setFilter('')} />
				<Gripe onSubmit={form => setPopulation([form, ...population])}/>

				<div className="theList">
					{population.filter(item => item.company.toLowerCase().includes(filter.toLowerCase()) || item.city.toLowerCase().includes(filter.toLowerCase()) || item.complaint.toLowerCase().includes(filter.toLowerCase())).map((r,i) => {
						return ( <div className="listItem" key={i}>
							<div className="item-layer item-top">
								<div>Area: {r.city}</div>
								<div>Provider: {r.company}</div>
								<div>Price: {r.price}</div>
							</div>
							<div className="item-layer item_middle">{r.complaint}</div>
							<div className="item-layer item-bottom">
								<div>Posted By: {r.who}</div>
								<div></div>
								<div>{Moment(r.post).format("D MMM, 'YY")}</div>
							</div>
						</div> )
					})}
				</div>
			</div>
	);	
}

export default List;

