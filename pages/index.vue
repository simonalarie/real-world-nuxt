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
    import EventCard from '@/components/EventCard.vue'
    export default {
      head() { // <-- property used by vue-meta to add header tags
        return {
          title: 'Event Listing - Real World Events', // <-- For our title tag
          meta: [
            {
              hid: 'description',  
              name: 'description', // <-- for our meta description tag
              content:
                'Where you can find all the events taking place in your neighborhood'
            }
          ]
        }
      },
      // asyncData is called every time before loading a page component (pages dir.)
      // Receives context: used to fetch some data (via API) and then Nuxt will merge the return value with component's data.
      asyncData(context) {
        // Nuxt wait for promise to be resolved before rendering component
        return context.$axios.get('http://localhost:3000/events').then(response => {
          // Je retourne an events object
          return {
            events: response.data
          }
        }).catch(e => {
          context.error({ statusCode: 503, message: 'Unable to fetch events at this time, please try again' })
        })
      },
      components: {
        EventCard
      }
    }
</script>