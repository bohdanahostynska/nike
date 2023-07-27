import React from 'react';
import box from "../../assets/people/box.svg";
import box1 from "../../assets/people/box1.svg";
import box2 from "../../assets/people/box2.svg";
import Box from "../../assets/modern/Box.svg";

const People = () => {
  return (
    <div className='people container section'>
      <div className="people__info">
      <div className="people__left">
        <h2 className="people__title">BEST SHOES FOR
THE BEST PEOPLE</h2>
<p className="people__text">Design for the way you live your life. Atoms are beautiful in
their simplicity, supporting your feet with absolute comfort.</p>
<button className="btn">
            More Details
            <img src="" alt="" className="button-img" />
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8183 2.53941C10.7129 2.46053 10.5929 2.40325 10.4653 2.37084L3.57548 0.780193C3.447 0.750531 3.31394 0.746466 3.18389 0.768229C3.05384 0.789992 2.92934 0.837157 2.81752 0.907032C2.59168 1.04815 2.43116 1.2732 2.37125 1.53268C2.34159 1.66116 2.33752 1.79422 2.35929 1.92427C2.38105 2.05432 2.42822 2.17881 2.49809 2.29064C2.63921 2.51647 2.86426 2.677 3.12374 2.73691L7.66573 3.77825L1.22905 7.80034C1.00413 7.94088 0.844255 8.16502 0.784595 8.42343C0.724934 8.68185 0.770373 8.95339 0.910916 9.17831C1.05146 9.40322 1.27559 9.56309 1.53401 9.62276C1.79243 9.68242 2.06397 9.63698 2.28888 9.49643L8.72557 5.47435L7.67044 10.0132C7.64022 10.1417 7.63574 10.2749 7.65726 10.4051C7.67878 10.5354 7.72588 10.6601 7.79583 10.772C7.86579 10.884 7.95722 10.981 8.06485 11.0574C8.17248 11.1338 8.29418 11.1882 8.42293 11.2174C8.55143 11.2476 8.68465 11.2521 8.8149 11.2306C8.94514 11.209 9.06984 11.162 9.18179 11.092C9.29374 11.022 9.39074 10.9306 9.46718 10.823C9.54362 10.7154 9.59799 10.5936 9.62716 10.4649L11.2178 3.57507C11.2446 3.44617 11.2457 3.31325 11.221 3.18393C11.1768 2.92446 11.0321 2.69288 10.8183 2.53941Z"
                fill="white"
              />
            </svg>
          </button>
      </div>
      <div className="people__right">
      {/* <img src={Box} alt="" className="people__img3" /> */}
        <div className="people__main__left">
          <img src={box} alt="" className="people__img" />
        </div>
             
        <div className="people__main__right">
        <div className="people__main__right-top">
          <img src={box1} alt="" className="people__img1" />
        </div>
        <div className="people__main__right-bottom">
          <img src={box2} alt="" className="people__img2" />
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default People
