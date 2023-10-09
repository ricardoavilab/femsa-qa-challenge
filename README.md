# Femsa QA challenge

## :computer: How to install the project

```bash
    npm install
    npx playwright install-deps firefox chromium
```

## :rocket: how to run the project

```bash
    npm run "test:e2e"
    npm run "test:e2e" --  --project=chromium
    npm run "test:e2e" --  --project=firefox
    npm run "test:api"
    npm run report # generate report (playwright report folder)
```

## :pencil: notes

- The framework will take the corresponding screenshot when a test failed (test-results folder)
- The e2e tests will run when creating a new PR (GH workflow)
