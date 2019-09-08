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
        <DataTable :header="list.header" :data="list.data" />

        <div>Advanced table with scoped slots</div>
        <DataTable :header="list.header" :data="list.data">
          <template v-slot:row="rowProps">
            <td>{{rowProps.item.name}}</td>
            <td>{{rowProps.item.age}}</td>
            <td>
              <a :href="`mailto:${rowProps.item.height}`">{{rowProps.item.height}}</a>
            </td>
          </template>
        </DataTable>
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
          <button @click="openNotification('Basic Notification')">Basic Notification</button>
          <button
            @click="openNotification({'title':'Notification Title', 'type': 'danger', 'message':'Failed to do the thing that you were trying to do'})"
            class="danger"
          >More Content</button>
          <button
            @click="openNotification({'title':'Notification Title', 'type': 'success', 'message':'Successfully did that thing you were trying to do', 'duration': 10000})"
            class="success"
          >Custom Duration</button>
        </div>
      </section>

      <!-- FORM -->
      <section>
        <h4>Form Elements</h4>
        <hr />
        <div>
          <form>
            <div>
              <input type="text" />
            </div>
            <div>
              <select>
                <option>One</option>
                <option>Two</option>
              </select>
            </div>
            <div>
              <textarea></textarea>
            </div>
          </form>
        </div>
        <div>
          <button @click="openModal(3)">Form in modal</button>
          <Modal :visible="modal[3].visible" title="Form Modal" size="large" @close="modal[3].visible = false">
            <div class="row">
              <div class="col-md-7 form-group">
                <label>Story Title</label>
                <input type="text" class="form-control" required />
              </div>
              <div class="col-md-3 form-group">
                <label>Presto ID</label>
                <input class="form-control" type="text" />
              </div>
              <div class="col-md-2 form-group">
                <label>Urgent</label>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 form-group">
                <label>Contact Name</label>
                <input class="form-control" type="text" />
              </div>
              <div class="col-md-4 form-group">
                <label>Contact Cell</label>
                <input class="form-control" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
              </div>
              <div class="col-md-4 form-group">
                <label>Request Date + Time</label>
                <input type="datetime-local" class="form-control" />
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 form-group">
                <label>Reporter Name</label>
                <input class="form-control" type="text" list="datalist-reporter-name" />
                <datalist id="datalist-reporter-name"></datalist>
              </div>
              <div class="col-md-4 form-group">
                <label>Reporter Cell</label>
                <input class="form-control" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
              </div>
              <div class="col-md-4 form-group">
                <label>Reporter Email</label>
                <input class="form-control" type="email" />
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 form-group">
                <label>Location</label>
                <textarea class="form-control"></textarea>
              </div>
              <div class="col-md-6 form-group">
                <label>Address</label>
                <textarea class="form-control"></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 form-group">
                <label>Notes</label>
                <textarea class="form-control" rows="4"></textarea>
              </div>
            </div>
            <div v-if="modal.modalType=='admin'">
              <hr />
              <div class="row">
                <div class="col-md-4 form-group">
                  <label>Photographer Name</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="col-md-4 form-group">
                  <label>Photographer Cell</label>
                  <input class="form-control" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                </div>
                <div class="col-md-4 form-group">
                  <label>Photographer Email</label>
                  <input class="form-control" type="email" />
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <label>Decline Reason</label>
                  <textarea class="form-control"></textarea>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </section>

      <!-- SWITCH -->
      <section>
        <h4>Switch</h4>
        <hr />
        <div>
          <Switch />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/assets/components/AppHeader";
import DataTable from "@/assets/components/DataTable";
import Modal from "@/assets/components/Modal";
//import Switch from "@/assets/components/Switch";

export default {
  name: "Test",
  components: { AppHeader, DataTable, Modal },
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
    openNotification(options) {
      this.$notification.open(options);
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

form > div {
  padding: 1em;
}
</style>