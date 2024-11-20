import { LockIcon, User } from "lucide-react";
import styles from "../../components/layout/styles/login.module.css";
import { Link } from "react-router-dom";

export default function Login() {

    return (
        <div className={styles.loginContainer}>
            <div className={`${styles.wrapper} w-full max-w-[400px]`}>
                <form>
                    <h1 className={styles.title}>Login</h1>
                    <div className={styles.inputBox}>
                        <input type="text" placeholder="Username" required />
                        <User strokeWidth={1.5} className={styles.icon} />
                    </div>
                    <div className={styles.inputBox}>
                        <input type="password" placeholder="Password" required />
                        <LockIcon strokeWidth={1.5} className={styles.icon} />
                    </div>
                    <div className={styles.rememberForge}>
                        <label>
                            <input type="checkbox" /> Remember Me
                        </label>

                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                    <button type="submit" className={styles.btn}>Login</button>
                    <div className={styles.registerLink}>
                        <p>Don't have an account? <Link to="/register">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}
