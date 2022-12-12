/*
1. Fix the bugs in the codes below, to make the console print out different numbers
from 0 to 100
 */

const printNum = () => {
    for (let i = 0; i <= 100; i++) {
        setTimeout(console.log(i), 1000)
    }
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
  let finalArray = [];
  array.map((dateElement) =>{
    const dateArr = dateElement.split("-");
    dateArr.sort(function (a, b) {
        return a - b;
      });
      finalArray.push(`${dateArr[1]}-${dateArr[0]}-${dateArr[2]}`);
  })
  return finalArray;
};
let newArr = fixDate(myArr);
console.log(newArr);

/*
3. Counter function
Write a counter funtion to print out in console the time difference between 2 given date
Expected result in the console: 11 days - 13 hours - 38 minutes - 20 seconds
*/
const dateFrom = new Date(500000)
const dateTo = new Date(1000000000)
let day =(24*60*60);
let hour = (60*60);
let minute = 60;
const counter = (from, to) => {
    let tota_seconds = parseInt(Date.parse(to) - Date.parse(from))/1000;
    let total_minutes = parseInt(tota_seconds/60);
    let total_hours = parseInt(total_minutes/60);
    let days = parseInt(total_hours/24);
    let hours =(total_hours - (days*24));
    let minutes = (total_minutes % 60);
    let seconds = (tota_seconds % 60);
    let timer = `${days} days - ${hours} hours - ${minutes} - minutes ${seconds} - seconds`;
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
const sortCountries = (data) =>{
    for(let i=0;i< data.length; i++){
        let mainDiv = document.createElement('div');
        mainDiv.id = 'card-country';
        mainDiv.class='card-country';
        let span1 = document.createElement('span');
        span1.appendChild(document.createTextNode(data[i].name.common));
        let span2 = document.createElement('span');
        span2.appendChild(document.createTextNode(data[i].capital));
        let img = document.createElement('img');
        img.src = data[i].flags['png'];
        img.id="imgg"
        mainDiv.appendChild(span1);
        mainDiv.appendChild(span2);
        mainDiv.appendChild(img);
        document.getElementById("countries").append(mainDiv);
    }  
}
const getAllCountries = async() => {
    await fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {  
        data.sort((a,b) => (a.name.common > b.name.common) ? 1 : ((b.name.common > a.name.common) ? -1 : 0))
        setTimeout(()=>{
            sortCountries(data);
        },1000);});
}
const getSingleCountry = async() => {
        let country = document.getElementById('country').value;
        const res1 = await fetch('https://restcountries.com/v3.1/name/'+country);
        const data1 = await res1.json();
        document.getElementById('country').value = "";
        try{
            document.getElementById("country-details").innerText = "";
            getData(data1);
        }catch(error){
            document.getElementById("country-details").innerText = "No Entry Found"
        }
    }
   
function getData(d){
    let mainDiv1 = document.createElement('div');
        mainDiv1.id = 'card-countryone';
        mainDiv1.class='card-countryone';
        let span1one = document.createElement('span');
        span1one.appendChild(document.createTextNode(d[0].name.common));
        let span2one = document.createElement('span');
        span2one.appendChild(document.createTextNode(d[0].capital));
        let span3one = document.createElement('span');
        span3one.appendChild(document.createTextNode(d[0].population));
        let span4one = document.createElement('span');
        span4one.appendChild(document.createTextNode(d[0].continents));
        let imgone = document.createElement('img');
        imgone.src = d[0].flags['png'];
        imgone.id = "img-country"
        mainDiv1.appendChild(span1one);
        mainDiv1.appendChild(span2one);
        mainDiv1.appendChild(span3one);
        mainDiv1.appendChild(span4one);
        mainDiv1.appendChild(imgone);
        document.getElementById("country-details").append(mainDiv1);  
}

(function () {
    getAllCountries();
})();

