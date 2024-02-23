FROM node:alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

# RUN npm run build
# use nginx
 
CMD ["npm", "run", "dev"]
