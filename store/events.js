import EventService from '@/services/EventService.js'

// state value should be a function to avoid unwanted shared state on server side
export const state = () => ({
  events: [],
  event: {}
})
export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT(state, event) {
    state.event = event
  }
}
export const actions = {
  // we need to return a promise from our fetchEvent actions. so our component know when this promise is resolved so it can continue loading the page.
  fetchEvents({ commit }) {
    return EventService.getEvents().then(response => {
      commit('SET_EVENTS', response.data)
    })
  },
  fetchEvent({ commit }, id) {
    return EventService.getEvent(id).then(response => {
      commit('SET_EVENT', response.data)
    })
  }
}
