import React from "react";
import MainImage from "../images/blog/blog1.jpg";
import HomeSidebarTop from "./HomeSidebarTop.js";
import { makeStyles } from "@material-ui/core/styles";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";

const useStyles = makeStyles((theme) => ({
  parentDiv: {
    overflow: "hidden",
    backgroundSize: `cover`,
    background: `url(${MainImage})  no-repeat center center/cover`,
    width: `100%`,
    height: `100%`,
    "@media (min-width: 1000px)": {},
  },
  childImage: {
    position: "absolute",
    display: "flex",
    flexFlow: "column",
    justifyContent: "flex-end",
    padding: "1rem",
    transition: "all 0.3s",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const Home = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div className="row">
        <div
          className="col-md-8 m-0 p-0 border"
          style={{ maxHeight: "400px", overflow: "hidden" }}
        >
          <div className={classes.parentDiv}>
            <div className={classes.childImage}>
              <p className="">
                <span
                  className="badge text-left text-white"
                  style={{
                    background: "#8064a4",
                    fontSize: "1rem",
                    padding: "0.5rem",
                  }}
                >
                  #NEWS
                </span>
              </p>
              <h2 className="text-white">
                <b>New Bill Allows to Pay Crypto Taxes</b>
              </h2>
              <p className="text-white">
                28 May, 2020{" "}
                <span className="ml-5">
                  {" "}
                  <CommentOutlinedIcon /> 0
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4" style={{}}>
          <HomeSidebarTop />
        </div>
      </div>
    </div>
  );
};

export default Home;
