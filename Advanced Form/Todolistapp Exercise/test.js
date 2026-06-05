const Form = document.querySelector('#inputForm');
const title = document.querySelector('#inputTitle');
const image = document.querySelector('#inputImage');
const Post = document.querySelector('#Post');
const postsContainer = document.querySelector('#postsContainer');

Form.addEventListener('submit', function (e) {
    e.preventDefault();

    
   
 
  
    const postCard = document.createElement('div');
    postCard.classList.add('post-card');

     if (title.value !== '' && image.value !== '' && Post.value !== ''){
       // Define the task/post object before passing it to the function
    const postCard = {
        title: title.value,
        image: image.value,
        content: Post.value
    };

    postCard.innerHTML = `
        <h3>${task.title}</h3>
        <img src="${task.image}" alt="Blog Image">
        <p>${task.content}</p>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;
    
}

    postsContainer.appendChild(postCard);
    savetasksfromlocalstroge(task); 
    
    postCard.querySelector('.delete-btn').addEventListener('click', () => {
        postCard.remove();
    });

    // Form.reset();
});



  
