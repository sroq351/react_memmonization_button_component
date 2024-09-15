import { JsxElement } from "typescript";
import styles from "./Button.module.css";
interface Props {
  label: string;
  onButtonClick: () => void;
}

export const Button = (props: Props): JSX.Element => {
  return (
    <div>
      <button onClick={props.onButtonClick} className={styles.button}>
        {props.label}
      </button>
    </div>
  );
};
