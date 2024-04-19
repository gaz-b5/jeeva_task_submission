import styles from "./styles.module.css";

const Records = ({ record }) => {
  // console.log(record);
  return (
    <div className={styles.song_container}>
      <div className={styles.song_info}>
        <p className={styles.song_name}>{record.doc_name}</p>
        <p className={styles.song_artist}>{record.pat_name}</p>
        <p className={styles.song_artist}>{record.age}</p>
        <p className={styles.song_artist}>{record.date}</p>
      </div>
      <audio className={styles.audio} src={record.audio} controls />
    </div>
  );
};

export default Records;
