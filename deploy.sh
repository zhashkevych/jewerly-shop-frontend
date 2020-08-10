git checkout -f master && git pull origin master

docker build --no-cache . -t jewerly-frontent:0.1

if [ "$(docker ps -q -f name=jewerly-frontend)" ]; then
    if [ ! "$(docker ps -aq -f status=exited -f name=jewerly-frontend)" ]; then
        docker stop jewerly-frontend
    fi
fi

docker run --rm -d -p 80:80 --name jewerly-frontend jewerly-frontent:0.1