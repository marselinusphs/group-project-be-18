async function login() {
    let login_status = false;
    let inemail = document.getElementById("email").value;
    let inpassword = document.getElementById("password").value;
  
    const USER_URL = "https://634e44b7f34e1ed82686e4e4.mockapi.io/user";
  
    let response = await fetch(USER_URL);
    let result = await response.json();
    result.forEach((item) => {
      if (item.password == inpassword && item.email == inemail) {
        login_status = true;
      }
    });
  
    if (login_status) {
        alert("Anda berhasil login");
        window.location = 'index.html';
    } else {
        alert("Email/password salah");
    }
  }
  
  async function register() {
    const USER_URL = "https://634e44b7f34e1ed82686e4e4.mockapi.io/user";
    let register_status = true;
    let inemail = document.getElementById("email").value;
    let inpassword = document.getElementById("password").value;
    let inname = document.getElementById("name").value;
  
    let response = await fetch(USER_URL);
    let result = await response.json();
    result.forEach((item) => {
      if (item.email == inemail) {
        register_status = false;
      }
    });
    
    if (register_status) {
        addUser(inemail, inname, inpassword)
        alert("Anda berhasil register");
        window.location = 'login.html';
      } else {
        alert("Email telah digunakan! Silakan login")
      }
  }
  
  function addUser(email, name, password) {
    const data = {
      name: name,
      email:email,
    password:password,
    };
    fetch("https://634e44b7f34e1ed82686e4e4.mockapi.io/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Sukses: ", data);
      })
      .catch((error) => {
        console.log("error: ", data);
      });
  }
  
