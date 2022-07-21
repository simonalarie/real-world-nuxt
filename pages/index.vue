<template>
  <div>
    <h1>Events</h1>

    <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index"
    />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import EventCard from '@/components/EventCard.vue'


export default {
  head() {
    return {
      title: 'Event Listing'
    }
  },
  // The fetch (page component hook)0 works on client & server-side to fill the store before rendering the page
  async fetch({ store, error }) {
    try {
      // Don't have to return a value that merges with component data
      await store.dispatch('events/fetchEvents')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. Please try again.'
      })
    }
  },
  components: {
    EventCard
  },
  computed: mapState({
    events: state => state.events.events
  })
}
</script>
