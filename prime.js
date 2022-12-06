function checkprime(num) {
	for(let i=1; i<=num; i++){
		if(num%i ==0){
			count++
		}
	}
	if(count ==2){
		return true;
	}else{
		return false;
	}
}
console.log(checkprime(13));
