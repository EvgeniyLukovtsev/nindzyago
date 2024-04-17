import { useState } from "react";
import style from "./ModalImage.module.css";

interface ModalImageProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
  imagesUrl: any;
}

const ModalImage: React.FC<ModalImageProps> = ({
  visible,
  setVisible,
  imagesUrl,
}) => {
  const [image, setImage] = useState(0);

  const changeImagePlus = () => {
    setImage(image + 1);
  };

  const changeImageMinus = () => {
    setImage(image - 1);
  };

  if (!visible) {
    return null;
  }
  return (
    <div className={style.container}>
      <p onClick={() => setVisible(false)} className={style.close}>
        ×
      </p>
      <img src={imagesUrl[image]} className={style.img} alt="sneaker" />
      <div className={style.block}>
        <button
          onClick={changeImageMinus}
          disabled={image > 0 ? false : true}
          className={style.left}
        >
          ＜
        </button>
        <button
          onClick={changeImagePlus}
          disabled={image < imagesUrl.length - 1 ? false : true}
          className={style.right}
        >
          ＞
        </button>
      </div>
    </div>
  );
};

export default ModalImage;
