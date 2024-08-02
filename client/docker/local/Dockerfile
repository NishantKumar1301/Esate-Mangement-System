# FROM docker.io/node:20.11-alpine3.18 as base

# FROM base as node-build-stage

# RUN apk add --no-cache libc6-compat

# COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# RUN \
#   if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
#   elif [ -f package-lock.json ]; then npm ci; \
#   elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i; \
#   else echo "Lockfile not found." && exit 1; \
#   fi

# FROM base as node-run-stage

# ARG APP_HOME=/app
# WORKDIR ${APP_HOME}

# COPY --from=node-build-stage /node_modules ./node_modules

# COPY . ${APP_HOME}

# RUN addgroup -g 1001 -S nodejs && \
#   adduser -S nextjs -u 1001 -G nodejs

# RUN chown -R nextjs:nodejs ${APP_HOME}

# USER nextjs

# CMD [ "npm","run","dev" ]

FROM docker.io/node:20.11-alpine3.18 as base

# Set proxy environment variables if needed
# ENV HTTP_PROXY http://proxy.company.com:8080
# ENV HTTPS_PROXY http://proxy.company.com:8080

FROM docker.io/node:20.11-alpine3.18 as base

FROM base as node-build-stage

RUN apk add --no-cache libc6-compat

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Retry function to handle transient network issues
RUN set -eux; \
    retry() { \
      max_attempts=$1; shift; \
      cmd=$@; \
      attempt_num=1; \
      until $cmd; do \
        if [ $attempt_num -eq $max_attempts ]; then \
          echo "Attempt $attempt_num failed! No more retries left." >&2; \
          return 1; \
        else \
          echo "Attempt $attempt_num failed! Retrying in $attempt_num seconds..." >&2; \
          sleep $attempt_num; \
          attempt_num=$(( attempt_num + 1 )); \
        fi; \
      done; \
    }; \
    if [ -f yarn.lock ]; then retry 5 yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then retry 5 npm ci; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && retry 5 pnpm i; \
    else echo "Lockfile not found." && exit 1; \
    fi

FROM base as node-run-stage

ARG APP_HOME=/app
WORKDIR ${APP_HOME}

COPY --from=node-build-stage /node_modules ./node_modules

COPY . ${APP_HOME}

RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001 -G nodejs

RUN chown -R nextjs:nodejs ${APP_HOME}

USER nextjs

CMD ["npm", "run", "dev"]
