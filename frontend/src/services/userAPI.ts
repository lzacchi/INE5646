// to-do: use indexed db
export function logInUser(data) {
    const users = JSON.parse(window.localStorage.getItem("userList") || "[]");
    console.log("users",users)
    return users.find((user) => user.email && user.password)
}

// does not work. For some reason it sets [object Object]
// to-do add another fields validation, add user id
export function registerUser(data) {
    const users = JSON.parse(window.localStorage.getItem("userList") || "[]");
    console.log("users",users)
    users.push({email:data.email, password: data.password});
    window.localStorage.setItem("userList", JSON.stringify(users));
}