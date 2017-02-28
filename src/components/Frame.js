import {Cube} from './Cube.js'
import React from 'react'

const Frame = ({arr}) => (	
	<div className="container">
		<ul className="item-wrap">
			{
				arr.map((v,i) => (
					<Cube key={i} value={v} />
				))
			}
		</ul>
	</div>
)

export default Frame