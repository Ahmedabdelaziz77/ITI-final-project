# ITI Graduation Project Web Application

## Overview
This project is a web application designed as a capstone for the ITI graduation. It features a fake authentication system using Context API and local storage to manage user sessions. The application is tailored to be responsive, catering to both desktop and mobile users, and includes distinct functionalities for user and admin roles.

## Features

- **Fake Authentication**: Utilizes Context API for state management and local storage for session persistence.
- **Responsive Design**: Optimized for a seamless experience across various devices.
- **User and Admin Login/Signup**: Separate access and functionalities for users and admins.
- **CRUD Operations on Cart**: Implemented via Redux for efficient state management across the application. Users can perform add, delete, and update operations on the cart.
- **Product Display**: Features an image slider for individual product view and a card slider for adding products to the cart.
- **Admin Dashboard**:
  - **Product Management**: Admins can add, delete, update, and view products using custom hooks tailored for each operation.
  - **User Management**: Admins have the ability to manage user accounts, including deletion of users.
  
## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling and responsive design.
- **Styled Components**: Used for component-level custom styles.
- **Redux**: For global state management, particularly for cart operations.

- ## [Live Demo](https://drive.google.com/file/d/1wzNlLTAUUQ0QaiLDGiNLhmB-oFgIXbif/view?usp=sharing)


## Getting Started

To get started with this project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <project-name>
npm install



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
