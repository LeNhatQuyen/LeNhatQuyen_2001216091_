function signup(e)
{
   event.preventDefault();
   var username =document.getElementById("username").values;
   var email =document.getElementById("email").values;
   var password =document.getElementById("password").values;
    var use={
        username : username,
        email : email,
        password:password,
    }
    var json=JSON.stringify(use);
    localStorage.setItem(username,json);
    alert("Đăng Ký Thành Công ")
}

function login(e)
{
    event.preventDefault();
   var username =document.getElementById("username").values;
   var email =document.getElementById("email").values;
   var password =document.getElementById("password").values;
   var use=localStorage.getItem(username);
   var data=JSON.parse(user);
   if(user==null)
   {
    alert("Vui Long Nhập username password");

   }
   else if(username==data.username && email== data.email && password==data.password)
   {
    alert("Bạn Đã Đăng Nhập Thành Công ");
    window.location.href="todolist.html"
   }

   else{
    alert("Đăng Nhập Thất Bại")
   }
}