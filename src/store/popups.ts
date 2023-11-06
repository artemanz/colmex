import { createEvent, createStore } from "effector";

export const showFormPopup = createEvent();
export const hideFormPopup = createEvent();

export const showGreetingsPopup = createEvent();
export const hideGreetingsPopup = createEvent();

export const $popups = createStore({
  form: false,
  greetings: false,
})
  .on(showFormPopup, (state) => ({ ...state, form: true }))
  .on(hideFormPopup, (state) => ({ ...state, form: false }))
  .on(showGreetingsPopup, (state) => ({ ...state, greetings: true }))
  .on(hideGreetingsPopup, (state) => ({ ...state, greetings: false }));
