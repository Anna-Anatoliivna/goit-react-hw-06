import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  filterValue: '',
};

const filtersSlice = createSlice({
  // Ім'я слайсу
  name: 'filter',
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  // Об'єкт редюсерів
  reducers: {
    setFilterValue(state, action) {
      state.filterValue = action.payload;
    },
  },
});

export const selectNameFilter = state => state.filter.filterValue;

export const filtersReducer = filtersSlice.reducer;
export const { setFilterValue} = filtersSlice.actions;

// export const filterReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case 'filter/setFilterValue': {
//       return {
//         ...state,
//         filterValue: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };

// export const setFilterValue = payload => {
//   return {
//     type: 'filter/setFilterValue',
//     payload: payload,
//   };
// };