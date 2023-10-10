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

## test cases -> inicio de sesión

1. sucessful login (all users)
2. valid username (no password)
3. login - invalid password & invalid username
4. login - invalid password & valid username
5. login - valid password (case insensitive)
6. sucessful login - (case insensitive)
7. click on submit (no password, no username)
