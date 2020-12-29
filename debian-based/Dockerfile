FROM php:7.4-apache
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update
RUN apt-get install vim curl zlib1g-dev libzip-dev libpng-dev libjpeg-dev -y
RUN apt-get install libfreetype6-dev -y
RUN docker-php-ext-configure gd \
    --with-freetype \
    --with-jpeg \
  NPROC=$(grep -c ^processor /proc/cpuinfo 2>/dev/null || 1) && \
  docker-php-ext-install -j$(nproc) gd mysqli opcache  pdo_mysql 
RUN docker-php-ext-install zip
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
COPY conf.d/opcache.ini /usr/local/etc/php/conf.d/opcache.ini
COPY src/* /var/www/html/




