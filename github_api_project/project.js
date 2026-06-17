const searchBtn = document.querySelector("#searchBtn");
const usernameInput = document.querySelector("#username");

const card = document.querySelector("#card");
const avatar = document.querySelector("#avatar");
const nameElement = document.querySelector("#name");
const followers = document.querySelector("#followers");
const following = document.querySelector("#following");
const repos = document.querySelector("#repos");
const error = document.querySelector("#error");

searchBtn.addEventListener("click", async () => {

    const username = usernameInput.value.trim();

    if (!username) {
        error.textContent = "Please enter a username";
        card.style.display = "none";
        return;
    }

    try {

        error.textContent = "";

        const response = await fetch(
            `https://api.github.com/users/${username}`
        );

        if (!response.ok) {
            throw new Error("User not found");
        }

        const data = await response.json();

        avatar.src = data.avatar_url;
        nameElement.textContent = data.name || data.login;
        followers.textContent = data.followers;
        following.textContent = data.following;
        repos.textContent = data.public_repos;

        card.style.display = "block";

    } catch (err) {

        error.textContent = err.message;
        card.style.display = "none";

    }
});