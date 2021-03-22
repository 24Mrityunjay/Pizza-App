import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './action.js';
import FilterOptions from "./filterOptions";

const initialstate = {
    allItems: [],
    filteredItems: [],
    filterNameText: '',
    filterCategoryText: '',
    filterRatingText: '',
    filterPriceText: ''
};
class FilterMenu extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = initialstate;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.items && nextProps.items.length > 0) {
            this.setState({
                allItems: JSON.parse(JSON.stringify(nextProps.items)),
                filteredItems: JSON.parse(JSON.stringify(nextProps.filteredItems))
            });
        }
    }

    handleFilteration = (event, ops) => {
        const filterText = event.target.value;
        let filterRatingText = this.state.filterRatingText;
        let filterNameText = this.state.filterNameText;
        let filterPriceText = this.state.filterPriceText;
        let array = [...this.state.allItems] || [];
        if (ops === 'rating') {
            filterRatingText = filterText;
        } else if (ops === 'price') {
            filterPriceText = filterText;
        } else if (ops === 'isVeg') {
            filterNameText = filterText;
        }
        // category filter
        array = array.filter((obj) => {
            let ok = true;

            if (ok && filterRatingText !== '') {
                ok = obj == filterRatingText;
            }

            if (ok && filterPriceText !== '') {
                const finalPrice = this.calculatePrice(obj.price);
                if (filterPriceText.split(",")[1]) {
                    ok = obj.price > filterPriceText.split(",")[0] && (filterPriceText.split(",")[1] && obj.price <= filterPriceText.split(",")[1]);
                } else {
                    ok = obj.price > filterPriceText.split(",")[0]
                }
            }

            if (ok && filterNameText !== '') {
                if (filterNameText == 'veg') {
                    ok = obj.isVeg;
                } else if (filterNameText == 'nonveg') {
                    ok = !obj.isVeg;
                }
            }

            return ok;
        });
        
        // set State
        this.setState({ filterNameText, filterRatingText, filterPriceText, filteredItems: array });
        this.props.filterItems(array);
    }

    calculatePrice = (op, d) => {
        return (op - (Number(op) * Number(d) / 100));
    }


    render() {
        return (
            <FilterOptions
                filterRatingText={this.state.filterRatingText}
                filterNameText={this.state.filterNameText}
                filterPriceText={this.state.filterPriceText}
                handleFilteration={this.handleFilteration}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.DashboardReducer.items,
        filteredItems: state.DashboardReducer.filteredItems
    };
}

//  Set the actions which will prompt the reducers to check for matching types
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        filterItems: actions.filterMenu
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterMenu);