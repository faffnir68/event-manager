<template>
    <section>
        <div class="events-list" v-for="event in events" :key="event.id">
            <EventItem :event="event" />
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EventItem from '../components/EventItem.vue'
import EventServices from '../services/EventServices'

export default defineComponent({
  components: { EventItem },
    name: "EventList",
    props: {
        page: {
            type: Number,
            default: 1
        }
    },
    data () {
        return {
            events: null,
            perPage: 2
        }
    },
    created () {
        EventServices.getEvents(this.perPage, this.page)
            .then(response => {
                this.events = response.data
            })
            .catch(error => {
                console.log(error)
            })
    }
})
</script>
