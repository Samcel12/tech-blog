// Array of random names for comments
const usernames = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah"];

// Function to generate a random username
function getRandomUsername() {
    const randomIndex = Math.floor(Math.random() * usernames.length);
    return usernames[randomIndex];
}

// Handle comment submission
const commentForm = document.getElementById('comment-form');
const commentList = document.getElementById('comment-list');
const commentText = document.getElementById('comment-text');

commentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const newComment = document.createElement('div');
    newComment.classList.add('comment');

    const randomUsername = getRandomUsername();
    const commentContent = commentText.value;

    newComment.innerHTML = `
        <strong>${randomUsername}:</strong>
        <p>${commentContent}</p>
    `;

    // Append the new comment to the list
    commentList.appendChild(newComment);

    // Clear the textarea after submission
    commentText.value = '';
});
