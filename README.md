# College Placement Management System

A full-stack web application designed to streamline the placement process for colleges, handling everything from student applications and interviews to company coordination and placement drives. Built using the MERN stack, the system integrates video interview functionality and supports tracking recruitment status, managing academic records, and maintaining a company database.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Student Management**: Students can register, upload resumes, and track their application status.
- **Company Coordination**: Manage a database of companies and communicate interview schedules with them.
- **Placement Drives**: Organize and manage campus placement drives, allowing multiple companies to participate.
- **Recruitment Status Tracking**: Students and administrators can track the recruitment status and company feedback.
- **Academic Records Integration**: Sync student academic data for easier recruitment decisions.
- **Admin Dashboard**: Allows college administrators to monitor placement statistics, upcoming interviews, and student progress.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js
- **Database**: MongoDB
- **Deployment**:
  - Frontend: Vercel
  - Backend: Render

## Setup

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Netlify CLI](https://docs.netlify.com/cli/get-started/) (optional, for local frontend testing)
- [Render](https://render.com/) account for backend deployment

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/PavithraJothibass/College-Placement-Management-.git
    cd college-placement-management
    ```

2. Install dependencies for both frontend and backend:
    ```bash
    # Backend
    cd backend
    npm install

    # Frontend
    cd ../frontend
    npm install
    ```

3. Set up environment variables:
   - Create a `.env` file in the backend directory with the following:
     ```
     MONGO_URI=your_mongodb_connection_string
     ZOOM_API_KEY=your_zoom_api_key
     ZOOM_API_SECRET=your_zoom_api_secret
     ```

4. Start the development server:
    ```bash
    # Backend
    cd backend
    npm run dev

    # Frontend
    cd ../frontend
    npm start
    ```

## Usage

- Register as a student, company representative, or administrator.
- Students can upload their resumes and apply for placement drives.
- Companies can schedule interviews and interact with student profiles.
- Administrators can monitor student progress and manage placements.

## API Documentation
Full API documentation can be found [here](./API_DOCUMENTATION.md). *(You can create this separately)*

## Deployment
- **Frontend**: Frontend: Deployed on Vercel. Access it here.
- **Backend**: Deployed on Render. You can access it [here](#).

To deploy your own version:
- **Frontend: Follow the Vercel deployment guide to deploy the frontend.
- **Backend**: Follow the [Render deployment guide](https://render.com/docs/deploy-node-express-app).

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Contact Me

If you have any questions, suggestions, or issues, feel free to reach out!

- **Email**: [pavithrajothi2002@gmail.com](mailto:pavithrajothi2002@gmail.com)
- **LinkedIn**: [https://www.linkedin.com/in/pavithraj21/](https://www.linkedin.com/in/pavithraj21/)
- **GitHub**: https://github.com/PavithraJothibass](https://github.com/PavithraJothibass)

I’m always happy to collaborate or assist with any queries you may have regarding the project.

