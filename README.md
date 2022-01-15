# NextJS Example Project

This project will render jobs list from [GraphQL Jobs API](https://graphql.jobs/docs/api/).

There are two main pages:

- Home page - list the jobs.
- Job detail page - show the job detail, accessed by clicking on the card on Home page.

The pages are server rendered (SSR). The data are prepopulated on the server side using Apollo Client within `getServerSideProps` function.

To run the application first make sure you have the following setup in your machine:

- NodeJS 14+
- [Yarn](https://classic.yarnpkg.com/en/) package manager (you can also use NPM but the following guides will use `Yarn`)
- For Windows user, Next.js with the recent SWC  default might still have some issues so you might need to use WSL in Windows

Then install the dependencies execute

```shell
yarn install
```

To run the project on local execute

```shell
yarn dev
```

The project the can be used in the browser with `localhost:3000`

To run the test suite execute

```shell
yarn test
```
