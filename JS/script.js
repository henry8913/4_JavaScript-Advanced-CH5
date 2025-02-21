// Fetch Users from API
async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users;
}

// Display Users in the List
function displayUsers(users) {
    const userList = document.getElementById("userList");
    userList.innerHTML = '';
    users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td data-label="Nome">${user.name}</td>
            <td data-label="Username">${user.username}</td>
            <td data-label="Email">${user.email}</td>
        `;
        userList.appendChild(row);
    });
}

// Search and Filter Users
document.getElementById("searchInput").addEventListener("input", async (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const users = await fetchUsers();
    const filterOption = document.getElementById("filterOption").value;

    const filteredUsers = users.filter(user => user[filterOption].toLowerCase().includes(searchTerm));
    displayUsers(filteredUsers);
});

// Initial Fetch and Display of Users
fetchUsers().then(displayUsers);