import { createEvent, createStore } from "effector";

export const showFormPopup = createEvent();
export const hideFormPopup = createEvent();

export const $popups = createStore({
  form: false,
})
  .on(showFormPopup, (state) => ({ ...state, form: true }))
  .on(hideFormPopup, (state) => ({ ...state, form: false }));
