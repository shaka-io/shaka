# shaka

A Node.js client-server architecture for Shaka. 

## Overview

The repo is split up into a number of packages -

- [shaka-web](apps/web/) A web client
- [@shaka-js/api](packages/api/) An http server with a GraphQL endpoint and REST webhooks
- [@shaka-js/dev](packages/dev/) A collection of cli tools and build scripts used across repo packages
- [@shaka-js/env](packages/env/) A typed environment instance used across repo packages
- [@shaka-js/library](packages/library/) A collection of common functions, types, and references available to Node.js and browser environments
- [@shaka-js/models](packages/models/) The definitions for database models and PostgreSQL connection instance

## Requests

API test -

```
curl -L -X GET 'http://localhost:${PORT}'
```
