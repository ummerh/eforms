
#!/bin/bash

login_docker(){
    az acr login --resource-group=dc50-eacloud-temp-rg002 --name=eacloudacr
}
login_aks(){
    az aks get-credentials --resource-group=dc50-eacloud-temp-rg002 --name=eacloudAKS
}

build_app(){
   git pull
   mvn clean package
}

build_docker(){
   docker build . -t eacloudacr.azurecr.io/eacloud/eforms
   docker tag eacloudacr.azurecr.io/eacloud/eforms eacloudacr.azurecr.io/eacloud/eforms:latest
   docker push  eacloudacr.azurecr.io/eacloud/eforms
}

login_docker
login_aks
build_app
build_docker
kubectl apply -f eforms-aks.yml
