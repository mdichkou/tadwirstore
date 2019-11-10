# tadwirstore
# First step run docker-composer
cd docker-compose-lamp
docker-compose up -d 
# Second step connect to phpmyadmin
go to localhost:8080 and connect with utilisateur : "root" , passwor : "tiger"
# 3rd step create db and importe
Create Database tadwirstore , and importe to this database "tadwirstore.sql"
# 4 step install packages
run "npm i" and run it inside client folder too 
# 5 run server and client
run "npm run server" , and "npm run start" inside client folder
