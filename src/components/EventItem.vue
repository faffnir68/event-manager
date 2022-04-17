<template>
    <router-link class="event-item" :to="{ name: 'EventDetails', params: { id: event.id } }">
      <h3>{{ event.title }}</h3>
      <h6>@{{ event.time }} on {{ event.date }}</h6>
      <p>{{ event.description }}</p>
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EventItem",
  props: {
    event: {
      type: Object,
      required: true
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  // color: #42b983;
  display: block;
  cursor: pointer;
  &:hover {
    color: #42b983;
  }
}
</style>
