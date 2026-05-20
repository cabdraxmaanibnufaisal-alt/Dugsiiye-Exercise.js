// const searchform = document.querySelector('#search-form')
// const searchinput = document.querySelector('#search-input')
// const vediolist = document.querySelector('#video-list')

// searchform.addEventListener('submit', async function(event){
//    event.preventDefault()

//    const query = document.querySelector('#search-input').value
   

// const url = `https://youtube-v3-alternative.p.rapidapi.com/search?query=${query}&type=video`;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '4cc74857e9msh4befe9513d53c21p162eeajsn313fd1d9c1fd',
// 		'x-rapidapi-host': 'youtube-v3-alternative.p.rapidapi.com',
// 		'Content-Type': 'application/json'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();

// 	console.log(result.data);
//    despleyVedio(result.data)

// } catch (error) {
// 	console.error(error);
// }


// })
 

//  function despleyVedio(videos){

//    const vediolist = document.querySelector('#video-list')

//    vediolist.innerHTML='';

//    videos.forEach(video => {
//       const videoitem = document.createElement('div');
//       videoitem.className='videoitem'

//        videoitem.innerHTML=`  
//      <div class="video-thumbnail">
//       <img src="${video.thumbnail?.[0]?.url}" alt="${video.title}"></div>
                                                                                               
//       <div class="video-info">
//         <div class="video-title">${video.title}</div>
//         <div class="video-channel">${video.channelTitle}</div>
//       </div>
       
//        `;
//        videoitem.addEventListener('click', () => openModal(video.videoId));
//        vediolist.appendChild(videoitem);
     
//    });


//  }


//  function  openModal(videoId){
//    const modal =document.querySelector('.modal');
//    const videoplayer = document.querySelector('#video-player');

//    const videoUrl=`https://www.youtube.com/embed/ANkPDATVSRI?si=Wyu3RyO8iSK8rh08 ${videoId}`
//       console.log('Opening video:', videoId, videoUrl); // Debugging information
//       videoplayer.src=videoUrl
//       modal.style.display = 'block'


//    document.querySelector('#download-mp3').addEventListener('click',async function(){

//       const url = `https://youtube-mp36.p.rapidapi.com/dl?id=${videoId}`;
//       const options = {
// 	      method: 'GET',
// 	      headers: {
// 		          'x-rapidapi-key': '4cc74857e9msh4befe9513d53c21p162eeajsn313fd1d9c1fd',
              
// 	            'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com',
// 		          'Content-Type': 'application/json'
// 	}
// };
      
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();

// 	if(result.status ==="ok"){
//     window.location.href=result.link;
//   }else{
//     alert('Error downloading MP3: ' + result.msg);
//   }

// } catch (error) {
// 	console.error(error);
// } 
//    })
//  }


//  document.querySelector('#video-modal').addEventListener('click',closeModal)
 
//  window.onclick = function (event) {
//   const modal = document.getElementById('video-modal');
//   if (event.target == modal) {
//     closeModal();
//   }
// };


// function closeModal(){
// const modal= document.querySelector("#video-modal")
// const videoPlayer = document.querySelector('#video-player')
// videoPlayer.src =''
// modal.style.display='none'
// }





























// const searchform = document.querySelector('#search-form')
// const searchinput = document.querySelector('#search-input')
// const videolist = document.querySelector('#video-list')

// searchform.addEventListener('submit',async function (event) {
//   event.preventDefault()
//   const query = document.querySelector('#search-input').value;

  
//    const url = `https://youtube-v3-alternative.p.rapidapi.com/search?query=${query}&type=video`;

//   const options={
//          method:`GET`,
//          headers:{
//           	'x-rapidapi-key': '4cc74857e9msh4befe9513d53c21p162eeajsn313fd1d9c1fd',
// 		        'x-rapidapi-host': 'youtube-v3-alternative.p.rapidapi.com',
// 		        'Content-Type': 'application/json'
//          }
//   }

//   try {
//     const response = await fetch(url,options)
//     const result = await response.json();
//     console.log(result);
//     displeyVedio(result.data)

//  } catch (error) {
// 	console.error(error);
//  }
 
// })

// function displeyVedio(videos){
//   const vediolist = document.querySelector('#video-list')
//    videolist.innerHTML=``

//    videos.forEach(video=> {
      
//        const videoitem = document.createElement('div')
//         videoitem.className='videoitem'
//         videoitem.innerHTML=`
//             <div class="video-thumbnail">
//             <img src="${video.thumbnail?.[0]?.url}">
//             </div>

//             <div class="video-info">
//             <div class="video-title">${video.title}</div>
//             <div class="video-channel">${video.channelTitle}</div>
//             </div>

//             `

//               videoitem.addEventListener('click', () => openModal(video.videoId));
//               vediolist.appendChild(videoitem);

       
//    });
// }

// function openModal(videoId){
//   const modal = document.querySelector('.modal')
//   const videoplayer = document.getElementById('video-player')
//   const videoUrl = `https://www.youtube.com/embed/${videoId}`;

//    // console.log('Opening video:', videoId, videoUrl); //

//    videoplayer.src=videoUrl;
//    modal.style.display="block"
   
//   document.getElementById('download-mp3').onclick = async function () {
    
    
//     const url = `https://youtube-mp36.p.rapidapi.com/dl?id=${videoId}`;
//     const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '4cc74857e9msh4befe9513d53c21p162eeajsn313fd1d9c1fd',
// 		'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com',
// 		'Content-Type': 'application/json'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();

// 	if(result.status ==='ok'){
//     window.location.href=result.link;
       
//   }else{
//     alert('error'+result)
//   }
// } catch (error) {
// 	console.error(error);
// }

//   }

// }

// document.querySelector('#close-modal').addEventListener('click', closeModal)

// window.onclick = function(event){
//   const modal = document.querySelector('#video-modal')
//   if(event.target == modal){
//     closeModal()
//   }
// }


// function closeModal(){
//   const modal = document.querySelector('#video-modal')
//   const videoplayer = document.querySelector('#video-player')
//   videoplayer.src=''
//   modal.style.display ='none'
// }














// practice one//



const searchform = document.getElementById('search-form')
const searchinput = document.getElementById('search-input')
const videolist = document.getElementById('video-list')



searchform.addEventListener('submit',async function(event){
  event.preventDefault()

  const query = document.getElementById('search-input').value

 const url = `https://youtube-v3-alternative.p.rapidapi.com/search?query=${query}&type=video`;

  const options = {
    method:'GET',
    headers:{ 'x-rapidapi-key':`4cc74857e9msh4befe9513d53c21p162eeajsn313fd1d9c1fd`,
    'x-rapidapi-host':`youtube-v3-alternative.p.rapidapi.com`,
    'Content-Type': 'application/json'
  }
   
  };

  try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result.data);
  displayModal(video.data)
} catch (error) {
	console.error(error);
}

} )


function displayModal(vidoes){
  const videolist = document.getElementById('video-list')
  videolist.innerHTML=''

  vidoes.forEach(video => {
    const videoitem = document.createElement('div');
    videoitem.className='videoitem'

    videoitem.innerHTML=`
        <div class="video-thumbnail">
        <img src="${video.thumbnail?.[0].url}">
        </div>
        <div class="video-info"></div>
        <div class="video-title">${video-title}</div>
        <div class="video-channel">${video-channelTitle}</div>
    
    `
   videoitem.addEventListener('click',()=>openModal(video.videopid))
   videolist .appendChild(videoitem)
  });


}