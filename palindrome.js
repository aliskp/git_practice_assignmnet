let str="racecar";
let bag=
for(let i=str.length; i>=0; i--){
	bag += str[i];

	if(bag==str){
  	console.log("Palindrome")
	}else{
		console("Not Palindrome")
	}
}