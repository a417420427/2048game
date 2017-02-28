import transNum from './transNum.js'
import moveArr from './reducer.js'
import * as types from '../actions/actionType.js'

const initState = transNum(4);

const move = (state=initState,action) => {
	switch (action.type){
		case types.MOVE_LEFT:
			return [...state.slice(0,0),...moveArr(state,'row',true)];
		case types.MOVE_RIGHT:
			return [...state.slice(0,0),...moveArr(state,'row',false)];
		case types.MOVE_UP:
			return [...state.slice(0,0),...moveArr(state,'col',true)];
		case types.MOVE_DOWN:
			return [...state.slice(0,0),...moveArr(state,'col',false)];
		case types.START_GAME:
			return [...state.slice(0,0),...transNum(4)];
		default:
			return state;
	}
}	

export default move