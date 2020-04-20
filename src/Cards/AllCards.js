import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toggleVisibility, toggleFlip, setVisibilityFilter } from '../redux/actions/actions';

class AllCards extends Component {

    toggleVisibility = (index) => {
        this.props.toggleVisibility(index);
    }
    
    toggleFlip = (index) => {
        this.props.toggleFlip(index);
    }

    setVisibilityFilter = (filter) => {
        this.props.setVisibilityFilter(filter);
    }

    count() {
        var count = this.props.cards;
        
        if(this.props.visibilityFilter === 'SHOW_VISIBLE') {
            count = this.props.cards.filter(card => card.visible === true);
        } else if(this.props.visibilityFilter === 'SHOW_NOT_VISIBLE') {
            count = this.props.cards.filter(card => card.visible === false);
        }
        
        return count.length;
    }
    
    render() {
        var visibilityFilter = this.props.visibilityFilter;

        if(visibilityFilter === 'SHOW_VISIBLE') {
            this.props.cards.filter(card => card.visible === true);
        } else if(visibilityFilter === 'SHOW_NOT_VISIBLE') {
            this.props.cards.filter(card => card.visible === false);
        }
        
        const cardsItems = this.props.cards.map((card, index) =>
            <div key={ index } className={`flip-card ${card.visible ? 'active' : ''} ${((card.visible && visibilityFilter === 'SHOW_NOT_VISIBLE' || !card.visible && visibilityFilter === 'SHOW_VISIBLE') && visibilityFilter !== 'SHOW_ALL') ? 'hidden' : ''}`}>
                <div className={`flip-card-inner ${card.flip ? 'flip' : ''}`} onClick={ () => this.toggleFlip(index) }>
                    <div className="flip-card-front">
                        <h3>{ card.answer }</h3>
                    </div>
                    <div className="flip-card-back">
                        <h3>{ card.response }</h3>
                    </div>
                </div>
                <div>
                    <button onClick={ () => this.toggleVisibility(index) }>Visible</button>
                </div>
            </div>
        );

        return (
            <React.Fragment>
                <h3>Cards ({ this.count() })</h3>
                <ul className="filters">
                    <li className={`${this.props.visibilityFilter === 'SHOW_ALL' ? 'active' : ''}`} onClick={ () => { this.setVisibilityFilter('SHOW_ALL'); }}>All</li>
                    <li className={`${this.props.visibilityFilter === 'SHOW_VISIBLE' ? 'active' : ''}`} onClick={ () => { this.setVisibilityFilter('SHOW_VISIBLE'); }}>Visible</li>
                    <li className={`${this.props.visibilityFilter === 'SHOW_NOT_VISIBLE' ? 'active' : ''}`} onClick={ () => { this.setVisibilityFilter('SHOW_NOT_VISIBLE'); }}>Not visible</li>
                </ul>
                { cardsItems }
            </React.Fragment>
        )
    }
  
}

const mapStateToProps = state => {
    return {
        visibilityFilter: state.visibilityFilter,
        cards: state.cards
    };
};

const mapDispatchToProprs = {
    toggleVisibility: toggleVisibility,
    toggleFlip: toggleFlip,
    setVisibilityFilter: setVisibilityFilter
};

export default connect(mapStateToProps, mapDispatchToProprs)(AllCards);