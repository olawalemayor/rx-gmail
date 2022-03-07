import React, { Fragment } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PageContext from "../../context/pageContext";
import toDecimal from "../../common/numberPipe";

export default function Paginate() {
  return (
    <PageContext.Consumer>
      {({ pageIndex, pageLimit, totalItems }) => (
        <Fragment>
          <button className="hover-btn">
            {pageIndex}-{pageLimit} of {toDecimal(totalItems)}
          </button>
          <button
            className="hover-btn circle paging-icon"
            disabled={pageIndex === 1}
          >
            <ArrowBackIosIcon />
          </button>
          <button
            className="hover-btn circle paging-icon"
            disabled={pageLimit === totalItems}
          >
            <ArrowForwardIosIcon />
          </button>
        </Fragment>
      )}
    </PageContext.Consumer>
  );
}
