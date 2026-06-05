const Form = document.querySelector('#inputForm');
const title = document.querySelector('#inputTitle');
const image = document.querySelector('#inputImage');
const Post = document.querySelector('#Post');

Form.addEventListener('submit', function(event) {
    event.preventDefault();

    //  const postsContainer = document.querySelector('#postsContainer');

    // const postCard = document.createElement('div');
    // postCard.classList.add('post-card');

    // newPost.innerHTML = `
    //     <img src="${image.value}" alt="">
    //     <h3>${title.value}</h3>
    //     <p>${Post.value}</p>
    //     <button>Edit</button>
    //     <button>Delete</button>
    // `;



    
    const postCard = document.createElement('div');
    postCard.classList.add('post-card');

    postCard.innerHTML = `
        <h3>${title.value}</h3>
        <img src="${image.value}" alt="Blog Image">
        <p>${Post.value}</p>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;

    postsContainer.appendChild(postCard);

    
});



   