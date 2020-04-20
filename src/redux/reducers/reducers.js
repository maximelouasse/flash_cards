import { TOGGLE_VISIBILITY, TOGGLE_FLIP, SET_VISIBILITY_FILTER } from '../actions/actions';
import cardsJson from '../../cards.json';
 
const initialState = {
    visibilityFilter: 'SHOW_ALL',
    cards: cardsJson['cards']
};
 
function rootReducer(state = initialState, action) {
    var i = action.id;

    switch(action.type) {
        case TOGGLE_VISIBILITY:
            return {
                ...state,
                cards : [
                    ...state.cards.slice(0, i),
                    {...state.cards[i], visible: !state.cards[i].visible},
                    ...state.cards.slice(i + 1),
                    ]
            };

        case TOGGLE_FLIP:
            return {
                ...state,
                cards : [
                    ...state.cards.slice(0, i),
                    {...state.cards[i], flip: !state.cards[i].flip},
                    ...state.cards.slice(i + 1),
                    ]
            };

        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            });

            /*switch(action.filter){
                case 'SHOW_ALL':
                    return state.cards;
                    break;

                case 'SHOW_VISIBLE':

                    break;

                case 'SHOW_NOT_VISIBLE':

                    break;

                default:
                    break;
            }*/
    
        default:
            return state;
    };
}
 
export default rootReducer;