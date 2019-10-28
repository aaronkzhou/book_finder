# docker-compose-php

docker-compose setup to run php7 with php-fpm via nginx and mysql. Connecting from php on a mysql database still fails. Seems because of mysql version, still working.

# frontend

already worked perfectly, using a external api currently(https://api.themoviedb.org), still need time to integrate with backend.

    	$ cd app/frontend
    	$ yarn install
    	$ yarn start


# backend
use lumen framework.
Api already work, need time on providing right data.


# prerequisite
1. Install docker and [docker-compose](https://docs.docker.com/compose/install/)
   rename the docker-compose file for your requirement

rename the docker-compose file for your need

# Run

    	$ git clone git@github.com:aaronleslie/docker-compose-php.git
    	$ cd docker-compose-php
    	$ docker-compose build
    	$ docker-compose up -d

# PHP

By default the setup creates a php7 environment

# Test

Open url http://localhost and you will see a phpinfo page
