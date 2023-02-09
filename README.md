# rspack example

This repo demonstrates how to use rspack and Nx in a standalone React project.

## Setup

```bash
pnpm install
```

## Running development server

```bash
npx nx serve demo
```

## Building production bundle

```bash
npx nx build demo
```

> NOTE: Nx caches the build output (i.e. `dist`) if the source files have not changed. When a test file (e.g. `*.spec.tsx`) changes, the build is still cached.


### Running production bundle


```bash
npx serve dist/apps/demo
```

## Running tests

This project uses Jest to run unit tests.

```bash

npx nx test demo
```

> NOTE: Nx caches the test result if the source and test files have no changed. When a non-source, non-test file (e.g. `*.md`) changes, the test is still cached.

You can also test the `ui` library (which is not included in app tests).

```bash
npx nx test ui
```

> NOTE: Changes to `ui` spec files do not affect the app's test cache. So updating say `header.spec.tsx` will not invalidate cache for `npx nx test`.

To run _all_ tests, use this command.

```bash
npx nx run-many -t test
```



