let podStatus = document.querySelector("#podStatus")
let podForm = document.querySelector("#pod-input")
let cntDiv = document.querySelector("#content")
let podName = document.querySelector("#podDescribe")
let dSubmit = document.querySelector("#podDescribeSubmit")
let delSubmit = document.querySelector("#delSubmit")
let delForm = document.querySelector("#podDelete")
let podInpForm = document.querySelector("#podInputForm")
let podInpSubmit = podInpForm.elements[3]
let deployForm = document.querySelector("#createDeployForm")
let depInpSubmit = deployForm.elements[3]
let deployStatus = document.querySelector("#deployStatus")
let desDeployForm = document.querySelector("#desDeployForm")
let desDepSubmit = desDeployForm.elements[1]
let delDepForm = document.querySelector("#delDepForm")
let delDepSubmit = delDepForm.elements[1]
let scaleDepForm = document.querySelector("#scaleDepForm")
let scaleDepSubmit = scaleDepForm.elements[2]
let createSvcForm = document.querySelector("#createSvcForm")
let createSvcSubmit = createSvcForm.elements[4]
let svcStatus = document.querySelector("#svcStatus")
let describeSvc = document.querySelector("#describeSvc")
let desSvcForm = document.querySelector("#desSvcForm")
let desSvcSubmit = desSvcForm.elements[1]
let delSvcForm = document.querySelector("#delSvcForm")
let delSvcSubmit = delSvcForm.elements[1]
let rsStatus = document.querySelector("#rsStatus")
let deleteAllRes = document.querySelector("#deleteAllRes")

deleteAllRes.addEventListener('click',function(){
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `/delAllRes`, true);
    xhr.send();
    xhr.onload = function() {
    var output = xhr.responseText;
    cntDiv.innerHTML = output;
    cntDiv.style.display = "block";
    document.querySelector("#pod").style.display = "none";
    document.querySelector("#deploy").style.display = "none";
    document.querySelector("#svc").style.display = "none";
    document.querySelector("#rs").style.display = "none";
}

})

podInpSubmit.addEventListener('click',function(evt)
{
    let PodName = podInpForm.elements.podName.value;
    let imageName = podInpForm.elements.imageName.value;
    let imageTag = podInpForm.elements.imageTag.value;
    var xhr = new XMLHttpRequest();
    // var containerId = document.getElementsByName("containerId")[0].value;
    xhr.open("GET", `/runPod?podName=${PodName}&imageName=${imageName}&imageTag=${imageTag}`, true);
    xhr.send();
    xhr.onload = function() {
    var output = xhr.responseText;
    cntDiv.innerHTML = output;
    cntDiv.style.display = "block";
    podForm.style.display = "none";
    document.querySelector("#pod-describe").style.display = "none";
    document.querySelector("#pod-delete").style.display = "none";
    document.querySelector("#pod-input").style.display = "none";
    podInpForm.elements.podName.value = "";
    podInpForm.elements.imageName.value= "";
    podInpForm.elements.imageTag.value = "";
}
}
)







podStatus.addEventListener('click', function (evt){

    var xhr = new XMLHttpRequest();
    // var containerId = document.getElementsByName("containerId")[0].value;
    xhr.open("GET", `/podStatus`, true);
    xhr.send();
    xhr.onload = function() {
    var output = xhr.responseText;
    cntDiv.innerHTML = output;
    cntDiv.style.display = "block";
    podForm.style.display = "none";
    document.querySelector("#pod-describe").style.display = "none";
    document.querySelector("#pod-delete").style.display = "none";
    document.querySelector("#pod-input").style.display = "none";

    }
})

dSubmit.addEventListener('click', function (evt){
    
    let input = podName.value;
    var xhr = new XMLHttpRequest();
    // var containerId = document.getElementsByName("containerId")[0].value;
    xhr.open("GET", `/describePod?podName=${input}`, true);
    xhr.send();
    xhr.onload = function() {
    var output = xhr.responseText;
    cntDiv.innerHTML = output;
    cntDiv.style.display = "block";
    podForm.style.display = "none";
    document.querySelector("#pod-describe").style.display = "none";
    document.querySelector("#pod-delete").style.display = "none";
    document.querySelector("#pod-input").style.display = "none";


    }
})

delSubmit.addEventListener('click', function (evt){
    
    let input = delForm.value;
    var xhr = new XMLHttpRequest();
    // var containerId = document.getElementsByName("containerId")[0].value;
    xhr.open("GET", `/deletePod?podName=${input}`, true);
    xhr.send();
    xhr.onload = function() {
    var output = xhr.responseText;
    cntDiv.innerHTML = output;
    cntDiv.style.display = "block";
    podForm.style.display = "none";
    document.querySelector("#pod-describe").style.display = "none";
    document.querySelector("#pod-delete").style.display = "none";
    document.querySelector("#pod-input").style.display = "none";
    delForm.value = "";
    }
    
})

// deployment backend

depInpSubmit.addEventListener('click',function(evt)
{
    let depName = deployForm.elements.deployName.value;
    let imageName = deployForm.elements.deployImageName.value;
    let imageTag = deployForm.elements.deployImageTag.value;
    var xhr = new XMLHttpRequest();
    // var containerId = document.getElementsByName("containerId")[0].value;
    xhr.open("GET", `/deployPod?deployName=${depName}&deployImageName=${imageName}&deployImageTag=${imageTag}`, true);
    xhr.send();
    xhr.onload = function() {
    var output = xhr.responseText;
    cntDiv.innerHTML = output;
    cntDiv.style.display = "block";
    document.querySelector("#deploy-describe").style.display = "none";
    document.querySelector("#deploy-delete").style.display = "none";
    document.querySelector("#deploy-input").style.display = "none";
    document.querySelector("#deploy-scale").style.display = "none";
    
}
}
)

