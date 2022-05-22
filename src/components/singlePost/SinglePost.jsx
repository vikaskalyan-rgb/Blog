import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://w0.peakpx.com/wallpaper/53/636/HD-wallpaper-thanksgiving-meal-dinner-giving-thanks-spread-turkey-feast-dressing.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
          Hotel FeelsGood!!
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        
        <p className="singlePostDesc">
        Indian food is some of the most popular and most widely eaten cuisines in the world. Indian cuisine consists of a diverse range of curries, rice dishes, meats, vegetables and breads, all flavored with a traditional range of spices.

Whilst delicacies vary by region and state, there are many similarities in terms of spices and flavors, regardless of the geographical region.

India shares a border with Pakistan, Bangladesh, Nepal, Bhutan, China, and has a close proximity to the island of Sri Lanka. The influences of those countries are keenly felt on one another, especially when it comes to good.
          <br />
          <br />
    
        </p>
      </div>
    </div>
  );
}
