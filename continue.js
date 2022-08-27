var numbers = [25, 46, 78, 26, 56, 74, 125, 25, 87, 42, 39];
for (i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 50) { continue; }
    console.log(number);
}