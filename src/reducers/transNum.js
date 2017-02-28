const transNum = (sqrt) => {
	const empty= ' ';
	const baseNum = 2;
	const initState = [];
	const length = Math.pow(sqrt,2);

	for(let i=0; i<length; i++){
		if(Math.random()<0.4){
			initState[i] = baseNum;
		}else{
			initState[i]=empty;
		}
	}
	
	return initState
}


export default transNum