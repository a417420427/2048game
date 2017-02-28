import React from 'react'
import ReactDOM from 'react-dom' 

/*const App = document.getElementById('app');
*/
import transNum from '../reducers/transNum.js';

const initState = transNum(4) ;
console.log(initState)
class Canvas extends React.Component{
	componentDidMount(){
		const drawPic = this.refs.drawPic
		this.draw(drawPic)
	}

	render() {
		return (
			<canvas width="420" height="420" ref="drawPic"></canvas>
		)
	}

	draw(drawPic) {
		const context = drawPic.getContext('2d');
		console.log(context);
		context.fillText('你好',0,0);
		context.fillStyle = "#9f9";
		context.fillRect(0, 0, 500, 500);
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				context.fillStyle = "#f99";
				context.moveTo(i*100 + 20, j*100 + 20);
				context.lineTo(i*100 + 20, j*100 + 100);
				context.lineTo(i*100 + 100, j*100 + 100);
				context.lineTo(i*100 + 100, j*100 + 20);
				context.lineTo(i*100 + 20, j*100 + 20);
				context.fill();
				context.fillStyle = "#EEEEFF";
				context.font = "italic 30px sans-serif";
				context.fillText(i,i*100+50,j*100+50)
			}
		}

		
            
	}
}


ReactDOM.render(
	<Canvas />,
	document.getElementById('root')
)