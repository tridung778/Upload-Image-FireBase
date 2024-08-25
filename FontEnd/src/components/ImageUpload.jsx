import { useState } from "react";
import { storage } from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const imageName = v4();

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (image) {
      const storageRef = ref(storage, `images/${imageName}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setUrl(url);
            // Gửi URL của ảnh đến backend (Spring Boot)
            fetch("http://localhost:8080/api/images", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name: imageName, url: url }),
            });
          });
        }
      );
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <br />
      <progress value={progress} max="100" />
      <br />
      {url && <img src={url} alt="Uploaded" />}
    </div>
  );
};

export default ImageUpload;
