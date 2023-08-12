const postForm = document.getElementById("post-form");
const postContent = document.getElementById("post-content");
const postList = document.getElementById("post-list");

postForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const content = postContent.value.trim();
    if (content !== "") {
        createPost(content);
        postContent.value = "";
    }
});

function createPost(content) {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
        <p class="post-content">${content}</p>
    `;
    postList.prepend(postElement);
}
