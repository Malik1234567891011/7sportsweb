import styles from "./ProgramCard.module.css";

type ProgramCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function ProgramCard({ icon, title, description }: ProgramCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}