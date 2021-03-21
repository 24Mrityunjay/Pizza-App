import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import Modal from 'react-modal';

const MenuItem = ({ data, addToCart, modalIsOpen }) => {
    const op = Number(data.price);
    const d = Number(data.discount);
    let finalPrice = op - (Number(op) * Number(d) / 100);
    data.discountPrice = finalPrice;
    // let modalIsOpen = false;
    function openModal() {
        modalIsOpen = true;
      }
     
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
      }
     
      function closeModal(){
        modalIsOpen = false;
      }
      const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };
    return (
        <div className="col-xs-12 col-md-12 card-container">
            {/* <div className="">
                <div className=""> */}
            {/* <br /> */}
            <div className="displayImage">
                <img
                    src={data.isVeg == true ?
                        'https://www.nicepng.com/png/detail/261-2619376_big-image-egg-veg-or-non-veg.png' :
                        'https://freesvg.org/img/1531813245.png'}
                    alt="new"
                    width={30} height={30}
                    className='vegImage'
                />
                <img
                    src={data.img_url}
                    alt="new"
                    width={280} height={150}
                // className='imageShown'
                />

            </div>
            <span className="card-price">{'₹ ' + data.price}</span>
            <div className="itemDetail">
                <StarRatingComponent
                    name="rating"
                    starCount={5}
                    value={Number(data.rating)}
                /><br />
                <span className="card-title">{data.name}</span>
                <br />
                <span className="card-desc">{data.description}</span>
                <br />
                {/* <span className="card-price">{'Price - ₹' + data.price}</span> */}
                <br />
            </div>
            {/* <hr /> */}
            {/* <span className="ingredients">{'Ingredients: ' + data.ingredients}</span> */}
            {/* </div>
            </div> */}
            <div className="addToCart" >
                <button className="addToCartButton" onClick={e => modalIsOpen=true}>ADD</button>
            </div>
            <Modal
               isOpen={modalIsOpen}
               onAfterOpen={afterOpenModal}
               onRequestClose={closeModal}
               style={customStyles}
               contentLabel="Example Modal"
            >
                <h2>Hello</h2>
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
        </div>
    );
};

export default MenuItem;
