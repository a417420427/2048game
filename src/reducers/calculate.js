const empty = ' ';

export const changeEmpty = arr => {
	const acceptArr = []
	for(var i=0 ; i<arr.length ; i++){
		if(arr[i] === empty){
			acceptArr.push(arr.splice(i,1))
			i--;
		}
	}
	return;
}

//数组相加
export const combineSame = arr => {
	for(var i=0 ; i<arr.length-1; i++){
		if(arr[i] == arr[i+1]){
			arr[i] = 2*arr[i];
			arr[i+1] = undefined;
			continue;
		}
	}
}

//加入空字符串
export const addEmpty = (arr,length) => {
	for(let i=0; i<length; i++){
		if(arr[i] === undefined){
			arr[i] = empty
		}
	}
}

//根据status 不同 数组相加方向不同
export const resultArr = (arr, status)=> {
	const length = arr.length;
	changeEmpty(arr);
	if(!status){
		arr.reverse();
		combineSame(arr);
		addEmpty(arr,length);
		arr.reverse();
		return ;
	};
	combineSame(arr);
	addEmpty(arr,length);
	return ;
}

export const addCounter = (state,status) => {
	if(status){
		return state
	}
	const baseNum = 2;
	const emptyArr = [];
	for(let i=0; i<state.length; i++){
		if(state[i] === empty){
			const obj = {};
			obj[i] = state[i];
			emptyArr.push(obj)
		}
	}

	emptyArr.sort( (a,b)=> (Math.random() - 0.5));

	for(var key in emptyArr[1]){
		state[key] = baseNum
	}

	return state
}

export const compareState = (stateBefore,stateAfter) => {
	for(let i=0; i<stateBefore.length; i++){
		if(stateBefore[i] !== stateAfter[i]){
			return false
		}
	}
	return true
}