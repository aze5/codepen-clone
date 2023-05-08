# CodePen Clone
This is a simple web application that emulates the functionality of CodePen, allowing users to write HTML, CSS, and JavaScript code and see the output in real time.

## Getting started
To get started, you can clone the repository and run the following command in the terminal:

```bash
npm install
```

This will install all the necessary dependencies for the application.

Once the installation is complete, you can start the application by running the following command:

```bash
npm start
```
This will start the development server and launch the application in your default web browser.

## Usage
The application consists of three code editors (HTML, CSS, and JavaScript) and an output pane where the resulting HTML document is displayed. You can enter code in each of the editors and see the output update in real time.

## Saving Code
The application automatically saves your code in the browser's local storage as you type, so you can come back to it later.

## Expanding and Collapsing the Editors
You can expand or collapse the code editors by clicking the expand/collapse button at the top of each editor.

## Technologies Used
This application was built using React and several third-party libraries, including:

- @uiw/react-codemirror for the code editor component
- @codemirror/lang-javascript, @codemirror/lang-html, and @codemirror/lang-css for syntax highlighting in the code editors
- @uiw/codemirror-theme-sublime for the code editor theme
- @fortawesome/react-fontawesome and @fortawesome/free-solid-svg-icons for the expand/collapse button icons

## Credits
This project was created by Ayoub El-hamdoon. Thank you to Kyle from WebDevSimplified for his guidance in creating this project.