<template>
  <TestBase :examples="examples" />
</template>

<script>
import TestBase from "./TestBase";
import AppHeader from "@/assets/components/AppHeader";

export default {
  name: "AppHeaderComponent",
  components: { AppHeader, TestBase },
  data() {
    return {
      componentName: "App Header",
      componentDesc:
        "This should be the first component used inside of any app rendered at the top of the page. It introduces the user to what the app is/does and provides any relevant instructions on how to use it. Descriptions should be as concise as possible.",
      examples: [
        {
          desc:
            "By default it pulls the page title and description set in the app.json manifest so it can be invoked via a singe closing tag.",
          code: "<AppHeader />"
        },
        {
          desc:
            "AppHeader contains the slots <i>title</i> and <i>description</i> that can be used to override it's content.",
          code: `<AppHeader>
          <template slot="title">Custom Title</template>
          <template slot="description">
            I'm a custom description with
            <b>HTML</b> capabilities.
          </template>
        </AppHeader>`
        }
      ]
    };
  }
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
</style>
