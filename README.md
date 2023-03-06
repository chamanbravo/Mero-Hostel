# Fiverr-clone

## Prerequisites

- Node.js 14+
- MongoDB
- Docker
- VS-Code Extensions (Prettier, ESLint, etc)
- Command Line Tools

## Run in Development

```
# Get the latest snapshot
git clone https://github.com/chamanbravo/Fiverr-clone.git

# Change directory
cd Fiverr-clone

# Install dependencies
yarn install

#Create .env file in /api with the following contents:
MONGODB_URI = ''
Token_Key = ''
Refresh_Token_Key = ''

# Then simply start
yarn start
```

## Project Structure

```
📦 Fiverr-Clone
┣ 📂api
┃ ┣ 📂config
┃ ┣ 📂controllers
┃ ┣ 📂logger
┃ ┣ 📂middlewares
┃ ┣ 📂models
┃ ┣ 📂routes
┃ ┣ 📂test
┃ ┣ 📂utils
┃ ┣ 📜.dockerignore
┃ ┣ 📜.env
┃ ┣ 📜app.js
┃ ┣ 📜Dockerfile
┃ ┣ 📜package.json
┃ ┣ 📜README.md
┃ ┣ 📜sentry.js
┃ ┗ 📜server.js
┣ 📂web
┃ ┣ 📂public
┃ ┣ 📂src
┃ ┃ ┣ 📂api
┃ ┃ ┣ 📂assets
┃ ┃ ┣ 📂components
┃ ┃ ┣ 📂helpers
┃ ┃ ┣ 📂hooks
┃ ┃ ┣ 📂mock
┃ ┃ ┣ 📂pages
┃ ┃ ┣ 📂redux
┃ ┃ ┣ 📂styles
┃ ┃ ┣ 📜App.js
┃ ┃ ┣ 📜index.js
┃ ┃ ┗ 📜index.scss
┃ ┣ 📜.dockerignore
┃ ┣ 📜.eslintrc.json
┃ ┣ 📜.gitignore
┃ ┣ 📜.prettierrc
┃ ┣ 📜Dockerfile
┃ ┣ 📜package.json
┃ ┗ 📜README.md
┣ 📜.editorconfig
┣ 📜.gitignore
┃ 📜docker-compose.yml
┣ 📜package.json
┣ 📜README.md
┣ 📜yarn.lock
```
