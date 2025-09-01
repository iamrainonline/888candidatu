FOR BACKEND
npm install   - for installing the dependencies

npx jest     - for running tests

npm run dev     - for starting the server



FOR FRONTEND

npm install  - for installing node modules and dependencies

npm run dev  - to start the project

npm test   - to run the tests



run your application to  http://localhost:5173/home




Challenges: Handling asynchronous updates with useEffect caused React warnings (act(...)) during testing. I resolved this by wrapping state updates in waitFor and async test utilities.

Next Steps: I would implement more comprehensive tests, including category filtering, search functionality, and error handling. I would also improve test coverage for edge cases, such as empty responses or network errors

