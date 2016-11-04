function fizz  (number) {
	if (number % 15 ===0) {
		return 'fizzBuzz';
	} 
	else if (number % 5 === 0) {
		return 'buzz';

	}else if(number % 3 === 0) {
		return 'fizz';
	}

	return number;
};


function fizzBuzz (start, end) {
	for (var count = start; count <= end; count++) {
		console.log(fizz(count))
		
	}
  
 	
};

export { fizz };




