import React from 'react';

const FilterOptions = (props) => {
  return (
    <div className="row">
      <div className="col col-xs-3 col-md-3">
        <label htmlFor="vegfilter" className="pull-left">Name:</label>
        {/* <input name="namefilter" type="text" autoFocus placeholder="Search" className="inputBox" value={props.filterNameText ? props.filterNameText : ''} onChange={e => props.handleFilteration(e, 'name')} /> */}
         <select name="vegfilter" className="inputBox" value={props.filterNameText ? props.filterNameText : ''} onChange={e => props.handleFilteration(e, 'isVeg')}>
          <option value="">{'All'}</option>
          <option value="veg">{'Veg'}</option>
          <option value="nonveg">{'Non-Veg'}</option>
        </select>
      </div>
      <div className="col col-xs-3 col-md-3">
        <label htmlFor="ratingfilter" className="pull-left">Rating:</label>
        <select name="ratingfilter" className="inputBox" value={props.filterRatingText ? props.filterRatingText : ''} onChange={e => props.handleFilteration(e, 'rating')}>
          <option value="">{'All'}</option>
          <option value="1">{'★'}</option>
          <option value="2">{'★★'}</option>
          <option value="3">{'★★★'}</option>
          <option value="4">{'★★★★'}</option>
          <option value="5">{'★★★★★'}</option>
        </select>
      </div>
      <div className="col col-xs-3 col-md-3">
        <label htmlFor="pricefilter" className="pull-left">Price:</label>
        <select name="pricefilter" className="inputBox" value={props.filterPriceText ? props.filterPriceText : ''} onChange={e => props.handleFilteration(e, 'price')}>
          <option value="">{'All'}</option>
          <option value="0,200">{'₹0 - ₹200'}</option>
          <option value="200,300">{'₹200 - ₹300'}</option>
          <option value="300,400">{'₹300 - ₹400'}</option>
          <option value="400,">{'₹400+'}</option>
        </select>
      </div>
    </div>
  );
};

export default FilterOptions;
