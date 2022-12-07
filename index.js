/*
1. Fix the bugs in the codes below, to make the console print out different numbers
from 0 to 100
 */

const printNum = () => {  
        let interval=setInterval(() => 
        {
            for (var i = 0; i <= 100; i++) 
            {
                console.log("The number is " + i + "<br>");
            }
            clearInterval(interval);
            
        } , 1000)
    }
printNum()

/*
2. Given the array below:
myArr = ['12-24-2014', '09-2022-23', '12-30-2021', '08-02-2021', '07-15-2018', '2019-12-14', '2022-14-12']
the array above has serveral dates, written in order month-day-year
Write the code inside function fixDate(array) below to transform the array to new
format dates day-month-year
expected result: ['24-12-2014', '23-09-2022', '30-12-2021', '08-02-2021', '15-07-2018', '14-12-2019', '14-12-2022'] . 
You only need to produce the same array as expected result, no need to consider other 
possibility.
 */

let myArr = ['12-24-2014', '09-2022-23', '12-30-2021', '08-02-2021', '07-15-2018', '2019-12-14', '2022-14-12']

const fixDate = (array) => {
   let newArr = [];
   for(var dateinArr in array){
        var [month,day,year] =myArr[dateinArr].split('-');
        newArr.push(day + "-" + month + "-" + year);
   }
   return newArr;
}
let newArr = fixDate(myArr)
console.log(newArr);

/*
3. Counter function
Write a counter funtion to print out in console the time difference between 2 given date
Expected result in the console: 11 days - 13 hours - 38 minutes - 20 seconds
*/
const dateFrom = new Date(500000)
const dateTo = new Date(1000000000)
var day =(24*60*60);
var hour = (60*60);
var minute = 60;
const counter = (from, to) => {
    var tota_seconds = parseInt(Date.parse(to) - Date.parse(from))/1000;
    var total_minutes = parseInt(tota_seconds/60);
    var total_hours = parseInt(total_minutes/60);
    var days = parseInt(total_hours/24);
    var minutes = (total_minutes % 60);
    var seconds = (tota_seconds % 60);
    var timer = days + " days " + minutes + " minutes " + seconds + " seconds";
    return timer; 
}
const timer = counter(dateFrom,dateTo)
console.log(timer)

/* 
4. Check the url and read documentation: https://restcountries.com
- Write a function to get all countries, sorted in alphabetical order
- Write a function to find one country based on the search input
The data fetched from url should be displayed in index.html.
*/
function hi(){
    alert("hi");
}
function expand_collapse(){
    var y = document.getElementById("countries-id");
    // x.addEventListener('click', ()=>{
        if (y.style.display === 'none'){
            document.getElementById('countries-id').style.display = 'block';
            
        }
        else{
            document.getElementById('countries-id').style.display = 'none';
        }
   
}

var countries = "";
const sortCountries = (data) =>{
    for(var i=0;i< data.length; i++){
        countries = countries + "\n" + data[i].name.common;
        // countries.push();
        //document.getElementById('countries-id').innerText;
    }
    document.getElementById('countries-id').innerText = countries;
}
const getAllCountries = async() => {
    /* provide your code here */
    await fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {sortCountries(data);});
}
const getSingleCountry = () => {
    /* provide your code here */
}

getAllCountries()

/*
5. Provide logic for function generateNewFolderName, which receive an array as argument. Everytime the function gets called,
it should check for folder name. If the folder named 'New Folder' does not exist, it should add the name 'New Folder' to array.
If folder 'New Folder' exists, it should add 'New Folder (1)' to array. If 'New Folder (1)' exists, it should add 'New Folder (2)'
to array, and so on.
*/

// const generateNewFolderName = (existingFolders) => {
//     /*  provide your code here */
// }

// let folder = []
// generateNewFolderName(folder)
// generateNewFolderName(folder)
// generateNewFolderName(folder)
// generateNewFolderName(folder)
// console.log(folder); //expect to see ['New Folder', 'New Folder (1)', 'New Folder (2)', 'New Folder (3)']

/* 
6. Complete class Book:
- class Book should have 3 properties: title (read-only, must be a string but cannot be empty), cost (private, must be positive number) and profit (private, positive number > 0 and =< 0.5)
(error should be thrown if data is not valid)
- give the logic to get book's price and profit separately.
- give the logics to increase and decrease the price with a certain amount 
- give the logic to calculate price based on cost and profit. For example: cost 14, profit 0.3 => expected price is 20.

Complete class TaxableBook: 
- inherit Book, but have 1 more private parameter in the constructor: taxRate. 
- give the logic to calculate price with taxRate. For example: 
cost 14, profit 0.3 , tax 24% => expected price is 30.43
*/
// class Book {
//     _title
//     constructor(title, cost, profit) {
//     }
// }

// class TaxableBook {
//     /* provide your code here */
// }

// const book1 = new Book("The Power of Habits", 14, 0.3)
// const book2 = new TaxableBook("The Power of Habits", 14, 0.3, 24)