import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.isSelected,
    };
  }

  render() {
    return (
      <div className="all-category">
        <Link
          to={{
            pathname: "/choiceQuestion",
            state: {
              categoryImage: this.props.image,
              categoryName: this.props.name,
              categoryPicto: this.props.picto,
              categoryId: this.props.id,
            },
          }}
        >
          {/* <img
            className="category-img"
            src={this.props.image}
            alt={this.props.name}
          /> */}
          <i className={this.props.picto} style={{fontSize:'100px', paddingTop:'20px'}}></i>
          <h4 className="name-category">{this.props.name.toUpperCase()}</h4>
        </Link>
      </div>
    );
  }
}

Category.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  picto: PropTypes.string,
  isSelected: PropTypes.bool,
  name: PropTypes.string
}

export default Category;
