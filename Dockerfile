FROM node:13-alpine


COPY package.json package.json

RUN npm install

COPY . .

ENV NAME=${name}
ENV ID=${id}


ENTRYPOINT ["node"]
CMD ["index.js"]

EXPOSE 3000
