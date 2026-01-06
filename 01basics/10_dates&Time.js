/*JavaScript Date objects represent a single moment in time in a platform-independent format.
 Date objects encapsulate an integral number that represents milliseconds since the midnight 
 at the beginning of January 1, 1970, UTC (the epoch).*/

//Date is an inbuilt object in JavaScript

let myDate = new Date();
//console.log(typeof myDate);            // Outputs 'object'
//console.log(myDate);                   // Outputs the current date and time not really human readable

//console.log(myDate.toString());       // Converts date to a string
//console.log(myDate.toDateString());   // Converts date to a readable string format

//console.log(myDate.toISOString());  // Converts date to ISO standard format - hard to read
//console.log(myDate.toJSON());       // Converts date to JSON format - hard to read

let myCustomDate = new Date(2026, 0, 23);    // Month is 0-indexed (0 = January, 1 = February, etc.)
//console.log(myCustomDate.toDateString());  // Outputs: Thu Jan 23 2026

let anotherDate = new Date( 2026, 0, 24, 10, 5);  // Year, Month (0-indexed), Day, Hours, Minutes
console.log(anotherDate.toLocaleString());  // Outputs date and time in a human-readable format based on locale


let classicDate = new Date("01-14-2026")    // Month-Day-Year format

let myTimestampDate = Date.now();
//console.log(myTimestampDate);            // Outputs the current timestamp in milliseconds since January 1, 1970
//console.log(myTimestampDate.getTime());  // Outputs the same timestamp in milliseconds since January 1, 1970

console.log(Math.floor(Date.now()/1000));// Outputs the current timestamp in seconds since January 1, 1970

let newDate = new Date();
console.log(newDate);

// methods to get individual components of the date
console.log(newDate.getFullYear()); // Outputs the year (e.g., 2024)
console.log(newDate.getMonth());    // Outputs the month (0-11, where 0 = January and 11 = December)
console.log(newDate.getDate());     // Outputs the day of the month (1-31)
console.log(newDate.getHours());    // Outputs the hour (0-23)
console.log(newDate.getMinutes());  // Outputs the minutes (0-59)
console.log(newDate.getSeconds());  // Outputs the seconds (0-59)

newDate.toLocaleString('en-IN', {
    weekday: 'short',
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
});

// ctrl + space show suggestions

/*Note: With the introduction of the Temporal API, the Date object is considered a legacy feature.
 Consider using Temporal for new code */