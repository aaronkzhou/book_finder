# frontend

already working perfectly, using a external api currently(https://api.themoviedb.org), still need time to integrate with backend.

    	$ cd app/frontend
    	$ yarn install
    	$ yarn start

# backend

use lumen framework.
Api already work, need time on providing right data.

# docker-compose-php

docker-compose setup to run php7 with php-fpm via nginx and mysql. Connecting from php code to mysql database still fails. Seems because of mysql version, still working.

# Run

    $ git clone git@github.com:aaronkzhou/book_finder.git
    $ cd book_finder
    $ docker-compose build
    $ docker-compose up -d

# prerequisite

1. Install docker and [docker-compose](https://docs.docker.com/compose/install/)
   rename the docker-compose file for your requirement

rename the docker-compose file for your need
