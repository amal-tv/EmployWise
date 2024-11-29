
# **EmployWise - User Management System**
 **Vercel Link**: [https://employ-wise-three.vercel.app/](https://employ-wise-three.vercel.app/)
## **Overview**

EmployWise is a React-based application that integrates with the Reqres API to handle basic user management functions, including authentication, listing users, and performing CRUD operations on users.

---

## **Installation and Setup**

### **Prerequisites**

Before getting started, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (v7 or higher)

### **Steps to Run Locally**

1. **Clone the Repository:**
   First, clone the project repository to your local machine:
   ```bash
   git clone https://github.com/amal-tv/EmployWise.git
   ```

2. **Navigate to the Project Directory:**
   After cloning the repository, navigate to the project folder:
   ```bash
   cd EmployWise
   ```

3. **Install Dependencies:**
   Run the following command to install all the necessary dependencies:
   ```bash
   npm install
   ```

4. **Start the Development Server:**
   To run the app locally, use:
   ```bash
   npm start
   or npm run dev(if it is vite)
   ```

   This will start the development server and open the app in your default web browser at [http://localhost:3000] or (http://localhost:5173).

---



---

## **Assumptions & Considerations**

- **API Assumptions**: The project uses the [Reqres API](https://reqres.in/) for authentication and user data. Assumed responses from the API are reliable and consistent.
- **Authentication**: The login credentials are hardcoded, and the login token is stored in local storage. The token is used for authentication and user navigation.
- **Error Handling**: The app gracefully handles API errors, displaying appropriate error messages to the user.
- **Responsive Design**: The user interface is designed to be responsive and should work on both desktop and mobile devices.
- **Form Validation**: Basic form validation is implemented for login and user editing forms using react-hook-forma with zod.

---

## **Considerations**

- **State Management**: React Context API is used for state management. Redux is optional for future scalability.
- **Routing**: React Router is used for page navigation between the login screen and user list.

---

## **Deployment**

The project is hosted on Vercel. You can view the deployed project here:

- **Vercel Link**: [https://employ-wise-three.vercel.app/](https://employ-wise-three.vercel.app/)

---

## **GitHub Repository**

You can find the source code in the GitHub repository:

- **GitHub Link**: [https://github.com/amal-tv/EmployWise](https://github.com/amal-tv/EmployWise)

---

## **Bonus Features**

- **Client-Side Search**: A search functionality allows users to filter through the list of users.
- **React Router**: Navigation between the login screen, user list, and edit user page is handled with React Router.

---

This README provides the steps to install, run, and deploy the project, as well as additional information on the features, assumptions, deployment, and considerations made for the project.
