/** @jsxImportSource @emotion/react */
import { useAppContext } from "context/state";
import { css } from "@emotion/react";

type PrimaryButtonProps = {
  btnText?: string | number;
  onClick: () => void;
};

const PrimaryButton = ({ btnText = "Pokemon List", onClick }: PrimaryButtonProps) => {
  const { styling } = useAppContext();
  return (
    <button
    data-testid='primary-button'
      css={css`
        border: none;
        width: 100%;
        border-radius: 15px;
        padding: 5px 30px;
        outline: none;
        background-color: ${styling.mainThemeColor};
        border: 3px solid ${styling.mainThemeColor};
        color: white;
        transition: 0.1s;
        cursor: pointer;
        &:hover {
          background-color: white;
          border: 3px solid ${styling.mainThemeColor};
          color: ${styling.mainThemeColor};
        }
      `}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default PrimaryButton;
