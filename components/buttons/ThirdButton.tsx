/** @jsxImportSource @emotion/react */
import { useAppContext } from "context/state";
import { css } from "@emotion/react";
import { myPokemonData } from "utils/myPokemonData";

type ThirdButtonProps = {
  btnText?: string | number;
  onClick?: () => void;
};

const ThirdButton = ({ btnText = "My Pokemon!", onClick }: ThirdButtonProps) => {
  const { styling, currWindowsWidth } = useAppContext();
  return (
    <div
      css={css`
        margin-left: 10px;
        margin-right: ${currWindowsWidth <= 508 ? "10px" : "20px"};
      `}
    >
      <button
        data-testid='third-button'
        css={css`
            display: flex;
            align-items: center;
            color: ${styling.thirdThemeColor};
            font-size: ${styling.btnFontSize};
            background-color: white;
            outline: none;
            border: 3px solid ${styling.secondaryThemeColor};
            border-radius: 20px;
            height: 100%;
            text-align: center;
            padding: 0 20px;
            transition: 0.1s;
            cursor: pointer;
            &:hover {
                background-color: ${styling.thirdThemeColor};
                color: white;
              border: 3px solid white;
                : 
            }
          `}
        onClick={onClick}
      >
        {btnText}
        <p
          css={css`
            color: ${styling.secondaryThemeColor};
            font-size: 2rem;
            font-style: italic;
            font-weight: bold;
            margin: 0 0 0 10px;
          `}
        >
          {myPokemonData()?.length ?? 0}
        </p>
      </button>
    </div>
  );
};

export default ThirdButton;
