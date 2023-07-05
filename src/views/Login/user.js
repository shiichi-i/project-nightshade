import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase-config";


export const checkAuth = () => {
    onAuthStateChanged(auth, user => {
        if (user) {
            localStorage.setItem("storageId", JSON.stringify(user.uid));
          } else {
            localStorage.removeItem("storageId");
          }
    });
}