1) Initially create a .env file at the root level of the application if the file is not present.
2) Enter the username, password, subdomain inorder to access the tickets throught the endpoints. Below is the example format to put the data in the .env file.
username = "xxx@gmail.com"
password = "xxxxx"
subdomain = zccsubdomain

Disclaimer: Don't use double quotes while giving the value of subdomain in the .env file.

3) Next run "npm run setup" command at root level of the project to install the dependencies.

4) Next run "npm run dev" command at root level of the project to run the application

5) Initially the application goes up and then the tickets are fetched from the backend based on the given credentials and subdomain. 

6)Pagination is added and the maximum number of tickets displayed per page are 25. By clicking on view ticket it navigates to different page to show the specific ticket details.

7)To do the unit testing run "npm test" command at the root level of project which runs the unit test cases.

8) If at all there is error with the api or any authentication respective data is displayed to the agent.

9) The frontend is using ReactJS where once the application is up it makes calls through the service layer to the backend. The backend consumes the request from frontend and then calls the appropriate zendesk api and returns the response back to the frontend. The frontend paginates the given data to a limit of 25. Each ticket has a action called view ticket. When clicked on view ticket it displays the details of the particular ticket.

