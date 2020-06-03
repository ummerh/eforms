
#!/bin/bash

login_docker(){
    az acr login --resource-group=HK-eforms-infra --name=eacloudacr
}
login_aks(){
    az aks get-credentials --resource-group=HK-eforms-infra --name=eacloudAKS
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
