# Backend Rest API
This repo was made with 3 intentions:
- Learn more TypeScript
- Explore Express and Mongoose
- Dive deeper into backend architecture and how to write more robust APIs.

### How to use repo
- Clone down repo and install dependencies (yarn or npm).
    - Make sure you have TypeScript and the compiler for TypeScript installed globally.
- Add your mongoDB URI in the config file (config/default.ts)
- Generate JWT (JSON Web Token) RSA public and private keys and add to the config file
    - You can generate these from your terminal with the following commands:
    - `ssh-keygen -t rsa -P "" -b 4096 -m PEM -f jwtRS256.key`
    - `ssh-keygen -e -m PEM -f jwtRS256.key > jwtRS256.key.pub`
- Import the contents of the postman_collection.json file into postman.
    - File > Import > Raw text
    - This will give you the routes and well as test data you can use. Just send the request through on each tab.
    - You will need to create a user and generate a session before you can do anything else.
    - In the Envionment tab, make sure you create one and set it as active as the file uses environment variables

That's it! Explore the code, see what things are doing. Nice thing about TypeScript is that everything has a definition, so if you aren't sure, just hover over it and it should tell you. ctlr + click (cmd + click) will take you to where a function is defined in the code.