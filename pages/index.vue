<template>
    <div>
      <h1>Events</h1>
    </div>
</template>
<script>
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
      }
    }
</script>