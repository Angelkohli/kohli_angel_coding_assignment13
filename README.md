# Kohli Angel UI Garden
 
## How I Built It
 
1. Made a folder called kohli_angel_coding_assignment12
 
2. CD into that folder
cd kohli_angel_coding_assignment12
 
3. Created React app using npx command
npx create-react-app kohli_angel_ui_garden --template typescript
 
4. CD into the working directory
cd kohli_angel_ui_garden
 
5. Installed Storybook in the working directory
npx sb init
 
6. Installed dependencies
npm install styled-components
npm install --save-dev @types/styled-components jest-styled-components @testing-library/react @testing-library/jest-dom
 
7. Created a components folder in src folder
 
8. Created a ComponentName folder in the components folder
 
9. Created 5 different files in each component folder
- Button.tsx
- Button.stories.tsx
- Button.types.tsx
- Button.tests.tsx
- index.ts
 
10. Built all 9 components
- Button, Label, Text, Table, Dropdown, RadioButton, Img, HeroImage, Card

11. run storybook
npm run storybook
 
14. Created Dockerfile

15. Make the Build folder
using - npm run build

16. Built the Docker Image
docker build -t kohli_angel_coding_assignment12 .

17. Run the container
docker run --name kohli_angel_coding_assignment12 -p 8083:8083 kohli_angel_coding_assignment12

Remove - Docker Container
docker rm kohli_angel_coding_assignment12
 
## How to Run on localhost:8083
 
1. Build the Docker image
docker build -t kohli_angel_coding_assignment12 .
 
2. Run the container
docker run --name kohli_angel_coding_assignment12 -p 8083:8083 kohli_angel_coding_assignment12
 
3. Open the browser and go to
http://localhost:8083
or
http://127.0.0.1:8083


# Opening Github using Terminal

start https://github.com/Angelkohli/kohli_angel_coding_assignment12