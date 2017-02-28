import React from 'react'

class Footer extends React.Component{
	render() {
		const reStart = this.props.reStart;
		return (
			<div className="start">
				<button onClick={reStart}>重新开始</button>
			</div>
		)
	}
}

export default Footer