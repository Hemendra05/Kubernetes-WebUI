from flask import Flask
from flask import render_template
from flask import request
import subprocess as sp


app = Flask("myapp")

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/podStatus')
def testing():
    output = sp.getoutput("kubectl get pods")
    return "<pre> {} </pre>".format(output)

@app.route('/describePod')
def describePod():
    podName = request.args.get("podName")
    output = sp.getoutput("kubectl describe pod {}".format(podName))
    return "<pre> {} </pre>".format(output)

@app.route('/deletePod')
def deletePod():
    podName = request.args.get("podName")
    output = sp.getoutput("kubectl delete pod {}".format(podName))
    return "<pre> {} </pre>".format(output)

@app.route('/runPod')
def runPod():
    podName = request.args.get("podName")
    imageName = request.args.get("imageName")
    imageTag = request.args.get("imageTag")
    output = sp.getoutput("kubectl run {} --image {}:{}".format(podName,imageName,imageTag))
    return "<pre> {} </pre>".format(output)

@app.route('/deployPod')
def deployPod():
    deployName = request.args.get("deployName")
    imageName = request.args.get("deployImageName")
    imageTag = request.args.get("deployImageTag")
    output = sp.getoutput("kubectl create deployment {} --image {}:{}".format(deployName,imageName,imageTag))
    return "<pre> {} </pre>".format(output)

@app.route('/deployStatus')
def deployStatus():
    output = sp.getoutput("kubectl get deploy")
    return "<pre> {} </pre>".format(output)

@app.route('/describeDeploy')
def describeDeploy():
    depname = request.args.get('deployName')
    output = sp.getoutput("kubectl describe deploy {}".format(depname))
    return "<pre> {} </pre>".format(output)

@app.route('/deleteDeploy')
def deleteDeploy():
    depname = request.args.get('deployName')
    output = sp.getoutput("kubectl delete deploy {}".format(depname))
    return "<pre> {} </pre>".format(output)

@app.route('/scaleDeploy')
def scaleDeploy():
    depname = request.args.get('deployName')
    replicas = request.args.get('replicas')
    output = sp.getoutput("kubectl scale deploy {} --replicas={}".format(depname,replicas))
    return "<pre> {} </pre>".format(output)

@app.route('/createSvc')
def createSvc():
    resource = request.args.get('resource')
    resourceName = request.args.get('resourceName')
    svcType = request.args.get('svcName')
    port = int(request.args.get('port'))

    output = sp.getoutput("kubectl expose {} {} --type={} --port={}".format(resource,resourceName,svcType,port))
    return "<pre> {} </pre>".format(output)

@app.route('/svcStatus')
def svcStatus():

    output = sp.getoutput("kubectl get svc")
    return "<pre> {} </pre>".format(output)


@app.route('/desSvc')
def desSvc():
    serviceName = request.args.get('serviceName')
    output = sp.getoutput("kubectl describe svc {}".format(serviceName))
    return "<pre> {} </pre>".format(output)

@app.route('/delSvc')
def delSvc():
    serviceName = request.args.get('serviceName')
    output = sp.getoutput("kubectl delete svc {}".format(serviceName))
    return "<pre> {} </pre>".format(output)

@app.route('/rsStatus')
def rsStatus():

    output = sp.getoutput("kubectl get rs")
    return "<pre> {} </pre>".format(output)

@app.route('/delAllRes')
def delAllRes():

    output = sp.getoutput("kubectl delete all --all")
    return "<pre> {} </pre>".format(output)

app.run(host='0.0.0.0', port=5000, debug=True)
