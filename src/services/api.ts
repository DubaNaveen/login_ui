interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  userId: string;
  message: string;
  error: boolean;
}

interface AuthStatus {
  isAuthenticated: boolean;
  user: any;
}

const API_BASE_URL = 'http://localhost:3004/api/v1';

export const loginUser = async (credentials: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Store userId in localStorage for authentication
    if (data.userId) {
      localStorage.setItem('userId', data.userId);
    }
    
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An unexpected error occurred during login');
  }
};

export const checkAuthStatus = (): AuthStatus => {
  const loginStatus = localStorage.getItem('loginStatus');
  
  if (loginStatus === 'true') {
    return {
      isAuthenticated: true,
      user: {
        id: localStorage.getItem('userId') || '',
        email: '',
        name: '',
        role: 'user'
      }
    };
  }
  
  return {
    isAuthenticated: false,
    user: null
  };
};

export const logoutUser = async (): Promise<void> => {
  // Clear local storage
  localStorage.removeItem('loginStatus');
  localStorage.removeItem('userId');
};
