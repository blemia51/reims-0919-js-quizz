import React from "react";
import "./CardQuestion.css";
import "./ButtonQcm.css";
import "./ChoixQfmVF.css";
import Category from "./Category";
import { Link } from "react-router-dom";

class ChoixQfmVF extends React.Component {
  
  render() {
		const { location } = this.props;
    const { state: { categoryId, categoryName, categoryImage } } = location;
    return (
      <div id="cardContentQcm1">
        <div className="margin-choiceQcm"></div>
        <Category
          name={categoryName}
          image={categoryImage}
        />
        <p>You prefer QCM or True False ?</p>
        <div className="cardContent">
          <div>
            <Link
              to={{
                pathname: "/question",
                state: {
                  categoryImage: categoryImage,
                  categoryName: categoryName,
                  categoryId: categoryId,
                },
              }}
            >
              <button className="qcmButton">QCM</button>
            </Link>
            <Link
              to={{
                pathname: "/questionbool",
                state: {
                  categoryImage: categoryImage,
                  categoryName: categoryName,
                  categoryId: categoryId,
                },
              }}
            >
              <button className="qcmButton">True-False</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ChoixQfmVF;
