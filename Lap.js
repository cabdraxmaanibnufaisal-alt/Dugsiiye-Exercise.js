
// faction declartion//

// function functionName() {
//     console.log("hello world")
// }
// functionName()


// function greeting(name){
//     console.log("hello, welcom " + name)
// }
// greeting("hodan")



// function calculationTotal(prize,quantity) {
//     console.log("total prize: $" + prize*quantity)
// }
// calculationTotal(10,2)
// calculationTotal(40,2)


//    function Expression //

// const functionName = function(){
//     console.log("welcome to funtion expression")
// }
// functionName()


// const salaan = function(compeny) {
//     console.log("the best compeny is " + compeny)
// }
// salaan("mircosoft")

// const calculationPrize = function(prize,number){
//         // console.log("qiimuhu waa: $ " + prize * number)
//         return  prize*number;
// }
// calculationPrize(35,2)
// let result = calculationPrize(25,2)
// console.log(result / 2)
// let results = calculationPrize(15,3)
// console.log(results + 10)
// calculationPrize(20,2)





// //  arrow function //

// const functinNames =() =>{
//     console.log("this is arrow function")
// }
// functinNames()


// const salaanSarre = (name)=>{
//     console.log("hello "+ name + "    waxfiican ayaad samaysay sxp")
// }
// salaanSarre("apdiraxmaan")


   //objects//

//    let objectNames;{
//     key1:value1
//     key2:value2
//     key:value3
//     key:value4
    
//    }
  









// let person = {
//     name: "Alice",
//     age: 25,
//     city: "Wonderland",
//     salaan:function(){
//  console.log("waryaa godhgodh "+this.name)
//     }
// };
// // console.log(person)
// console.log(person.age);
// person.name="naasir"
// // console.log(person)
// person.age=20
// // console.log(person)
// person.city="bosaaso"
// console.log(person)
// console.log(person.salaan())




// let students ={
//     name:"cabdirisaaq mohemed",
//     id:34,
//     class:"4C",

//      greet:function(){
//         console.log("hellow how are you my freind  " + this.name)
//     }
// }
// // console.log(students);

// students.name="Abdirisaaq mohamed Aydiid"
// // console.log(students);

// students.age = 19
// // console.log(students)
// students.id = 24
// console.log(students)
// console.log(students.greet())




// let TestStudentes=["apdirisaaq", "apdiraxmaan" ,"isamail","shuacayb",]
// console.log(TestStudentes);


// let student = [
//     {
//         name:"apdirisaaq",
//         age:19,
//         title:"archEng"
//     },


//       {
//         name:"apdiraxmaan",
//         age:21,
//         title:"SoftwareEng",

//     },

//     {
//         name:"isamail",
//         age:21,
//         title:"softwareEng"
//     },
// {
//     name:"shucayb",
//     age:23,
//     title:"ComputerSceince",

// }
// ]

// console.log(student)
// console.log(student[0].name);
// console.log(student[1].name);
// console.log(student[2].name);
// console.log(student[3].name);

// console.log(student[0].title)
// console.log(student[1].title)
// console.log(student[2].title)
// console.log(student[3].title)




// let i = 0
// for( let i = 1; i < 11; i++ ) {
//     console.log(i)
// }


// const Resturent=["suberdata","xeebmaal"," salaama","ubaxleh",]
// for(let i = 0; i < Resturent.length; i++){
//   console.log(Resturent[i])
// }



  //  for loop  //

  // const dagmooyin=["degmada m/haybe", "m/mooge", "jiga-yar","daami","gacmadheere",]
  // for(let i=0; i < dagmooyin.length ; i++){
  //       console.log(dagmooyin[i])
  // }



  

  // while(condition){
  //      // code to be executed if condition is true
  // }


  // let i = 0 

  // while(i < 10){
  //   console.log("iteration Number" + i)
  //   i++
  // }


  // do while loop//

  // 
  

  // let password
  // do{
  // password = prompt("Enter your password")
  // }while(password !== "12346")
  //   console.log("welcom user")

// let Number
// do{
// Number = prompt("Enter Number Greather Then 10")
// }while(isNaN(Number) || Number <= 10)
// console.log("Hey Welcom!")

// let greaterThan;
// do {
//   greaterThan = prompt("Enter a number greater than 10:");
 
// } while (isNaN(greaterThan) || greaterThan <= 10);

