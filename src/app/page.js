import Navbar from "@/components/sections/navbar/Navbar";
import styles from "./page.module.scss";
import DashboardLayout from "@/components/dashboardLayout/DashboardLayout";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navbar />
      </main>
    </div>
  );
}
