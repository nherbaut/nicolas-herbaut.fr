FROM php:fpm-alpine
RUN apk add --no-cache freetype git libpng libjpeg-turbo freetype-dev libpng-dev libjpeg-turbo-dev && \
  docker-php-ext-configure gd \
    --with-freetype \
    --with-jpeg \
  NPROC=$(grep -c ^processor /proc/cpuinfo 2>/dev/null || 1) && \
  docker-php-ext-install -j$(nproc) gd mysqli opcache  && \
  apk del --no-cache freetype-dev libpng-dev libjpeg-turbo-dev
RUN docker-php-ext-install pdo_mysql 
COPY conf.d/opcache.ini /usr/local/etc/php/conf.d/opcache.ini
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer global require consolidation/cgr
ENV PATH="/root/.composer/vendor/bin:$PATH"
RUN cgr drush/drush
#https://github.com/docker-library/php/issues/279
