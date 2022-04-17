<template>
    <section>
        <div class="events-list">
            <EventItem v-for="event in events" :key="event.id" :event="event" />
        </div>
        <div class="pagination">
            <router-link :to="{ name: 'EventList', query: { page: page - 1 } }" v-if="page != 1">Previous</router-link>
            <router-link :to="{ name: 'EventList', query: { page: page + 1 } }" v-if="hasNextPage">Next</router-link>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from 'vue'
import EventItem from '@/components/EventItem.vue'
import EventServices from '@/services/EventServices'

export default defineComponent({
    components: { EventItem },
    name: "EventList",
    props: ['page'],
    data () {
        return {
            events: null,
            perPage: 2,
            totalEvents: 0
        }
    },
    created () {
        watchEffect(() => {
            this.events = null
            EventServices.getEvents(this.perPage, this.page)
                .then(response => {
                    this.events = response.data
                    this.totalEvents = parseInt(response.headers['x-total-count'])
                })
                .catch(error => {
                    console.log(error)
                })
        })
    },
    computed: {
        hasNextPage () {
            return this.page < Math.ceil(this.totalEvents / this.perPage)
        }
    }
})
</script>
