git checkout -f develop && git pull origin develop

docker build --build-arg ENV=stage --no-cache . -t jewerly-frontent:0.1

if [ "$(docker ps -q -f name=jewerly-frontend-stage)" ]; then
    if [ ! "$(docker ps -aq -f status=exited -f name=jewerly-frontend-stage)" ]; then
        docker stop jewerly-frontend-stage
    fi
fi

docker run --rm -d -p 8080:80 --name jewerly-frontend-stage --link=jewerly-api-stage:api jewerly-frontent:0.1