import { useRef, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../../firebase";
import check from "../../check.png";
import styles from "./styles.module.css";

const FileInput = ({ name, label, value, type, handleInputState, ...rest }) => {
  const inputRef = useRef();
  const [progress, setProgress] = useState(0);
  const [progressShow, setProgressShow] = useState(false);

  const handleUpload = () => {
    setProgressShow(true);
    const fileName = new Date().getTime() + value.name;
    const storageRef = ref(storage, `/audio/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, value);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploaded = Math.floor(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(uploaded);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          handleInputState(name, url);
        });
      }
    );
  };

  return (
    <div className={styles.input_box}>
      <input
        type="file"
        ref={inputRef}
        onChange={(e) => handleInputState(name, e.currentTarget.files[0])}
        vlaue={value}
        className={styles.input}
        {...rest}
      />
      {/* <button
        type="button"
        onClick={() => inputRef.current.click()}
        className={styles.button}
      >
        {label}
      </button> */}
      <div className={styles.audio_upload}>
        {type === "audio" && value && (
          <audio
            src={typeof value === "string" ? value : URL.createObjectURL(value)}
            controls
          />
        )}
        {value !== null && !progressShow && typeof value !== "string" && (
          <button onClick={handleUpload} className={styles.upload_button}>
            Upload
          </button>
        )}
        {progressShow && progress < 100 && (
          <div className={styles.progress_container}>
            <p>{progress}%</p>
          </div>
        )}
        {progress === 100 && (
          <div className={styles.progress_container}>
            <img src={check} alt="check circle" className={styles.check_img} />
          </div>
        )}
      </div>
    </div>
  );
};

export default FileInput;
