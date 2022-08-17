import React from "react";
import { FilterIcon, SearchCircleIcon } from "@heroicons/react/solid";
import { CartState } from "../../context/Context";

const Filter = (props) => {

  const { productState: {
    sort, byFastDelivery, byStock, bySearchString
  } , productDispatch } = CartState();

  //console.log(sort, byFastDelivery, byStock, bySearchString)

  return (
    <div className="section">
      <div className="flex justify-center  items-center mb-2">
      <span ><FilterIcon className="filterIcon" /></span>
      <span >Filter Products 
        {
        props.count ? <span>( Product Count: {props.count} )</span>
        :
        <span></span>
        }
      </span>
      </div>
      
      <form className="filter-container items-center">
          <div className="m-2">
            <input
              type="radio"
              id="priceASC"
              name="pricefilter"
              className="pr-2"
              value="ascending"
              onChange={(e) => {
                productDispatch({
                  type: 'SORT_BY_PRICE',
                  payload: 'lowToHigh'
                })
              }}
              checked={ sort === 'lowToHigh' ? true : false }
            />
            <label htmlFor="priceASC" className="pl-1">
              Price Ascending
            </label>
          </div>

          <div className="m-2">
            <input
              type="radio"
              id="priceDES"
              name="pricefilter"
              className="pr-2"
              value="decending"
              onChange={(e) => {
                productDispatch({
                  type: 'SORT_BY_PRICE',
                  payload: 'highToLow'
                })
              }}
              checked={ sort === 'highToLow' ? true : false }
            />
            <label htmlFor="priceDES" className="pl-1">
              Price Decending
            </label>
          </div>

          <div className="m-2">
            <input
              type="checkbox"
              id="fastDelivery"
              name="pricefilter"
              className="pr-2"
              value="decending"
              onChange={() => {
                productDispatch({
                  type: 'SORT_BY_DELIVERY'
                })
              }}
              checked={byFastDelivery}
              
            />
            <label htmlFor="fastDelivery" className="pl-1">
              Fast Delivery
            </label>
          </div>

          <div className="m-2">
            <input
              type="checkbox"
              id="outOfStock"
              name="pricefilter"
              className="pr-2"
              value="decending"
              onChange={() => {
                productDispatch({
                  type: 'SORT_BY_STOCK'
                })
              }}
              checked={byStock}
            />
            <label htmlFor="outOfStock" className="pl-1">
              Show Out Of Stock
            </label>
          </div>

          <div className="m-2">
            <button 
            type='button'
            className='btn-primary'
            onClick={(e) => {
              e.preventDefault
              productDispatch({
                type: 'RESET'
              })
            }}
            >

              Reset Search
            </button>
          </div>
      </form>
    </div>
  );
};

export default Filter;
