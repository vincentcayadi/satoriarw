import Link from "next/link";
import styles from "../styles/FourOhFour.module.css";
export default function FourOhFour() {
  return (
    <>
      <div className="grid h-screen place-items-center">
        <div className="text-center">
          <h1 className={styles.FourOhFour}>404</h1>
          <Link href="/">
            <a className="text-white">Go back</a>
          </Link>
        </div>
      </div>
    </>
  );
}
