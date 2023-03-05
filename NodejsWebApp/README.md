# NodejsWebApp

# Command for docker 
## To pull image from docker hub
docker pull ivish/node-web-app

## To run container with 10 megabites on 1 cpu
docker run --memory=10m --cpus=1 -p 49160:80 ivish/node-web-app

## To check is web app is working 
curl -i localhost:49160

