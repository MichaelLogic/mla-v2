FROM node:alpine

LABEL version="1.8.0"
LABEL description="DreamMerchant Marketing App"
LABEL maintainer = ["ml@michaellogic.com"]

WORKDIR /src

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]