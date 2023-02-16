import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
        apiKey: "AIzaSyB5KyFh3ROGt3kVclMGLUd3bPux_KiQBIY",
        authDomain: "medinclude-8a7fa.firebaseapp.com",
        projectId: "medinclude-8a7fa",
        storageBucket: "medinclude-8a7fa.appspot.com",
        messagingSenderId: "883749832536",
        appId: "1:883749832536:web:29bd4e54442391cf5d472d",
        measurementId: "G-KGEK0XVWX0"
      };
      const app = initializeApp(firebaseConfig);
      export const auth = getAuth(app);
      export default app;