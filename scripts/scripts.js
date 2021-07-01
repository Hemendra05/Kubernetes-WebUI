function dashboard() {
  document.getElementById("dashboard").style.display = "inline-block";
  document.getElementById("home").style.display = "none";
  // document.getElementById("navbar").style.position = "fixed";
}

function pod() {
  document.getElementById("ds").style.display = "none";
  document.getElementById("welcomeStr").style.display = "none";
  document.getElementById("rc").style.display = "none";
  document.getElementById("rs").style.display = "none";
  document.getElementById("svc").style.display = "none";
  document.getElementById("deploy").style.display = "none";
  document.getElementById("pod").style.display = "inline-block";
  document.getElementById("pod-input").style.display = "none";
  // document.getElementById("navbar").style.position = "fixed";
}

function deploy() {
  document.getElementById("ds").style.display = "none";
  document.getElementById("welcomeStr").style.display = "none";
  document.getElementById("rc").style.display = "none";
  document.getElementById("rs").style.display = "none";
  document.getElementById("svc").style.display = "none";
  document.getElementById("deploy").style.display = "inline-block";
  document.getElementById("pod").style.display = "none";
  document.getElementById("deploy-input").style.display = "none";
  // document.getElementById("navbar").style.position = "fixed";
}

function svc() {
  document.getElementById("ds").style.display = "none";
  document.getElementById("welcomeStr").style.display = "none";
  document.getElementById("rc").style.display = "none";
  document.getElementById("rs").style.display = "none";
  document.getElementById("svc").style.display = "inline-block";
  document.getElementById("deploy").style.display = "none";
  document.getElementById("pod").style.display = "none";
  // document.getElementById("navbar").style.position = "fixed";
}

function rs() {
  document.getElementById("ds").style.display = "none";
  document.getElementById("welcomeStr").style.display = "none";
  document.getElementById("rc").style.display = "none";
  document.getElementById("rs").style.display = "inline-block";
  document.getElementById("svc").style.display = "none";
  document.getElementById("deploy").style.display = "none";
  document.getElementById("pod").style.display = "none";
  // document.getElementById("navbar").style.position = "fixed";
}

function rc() {
  document.getElementById("ds").style.display = "none";
  document.getElementById("welcomeStr").style.display = "none";
  document.getElementById("rc").style.display = "inline-block";
  document.getElementById("rs").style.display = "none";
  document.getElementById("svc").style.display = "none";
  document.getElementById("deploy").style.display = "none";
  document.getElementById("pod").style.display = "none";
  // document.getElementById("navbar").style.position = "fixed";
}

function ds() {
  document.getElementById("ds").style.display = "inline-block";
  document.getElementById("welcomeStr").style.display = "none";
  document.getElementById("rc").style.display = "none";
  document.getElementById("rs").style.display = "none";
  document.getElementById("svc").style.display = "none";
  document.getElementById("deploy").style.display = "none";
  document.getElementById("pod").style.display = "none";
  // document.getElementById("navbar").style.position = "fixed";
}

function podInput() {
  document.getElementById("pod-input").style.display = "inline-block";
  // document.getElementById("pod").style.display = "block";
}


function deployInput() {
  document.getElementById("deploy-input").style.display = "inline-block";
  // document.getElementById("pod").style.display = "block";
}
