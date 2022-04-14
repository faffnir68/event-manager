<template>
  <div>
    <router-link class="event-item" :to="{ name: 'EventDetails', params: { id: '1' } }">
      <h3>{{ event.title }}</h3>
      <h6>@{{ event.time }} on {{ event.date }}</h6>
      <p>{{ event.description }}</p>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EventItem",
  props: {
    id: {
      type: Number,
      required: true
    },
    event: {
      type: String,
      default: ''
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
  cursor: pointer;
  &:hover {
    color: #42b983;
  }
}
</style>
