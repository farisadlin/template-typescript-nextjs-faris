/** @jsxImportSource @emotion/react */
import { useAppContext } from "context/state";
import { css } from "@emotion/react";

type FourthButtonProps = {
  btnText?: string | number;
  onClick?: () => void;
};

const FourthButton = ({ btnText = "Catch the Pokemon!", onClick }: FourthButtonProps) => {
  const { styling } = useAppContext();
  return (
    <div
      css={css`
        margin-top: 10px;
      `}
    >
      <button
        data-testid='fourth-button'
        css={css`
            display: flex;
            align-items: center;
            background-color: ${styling.thirdThemeColor};;
            color: white;
            font-size: ${styling.btnFontSize};
            border: none;
            outline: none;
            padding: 10px 20px;
            border-radius: 20px;
            height: 100%;
            text-align: center;
            transition: 0.1s;
            cursor: pointer;
            &:hover {
                background-color: ${styling.hoverThirdThemeColor};;
                color: white;
                : 
            }
          `}
        onClick={onClick}
      >
        {btnText}
      </button>
    </div>
  );
};

export default FourthButton;
