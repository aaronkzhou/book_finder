FROM php:7.3-fpm

MAINTAINER Aaron Chou <aaaron.chou@gmail.com>

# Install modules,composer,phpunit
RUN apt-get update && apt-get install -y \
	libmcrypt-dev  \
	libicu-dev \
	mariadb-client \
	git \
	zip \
	unzip \
	wget \
	&& pecl install mcrypt-1.0.2 \
	&& docker-php-ext-enable mcrypt \
	&& docker-php-ext-install pdo_mysql \
	&& docker-php-ext-install mysqli \
	&& docker-php-ext-install iconv \
	&& docker-php-ext-install intl \
	&& docker-php-ext-install opcache \
	&& docker-php-ext-install mbstring \
	&& curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
	&& wget https://phar.phpunit.de/phpunit-6.0.phar \
	&& chmod +x phpunit-6.0.phar \
	&& mv phpunit-6.0.phar /usr/local/bin/phpunit

CMD ["php-fpm"]