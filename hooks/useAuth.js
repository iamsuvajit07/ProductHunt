import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  // Your Firebase project configuration
};

const app = initializeApp(firebaseConfig);

const useAuth = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(app); // Pass the initialized app to getAuth()
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticatedUser(user);
      } else {
        setAuthenticatedUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return authenticatedUser;
};