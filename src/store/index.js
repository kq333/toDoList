import { createStore } from "vuex";

export default createStore({
  state: {
    toDoTasks: [],
    inputValue: "",
    isbuttonEvent: false,
    checkBoxChecked: { done: false, id: null },
  },
  getters: {
    getInputValue: (state) => {
      return state.inputValue.length > 4
        ? (state.isbuttonEvent = true)
        : (state.isbuttonEvent = false);
    },

    getUpdateTaskObject: (state) => {
      const payload = state.checkBoxChecked;
      const index = state.toDoTasks.findIndex((elem) => elem.id === payload.id);
      return index === -1 ? null : (state.toDoTasks[index].done = payload.done);
    },
    getSetCheckBoxValueToFalse: (state) => {
      state.toDoTasks.length === 0
        ? ((state.checkBoxChecked.done = false),
          (state.checkBoxChecked.id = null))
        : "";
    },
  },
  mutations: {
    SET_ADD_TASK_VALUE(state, payload) {
      state.inputValue = payload;
    },
    ADD_EVENT_CLICK(state, payload) {
      state.isbuttonEvent = payload;

      state.toDoTasks.push({
        task: state.inputValue,
        id: state.toDoTasks.length,
        done: false,
      });

      state.inputValue = "";
    },

    SET_CHECKBOX_EVENT(state, payload) {
      state.checkBoxChecked = payload;
    },

    ADD_DELATE_TASK(state, payload) {
      const index = state.toDoTasks.findIndex((elem) => elem.id === payload.id);

      state.toDoTasks.splice(index, 1);
    },
  },
  actions: {
    addToTask({ commit }, payload) {
      commit("SET_ADD_TASK_VALUE", payload);
    },

    addEvent({ commit }, payload) {
      commit("ADD_EVENT_CLICK", payload);
    },
    async checkBoxValue({ commit }, payload) {
      commit("SET_CHECKBOX_EVENT", payload);
    },

    delateTask({ commit }, payload) {
      commit("ADD_DELATE_TASK", payload);
    },
  },

  modules: {},
});
