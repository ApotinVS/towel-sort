
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if (!matrix) {
		return [];
	  }
	let result = []
	matrix.forEach((element, i) => {
		if(i % 2 ==! 0){
		result = result.concat(element.reverse())
		}
		else if (i % 2 === 0){			
			result = result.concat(element)
		}		
	});
	
  return result 
}
