function hello(custName,time ){
    console.log("welcome to our shop")
    console.log(` hello ${custName}`)
    console.log(`this is you your `+ `${time+1} time` )

}
hello("ahamd",2);


function add(x,y){
    return x + y;
}
console.log(add(11, 2));
function even(x){
    if ((x%2) ==0){
        return true
    }
    else{return false}
}
function odd(x){
    return x%2 !==0? true:false;
}
console.log(odd(18));
console.log(even(17));
function fun1(){
    let x=12;
    console.log(x)
}

function fun2(){
    let x=13;
    console.log(x)
}
fun1()
fun2()

const input= document.getElementById("input")


const answer= document.getElementById("answer")
// const headerDate= document.getElementById("date")
// const headerTime= document.getElementById("time")

// let date =new Date();
// headerDate.textContent=date.getFullYear()+ "/"+(date.getMonth()+1)+"/"+date.getDate()+"";
// headerTime.textContent=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

function updateTime() {
    const headerDate = document.getElementById("date");
    const headerTime = document.getElementById("time");

    let date = new Date();
    headerDate.textContent = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    headerTime.textContent = date.getHours() + ":" + 
                              String(date.getMinutes()).padStart(2, '0') + ":" + 
                              String(date.getSeconds()).padStart(2, '0');
}

// Initial call to set the time immediately
updateTime();
// Update the time every second
setInterval(updateTime, 1000);

let temp;

function convert() {
    const input = document.getElementById("input");
    const answer = document.getElementById("answer");
    const radios = document.getElementsByName("conversion");
    let factor = null;

    for (const radio of radios) {
        if (radio.checked) {
            factor = radio.getAttribute("data-factor");
            break;
        }
    }

    const value = Number(input.value);

    if (factor !== null) {
        if (isNaN(value)) {
            answer.textContent = "Please enter a correct number.";
        } else {
            const result = value * factor;
            answer.textContent = `It is ${result.toFixed(2)}`;
        }
    } else {
        if (isNaN(value)) {
            answer.textContent = "Please enter a correct number.";
        } else {
            answer.textContent = "Please select a conversion option.";
        }
    }
}


function convertTemp() {
    const input = document.getElementById("input");
    const answer = document.getElementById("answer");

    const CtoF = document.getElementById("CtoF").checked;
    const FtoC = document.getElementById("FtoC").checked;
    const temp = Number(input.value);

    if (isNaN(temp)) {
        answer.textContent = "Please enter a correct number.";
        return;
    }

    if (CtoF) {
        const result = temp * 9 / 5 + 32;
        answer.textContent = `It is ${result.toFixed(1)} Fahrenheit`;
    } else if (FtoC) {
        const result = (temp - 32) * 5 / 9;
        answer.textContent = `It is ${result.toFixed(1)} Celsius`;
    } else {
        answer.textContent = "Please select a conversion option.";
    }
}

function convertSpeed(){
    const input= document.getElementById("input")
const answer= document.getElementById("answer")

 const CtoF= document.getElementById("CtoF").checked
const FtoC= document.getElementById("FtoC").checked
temp= Number(input.value)
switch (true) {
    case CtoF:
        temp = temp * 9 / 5 + 32;
        answer.textContent = `It is ${temp.toFixed(1)} Fahrenheit`;
        break;
    case FtoC:
        temp = (temp - 32) * 5 / 9;
        answer.textContent = `It is ${temp.toFixed(1)} Celsius`;
        break;
        default:
            answer.textContent = "Please select a conversion option.";
    }
}
function convertLentgh(){
const input= document.getElementById("input")
const answer= document.getElementById("answer")
const InchToCm= document.getElementById("InchToCm").checked
const FtToCm= document.getElementById("FtToCm").checked
const YtoM= document.getElementById("YtoM").checked
const MilesTokm= document.getElementById("MilesTokm").checked
const MToFt= document.getElementById("MToFt").checked
const KmToMiles= document.getElementById("KmToMiles").checked
const CmToInch= document.getElementById("CmToInch").checked
temp= Number(input.value)
switch (true) {
    case InchToCm:
        temp = temp * 2.54;
        answer.textContent = `It is ${temp.toFixed(2)} centimeters`;
        break;
    case FtToCm:
        temp = temp * 30.48;
        answer.textContent = `It is ${temp.toFixed(2)} centimeters`;
        break;
    case YtoM:
        temp = temp * 0.9144;
        answer.textContent = `It is ${temp.toFixed(2)} meters`;
        break;
    case MilesTokm:
        temp = temp * 1.60934;
        answer.textContent = `It is ${temp.toFixed(2)} kilometers`;
        break;
    case MToFt:
        temp = temp * 3.28084;
        answer.textContent = `It is ${temp.toFixed(2)} feet`;
        break;
    case KmToMiles:
        temp = temp * 0.621371;
        answer.textContent = `It is ${temp.toFixed(2)} miles`;
        break;
    case CmToInch:
        temp = temp * 0.393701;
        answer.textContent = `It is ${temp.toFixed(2)} inches`;
        break;
    default:
        answer.textContent = "Please select a conversion option.";
}
}

