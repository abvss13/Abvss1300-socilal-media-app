const postForm = document.getElementById("post-form");
const postContent = document.getElementById("post-content");
const postList = document.getElementById("post-list");

postForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const content = postContent.value.trim();
    if (content !== "") {
        createTweet(content);
        postContent.value = "";
    }
});

function createTweet(content) {
    const tweetElement = document.createElement("div");
    tweetElement.classList.add("tweet");
    tweetElement.innerHTML = `
        <p class="tweet-content">${content}</p>
        <div class="tweet-meta">
            <span class="tweet-date">${formatDate(new Date())}</span>
        </div>
    `;
    postList.prepend(tweetElement);
}

function formatDate(date) {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
}
