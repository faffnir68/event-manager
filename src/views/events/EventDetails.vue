<template>
    <section>
        <div class="event-detail" v-if="event">
            <h3>{{ event.title }}</h3>
            <h6>@{{ event.time }} on {{ event.date }} in {{ event.location }}</h6>
            <p>Organized by : {{ event.organizer }}</p>
            <p>{{ event.description }}</p>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EventServices from '@/services/EventServices.ts'

export default defineComponent({
    name: 'EventDetails',
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data () {
        return {
            event: null
        }
    },
    created () {
        EventServices.getEvent(this.id)
            .then (response => {
                this.event = response.data
            })
            .catch(error => {
                console.log(error)
            })
    }
})
</script>
