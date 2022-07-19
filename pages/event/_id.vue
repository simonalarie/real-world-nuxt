<template>
    <div>
    <h1>Individual Event: {{ id }}</h1>
    </div>
</template>
<script>
    export default {
    // SEO vue-meta
      head() {
        return {
          title: 'Event #' + this.id,
          meta: [
            {
              hid: 'description',
              name: 'description',
              content: 'What you need to know about Event #' + this.id
            }
          ]
        }
      },
      computed: {
        id() {
          return this.$route.params.id
        }
      }
    }
    </script>