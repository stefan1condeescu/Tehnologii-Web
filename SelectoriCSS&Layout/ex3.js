// exemplu cu galben si rosu pentru linii pare si impare din tabel

// let evenCollection = document.querySelectorAll("tbody tr:nth-child(even)");
// let oddCollection = document.querySelectorAll("tbody tr:nth-child(odd)");

// if(evenCollection && evenCollection.length > 0){
//     for(let item of evenCollection){
//         item.bgColor = "red";
//     }
// }
// if(oddCollection && oddCollection.length > 0){
//     for(let item of oddCollection){
//         item.bgColor = "yellow";
//     }
// }

let oddCollection = document.querySelectorAll("tbody tr:nth-child(odd)");
for(let row of oddCollection){
    row.bgColor = "pink";
}

let firstRow = document.querySelector("tbody tr:first-child");
if(firstRow){
    firstRow.bgColor = "blue";
}

let lastRow = document.querySelector("tbody tr:last-child");
if(lastRow){
    lastRow.bgColor = "green";
}