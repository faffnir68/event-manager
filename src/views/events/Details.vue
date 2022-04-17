<template>
        <div class="event-detail" v-if="event">
            <h3>{{ event.title }}</h3>
            <h6>@{{ event.time }} on {{ event.date }} in {{ event.location }}</h6>
            <p>Organized by : {{ event.organizer }}</p>
            <p>{{ event.description }}</p>
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'EventDetails',
    props: ['event']
})
</script>
