***Currently on phase one***

Application Features and Uses

 Functional Requirements

1. User Management:
   - Users can create an account.
   - Users can log in and log out.
   - Users can update their profile information.
   - Users can reset their password.

2. Card Management:
   - Users can upload a CSV file containing card information.
   - Users can view their uploaded cards in a list.
   - Users can edit and delete their cards.
   - Users can apply tags to their cards.
   - Users can filter their cards based on tags and other criteria.

3. Search Functionality:
   - Users can search for other users' public cards.
   - Users can view details of public cards from other users.

4. Messaging System:
   - Users can send messages to other users.
   - Users can receive messages from other users.
   - Users can view message history.
   - Real-time notifications for new messages.
   - Users can block other users.
   - Users can report other users. 

5. File Storage:
   - Users can upload images associated with their cards.
   - Users can download their uploaded CSV files.

6. Authentication and Authorization:
   - Users must be authenticated to access their account and card management features.
   - JWT-based session management.

 Nonfunctional Requirements

1. Performance:
   - The application should load within 3 seconds for an average user.
   - Search and filter operations should return results within 2 seconds.

2. Scalability:
   - The application should be able to handle up to 100 concurrent users.
   - The backend should scale to accommodate increasing data storage and processing requirements.

3. Security:
   - User passwords must be hashed and stored securely.
   - All sensitive data should be transmitted over HTTPS.
   - Implement input validation to prevent SQL injection and other attacks.

4. Usability:
   - The user interface should be intuitive and easy to navigate.
   - The application should be responsive and work well on desktop and mobile devices.
   - Provide clear error messages and guidance for user actions.

5. Reliability:
   - The application should have an uptime of 99.9%.
   - Implement automatic backups for the database.
   - Ensure that file uploads and downloads are reliable and robust.

6. Maintainability:
   - Code should be modular and follow best practices for readability and maintainability.
   - Implement comprehensive unit and integration tests.
   - Use version control (e.g., Git) for source code management.
   - Code should be DRY. 

7. Compliance:
   - Ensure compliance with relevant data protection regulations (e.g., GDPR, CCPA).
   - Implement user consent mechanisms for data collection and usage.

8. Documentation:
   - Provide clear documentation for the API endpoints.
   - Create user guides and FAQs for end-users.
   - Maintain up-to-date technical documentation for developers.


Dev Plan

 Phase 1: Frontend Development (React)

Project Setup and Initial Components

1. Project Setup:
   - Set up a new React project using Create React App.
   - Install necessary libraries: Redux, React Router, Axios (for API requests).

2. Folder Structure:
   - Organize project with a clear folder structure for components, Redux actions and reducers, and utilities.

3. Initial Components:
   - Create basic components: `Account`, `CardUpload`, `CardList`, `CardSearch`, `Message`.
   - Set up a basic `App` component and use React Router to navigate between different components.

4. Redux Setup:
   - Configure Redux with a store and basic reducers for user and card state management.
   - Create actions and reducers for handling authentication and basic card actions.

Authentication and Account Management

1. Authentication:
   - Implement user registration and login forms.
   - Set up Redux actions and reducers to handle authentication state.
   - Use JWT for managing user sessions (store JWT in localStorage).

2. Account Management:
   - Create an `Account` component for managing user profile information.
   - Implement forms for updating user details.

Card Management

1. Card Upload:
   - Create a `CardUpload` component for uploading CSV files.
   - Parse the CSV file and display card details before uploading.
   - Implement Redux actions and reducers for handling card uploads.

2. Card List and Details:
   - Create a `CardList` component to display the user’s cards.
   - Implement card detail view and edit functionality.

3. Tagging and Filtering:
   - Implement tagging functionality for cards.
   - Create a filter component to filter cards based on tags and other criteria.

Search and Messaging

1. Card Search:
   - Implement a `CardSearch` component to search for other users’ public cards.
   - Display search results with relevant card details.

2. Messaging:
   - Create a `Message` component for users to send and receive messages.
   - Implement real-time messaging using Socket.io.

UI/UX Enhancements

1. Responsive Design:
   - Ensure the application is responsive and works well on different devices.
   - Use CSS frameworks or libraries like Material-UI or Bootstrap for styling.

2. User Experience Improvements:
   - Add loading indicators, error messages, and confirmation dialogs.
   - Implement user-friendly features like infinite scroll for card lists.

 Phase 2: Backend Development (Node.js, Express)

Backend Setup and User Management

1. Project Setup:
   - Set up a new Node.js project and install necessary libraries: Express, JWT, Mongoose/Sequelize, etc.

2. Database Configuration:
   - Set up PostgreSQL database on AWS RDS.
   - Define database schemas for users, cards, and messages.

3. User Management:
   - Implement user registration, login, and authentication endpoints.
   - Use JWT for managing user sessions.

Card Management

1. Card Upload:
   - Implement endpoints for uploading and parsing CSV files.
   - Store card details in the PostgreSQL database.

2. Card CRUD Operations:
   - Implement endpoints for creating, reading, updating, and deleting cards.
   - Handle card tagging and filtering in the backend.

Search and Messaging

1. Search Functionality:
   - Implement search endpoints to query public cards based on criteria.
   - Optimize search queries for performance.

2. Messaging System:
   - Implement endpoints for sending and receiving messages.
   - Use Socket.io for real-time messaging.

File Storage and Integration

1. File Storage:
   - Set up AWS S3 for storing CSV files and card images.
   - Implement backend logic to handle file uploads and retrieval.

2. Frontend-Backend Integration:
   - Integrate frontend components with backend endpoints.
   - Ensure seamless communication between frontend and backend.

Testing and Deployment

1. Testing:
   - Write unit and integration tests for both frontend and backend.
   - Ensure full test coverage and fix any issues.

2. Deployment:
   - Deploy the backend on a cloud platform (AWS, Heroku).
   - Deploy the frontend on a static hosting service (Netlify, Vercel).
   - Set up CI/CD pipelines for automated deployment.

Final Enhancements and Launch

1. Final Enhancements:
   - Collect user feedback and make necessary improvements.
   - Optimize performance and security.

2. Launch:
   - Perform final testing and quality assurance.
   - Launch the application and monitor for any issues.
