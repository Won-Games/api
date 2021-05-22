[![DigitalOcean Referral Badge](https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%203.svg)](https://www.digitalocean.com/?refcode=4c3eee0af56f&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge)

# React Avançado - Won Games API

This is the API to create the Won Games Store from [React Avançado course](https://reactavancado.com.br/).

## Requirements

This project uses [PostgreSQL](https://www.postgresql.org/), so, in order to make it working, install in your local machine or use Docker.

The configuration to the Database can be found on [config/database.js](config/database.js)

## Development

After cloning this project, install the dependencies:

```
yarn install
```

And run using:

```
yarn develop
```

The urls to access are:

- `http://localhost:1337/admin` - The Dashboard to create and populate data
- `http://localhost:1337/graphql` - GraphQL Playground to test your queries

The first time to access the Admin you'll need to create an user.

## Populate data

This project uses a `/games/populate` route in order to populate the data via GoG site.
In order to make it work, follow the steps:

- Go to Roles & Permissions > Public and make sure `game:populate` route is public available and the upload as well
- With Strapi running run the following comand in your console:

```bash
$ curl -X POST http://localhost:1337/games/populate

# you can pass query parameters like:
$ curl -X POST http://localhost:1337/games/populate?page=2
$ curl -X POST http://localhost:1337/games/populate?search=simcity
$ curl -X POST http://localhost:1337/games/populate?sort=rating&price=free
$ curl -X POST http://localhost:1337/games/populate?availability=coming&sort=popularity
```

## Using dump

First of all, you need to download our [dump.sql](https://github.com/Won-Games/database/raw/master/dump.sql) from our [database repository](https://github.com/Won-Games/database).

1. Create a Postgres database and user:

```sh
CREATE USER wongames WITH ENCRYPTED PASSWORD 'wongames123';
CREATE DATABASE wongames OWNER wongames;
```

2. Populate the new database, using the following command (remember to point the place where you have the `dump.sql`):

```sh
psql -h localhost -p 5432 -U wongames wongames < dump.sql
```

And you can access `localhost:1337/admin` with the following credentials:

```sh
email: wongames@wongames.com
password: Wongames123
```
