
// first assinment it,s about converting kilometer to meter scel
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "kilometer cannot be negative"
    }
    else {
        var meter = kilometer * 1000;
        return meter;
    }  
}
var resultInMeter = kilometerToMeter(5);
console.log(resultInMeter);

// first assinment end




// second assinment start budgetCalculator
function budgetCalculator(watch, phone, laptop) {
    // watch total prise
    var price1 = watch * 50;

    // phone total prise
    var price2 = phone * 100;

    // laptop total prise
    var price3 = laptop * 500;

    // all over prise
    var price = price1 + price2 + price3;
    return price;

}
var num = budgetCalculator(20, 10, 2);
console.log(num);

// second assinment finish


// 3rd assinment start it,s about hotel calculator
function hotelCost(stsyTime){
    var rent = 0;
    if (stsyTime <=10){
        rent = 10 * 100;
     }
      else if (stsyTime <=20){
            var firstpart = 10 * 100;
            var remaning = stsyTime - 10;
            var secondPart = remaning * 80;
            rent =  firstpart + secondPart ; 
        }
        
         else {
            var firstpart = 10 * 100;
            var secondPart = 10 * 80;
            var remaning = stsyTime - 20;
            var thirdPart = remaning * 50;
            rent = firstpart + secondPart + thirdPart;
        }
        return rent;
    
}
var totalAmount = hotelCost(24);
console.log(totalAmount);

// 3rd assinment end






// 4th assinment start its aobut find the longesat length name
function megaFriend(friends){
    var long = friends[0];
     for (let i = 0; i < friends.length; i++) {
        const element = friends[i];
        if( long.length < element.length){
             long = element
         }
    }
     return long
}

     var  friend = ["abir","sabbir","mahin","ashraful","apu"]
     var longName = megaFriend(friend)
     console.log(longName)

// 4th assinment end
      