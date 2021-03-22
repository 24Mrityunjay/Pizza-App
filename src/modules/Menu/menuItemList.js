import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../Cart/action';
import Modal from 'react-modal';
import StarRatingComponent from 'react-star-rating-component';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class MenuItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            isChecked: false,
            items: ''
        };
    }
    addToSelection = (data) => {
        const { addItemToSelection } = this.props;

        addItemToSelection([...this.props.selectedItems, data]);
    }

    modalChange = (e) => {
        if (e) e.preventDefault();
        console.log(this.state.modalIsOpen, "this.state.modalIsOpenthis.state.modalIsOpenthis.state.modalIsOpen")
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        })
    }

    toggleChange = (index, event) => {
        this.setState({
          isChecked: !this.state.isChecked,
        });
        if(event.target.checked === true){
            const value = event.target.value;
        console.log(value)
        }
        // let newItems = this.state.items.slice();
        // console.log( newItems[index],"sdfjksdgfjsdhfsdjfhjksh");
        // newItems[index].checked = !event.target[index].checked
        
        // this.setState({ items: newItems });
      }

    render() {
        const { filteredItems } = this.props;

        console.log(filteredItems,"filteredItemsfilteredItemsfilteredItemsfilteredItemsfilteredItems")
        return (<Fragment>
            {/* {menuItemMarkup} */}
            {filteredItems && filteredItems.map((data, index) => {
                return (
                    <div key={index} className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <h2 className="category">
                            {data.name}
                        </h2>
                        <div className="col-xs-12 col-md-12 card-container">
                            <div className="displayImage">
                                <img
                                    src={data.isVeg === true ?
                                        'https://www.nicepng.com/png/detail/261-2619376_big-image-egg-veg-or-non-veg.png' :
                                        'https://freesvg.org/img/1531813245.png'}
                                    alt="new"
                                    width={30} height={30}
                                    className='vegImage'
                                />
                                <img
                                    src={data.img_url}
                                    alt="new"
                                    width={178} height={150}
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
                            </div>
                            <div className="addToCart" >
                                <button className="addToCartButton" onClick={e => this.addToSelection(data)}>ADD</button>
                            </div>
                            <Modal
                                isOpen={this.state.modalIsOpen}
                                onRequestClose={this.modalChange}
                                ariaHideApp={false}
                                style={customStyles}
                                contentLabel="Example Modal"
                            >
                                <div>
                                    <img
                                        src={data.img_url}
                                        alt="new"
                                        width={600} height={300}
                                    />
                                    <div className="">
                                        <StarRatingComponent
                                            name="rating"
                                            starCount={5}
                                            value={Number(data.rating)}
                                        /><br />
                                        <span className="card-title">{data.name}</span>
                                        <br />
                                        <span className="card-desc">{data.description}</span>
                                        <hr />
                                        <span className="card-title">Make your Favourite Meal!</span>
                                        <hr />
                                        <span className="card-title">Choose Add-Ons</span>
                                        <form>
                                        <div>
                                            {data.toppings[0].items.map(item => (
                                                <div className='addOns'>
                                                        <label key={item.name}>{item.name}</label>
                                                        <input id="checkid" type="checkbox" value={item.name} defaultChecked={this.state.isChecked} onChange={this.toggleChange.bind(this, index)} />
                                                </div>
                                            ))}
                                            {console.log()}
                                        </div>
                                        </form>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </div>
                )
            })
            }
        </Fragment>);
    }
}

function mapStateToProps(state) {
    return {
        filteredItems: state.DashboardReducer.filteredItems,
        selectedItems: state.CartReducer.selection
    };
}

//  Set the actions which will prompt the reducers to check for matching types
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addItemToSelection: actions.addItemToSelection
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItemList);