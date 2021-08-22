function compute()
{
	//Initializations
    a = document.getElementById("amount");
    r = document.getElementById("rateRange");
    y = document.getElementById("years");
	depositeAmount = document.getElementById("depositAmount");
    totalRateAmount = document.getElementById("totalRateAmount");
    totalInterestAmount = document.getElementById("totalInterestAmount");
    lastInterestYear = document.getElementById("lastInterestYear");
    result = document.getElementById("hiddenData");
    

    //Get Years Information
	currentYear = new Date().getFullYear();
    currentMonth = new Date().getMonth();
    currentDay = new Date().getDate();
    //theYearValueOf = y.value.valueOf();
    //theYearValueOf = parseInt(y.value);
    theLastInterestYear = new Date((currentYear + parseInt(y.value)).valueOf(), currentMonth, currentDay).getFullYear();
    //alert(typeof theYearValueOf);
    
    //Get Total Intrest
    totalInterestForOneYear = (a.value * r.value) / 100;
    totalInterest = (totalInterestForOneYear * y.value);

    //Return Result Information
    depositAmount.innerHTML = a.value;
    totalRateAmount.innerHTML = r.value + " %";
    totalInterestAmount.innerHTML = totalInterest;
    lastInterestYear.innerHTML = theLastInterestYear;

	result.removeAttribute("hidden");
}

function onChangeRange() {
	var slider = document.getElementById("rateRange");
    var output = document.getElementById("rateValue");
    output.innerHTML = slider.value;
}

function getCurrentYear() {
	currentYearValue = document.getElementById("currentYear");
	currentYearValue.innerHTML = new Date().getFullYear();

}
