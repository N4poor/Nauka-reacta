import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCard = payload => ({type: 'ADD_CARD', payload});

export const updateSearchString = payload => ({type: 'UPDATE_SEARCHSTRING', payload});
//selectors

export const getAllColumns = state => state.columns

export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

const reducer = (state, action) => {
  switch(action.type){
    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [...state.columns, {...action.payload, id: shortid()}]
      };

    case 'ADD_CARD':
      return {
        ...state,
        cards: [...state.cards, {...action.payload, id: shortid()}]
      };
      
    case 'UPDATE_SEARCHSTRING':
      return {
        ...state,
        searchString: action.payload
      }

    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;