function convertSpeed() {
    const input = document.getElementById("input");
    const answer = document.getElementById("answer");
    const MphToKph = document.getElementById("MphToKph").checked;
    const KphToMph = document.getElementById("KphToMph").checked;
    const MpsToKph = document.getElementById("MpsToKph").checked;
    const FtpsToKph = document.getElementById("FtpsToKph").checked;
    let speed = Number(input.value);
    
    switch (true) {
        case MphToKph:
            speed = speed * 1.60934;
            answer.textContent = `It is ${speed.toFixed(2)} kilometers per hour`;
            break;
        case KphToMph:
            speed = speed * 0.621371;
            answer.textContent = `It is ${speed.toFixed(2)} miles per hour`;
            break;
        case MpsToKph:
            speed = speed * 3.6;
            answer.textContent = `It is ${speed.toFixed(2)} kilometers per hour`;
            break;
        case FtpsToKph:
            speed = speed * 1.097;
            answer.textContent = `It is ${speed.toFixed(2)} kilometers per hour`;
            break;
        default:
            answer.textContent = "Please select a conversion option.";
    }
}

function convertWeight() {
    const input = document.getElementById("input");
    const answer = document.getElementById("answer");
    const OuncesToGrams = document.getElementById("OuncesToGrams").checked;
    const PoundsToKg = document.getElementById("PoundsToKg").checked;
    const GramsToOunces = document.getElementById("GramsToOunces").checked;
    const KgToPounds = document.getElementById("KgToPounds").checked;
    let weight = Number(input.value);
    
    switch (true) {
        case OuncesToGrams:
            weight = weight * 28.3495;
            answer.textContent = `It is ${weight.toFixed(2)} grams`;
            break;
        case PoundsToKg:
            weight = weight * 0.4536;
            answer.textContent = `It is ${weight.toFixed(2)} kilograms`;
            break;
        case GramsToOunces:
            weight = weight * 0.0353;
            answer.textContent = `It is ${weight.toFixed(2)} ounces`;
            break;
        case KgToPounds:
            weight = weight * 2.205;
            answer.textContent = `It is ${weight.toFixed(2)} pounds`;
            break;
        default:
            answer.textContent = "Please select a conversion option.";
    }
}
function convertTime() {
    const input = document.getElementById("input");
    const answer = document.getElementById("answer");
    const MinToSec = document.getElementById("MinToSec").checked;
    const HrToMin = document.getElementById("HrToMin").checked;
    const DayToHr = document.getElementById("DayToHr").checked;
    const WeekToDay = document.getElementById("WeekToDay").checked;
    const YearToDay = document.getElementById("YearToDay").checked;
    let time = Number(input.value);
    
    switch (true) {
        case MinToSec:
            time = time * 60;
            answer.textContent = `It is ${time.toFixed(2)} seconds`;
            break;
        case HrToMin:
            time = time * 60;
            answer.textContent = `It is ${time.toFixed(2)} minutes`;
            break;
        case DayToHr:
            time = time * 24;
            answer.textContent = `It is ${time.toFixed(2)} hours`;
            break;
        case WeekToDay:
            time = time * 7;
            answer.textContent = `It is ${time.toFixed(2)} days`;
            break;
        case YearToDay:
            time = time * 365;
            answer.textContent = `It is ${time.toFixed(2)} days`;
            break;
        default:
            answer.textContent = "Please select a conversion option.";
    }
}

