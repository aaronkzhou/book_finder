# docker-compose-php

docker-compose setup to run php5.6 or php7 with php-fpm via nginx and mysql. Connecting from php on a mysql database still fails. Not sure why.

# Purpose

Create the ultimate development environment

# Install

1. Install docker and [docker-compose](https://docs.docker.com/compose/install/)
   rename the docker-compose file for your requirement

# prerequisite

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
