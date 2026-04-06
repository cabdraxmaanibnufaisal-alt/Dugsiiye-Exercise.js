// const dom = document.getElementById('dom')
// dom.style.color='blue'
// dom.style.fontSize='40px'
// dom.style.boxShadow='5px 3px 5px #090909' 
// dom.style.padding='right 10px'
// console.log(dom)
// const Dom = document.getElementById('Dom')
// console.log(Dom)

// const items = document.querySelectorAll('items')
// items.style.color='red'
// console.log(items)



// function Change(){
//     dom.textContent="welcom to the Dom"
// }
// function changeElement(){
//     Dom.innerHTML=" Document object model <strong> Dom is amezing function</strong>"
// }



// const items = document.getElementById('items')
// console.log(items)

// function addingItems(){
    
//     const NewItem = document.createElement("li");
//             NewItem.textContent =' item 3'
//     items.appendChild(NewItem)
// }

// function RemoveItems(){
//     if(items.lastChild){
//         items.removeChild(items.lastChild)
//     }else{
//             alert("server in emty")
//     }
// }


// const image = document.getElementById('image')
// function changeImage() {
//     image.setAttribute("src",'https://images.unsplash.com/photo-1772442126046-29faff1ad234?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D')
// }
// // 
// function changeImage(){
//     const URL = prompt("Enter your image url")
//     image.setAttribute('src',URL)
// }


// function SetligthMood(){
// document.body.style.backgroundColor="white"
// document.body.style.color='black'

// const button = document.getElementById("theme-toggle");

//     button.SetligthMood("click", function () {
//         const isVisible = SetligthMood.getAttribute('data-visible');
//         if (isVisible === "true") {
//             SetligthMood.setAttribute('data-visible', "false");
//             icons[0].setAttribute('data-visible', "true");
//             icons[1].setAttribute('data-visible', "false");
//         } else {
//             SetdarkMood.setAttribute('data-visible', "true");
//             icons[0].setAttribute('data-visible', "false");
//             icons[1].setAttribute('data-visible', "true");
//         }
//     });

// }

// function SetdarkMood(){
// document.body.style.backgroundColor='#090909'
// document.body.style.color='#fcfafa'
// }

// //


// const button = document.getElementById("theme-toggle");

// button.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");

//   // Beddel icon-ka
//   if (document.body.classList.contains("dark-mode")) {
//     button.textContent = "☀️";
//   } else {
//     button.textContent = "🌙";
//   }
// });


async function java(){
  const user = await fetch('Data.JSON')
  const data = await user.json()
  console.log(data)
}
java()