# React + Vite




# Cyethack Assignment

Project Description:

I developed a web application utilizing React.js for frontend development, incorporating React Router DOM for routing, Redux for state management, and Material-UI for UI components. The project encompasses several routes and functionalities as specified.

Routes:
1. **/dashboard**: This route serves as the landing page/dashboard of the application.
2. **/list**: Upon navigating to this route, users encounter a data table displaying a list of items with brief descriptions. Each item is associated with an 'item_id'.
3. **/list/details**: This route displays a detailed overview of the item selected by the user on the previous '/list' route. To maintain security and privacy, the 'item_id' is stored in the user's session storage and not visible in the URL.

Functionality:
1. **Item Selection**: When a user clicks on an item in the '/list' route, the corresponding 'item_id' is stored in the session storage. If the user navigates back to the '/list' route and selects another item, a loading effect is displayed while fetching details for the new item. Once the data is fetched, it is shown to the user.
2. **Preservation of State**: If the user navigates back to the '/list' route and selects the same item again, there is no reloading, and no fetch operation occurs. Instead, the previous item details data is preserved in the state and displayed without any reload, ensuring a smooth and efficient user experience.
3. **Session Management**: Simple session management functionalities such as login and logout are implemented using cookies. This ensures that users can securely access and interact with the application, with appropriate authentication and authorization mechanisms in place.

Overall, the project successfully integrates React.js, React Router DOM, Redux, and Material-UI to create a dynamic and responsive web application with efficient routing, state management, and user interface components. Additionally, by implementing session management functionalities, the application ensures secure access and interaction for users, enhancing the overall user experience.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
  
   git clone <repository_url>
   cd <repository_name>
 
   Replace `<repository_url>` with the URL of your Git repository and `<repository_name>` with the name of the repository.


2. Install dependencies:
   
   npm install
  
   This command will install all the necessary dependencies listed in the `package.json` file.


## Usage

Once the installation is complete, you can start the development server using the following command:


npm run dev


This command will start the development server provided by Vite. You can access the application locally in your browser at `http://localhost:3000`.

## Technologies Used

- React
- Vite
- React Router DOM
- Material UI
- Chart.js
- npm Meter package
- Toast
- Cookies

## Contributing

Contributions are welcome! Feel free to fork the repository, make changes, and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
```

You can paste this content into your `README.md` file and modify it accordingly to fit your project's specific details and requirements.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
