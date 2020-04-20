export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY';
export const TOGGLE_FLIP = 'TOGGLE_FLIP';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export function toggleVisibility(id) {
  return { type: TOGGLE_VISIBILITY, id: id };
}

export function toggleFlip(id) {
  return { type: TOGGLE_FLIP, id: id };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter: filter };
}