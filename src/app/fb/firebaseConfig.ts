
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
    apiKey: "AIzaSyCe5c2qcubZpmNVppKhDDb2HxrdDQHxd4o",
    authDomain: "deloitte-ng.firebaseapp.com",
    projectId: "deloitte-ng",
    storageBucket: "deloitte-ng.appspot.com",
    messagingSenderId: "21503038393",
    appId: "1:21503038393:web:4635f064cdf8edcf9fdc68",
    measurementId: "G-G8GWRBF6KH"
};
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);