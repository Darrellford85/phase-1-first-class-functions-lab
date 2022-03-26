// Code your solution in this file!
/* Am I Crazy about Js or is it just coding?*/


// First two only using .slice //
const returnFirstTwoDrivers = function(driverslist) {
  const fTwoD = driverslist.slice(0,2);
      return fTwoD;
}
// Last two only using .slice//
const returnLastTwoDrivers = function(driverslist) {
    const lTwoD = driverslist.slice(-2);
    return lTwoD;
}
// selectingDrivers fun//
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier()//
function createFareMultiplier(cost){
const multiplier = function(){
    return cost * cost;
    };
    return multiplier
}
// fareDoubler()//
function fareDoubler(cost) {
    return (cost *2);
    
}
//fareTripler()//
function fareTripler(cost){
    return (cost *3);
}
//  selectDifferentDrivers(arrayOfDrivers, function)//
function selectDifferentDrivers(drivers, difFirstOrLast){
return difFirstOrLast(drivers);
}