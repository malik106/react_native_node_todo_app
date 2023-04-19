# Todo App - Infra

Todo App - Backend is built in following technologies:-

- Node.js
- Express.js
- MYSQL
- Prisma

It consists following layers:-

- routes
- validators
- controllers
- services
- models


## Installation
- Pre-requisites
    > Node.js v16.13.0+ to run.
    
    Clone the project by copying below mentioned command into your directory :-

    ```sh
    git clone <URL>
    ```

    Change directory to ems by typing below mentioned command :-

    ```sh
    cd <Project-Name>
    ```

    Now run below mentioned command to install neccessary dependencies into your project :-

    ```sh
    npm install
    ```

    ## Configuring the Environment
    In order to properly run the system, you have to first configure `.env` file as per the guidelines given in `example.env` or as per your project requirement.

     ## Important
    Install nodemon as a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development. Install it using below command :-

    ```sh
    npm install -g nodemon
    ```

    ## Executing the server

    In order to start the server to work, you can execute the command which is mentioned below :-

    * Run the app(For development) by

        ```
        npm run dev
        ```

    * Run the app by(For production)

        ```
        npm start
        ```

    This would execute the code from ems/bin/www directory

