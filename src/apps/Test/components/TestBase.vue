<template>
  <section>
    <h3>{{componentName}}</h3>
    <p>{{componentDesc}}</p>
    <dl v-for="(example,index) in examples" :key="index">
      <dt>
        <div v-html="example.desc"></div>
        <pre><code v-text="example.code"></code></pre>
      </dt>
      <dd>
        <v-runtime-template :template="example.code"></v-runtime-template>
      </dd>
    </dl>
  </section>
</template>

<script>
import VRuntimeTemplate from "v-runtime-template";

export default {
  name: "TestBase",
  components: { VRuntimeTemplate },
  props: {examples: Array}
};
</script>

<style scoped>
p {
  font-family: "Avenir";
  padding-left: 8px;
}

pre {
  font-family: monospace;
  color: #607d8b;
  background-color: #fffde7;
  border-radius: 3px;
  padding: 1em;
  tab-size: 2;
}

dl {
  border: 1px solid #ccc;
  margin: 40px 0;
}

dt {
  font-family: "Georgia";
  padding: 1em;
  background-color: #eee;
  border-bottom: 1px solid #ccc;
}

dd {
  padding: 1em;
  margin: 0;
}

i {
  background-color: #cfd8dc;
  padding: 2px 8px;
  color: #795548;
  font-style: normal;
  border-radius: 2px;
}
</style>
