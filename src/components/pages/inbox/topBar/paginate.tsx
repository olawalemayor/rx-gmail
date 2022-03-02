import React, { Fragment, useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PageContext from "../../../../context/pageContext";

export default function Paginate() {
  function toDecimal(x: number) {
    const numberString = x.toString();
    let firstPart, secondPart;
    const count = numberString.length - 3;

    if (numberString.length > 3) {
      firstPart = numberString.slice(0, count);
      secondPart = numberString.slice(count);
    }
    return `${firstPart},${secondPart}`;
  }

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
