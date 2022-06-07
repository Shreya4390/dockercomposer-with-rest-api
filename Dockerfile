
FROM node:14-alpine

# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

# USER node

RUN npm install

COPY . .

# COPY --chown=node:node . .

EXPOSE 5000

CMD [ "npm", "start" ]


# FROM node:14-alpine

# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# WORKDIR /home/node/app

# COPY package*.json ./

# USER node

# RUN npm install

# COPY --chown=node:node . .

# EXPOSE 3000

# ## THE LIFE SAVER
# ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait

# RUN chmod +x /wait

# ## Launch the wait tool and then your application
# CMD /wait && npm start


# FROM node:alpine

# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# WORKDIR /home/node/app

# COPY package*.json .

# RUN npm ci

# COPY . .

# EXPOSE 3000

# CMD ["npm","start"]


# FROM node:14-alpine
# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# WORKDIR /home/node/app
# COPY package*.json ./
# RUN npm install
# USER node

# RUN npm install

# COPY --chown=node:node . .

# EXPOSE 3000

# CMD ["npm","start"]