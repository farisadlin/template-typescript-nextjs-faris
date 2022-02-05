/** @jsxImportSource @emotion/react */
import { useAppContext } from "context/state";
import { css } from "@emotion/react";

type SecondaryButtonProps = {
  btnText?: string | number;
  onClick: () => void;
  isMainMenu?: boolean;
};

const SecondaryButton = ({ btnText = "Back", onClick, isMainMenu }: SecondaryButtonProps) => {
  const { currWindowsWidth, styling } = useAppContext();
  return (
    <button
    data-testid='secondary-button'
      css={css`
        display: ${!isMainMenu ? "flex" : "none"};
        color: black;
        font-size: ${styling.btnFontSize};
        background-color: ${styling.fourthThemeColor};
        outline: none;
        border: none;
        border-radius: 15px;
        height: 100%;
        text-align: center;
        padding: 15px 20px;
        margin: ${currWindowsWidth <= 600 ? "10px 0" : ""};
        transition: 0.1s;
        cursor: pointer;
        &:hover {
          background-color: ${styling.fifthThemeColor};
            : 
        }
        `}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default SecondaryButton;