function convertVol() {
    const input = document.getElementById("input");
    const answer = document.getElementById("answer");
    const TspToMl = document.getElementById("TspToMl").checked;
    const TbspToMl = document.getElementById("TbspToMl").checked;
    const OzToMl = document.getElementById("OzToMl").checked;
    const CupToMl = document.getElementById("CupToMl").checked;
    const PtToL = document.getElementById("PtToL").checked;
    const QtToL = document.getElementById("QtToL").checked;
    const GalToL = document.getElementById("GalToL").checked;
    let volume = Number(input.value);
    
    switch (true) {
        case TspToMl:
            volume = volume * 4.9289;
            answer.textContent = `It is ${volume.toFixed(2)} milliliters`;
            break;
        case TbspToMl:
            volume = volume * 14.7868;
            answer.textContent = `It is ${volume.toFixed(2)} milliliters`;
            break;
        case OzToMl:
            volume = volume * 29.5735;
            answer.textContent = `It is ${volume.toFixed(2)} milliliters`;
            break;
        case CupToMl:
            volume = volume * 236.588;
            answer.textContent = `It is ${volume.toFixed(2)} milliliters`;
            break;
        case PtToL:
            volume = volume * 0.4732;
            answer.textContent = `It is ${volume.toFixed(2)} liters`;
            break;
        case QtToL:
            volume = volume * 0.9464;
            answer.textContent = `It is ${volume.toFixed(2)} liters`;
            break;
        case GalToL:
            volume = volume * 3.7854;
            answer.textContent = `It is ${volume.toFixed(2)} liters`;
            break;
        default:
            answer.textContent = "Please select a conversion option.";
    }
}

function convertArea() {
    const input = document.getElementById("input");
    const answer = document.getElementById("answer");
    const SqInToSqCm = document.getElementById("SqInToSqCm").checked;
    const SqFtToSqM = document.getElementById("SqFtToSqM").checked;
    const SqYdToSqM = document.getElementById("SqYdToSqM").checked;
    const SqMiToSqKm = document.getElementById("SqMiToSqKm").checked;
    const AcreToHect = document.getElementById("AcreToHect").checked;
    let area = Number(input.value);
    
    switch (true) {
        case SqInToSqCm:
            area = area * 6.4516;
            answer.textContent = `It is ${area.toFixed(2)} square centimeters`;
            break;
        case SqFtToSqM:
            area = area * 0.0929;
            answer.textContent = `It is ${area.toFixed(2)} square meters`;
            break;
        case SqYdToSqM:
            area = area * 0.8361;
            answer.textContent = `It is ${area.toFixed(2)} square meters`;
            break;
        case SqMiToSqKm:
            area = area * 2.59;
            answer.textContent = `It is ${area.toFixed(2)} square kilometers`;
            break;
        case AcreToHect:
            area = area * 0.4047;
            answer.textContent = `It is ${area.toFixed(2)} hectares`;
            break;
        default:
            answer.textContent = "Please select a conversion option.";
    }
}




function outer(){
    let msg="HI!"
     function inner1(){
        console.log(msg)
        function inner2(){
            let msg1=  " what's up"
            console.log(msg1)
        }
     inner2()}
     inner1()
}
outer()

function counter(){
    let count=0

    function increment(){
    let count=0
    count++
    console.log(` the counter is ${count}`)
}}

const dd= setTimeout(()=>window.alert("hello"),3000)
clearTimeout(dd)

let mm;
function timer(){
    mm = setTimeout(()=> window.alert("hello"),5000)
    console.log("satrted")}

function noTimer(){
clearTimeout(mm)
console.log("stopped")}