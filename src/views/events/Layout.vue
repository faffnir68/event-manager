<template>
    <section>
        <div class="event-navigation" v-if="event">
            <router-link :to="{ name: 'EventDetails' }">Details</router-link> |
            <router-link :to="{ name: 'EventEdit' }">Edit</router-link> |
            <router-link :to="{ name: 'EventRegister' }">Register</router-link>
        </div>
        <router-view :event="event"></router-view>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EventServices from "@/services/EventServices.ts"

export default defineComponent({
    name: 'EventLayout',
    props: ['id'],
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
