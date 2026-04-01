# kohli angel UI Garden Build Checks

## How I Built It

### Step 1 - Created a new folder for assignment 13
mkdir kohli_angel_coding_assignment13
cd kohli_angel_coding_assignment13

### Step 2 - Copied all files from assignment 12 into a new folder
mkdir kohli_angel_ui_garden_build_checks
Copy all files from kohli_angel_ui_garden into kohli_angel_ui_garden_build_checks

### Step 3 - CD into the working directory
cd kohli_angel_ui_garden_build_checks

### Step 4 - Installed Husky for pre-commit hooks
npm install --save-dev husky

### Step 5 - Initialized Husky
npx husky init

### Step 6 - Installed Prettier
npm install --save-dev prettier

npx prettier --write "src/App.tsx"

### Step 7 - Installed lint-staged
npm install --save-dev lint-staged

### Step 8 - Created a .prettierrc file in the project root
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}

### Step 9 - Updated package.json to add lint-staged and prepare script
Added the following to package.json:
- "prepare": "husky" in scripts
- "test": "react-scripts test --watchAll=false" in scripts
- "prettier": "prettier --write src/**/*.{ts,tsx}" in scripts
- "lint": "eslint src/**/*.{ts,tsx}" in scripts
- "lint-staged" section with prettier and eslint checks

### Step 10 - Created the Husky pre-commit hook
Created file .husky/pre-commit with the following checks:
- Prettier check
- ESLint check
- All tests must pass
Such that if any check fails, the commit will be rejected

### Step 11 - Created GitHub Actions workflow file
Created folder .github/workflows
Created file .github/workflows/ci.yml
Added the following jobs:
- Install dependencies
- Run Prettier check
- Run ESLint check
- Run Tests
- Build Storybook
Such that if any check fails, GitHub will notify that the build failed

### Step 12 - Updated nginx.conf to use port 8018
server {
    listen 8018;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }
}

### Step 13 - Created Dockerfile
FROM node:20-alpine AS builder
WORKDIR /kohli_angel_ui_garden_build_checks
COPY package*.json ./
RUN npm install
RUN npm install --save-dev @storybook/react @storybook/react-webpack5
COPY . .
ENV DISABLE_ESLINT_PLUGIN=true
ENV TSC_COMPILE_ON_ERROR=true
RUN npm run build-storybook

FROM nginx:alpine
COPY --from=builder /kohli_angel_ui_garden_build_checks/storybook-static /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8018
CMD ["nginx", "-g", "daemon off;"]

### Step 14 - Initialized Git and pushed to GitHub
git init
git add .
git commit -m "Assignment 13 - UI Component Library Build Checks"
git remote add origin https://github.com/angelkohli/kohli_angel_coding_assignment13.git
git push -u origin main

## How to Run on localhost:8018

### Step 1 - Clone the repository
git clone https://github.com/angelkohli/kohli_angel_coding_assignment13.git
cd kohli_angel_coding_assignment13

### Step 2 - Build the Docker image
docker build -t kohli_angel_coding_assignment13 .

### Step 3 - Run the container
docker run --name kohli_angel_coding_assignment13 -p 8018:8018 kohli_angel_coding_assignment13

### Step 4 - Open the browser and go to
http://localhost:8018
or
http://127.0.0.1:8018

## Stopping the Container
docker stop kohli_angel_coding_assignment13

## Removing the Container
docker rm kohli_angel_coding_assignment13

## Pre-Commit Hooks
Every time you make a commit, the following checks will run automatically:
- Prettier - checks code formatting
- ESLint - checks code quality
- Tests - runs all jest tests
If any of these checks fail, the commit will be rejected

## GitHub Actions CI/CD
Every time you push to GitHub, the following checks will run:
- Install dependencies
- Run Prettier check
- Run ESLint check
- Run all tests
- Build Storybook
If any check fails, GitHub will send a notification that the build failed

## Built With
- React 19
- TypeScript
- Styled Components
- Storybook
- Husky
- Prettier
- ESLint
- GitHub Actions
- Docker + Nginx