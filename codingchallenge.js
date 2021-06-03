//Write a function that receives two lists (A and B) and returns a list containing all 
//elements in A that are not in B


// function lists(A,B){
//     let arr=[]
//     let hash={}
//     let hash2={}
  
//  B.forEach(element => {
   
//         hash[element]=1
    
//  });
// A.forEach(element=>{
//     console.log(hash[element])
//     if(!hash[element]){
      
//         arr.push(element)
//     }
// })




//  console.log(arr)
//  return arr
// }

// lists([1,2,3,4,5],[1,3,6,7,8])

function lists2(A,B){
    let arr=[]
    let hash={}
    let hash2={}
  
 B.forEach(element => {
   
        hash[element]=1
    
 });
A.forEach(element=>{

    if(hash[element]){
      
        A.splice(element,1)
    }
})




 console.log(A)
 return A
}

lists2([1,2,3,2,4],[2,3])
