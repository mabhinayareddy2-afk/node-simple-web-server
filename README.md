Simple Node.js Web Server

This project is a basic Node.js web server built using the http module.

 Routes
- /home - <img width="1058" height="564" alt="image" src="https://github.com/user-attachments/assets/58310c8c-c001-4967-b3e3-36523c289035" />
- /about - <img width="557" height="302" alt="image" src="https://github.com/user-attachments/assets/849a9006-7210-45be-b3f3-67ad7f9c36b0" />
- /contact - <img width="823" height="515" alt="image" src="https://github.com/user-attachments/assets/6841b0e1-2798-49c7-9dd6-37560c24b7e3" />
/anything - <img width="852" height="360" alt="image" src="https://github.com/user-attachments/assets/804308b5-3d52-48ce-a231-0c4e5f31301e" />


/anything you get 404 page NOT FOUND

#SERVER CODE EXPLANATION:

This code creates a basic HTTP server using Node.js without using Express. It listens for incoming requests and checks the URL requested by the user. Based on the URL, it serves different HTML pages like home, about, and contact by reading them from the file system using the fs module. It also serves a CSS file with the correct content type so the pages are properly styled. If the requested route does not match any defined path, the server returns a custom 404 error page. The server runs on port 3000 and demonstrates basic routing, static file handling, and error handling using core Node.js modules.



 Run
node server.js


