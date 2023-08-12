const postForm = document.getElementById("post-form");
const postContent = document.getElementById("post-content");
const postList = document.getElementById("post-list");
const profileSection = document.getElementById("profile");

postForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const content = postContent.value.trim();
    if (content !== "") {
        createTweet(content);
        postContent.value = "";
    }
});

// Sample user profile data (simplified)
const userProfile = {
    name: "Abvss",
    username: "abvss1300",
    bio: "Front-end developer | Coffee enthusiast",
    profileImage: "https://via.placeholder.com/50",
    following: 42,
    followers: 238,
};

function showUserProfile() {
    const profileHtml = `
        <img src="${userProfile.profileImage}" alt="Profile Image">
        <div>
            <h2>${userProfile.name}</h2>
            <p>@${userProfile.username}</p>
            <p>${userProfile.bio}</p>
            <p>${userProfile.following} Following - ${userProfile.followers} Followers</p>
        </div>
    `;
    profileSection.innerHTML = profileHtml;
}

showUserProfile();

// ... (same as before) ...

// Function to toggle follow/unfollow
function toggleFollow() {
    const followButton = document.getElementById("follow-button");
    userProfile.following = followButton.classList.contains("active") ? userProfile.following - 1 : userProfile.following + 1;
    followButton.classList.toggle("active");
    showUserProfile();
}

// Add follow/unfollow button to profile section
const followButtonHtml = `
    <button id="follow-button" class="${userProfile.following > 0 ? 'active' : ''}" onclick="toggleFollow()">
        ${userProfile.following > 0 ? 'Unfollow' : 'Follow'}
    </button>
`;
profileSection.insertAdjacentHTML("beforeend", followButtonHtml);
