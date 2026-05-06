# ============================================================
# Dockerfile — Backend NestJS
# ============================================================

# --- Build stage ---
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Reemplazamos prisma.config.ts (TypeScript) por prisma.config.js (plano).
# Sin dotenv porque en Docker las variables de entorno vienen del compose.
RUN rm -f prisma.config.ts && \
    printf '%s\n' \
      "module.exports = {" \
      "  schema: 'prisma/schema.prisma'," \
      "  migrations: { path: 'prisma/migrations' }," \
      "  datasource: { url: process.env.DATABASE_URL }," \
      "};" > prisma.config.js

RUN npx prisma generate
RUN npm run build

# --- Production stage ---
FROM node:22-alpine AS production

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/generated ./generated
COPY --from=builder /app/prisma.config.js ./prisma.config.js
COPY prisma ./prisma

EXPOSE 3001

# Run migrations then start
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main"]