// console.log("Welcome!"); 



// for...fo loop //

// for(variable of itartion);



// const cars=["farreri","hammer","BMW","Range Rover",]
// for(let car of cars){
// console.log(car)
// }

// const language="javascript";
// for(let l of language){
// console.log(l)
// }

      // if (condition){//code to be executed//}

      // let age = 12;

      // if (age < 13){
      //   console.log("you are an chile")
      // }
      //  else if (age < 20) {
      //   console.log("you are an teenager");

      // } 
      // else{
      //   console.log("you are  an adelt")
      // }

// let code=173;
// const secret= code == 123? "right" :"wrong"
// console.log(secret)



// const cars =["noah","probox","bas","vitz", "Vx",]
// cars.forEach((car)=>{
//   console.log("how is work for this ?  " + car)
// })




// const number = [1,2,3,4,5]
// const newNumber =number.map ((number)=>number*2)
// console.log(newNumber)


// const number = [1,2,3,4,5,6]
// const newNumber = number.filter((number)=>number % 2===0 )
// console.log(newNumber)

// const score = [10,20,30,40,50,60,70,80,90,100,]
// const passed = score.filter((score)=>score >=60)
// console.log(passed)

// const scores = [10,20,30,40,50,60,70,80,90,100]
// const fail = scores.filter((scores)=>scores<=59)
// console.log (fail)

// const number = [1,2,3,4,5,6,7,8,9]
// const newNumber = number.filter((number)=> number % 2 ===0)
// console.log(newNumber)   


// const number = [1,2,3,4,5,]
// const sum = number.reduce((total,num)=>total+num,0)
// console.log(sum)

// const name = "abdiraxman"
// const age = 21
// const city ="burco"

// const inFor = `hello ${name} your age is ok ${age}  its amizing ${city}`
// console.log(inFor)


// const number =[1,2,3,4,5,6]
// const persentage = number.reduce((total,number)=>total + number)
// console.log(persentage)

     //spread opration//
// const num=[1,2,3,4,5]
// const sum=[... num,6,7,8,9,10]
// console.log(sum

/// ret opation//


// const user ={
//    name: "jony",
//    age:20,
// }
// const nameUser={...user}
// nameUser.name="jimcaale"
// console.log(nameUser.name)


    //synchronous code//
// function DelayedOne(){
//    alert("must be excutive this one")
//    return{id:24,age:19,name:"abdirisaq"}
// }
//    console.log("He is my bestFriend")
//    const user=DelayedOne()
//    console.log(user)
// function DelayedOne(){
//    alert("waa inaad ok tidhaah daa marka hora")
// return{id:24,age:19,name:"abdirisaq"}
// }
// console.log( "amizing one")
// const usere=DelayedOne()
// console.log(usere)
// console.log ("its done")


   // asynchronous code // 

// function OneTest(callback){
//     setTimeout(()=>{
//         const user={id:20,name:"abdiraxman",age:21, }
//          callback(user)

//     },2000)
// }
// OneTest(function(user){
//     console.log(user)
// })



// function DataUser(callback){
   
//    setTimeout(()=>{
//        const user={id:20,name:"abdiraxman",age:21, }
//        callback(user)
//    },2000)
// }

// DataUser(function(user){
//    console.log(user)
// })

// console.log("asynchronous code for unblocking")
// console.log("what is happened pro")



  //asnchrocous promsis//
 function fetchUserData(){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         const sett=false
         if(sett){
            resolve({id:20,name:"abdiraxman",age:21})
            
         }else{
            reject("missed out")
         }
      })
   })
 }

 async function DesplayedMe(){
       try{
               const user = await fetchUserData()
               console.log(user)
       }catch(err){console.log(err)}
 }
 DesplayedMe()






// const data={
//    id:19,
//    name:"maxamed",
//    age:22

// }
// console.log(data)
// const javascript=JSON.stringify(data)
// console.log(javascript)

// const mango =JSON.parse(javascript)
// console.log(mango)


//  async function DataUser(){

//    console.log("starting for fetching")
//    const data = await fetch('Data.JSON')
//    console.log(data)
   
