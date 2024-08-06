import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Your Firebase project configuration
};

const app = initializeApp(firebaseConfig);
console.log(app); // Add this line here
const auth = getAuth(app);

function MyApp({ Component, pageProps }) {
  const user = useAuth();

  return (
    <FirebaseContext.Provider value={{ register, logIn, user }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FirebaseContext.Provider>
  );
}