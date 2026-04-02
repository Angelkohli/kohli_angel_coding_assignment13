# kohli angel UI Garden Build Checks

### Step 1 - Created a new folder for assignment 13
mkdir kohli_angel_coding_assignment13
cd kohli_angel_coding_assignment13

### Step 2 - Copied all files from assignment 12 into a new folder

### Step 3 - CD into the working directory
cd kohli_angel_ui_garden_build_checks

### Step 4 - Installed Husky 
npm install --save-dev husky

### Step 5 - Initialized Husky
npx husky init

### Step 6 - Installed Prettier
npm install --save-dev prettier

npx prettier --write "src/App.tsx"

### Step 7 - Installed lint-staged
npm install --save-dev lint-staged

### Step 8 - Created a .prettierrc file in the project root

### Step 9 - Updated package.json 

### Step 10 - Updated the port 

### Step 11 - Created GitHub Actions workflow file
Created folder .github/workflows
Created file .github/workflows/ci.yml
Such that if any check fails, GitHub will notify that the build failed

### Step 12 - Updated nginx.conf to use port 8018

### Step 13 - Created Dockerfile

### Step 14 - Initialized Git and pushed to GitHub
git init
git add .
git commit -m "Assignment 13 - UI Component Library Build Checks"
git remote add origin https://github.com/angelkohli/kohli_angel_coding_assignment13.git
git push -u origin main

 
### Step 15 - Build the Docker image
docker build -t kohli_angel_coding_assignment13 .

### Step 16 - Run the container
docker run --name kohli_angel_coding_assignment13 -p 8018:8018 kohli_angel_coding_assignment13

### Step 17 - Open the browser and go to
http://localhost:8018
or
http://127.0.0.1:8018

