export function add(numbers) {
  if (numbers === '') {
    return 0;
  }
  let delimiter = ',';
  if (numbers.startsWith('//')) {
    const delimiterEndIndex = numbers.indexOf('\n');
    delimiter = numbers.slice(2, delimiterEndIndex);
    numbers = numbers.slice(delimiterEndIndex + 1);
  }

  if (/[^0-9,\n]/.test(numbers) && !numbers.includes(delimiter)) {
    return 0;
  }

  const numberArray = numbers
    .split(new RegExp(`[${delimiter}\n]`))
    .map(num => Number(num));

  const negativeNumbers = numberArray.filter(num => num < 0);

  if (negativeNumbers.length > 0) {
    throw new Error(`negative numbers not allowed ${negativeNumbers.join(', ')}`);
  }

  if (numberArray.some(isNaN)) {
    return 0;
  }

  return numberArray.reduce((sum, num) => sum + num, 0);
}
