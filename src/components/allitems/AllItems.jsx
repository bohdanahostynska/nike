
import {
  createCategoryList,
  handleOpenBasket,
} from "../../redux/reducers/categoryListSlice";
import { useDispatch, useSelector } from "react-redux";
import { allData } from './AllItemsData';


const AllItems= ({currentFilter}) => {

  const dispatch = useDispatch();
  const { categoryList } = useSelector((state) => state.categoryList);
  
  const handleOnClick = (item) => {
    dispatch(createCategoryList(item));
    dispatch(handleOpenBasket(true));
  };



  return (
    <div className='allitems container section'>
       <div className="allitems_content">
      {allData.map((item) => {
        const { title, category, image, text, price, id } = item;
        return (
          <div className="allitems_all" key={category + id}>
            <img className="allitems_img" src={image} alt="all_images"  onClick={() => handleOnClick(allData.id)}/>
            <div className="allitems_bottom">
              <h3 className="allitems_title">
                {title} {id}
              </h3>
              <p className="allitems_text">{text}</p>
              <div className="allitems_add">
                <p className="allitems_price">{price}</p>
                </div>
              </div>
            </div>
        );
      })}
    </div>
    </div>
  )
}

export default AllItems
