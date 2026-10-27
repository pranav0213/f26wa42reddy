# Web Apps Assignment 9

**Student:** Pranav Reddy  
**Project:** f26wa42reddy  
**Course:** Web Application Programming  
**Instructor:** Dr. Hoot

## Description

This project is an Express.js web application created using Express Generator and the Pug template engine for Web Apps Assignment 9.

The application demonstrates server-side routing, dynamic responses, arithmetic operations, query parameter handling, GitHub version control, and cloud deployment using Render.

## Technologies Used

- Node.js
- Express.js
- Pug Template Engine
- JavaScript
- HTML and CSS
- Git and GitHub
- Render
- Visual Studio Code

## GitHub Repository

https://github.com/pranav0213/f26wa42reddy

## Live Render Server

https://f26wa42reddy.onrender.com

## Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/pranav0213/f26wa42reddy.git
cd f26wa42reddy
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Application

```bash
npm start
```

### 4. Open in Browser

http://localhost:3000

The application runs locally on port 3000 by default.

## Application Endpoints

### 1. Home Page — `/`

Displays the default Express welcome page.

**Live URL:**  
https://f26wa42reddy.onrender.com/

### 2. My Data — `/mydata`

Displays personal information using a Pug template.

**Information displayed:**
- Full Name: Pranav Reddy
- Interesting Fact: I enjoy playing cricket, going to the gym, and developing software applications.

**Live URL:**  
https://f26wa42reddy.onrender.com/mydata

### 3. Users — `/users`

Demonstrates arithmetic operations using two variables.

**Initial values:**
- vOne = 123
- vTwo = 60

**Functionality:**
- Compares both variables.
- Subtracts the smaller value from the larger value.
- Replaces the larger value with the difference.
- Returns the updated values as a text response.
- Updates the values on subsequent requests.

**Example response:**

```text
Values are: 63 and 60
```

**Live URL:**  
https://f26wa42reddy.onrender.com/users

### 4. Bonus Computation — `/computation`

Implements a mathematical computation using JavaScript's Math object.

**Functionality:**
- Generates a random number.
- Checks whether the user provided an `x` query parameter.
- Uses the supplied value if available.
- Applies the `Math.round()` function.
- Returns the computation result.

**Example request:**

```text
/computation?x=12.7
```

**Example response:**

```text
Math.round applied to 12.7 is 13
```

**Live URLs:**

https://f26wa42reddy.onrender.com/computation

https://f26wa42reddy.onrender.com/computation?x=12.7

## Project Structure

```text
f26wa42reddy/
│
├── bin/
│   └── www
│
├── public/
│   ├── images/
│   ├── javascripts/
│   └── stylesheets/
│
├── routes/
│   ├── index.js
│   ├── users.js
│   ├── mydata.js
│   └── computation.js
│
├── views/
│   ├── index.pug
│   ├── layout.pug
│   ├── error.pug
│   └── mydata.pug
│
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Render Deployment

The application is deployed using Render Web Services and connected to the GitHub repository.

**Deployment Configuration:**

- Service Name: f26wa42reddy
- Runtime: Node.js
- Branch: main
- Build Command: `npm install`
- Start Command: `npm start`

Changes pushed to the GitHub main branch can be automatically deployed to Render when automatic deployment is enabled.

## Assignment Requirements Completed

- Part 1: Created Express application using Express Generator.
- Part 2: Initialized Git repository and connected GitHub.
- Part 3: Deployed Express application on Render.
- Part 4: Created `/mydata` endpoint using Pug.
- Part 5: Modified `/users` endpoint to perform subtraction operations.
- Bonus: Created `/computation` endpoint using `Math.round()` and query parameters.

## Author

**Pranav Reddy**

Web Apps Assignment 9 — Fall 2026

Northwest Missouri State University