/*
5. Provide logic for function generateNewFolderName, which receive an array as argument. Everytime the function gets called,
it should check for folder name. If the folder named 'New Folder' does not exist, it should add the name 'New Folder' to array.
If folder 'New Folder' exists, it should add 'New Folder (1)' to array. If 'New Folder (1)' exists, it should add 'New Folder (2)'
to array, and so on.
*/

const generateNewFolderName = (existingFolders) => {
    const result = folder.filter((folderName)=> existingFolders===folderName );
    const existingFile = folder.filter((file)=> file.includes(`${existingFolders}(`));
    if(result.length == 0){
        folder = [...folder,existingFolders];
    }
    else{
        for(let i=(existingFile.length+1);i<= folder.length;i++){
            if(!folder.includes(`${existingFolders}(${i})`)){
                folder = [...folder,`${existingFolders}(${i})`];
                break;
            }
        }
}
}
let folder = [];
generateNewFolderName('New Folder')
generateNewFolderName('New Folder')
generateNewFolderName('New Folder')
generateNewFolderName('New Folder')
generateNewFolderName('Javascript')
generateNewFolderName('Javascript')
generateNewFolderName('New Folder')
console.log(folder); 

//expected output to see ['New Folder', 'New Folder (1)', 'New Folder (2)', 'New Folder (3)']
// Result['New Folder', 'New Folder(1)', 'New Folder(2)', 'New Folder(3)', 'Javascript', 'Javascript(1)'] 

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
class Book {
    #cost; //private property
    #profit;//private property
    
    constructor(title, cost, profit) {
        if((title.trim() === '')){
            throw 'Title should be a string and cannot be empty';
            
        }else{
            this._title = title; // protected property
        }
        this.#cost = cost;
        this.#profit = profit;    
    }
    get title(){
        return this._title;
    }
    //private method
    #costcheck(newCost){
        if(!(newCost>0)){
            throw 'cost should be a positive number';
        }
        return newCost;
    }
    set cost(newCost){
        this.#cost  = this.#costcheck(newCost);
    }
    get cost(){
        return this.#cost;
    }
    #profitcheck(newProfit){
        if(!(newProfit>0 && newProfit<=0.5)){
            throw 'Profit should be an positive number > 0 and =< 0.5)';
        }
    }
    set profit(newProfit){
        this.#profit=this.#profitcheck(newProfit);
    }
    get profit(){
        return this.#profit;
    }
    //Logic to Increment or Decrement the price with certain value
    IncorDec(op,newVal) {
        switch(op) {
            case '+':
               this.#cost+= newVal;
              break;
            case '-':
                this.#cost-= newVal;
              break;
            default:
                this.#cost
          }
          return this.#cost;
    }
    calculatePrice(){
        let calcPrice = (this.cost/(1-this.profit))
        return calcPrice;
    }
}

class TaxableBook extends Book {
    #taxRate;
    constructor(title, cost, profit, taxRate) {
         super(title, cost, profit);
         this.#taxRate = taxRate;
    }
    get taxRate(){
        return this.#taxRate;
    }
    set taxRate(newtaxRate){
        this.#taxRate = newtaxRate;
    }
    getPrice(){
        return (this.cost/((1-this.profit)-(this.taxRate/100)))
    }
}
const book1 = new Book("The Power of Habits", 14, 0.3)
//used with protected properties
Object.defineProperty(book1, "_title", {
    value: "The Power of Habits",
    writable: false
});

console.log(`cost of book ${book1.cost}`)
console.log(`Profit for book ${book1.profit}`)
//Logic Increment or Decrement the price with certain value
//console.log(` Incremented or Decremented price of book ${book1.IncorDec('+',1.6)}`)
console.log(`book's Incremented price is ${book1.cost}`)
//Logic to calculate the price
console.log(`calculate the price ${book1.calculatePrice()}`)

const book2 = new TaxableBook("The Power of Habits", 14, 0.3, 24)
//logic to calculate price with taxRate
console.log(`calculated price with taxRate ${Math.abs(book2.getPrice()).toFixed(2)}`)


