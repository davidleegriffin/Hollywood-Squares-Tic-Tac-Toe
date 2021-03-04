
window.addEventListener("DOMContentLoaded", event => {
  let memberNumber = 1234;
  let emailList = [];
  let referrerList = [];
     
  let form = document.getElementById("signupForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let userEmail = (document.getElementById("email").value);
    // validateEmail(userEmail); //beyond the time scope of assessment//

    let referredByMember = (document.getElementById("referredBy").value);
    // validate(referredByMember) //beyond the time scope of assessment//
    referrerList.push(referredByMember);

    memberNumber += 1;

    emailList.push({ "email": userEmail, "memberNumber": `${userEmail}${memberNumber}` });
    localStorage.setItem("referrerList", referrerList);

    document.getElementById("banner").innerHTML = "Success!" 
    document.getElementById("subBanner").innerHTML = `${userEmail}`;
    document.getElementById("memberNumber").innerHTML = `You Are Member # (${userEmail}${memberNumber})`;
    form.reset();
  });
});

