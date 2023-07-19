rm -rf www
mkdir www
curl https://zalo-miniapp.github.io/next-mini-app/ > www/index.html
zmp sync-config www/index.html -r "#__next"
zmp deploy -e -m "$(git log -1 --pretty=%B)"