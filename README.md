# metinsaritas - devakademi2019

# Proje Tanımı
Fullstack veri listeleme.  Verilen data; backend, frontend kısımları yazılıp dockerize edilmiştir. 

## Kullanılan teknolojiler ve kütüphaneler
* docker/docker-compose
* nodejs - express
* mongodb
* graphql (ApolloServer/Client)
* redis
* react
* semantic-ui

# Kurulum
## Gereksinimler
- Yarn
- Docker
- Docker-compose

`$ git clone https://gitlab.com/dev.akademi19/metinsaritas/metinsaritas-devakademi2019.git`

`$ cd metinsaritas-devakademi2019/server`
`$ yarn install`

`$ cd ../client`
`$ yarn install`

`$ cd ..`
`$ docker-compose up -d`

> Docker ilk kurulumda, db initalize ederken, mongodb, redis sunucularına bağlanırken biraz zamana alabilir. 

## Kullanılan Portlar
* __React Fontend Client:__ http://localhost:80
* __GraphQL Backend:__ http://localhost:8080/graphql
* __MongoDB Viewer:__ http://localhost:8081
* __MongoDB:__  (db container) İç ağ:27017
* __Redis Server:__ (redis container) İç ağ:6379

React-script'leri çalışmaya başlaması ardından tarayıcıdan http://localhost adresini açın.

Docker kurulum işlemini `$ docker-compose logs -f` diyerek izleyebilirsiniz.



