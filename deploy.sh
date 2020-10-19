
#!/bin/bash

login_docker(){
    az acr login --resource-group=HK-eforms-aks-infra --name=eacloudacr
}
login_aks(){
    az aks get-credentials --resource-group=HK-eforms-aks-infra --name=eacloudAKS
    az aks update -n eacloudAKS -g HK-eforms-aks-infra --attach-acr eacloudacr
}

build_app(){
   git pull
   mvn clean package
}

build_docker(){
   docker build . -t eacloudacr.azurecr.io/eacloud/eforms
   docker tag eacloudacr.azurecr.io/eacloud/eforms eacloudacr.azurecr.io/eacloud/eforms:0.0.3
   docker push  eacloudacr.azurecr.io/eacloud/eforms
}

login_docker
login_aks
build_app
build_docker
kubectl apply -f eforms-aks.yml
