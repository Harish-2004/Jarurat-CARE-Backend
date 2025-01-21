##
This is the backend of the Jarurat CARE project, a platform for resource management and distribution. 
It provides API endpoints for managing resources, user authentication, and more.


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Harish-2004/Jarurat-CARE-Backend.git
   ```

2. Navigate into the project directory:
   ```bash
   cd Jarurat-CARE-Backend
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file and add your environment variables (like MongoDB URI, JWT secret):
   ```bash
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/resourceDB
   JWT_SECRET=yourSecretKey
   ```

5. Start the application:
   ```bash
   npm start
   ```

Alternatively, if you want to run it in development mode using `nodemon`:
```bash
npm run dev
