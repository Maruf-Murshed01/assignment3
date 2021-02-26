//https://github.com/Maruf-Murshed01/assignment3








//problemOne
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(1);
console.log(result);







//ProblemTwo
function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
}

var Result = budgetCalculator(1, 2, 3);
console.log(Result);





//problemThree
function hotelCost(dayCount) {
    var totalPrice = 0;
    if (dayCount <= 10) {
        totalPrice = dayCount * 100;
    } else if (dayCount <= 20) {
        var firstStayPrice = 10 * 100;
        var secondStay = dayCount - 10;
        var secondStayPrice = secondStay * 80;
        var totalPrice = firstStayPrice + secondStayPrice;
    } else {
        var firstStayPrice = 10 * 100;
        var secondStayPrice = 10 * 80;
        var thirdStay = dayCount - 20;
        var thirdStayPrice = thirdStay * 50;
        var totalPrice = firstStayPrice + secondStayPrice + thirdStayPrice;
    }
    return totalPrice;
}

var getHotelCost = hotelCost(21);
console.log(getHotelCost);





//problemFour
function megaFriend(friendsName) {
    var longestName = '';
    for (var i = 0; i < friendsName.length; i++) {
        if (longestName.length < friendsName[i].length) {
            longestName = friendsName[i];
        }
    }
    return longestName;
}

var getMegaFriend = megaFriend([
    'abdus',
    'theroyalmaster',
    'hasan mohammad maruf murshed',
]);
console.log(getMegaFriend);