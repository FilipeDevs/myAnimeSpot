FROM php:8.3-alpine

RUN apk update && apk add --no-cache openssl zip unzip git oniguruma-dev

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN docker-php-ext-install pdo mbstring pdo_mysql

WORKDIR /app

COPY . /app

RUN cp -n .env.example .env || true

RUN composer install --optimize-autoloader --no-dev --no-interaction --no-progress

RUN echo "#!/bin/sh" > /app/startup.sh
RUN echo "php artisan migrate" >> /app/startup.sh
RUN echo "php artisan serve --host=0.0.0.0 --port=8080" >> /app/startup.sh

RUN chmod +x /app/startup.sh

CMD ["/app/startup.sh"]

EXPOSE 8080
