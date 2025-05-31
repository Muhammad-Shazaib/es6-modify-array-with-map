// array banaya gaya hai loop chalany ka liye aur
// loop array ka liye bana hai
// array aur loop ek dusre ka liye bany hai.
// for loop se sary kam ho jaty hai.


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArr = arr.map((eachItem, i) => {
    console.log(eachItem)
    
if(eachItem % 2 === 0) { // even number
    return eachItem 
   
}else { // odd number
    return eachItem * 2
}
    
})

console.log(arr)
console.log(newArr)