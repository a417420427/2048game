import {changeEmpty, combineSame, addEmpty, resultArr,addCounter,compareState} from './calculate.js'

//传入数组，方向，状态，返回与原数组格式相同的数组
const moveArr = (state ,direction, status) => {
	//保存初始状态
 	const stateBefore = [...state];
	//定义所需数据
	const length = state.length;
	const sqrtVal = Math.sqrt(length);
	const reg=/^[1-9]*[1-9][0-9]*$/;
	const result = [] ;

	//判断格式
	if(!reg.test(sqrtVal)){
		console.log('the error length of Array');
		return;
	}	

	//判断status(上左/下右)
	//左右移动时数据处理
	if(direction === 'row'){
		for(let i=0; i<length; i += sqrtVal){
			//处理单个数组
			const singleResult = state.slice(i,i+sqrtVal);
			resultArr(singleResult,status)
			result.push(singleResult)
		}
		const newState = result.reduce((a,b) => a.concat(b))
		
		return addCounter(newState,compareState(stateBefore,newState))
	}else if(direction === 'col'){
		//上下移动时数据处理
		for(let i=0; i<sqrtVal; i ++){
			const singleResult = [];
			for(let j=0; j<sqrtVal; j++){
				singleResult.push(state[i+j*sqrtVal])
			}
			resultArr(singleResult,status)
			result.push(singleResult)
		}
		//处理result
		const newResult = []
		for(let i=0; i<sqrtVal; i++){
			const singleResult = [];
			for(let j=0; j<sqrtVal; j++){
				singleResult.push(result[j][i])
			}
			newResult.push(singleResult)
		}

		const newState = newResult.reduce((a,b) => a.concat(b))

		return  addCounter(newState,compareState(stateBefore,newState))
	}else{
		//否则返回原数组f
		return state
	}
}



export default moveArr