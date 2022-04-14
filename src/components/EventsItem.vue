<template>
  <div>
    <div class="event-item">
      <h3>{{ event.title }}</h3>
      <h6>@{{ event.time }} on {{ event.date }}</h6>
      <p>{{ event.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EventsItem",
  props: {
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
  color: #42b983;
}
</style>
