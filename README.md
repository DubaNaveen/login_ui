# React Login Application

A modern React.js application with a clean login interface, form validation, and mock backend integration.

## Features

- **Clean UI Design**: Modern, responsive design using only black and grey colors
- **Form Validation**: Real-time validation using react-hook-form and yup
- **Mock API Integration**: Simulated backend with mock user data
- **Authentication Flow**: Complete login/logout functionality with token management
- **Dashboard**: User dashboard showing profile information
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository or navigate to the project directory:
```bash
cd /path/to/your/project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

### Login Credentials

The application includes two mock users for testing:

1. **Regular User:**
   - Email: `user@example.com`
   - Password: `password123`

2. **Admin User:**
   - Email: `admin@example.com`
   - Password: `admin123`

### Features

- **Login Form**: Enter email and password with real-time validation
- **Form Validation**: 
  - Email must be a valid email format
  - Password must be at least 6 characters
  - Both fields are required
- **Error Handling**: Displays user-friendly error messages
- **Loading States**: Shows loading indicators during API calls
- **Dashboard**: After successful login, users see their profile information
- **Logout**: Secure logout functionality that clears authentication data

## Project Structure

```
src/
├── components/
│   ├── Login.tsx          # Login form component
│   ├── Login.css          # Login component styles
│   ├── Dashboard.tsx      # Dashboard component
│   └── Dashboard.css      # Dashboard component styles
├── services/
│   └── api.ts            # Mock API service and authentication logic
├── App.tsx               # Main application component
├── App.css               # Application styles
└── index.tsx             # Application entry point
```

## Technologies Used

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe JavaScript
- **React Hook Form**: Form handling and validation
- **Yup**: Schema validation
- **Axios**: HTTP client for API calls
- **CSS3**: Custom styling with responsive design

## Customization

### Adding Real Backend Integration

To replace the mock API with a real backend:

1. Update the `api.ts` file in `src/services/`
2. Replace mock functions with real API calls
3. Update the base URL in the axios configuration
4. Implement proper error handling for your backend

### Styling

The application uses a clean black and grey color scheme. To modify colors:

- Update CSS variables in component stylesheets
- Maintain accessibility standards
- Test on different devices and screen sizes

## Development

### Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (irreversible)

### Code Quality

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Responsive design principles

## Security Considerations

- Passwords are not stored in plain text in the mock implementation
- Authentication tokens are managed securely
- Form validation prevents malicious input
- HTTPS should be used in production

## Deployment

1. Build the application:
```bash
npm run build
```

2. Deploy the `build` folder to your hosting service
3. Configure environment variables for production API endpoints

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.
# ui
