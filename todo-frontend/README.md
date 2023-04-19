# Todo App - Frontend

Todo App - Frontend is built in following technologies:-

- React Native Expo App
- @tanstack/react-query
- react-hook-form
- NativeBase


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


    ## Executing the app

    In order to start the server to work, you can execute the command which is mentioned below :-

    * Run the app(For development) by

        ```
        npm start
        ```

## Makefile Commands

1) Display linting for all files

    ```sh
    make all
    ```

2) Autofix fixable errors for linting for all files

    ```sh
    make all_fix
    ```

3) Display linting for staged files

    ```sh
    make lint
    ```

4) Autofix fixable errors for linting in staged files

    ```sh
    make lint_fix
    ```