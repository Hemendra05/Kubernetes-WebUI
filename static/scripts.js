function dashboard() {
  document.getElementById("dashboard").style.display = "inline-block";
  document.getElementById("home").style.display = "none";
  document.getElementById("deleteAllRes").style.display = "inline-block";
  document.body.classList.add("inside");
  document.body.classList.remove("outside");

  // document.getElementById("navbar").style.position = "fixed";
}


function pod() {
  document.getElementById("welcomeStr").style.display = "none";
  document.getElementById("rs").style.display = "none";
  document.getElementById("svc").style.display = "none";
  document.getElementById("deploy").style.display = "none";
  document.getElementById("pod").style.display = "inline-block";
  document.getElementById("pod-input").style.display = "none";
  document.getElementById("pod-describe").style.display = "none";
  document.getElementById("pod-delete").style.display = "none";
  document.getElementById("content").style.display = "none";
  // document.getElementById("navbar").style.position = "fixed";
}

function deploy() {
  document.getElementById("welcomeStr").style.display = "none";
  document.getElementById("rs").style.display = "none";
  document.getElementById("svc").style.display = "none";
  document.getElementById("deploy").style.display = "inline-block";
  document.getElementById("pod").style.display = "none";
  document.getElementById("deploy-input").style.display = "none";
  document.getElementById("content").style.display = "none";
  // document.getElementById("navbar").style.position = "fixed";
}

function svc() {
  document.getElementById("welcomeStr").style.display = "none";
  document.getElementById("rs").style.display = "none";
  document.getElementById("svc").style.display = "inline-block";
  document.getElementById("deploy").style.display = "none";
  document.getElementById("pod").style.display = "none";
  document.getElementById("content").style.display = "none";
  document.getElementById("svc-input").style.display = "none";
  // document.getElementById("navbar").style.position = "fixed";
}

function rs() {
  document.getElementById("welcomeStr").style.display = "none";
  document.getElementById("rs").style.display = "inline-block";
  document.getElementById("svc").style.display = "none";
  document.getElementById("deploy").style.display = "none";
  document.getElementById("pod").style.display = "none";
  document.getElementById("content").style.display = "none";
  // document.getElementById("navbar").style.position = "fixed";
}

function podInput() {
  document.getElementById("pod-input").style.display = "inline-block";
  document.getElementById("pod-describe").style.display = "none";
  document.getElementById("pod-delete").style.display = "none";
  document.getElementById("content").style.display = "none";
  // document.getElementById("pod").style.display = "block";
}

function podDescribe() {
  document.getElementById("pod-describe").style.display = "inline-block";
  document.getElementById("pod-input").style.display = "none";
  document.getElementById("pod-delete").style.display = "none";
  document.getElementById("content").style.display = "none";
  // document.getElementById("pod").style.display = "block";
}

function podDelete() {
  document.getElementById("pod-delete").style.display = "inline-block";
  document.getElementById("pod-input").style.display = "none";
  document.getElementById("pod-describe").style.display = "none";
  document.getElementById("content").style.display = "none";
  // document.getElementById("pod").style.display = "block";
}


function deployInput() {
  document.getElementById("deploy-input").style.display = "inline-block";
  document.getElementById("deploy-delete").style.display = "none";
  document.getElementById("deploy-describe").style.display = "none";
  document.getElementById("content").style.display = "none";
  document.getElementById("deploy-scale").style.display = "none";
  // document.getElementById("pod").style.display = "block";
}

function deployDescribe() {
  document.getElementById("deploy-input").style.display = "none";
  document.getElementById("deploy-delete").style.display = "none";
  document.getElementById("deploy-describe").style.display = "inline-block";
  document.getElementById("content").style.display = "none";
  document.getElementById("deploy-scale").style.display = "none";
  // document.getElementById("pod").style.display = "block";
}

function deployDelete() {
  document.getElementById("deploy-input").style.display = "none";
  document.getElementById("deploy-describe").style.display = "none";
  document.getElementById("deploy-delete").style.display = "inline-block";
  document.getElementById("content").style.display = "none";
  document.getElementById("deploy-scale").style.display = "none";
  // document.getElementById("pod").style.display = "block";
}

function deployScale() {
  document.getElementById("deploy-input").style.display = "none";
  document.getElementById("deploy-describe").style.display = "none";
  document.getElementById("deploy-scale").style.display = "inline-block";
  document.getElementById("deploy-delete").style.display = "none";
  document.getElementById("content").style.display = "none";
  // document.getElementById("pod").style.display = "block";
}

function svcInput() {
  document.getElementById("svc-input").style.display = "inline-block";
  document.getElementById("svc-describe").style.display = "none";
  document.getElementById("content").style.display = "none";
  document.getElementById("svc-delete").style.display = "none";
}

function svcDescribe() {
  document.getElementById("svc-input").style.display = "none";
  document.getElementById("svc-describe").style.display = "inline-block"
  document.getElementById("content").style.display = "none";
  document.getElementById("svc-delete").style.display = "none";
  
}

function svcDelete() {
  document.getElementById("svc-input").style.display = "none";
  document.getElementById("svc-describe").style.display = "none"
  document.getElementById("content").style.display = "none";
  document.getElementById("svc-delete").style.display = "inline-block";

  
}






// let podStatus = document.querySelector("#podStatus")
// let podForm = document.querySelector("#pod-input")





// podStatus.addEventListener('click',(){
//   console.log("hey")

// })