deployStatus.addEventListener('click', function (evt){

    var xhr = new XMLHttpRequest();
    // var containerId = document.getElementsByName("containerId")[0].value;
    xhr.open("GET", `/deployStatus`, true);
    xhr.send();
    xhr.onload = function() {
        var output = xhr.responseText;
        cntDiv.innerHTML = output;
        cntDiv.style.display = "block";
        document.querySelector("#deploy-describe").style.display = "none";
        document.querySelector("#deploy-delete").style.display = "none";
        document.querySelector("#deploy-input").style.display = "none";
        document.querySelector("#deploy-scale").style.display = "none";
    }
})

desDepSubmit.addEventListener('click', function (evt){
    let input = desDeployForm.elements.deployName.value;
    var xhr = new XMLHttpRequest();
    // var containerId = document.getElementsByName("containerId")[0].value;
    xhr.open("GET", `/describeDeploy?deployName=${input}`, true);
    xhr.send();
    xhr.onload = function() {
        var output = xhr.responseText;
        cntDiv.innerHTML = output;
        cntDiv.style.display = "block";
        document.querySelector("#deploy-describe").style.display = "none";
        document.querySelector("#deploy-delete").style.display = "none";
        document.querySelector("#deploy-input").style.display = "none";
        document.querySelector("#deploy-scale").style.display = "none";
        desDeployForm.elements.deployName.value = "";
    }
})


delDepSubmit.addEventListener('click', function (evt){
    let input = delDepForm.elements.deployName.value;
    var xhr = new XMLHttpRequest();
    // var containerId = document.getElementsByName("containerId")[0].value;
    xhr.open("GET", `/deleteDeploy?deployName=${input}`, true);
    xhr.send();
    xhr.onload = function() {
        var output = xhr.responseText;
        cntDiv.innerHTML = output;
        cntDiv.style.display = "block";
        document.querySelector("#deploy-describe").style.display = "none";
        document.querySelector("#deploy-delete").style.display = "none";
        document.querySelector("#deploy-input").style.display = "none";
        document.querySelector("#deploy-scale").style.display = "none";
        delDepForm.elements.deployName.value = "";
    }
})

scaleDepSubmit.addEventListener('click', function (evt){
    let input = scaleDepForm.elements.deployName.value;
    let replicas = scaleDepForm.elements.replicas.value;

    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", `/scaleDeploy?deployName=${input}&replicas=${replicas}`, true);
    xhr.send();
    xhr.onload = function() {
        var output = xhr.responseText;
        cntDiv.innerHTML = output;
        cntDiv.style.display = "block";
        document.querySelector("#deploy-describe").style.display = "none";
        document.querySelector("#deploy-delete").style.display = "none";
        document.querySelector("#deploy-input").style.display = "none";
        document.querySelector("#deploy-scale").style.display = "none";
        scaleDepForm.elements.deployName.value = "";
        scaleDepForm.elements.replicas.value = "";
    }
})
        // service backend code

createSvcSubmit.addEventListener('click',function(){

        let resource = createSvcForm.elements.resource.value;
        let resourceName = createSvcForm.elements.resourceName.value;
        let svcType = createSvcForm.elements.svcType.value;
        let port = createSvcForm.elements.port.value;

        var xhr = new XMLHttpRequest();
    
        xhr.open("GET", `/createSvc?resource=${resource}&resourceName=${resourceName}&svcName=${svcType}&port=${port}`, true);
        xhr.send();
        xhr.onload = function() {
        var output = xhr.responseText;
        cntDiv.innerHTML = output;
        cntDiv.style.display = "block";
        document.querySelector("#svc-input").style.display = "none";
        
    }

})

svcStatus.addEventListener('click', function(){

        var xhr = new XMLHttpRequest(); 
        xhr.open("GET", `/svcStatus`,true)
        xhr.send();
        xhr.onload = function() {
        var output = xhr.responseText;
        cntDiv.innerHTML = output;
        cntDiv.style.display = "block";
        document.querySelector("#svc-input").style.display = "none";
        document.querySelector("#svc-describe").style.display = "none";
        
        
    }
}) 

desSvcSubmit.addEventListener('click', function(){

    let serviceName = desSvcForm.elements.serviceName.value
    var xhr = new XMLHttpRequest(); 
    xhr.open("GET", `/desSvc?serviceName=${serviceName}`,true)
    xhr.send();
    xhr.onload = function() {
    var output = xhr.responseText;
    cntDiv.innerHTML = output;
    cntDiv.style.display = "block";
    document.querySelector("#svc-describe").style.display = "none";
    desSvcForm.elements.serviceName.value="";
    
    
}
}) 

delSvcSubmit.addEventListener('click', function(){

    let serviceName = delSvcForm.elements.serviceName.value
    var xhr = new XMLHttpRequest(); 
    xhr.open("GET", `/delSvc?serviceName=${serviceName}`,true)
    xhr.send();
    xhr.onload = function() {
    var output = xhr.responseText;
    cntDiv.innerHTML = output;
    cntDiv.style.display = "block";
    document.querySelector("#svc-delete").style.display = "none";
    delSvcForm.elements.serviceName.value="";
    
    
}
}) 


rsStatus.addEventListener('click', function(){

    
    var xhr = new XMLHttpRequest(); 
    xhr.open("GET", `/rsStatus`,true)
    xhr.send();
    xhr.onload = function() {
    var output = xhr.responseText;
    cntDiv.innerHTML = output;
    cntDiv.style.display = "block";
    
    
    
}
}) 












