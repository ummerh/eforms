
#!/bin/bash

az acr login --resource-group=dc50-eacloud-temp-rg002 --name=eacloudacr

az aks get-credentials --resource-group=dc50-eacloud-temp-rg002 --name=eacloudAKS

git pull

mvn clean package

docker build . -t eacloudacr.azurecr.io/eacloud/eforms

docker tag eacloudacr.azurecr.io/eacloud/eforms eacloudacr.azurecr.io/eacloud/eforms:latest

docker push  eacloudacr.azurecr.io/eacloud/eforms

kubectl apply -f eforms-aks.yml
