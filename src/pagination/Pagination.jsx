import { lefttIcon, rightIcon } from "../img";
import { cn } from "@bem-react/classname";

const CnPagination = cn("pagination");

import "./Pagination.scss";

export const Pagination = ({
  currentPage,
  handlePrevClick,
  handleNextClick,
}) => {
  return (
    <div className={CnPagination()}>
      <button
        type="button"
        onClick={handlePrevClick}
        // disabled={disable.left}
      >
        <img src={lefttIcon} alt="left tIcon" />
      </button>
      <div>{currentPage}</div>
      <button
        type="button"
        onClick={handleNextClick}
        // disabled={disable.left}
      >
        <img src={rightIcon} alt="left tIcon" />
      </button>
    </div>
  );
};