# Gladhy landing page — builds static files, then hands them to Caddy.
#
# Mirrors the app frontend's Dockerfile: the output is plain HTML/CSS/JS, not a
# running server, so the landing page costs the VPS nothing beyond disk. That
# matters on two vCPUs already shared by Postgres and Chromium.

FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Empty on purpose: the contact form posts to a relative /api/v1/leads, so the
# browser calls whichever host served the page. Caddy proxies /api on the
# landing host to the backend, which keeps the form same-origin — no CORS, and
# one build works for gladhy.co.id and www alike.
ARG VITE_API_URL=""
ENV VITE_API_URL=$VITE_API_URL

# The domain institutions live under; the "Masuk" dialog builds
# {slug}.{domain} from it.
ARG VITE_PLATFORM_DOMAIN="gladhy.co.id"
ENV VITE_PLATFORM_DOMAIN=$VITE_PLATFORM_DOMAIN

# International format, digits only — wa.me rejects '+' and spaces. Left empty
# by default, and the WhatsApp button simply does not render, rather than
# linking somewhere wrong.
ARG VITE_WHATSAPP_NUMBER=""
ENV VITE_WHATSAPP_NUMBER=$VITE_WHATSAPP_NUMBER

RUN npm run build

# This image exists only to drop the built files into a volume Caddy reads. It
# runs once per deploy and exits.
FROM alpine:3

COPY --from=build /app/dist /dist

# Clear first: a file removed in a later release would otherwise linger, and a
# stale index.html pointing at deleted assets is a blank page.
#
# The volume is landing_dist, NOT the app's web_dist — sharing one would make
# each deploy wipe the other.
CMD ["sh", "-c", "rm -rf /srv/* && cp -a /dist/. /srv/ && echo 'landing terpasang ke /srv'"]
