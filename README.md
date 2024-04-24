## React Task Manager

This is a React application designed to manage your tasks. You can add new tasks, edit existing ones, mark them as completed, and even delete them!
Live Project Link - https://task-manager-master.netlify.app/
### Installation

1. **Clone the project** from GitHub:

   ```bash
   git clone https://github.com/Aiyaz17/task-manager-app.git
   ```

2. **Install dependencies:**

   ```bash
   cd react-task-manager
   npm install
   ```

### Running the application

1. **Start the development server:**

   ```bash
   npm start
   ```

2. **Open the application in your browser:** Visit http://localhost:3000 to see your task manager in action!

### Technologies Used

* **React:** Used to build the user interface and manage the application's state.
* **Context API:** Provides centralized state management for the task list and filter.
* **Tailwind CSS:** Used to style the application's components.

### Considerations

This section delves into the key decisions made during the development of this React Task Manager application and explores potential improvements with more time:

**Principal Decisions:**

* **Technology Stack:**
    * **React:** Selected for its component-based architecture and ability to manage dynamic UI elements.
    * **Context API:** Chosen for centralized state management of the task list and filter, simplifying data access across components.
    * **Tailwind CSS:** Adopted for its utility-first approach to styling, offering rapid development and customization.
* **UI Design:**
    * **Single-page design:** Implemented for a seamless user experience without page reloads.
    * **Modal popup for adding tasks:** Chosen to avoid overwhelming the main view and enhance user interaction for adding new tasks.
    * **Basic task information display:** Focused on title and completion status for a clear and concise overview.

**Further Enhancements with More Time:**

* **Data Persistence:**
    * Implement Local Storage or a database to preserve task data beyond browser sessions.
    * This would allow users to revisit their tasks even after refreshing the application or closing the browser.
* **Advanced Features:**
    * User authentication and authorization: Allow users to create accounts and manage private tasks.
    * Search Feature: Allow users to search for specific tasks within the list.
    * Drag-and-drop task reordering: Facilitate task organization and prioritization.
    * Due date management: Introduce deadlines for tasks with visual cues for upcoming due dates.
    * Advanced filtering: Implement filtering options based on priority, category, or completion status for efficient task management.
* **Production Readiness:**
    * Error handling: Integrate mechanisms to gracefully handle potential errors and provide informative feedback to users.
    * User feedback mechanisms: Implement functionalities like loading states and confirmation messages to improve user experience.
    * Code optimization: Optimize code for performance and maintainability in a production environment.
* **Testing:**
    * Unit testing: Write unit tests to ensure individual components function as expected, improving code quality and facilitating future maintenance.

These considerations outline the key decisions made and potential areas for improvement. By implementing these enhancements, the application can evolve into a more robust and feature-rich task management solution.
