FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# ENV HOSTNAME=0.0.0.0

# Copy the standalone output from the builder stage
COPY --from=builder /app/.next/standalone ./
# Copy the public and static folders
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
