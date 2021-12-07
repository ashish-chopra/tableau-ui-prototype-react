# About

`tableau-ui-prototype` is shared class project for [CS554K](https://blogs.ubc.ca/cpsc544/home/) in the University of British Columbia for HCI course. This project showcase a concept prototype of improved interface for Tableau server.


# Pre-requisite
In order to develop this project you require following software on your system:
   1. node.js (Runtime for JS environment)
   2. VS Code (IDE for development)

# How to Install
1. Clone the project using the following command into a directory:

    ```
     $> git clone https://github.com/ashish-chopra/tableau-ui-prototype.git
    ```
2. Install the dependencies using following command:
   ```
     $> npm install
   ```

3. Once done, start the server using command:
    ```
    $> npm start
    ```
 It will open the website in a browser, if not already, then access the URL on your browser `http://localhost:4200`.

# Data Schema

| Key             | Type    | Description |
| --- | --- | --- |
| id              | integer | Unique ID for each viz |
| description     | string  | User-provided description of the viz |
| title           | string  | User-provided title of the viz |
| views           | integer | The number of times someone has seen this viz |
| tags            | array   | Tags that correspond to this viz |
| created         | string  | The date the viz was created |
| thumb           | string  | Path to a thumbnail-size screenshot of the viz |
| img             | string  | Path to the full-size screenshot of the viz |
| isLive          | boolean | A boolean indicating whether the viz has a live data source |
| isLessThanSeven | boolean | A boolean indicated whether the viz has been seen in the last seven days | 
| author | string | The first and last name of the author of the blog |

# Contributors
1. [Ashish Chopra](https://github.com/ashish-chopra)
2. Gustavo 
3. Limor Tamim
