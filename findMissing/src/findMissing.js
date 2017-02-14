var findMissing = function (array1, array2) {//defined my function findMissing here.
	//checks if parameters array1 and array2 are all array objects.
	if(Array.isArray(array1) && Array.isArray(array2)){
	var arrSum = function(array){
		   var sum = 0;
		   for(var i = 0; i < array.length; i++){
		            sum += array[i];
		   }
		   return sum;
	};
	var array1Sum = arrSum(array1);
	var array2Sum = arrSum(array2);
	if (array1Sum === array2Sum) {
		return 0;
	}
	else {
		return Math.abs(array1Sum - array2Sum);
	}
}else{
	return "Please, input an array.";
}
};
