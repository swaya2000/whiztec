TODO

In the backend of this project, I created a Todo management system using Django Rest Framework . I defined a Todo model that includes fields for the title, content, status, due date, and a foreign key relation to the User model, allowing each todo to be associated with a specific user. The TodoModelSerializer serializes the Todo model, and the UserRegisterSerializer handles user registration. The TodoModelViewSet manages CRUD operations for todos, with token-based authentication and permission checks to ensure only authenticated users can interact with the todos. Additionally, a UserRegisterView allows new users to register. For the database, I configured PostgreSQL as the backend database for storing todos and user data.
Installation Process:-
1.pip install psycopg2
2.Set up a PostgreSQL database  in settings.py
3.python manage.py makemigrations
  python manage.py migrate
4.pip install django-rest-framework
5.python manage.py runserver

In the frontend of this project, I created a Todo management system using React and integrated it with a Django backend. The main components include the Home page, Add Todo page, Edit Todo page, Todo Details page, and Calendar view. In the Home component, I fetch and display a list of todos with filtering options by status (All, Pending, In Progress, Completed). The Add component allows users to create a new todo, including selecting a due date and status. The Edit component enables users to update todo details, and the Detail component displays the full information of a specific todo with an option to delete it. The CalendarView component visualizes todos in a calendar format. I used React Router for navigation, React-Bootstrap for UI components, and React DatePicker for date selection.
Installation Process:-
1.npm install react-router-dom react-bootstrap react-datepicker axios react-toastify react-calendar
2.Set up routes for different pages (Home, Add, Edit, Detail).
3.Integrate API calls for fetching, adding, updating, and deleting todos using Axios.
4.Style components using React-Bootstrap, and use state management with React hooks (useState, useEffect).
5.Run the React 
   npm start