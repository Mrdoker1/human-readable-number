module.exports = function toReadable(number) {
    //function toReadable(number) {

    const ranks = ['zero', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion']; // Available digits
    var result = [];

    numberWithSpaces(number).reverse().forEach((element, index) => {
        switch (index) { //Adding human digits to human numbers
            case 0:
                result.push(gotNumber(element));
                break;
            case 1:
                result.push(gotNumber(element) + ' ' + ranks[1] + ' ');
                break;
            case 2:
                result.push(gotNumber(element) + ' ' + ranks[2] + ' ');
                break;
            case 3:
                result.push(gotNumber(element) + ' ' + ranks[3] + ' ');
                break;
            case 4:
                result.push(gotNumber(element) + ' ' + ranks[4] + ' ');
                break;
            case 5:
                result.push(gotNumber(element) + ' ' + ranks[5] + ' '); //Maximum with current input
                break;
            case 6:
                result.push(gotNumber(element) + ' ' + ranks[6] + ' ');
                break;
            case 7:
                result.push(gotNumber(element) + ' ' + ranks[7] + ' ');
                break;
            case 8:
                result.push(gotNumber(element) + ' ' + ranks[8] + ' ');
                break;
        }
    });

    return result.reverse().join('').replace(/ zero/, '');
}

//Divide the number into digits in the array
function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ").split(' ').map(i => Number(i)); //Faster method 358ms
}

// Convert a digital number to a human form
function gotNumber(x) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (x == 0) {
        return 'zero';
    } else if ((x / 100) >= 1) {
        return units[Math.trunc(x / 100)] + ' hundred ' + ((x % 100 < 20) ? units[x % 100] : dozens[Math.trunc(x / 10) % 10] + ' ' + units[x % 10]);
    } else return ((x % 100 < 20) ? units[x % 100] : dozens[Math.trunc(x / 10)] + ' ' + units[x % 10]);

}

//console.log(toReadable(11111111111264756));
