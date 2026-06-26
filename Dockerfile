FROM node:24-alpine AS base

WORKDIR /app

ENV NODE_ENV=production

FROM base AS deps

COPY package*.json ./
# abaixo antigo --production
RUN npm install --omit=dev

FROM base AS runner

USER node

COPY --chown=node:node --from=deps /app/node_modules ./node_modules
COPY --chown=node:node package*.json ./
COPY --chown=node:node src ./src

EXPOSE 3000

CMD ["npm", "start"]
