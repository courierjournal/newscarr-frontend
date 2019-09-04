<template>
  <div class="app-container">
    <AppHeader />
    <div class="inner">
      <!-- BUTTON -->
      <section>
        <h4>Buttons</h4>
        <hr />
        <button>Primary</button>
        <button class="danger">Danger</button>
        <button class="success">Success</button>
      </section>

      <!-- DATA TABLE -->
      <section>
        <h4>Data Table</h4>
        <hr />
        <div>
          Standard minimum table with
          <span class="inline">:header</span> and
          <span class="inline">:data</span>
        </div>
        <List :header="list.header" :data="list.data" />

        <div>Advanced table with scoped slots</div>
        <List :header="list.header" :data="list.data">
          <template v-slot:row="rowProps">
            <td>{{rowProps.item.name}}</td>
            <td>{{rowProps.item.age}}</td>
            <td>
              <a :href="`mailto:${rowProps.item.height}`">{{rowProps.item.height}}</a>
            </td>
          </template>
        </List>
      </section>

      <!-- MODAL -->
      <section>
        <h4>Modal</h4>
        <hr />
        <div>
          <button @click="openModal(0)">Basic Modal</button>
          <button @click="openModal(1)">Advanced Modal</button>
          <button @click="openModal(2)">Mini Modal</button>
          <Modal :visible="modal[0].visible" title="Basic Modal" @close="modal[0].visible = false">
            <div>Basic Modal</div>
            <div>Default size medium (600px)</div>
            <div>Test!</div>
          </Modal>

          <Modal
            :visible="modal[1].visible"
            title="Advanced Modal"
            size="large"
            @close="modal[1].visible = false"
          >
            <div>Advanced Modal</div>
            <div>
              prop
              <span class="inline">size="large"</span> (860px)
            </div>
            <div>Test!</div>
            <template v-slot:footer>
              <button @click="modal[1].visible = false">I'm a custom button</button>
            </template>
          </Modal>

          <Modal :visible="modal[2].visible" size="small" @close="modal[2].visible = false">
            <div>Advanced Modal</div>
            <div>
              prop
              <span class="inline">size="small"</span> (400px)
            </div>
            <div>Test!</div>
          </Modal>
        </div>
      </section>

      <!-- NOTIFICATION -->
      <section>
        <h4>Notification</h4>
        <hr />
        <div>
          <button @click="openNotification()">Basic Notification</button>
          <button @click="openNotification('danger')" class="danger">Danger</button>
        <button @click="openNotification('success')" class="success">Success</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/assets/components/AppHeader";
import List from "@/assets/components/List";
import Modal from "@/assets/components/Modal";


export default {
  name: "Test",
  components: { AppHeader, List, Modal },
  data() {
    return {
      list: {
        loading: true,
        header: [
          { label: "Name", key: "name" },
          { label: "Age", key: "age" },
          { label: "Height", key: "height" }
        ],
        data: [
          { name: "Jesse Hazel", age: 37, height: "6'3", category: "active" },
          {
            name: "Chris Feldmann",
            age: 34,
            height: "5'8",
            category: "not active"
          },
          {
            name: "Jeff Faughender",
            age: 50,
            height: "6'0",
            category: "active"
          }
        ]
      },
      modal: [
        {
          visible: false
        },
        {
          visible: false
        },
        {
          visible: false
        }
      ]
    };
  },
  methods: {
    openModal(index) {
      this.modal[index].visible = true;
    },
    openNotification(type) {
      this.$notification.open({
        title: "test notification",
        message: "",
        type: type
      });
    }
  }
};
</script>

<style scoped>
.inner {
  max-width: 900px;
  margin: 0 auto;
}

section {
  margin-bottom: 80px;
}
button {
  margin: 0 10px;
}

.inline {
  background-color: #eee;
  padding: 2px 8px;
  color: #555;
}
</style>