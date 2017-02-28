import Frame from '../components/Frame.js'
import React from 'react'
import ReactDOM from 'react-dom'
//import Footer from '../components/Footer.js'
import Footer from './footer.js'


class Application extends React.Component {
  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  handleKeyDown() {
  	const {store} = this.context;
  	document.addEventListener('keydown',function(e){
  		store.dispatch({
  			type: e.keyCode
  		})
  	})
  }
  render() {
  	const {store} = this.context;
  	const arr = store.getState();
    return (
      <div onClick={this.handleKeyDown}>
        <Frame arr={arr}/>
        <Footer reStart={()=> 
					store.dispatch({
	        	type: 'START_GAME'
	        })
        }/>
      </div>
    )
  }
}

Application.contextTypes = {
	store: React.PropTypes.object
}

export default Application
