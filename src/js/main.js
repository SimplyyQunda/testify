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
  // Write fizzBuzz here once fizz is finished.
 	
};

export { fizz };