//  }
//  DataUser()



   //   // call backs//

   //   function greet(jop){
   //    console.log("welcom to the " + jop)
   //   }
      
   //      function processUserData(callback){
   //            const user = prompt("Enter you jop please")
   //            callback(user)
   //      }
   //      processUserData(greet)


            // function opration(a,b, callback){
            //    return callback(a,b)
            // }
            // function div(a,b){
            //    return (a/b)
            // }
            // function mult(a,b){
            //    return(a*b)
            // }
            // console.log(opration(100,5, div))
            // console.log(opration(4,6, mult))


// const button = document.querySelector("#mybutton")
// const removedClick=document.querySelector('#removedClick')

// function handleClick(){
//    console.log('clicked');
   
// }
// button.addEventListener("click",handleClick)

// removedClick.addEventListener('click', function(){
//    button.removeEventListener('click',handleClick)
// })

// const colorSelect=document.getElementById('color')
// const selectColor=document.getElementById('selectColor')

// colorSelect.addEventListener('change',function(){
//    selectColor.textContent=`Color type: `+ colorSelect.value
// })

// const form= document.querySelector("#myForm")
// const formMessege = document.querySelector('#formMessege')
// form.addEventListener('submit',function(event){
//   event.preventDefault();
// console.log("submitted")
//  formMessege.textContent=`the submmited is done`
// })

// const form = document.querySelector('#myForm')
// const regestration = document.querySelector('#myMassege')
// const Error=document.querySelector('#Error')
// form.addEventListener('submit',function(event){
//  event.preventDefault();
// const Username = document.querySelector('#Name').value;
// const Email = document.querySelector('#Email').value;
// const Password = document.querySelector('#password').value;
// const confirmPassword = document.querySelector('#ConfirmPassword').value;
//    if(Username ===''){
//       Error.textContent=`Username is required`
//        return
//    }
//    const emailPattenern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//    if (!Email.match(emailPattenern))
//       {Error.textContent=`inavalid email address`
//       return}
//      if(Password.length < 8){
//       Error.textContent=`password must be at least 8 characters long`
//       return
//      }
//      if(Password !==confirmPassword)
//      {
//       Error.textContent-=`password do not match`
//       return
//      }    
//       Error.textContent=`Regestarion is seccessfully`
// })


// const Form = document.querySelector('#myForm')
// const Error = document.querySelector('#Error')
// const success=document.querySelector('#success')
// const Name =document.querySelector('#Name')
// const Email = document.querySelector('#Email')
// const password = document.querySelector('#password')
// const confimePassword = document.querySelector('#ConfirmPassword')


// // Name.addEventListener('input', ValidateName);


// Form.addEventListener('submit',function(event){
//     event.preventDefault();

//    // Error.textContent='';
//    // success.textContent='';

// Error.textContent = '';
// success.textContent = '';

//     const isNamevalide=ValidateName();
//     const isEmailvalide= validateEmail();
//     const ispasswordvalide=validatepassword();
//     const isconfirmPasswordvalide=validateConfirmPassword();
 
//    if(!isNamevalide){
//       Name.focus()
//       return;
//    } else if(!isEmailvalide){
//       Email.focus()
//       return;
//    }else if(!ispasswordvalide){
//      password.focus()
//      return
//    }else if(!isconfirmPasswordvalide){
//    ConfirmPassword .focus()
//    return
//    }
   



//     success.textContent=`Regestrion is seccessfully`
// })

// function ValidateName(){
//     if(Name.value.trim( ) === ''){
//         setError(Name, 'username is not reqiured')
//         return false
//     }else{
//         setSuccess(Name)
//         return true
//     }
// }
// function validateEmail(element,message){
//       const emailPattener= 
//       if(!Email.value.match(emailPattener)){
//             setError(Email,'please enter a valid email adderess')
//             return false
//       }else{
//          setSuccess(Email)
//          return true
//       }
// }
// function validatepassword(element,message){
//          if(password.value.length < 8){
//                setError( password,'Your password atleast 8 chargter')
//                return false
//          }else{
//                setSuccess(password)
//                return true
//          }
// }

// function validateConfirmPassword(element,message){
//        if( ConfirmPassword.value.trim() !== password.value ){
//                setError(ConfirmPassword,'password is not matched')
//                return false
//        }else{
//             setSuccess(ConfirmPassword)
//             return true
//        }
// }




// function setError(element, message) {
//     element.classList.add('invalid');
//     element.classList.remove('valid');
//     Error.textContent = message;
    
// }

// function setSuccess(element){
//    //   if (!element) return;
// element.classList.add('valid')
//  element.classList.remove('invalid')
// }



    
