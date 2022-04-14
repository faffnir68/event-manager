<template>
    <section>
        <div class="events-list" v-for="event in events" :key="event.id">
            <EventsItem :event="event" />
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EventsItem from '../components/EventsItem.vue'

export default defineComponent({
  components: { EventsItem },
    name: "EventsList",
    data () {
        return {
            events:[
                {
                    id: 1,
                    title: "Dog walking",
                    description: "Go walk with your dog in a place of wonder",
                    date: "01-sept-2022",
                    time: "03:20 PM",
                    location: "Central Park, New-York"
                },
                {
                    id: 2,
                    title: "Cat walking",
                    description: "Go walk with your cat in a place of wonder",
                    date: "02-sept-2022",
                    time: "04:20 PM",
                    location: "Central Park, New-York"
                }
            ]
        }
    }
})
</script>
