<template>
  <div class="app-container">
    <div class="intro">
      This is a test application that only appears in the dev environment.
      Use this to document and test global components and styles used in the Newscarr environment.
    </div>

    <!-- APP HEADER -->
    <AppHeaderComponent/>

    <!-- BUTTON -->
    <section>
      <h3>Buttons</h3>
      <dl>
        <dt>
          Buttons are styled by applying a class of
          <i>.btn</i>. Default style is that of Primary.
          <pre><code
  v-text="`<button class='btn'>Primary</button>\n<button class='btn outline'>Outline</button>\n<button class='btn danger'>Danger</button>\n<button class='btn success'>Success</button>`"
></code></pre>
        </dt>
        <dd>
          <button class="btn">Primary</button>
          <button class="btn outline">Outline</button>
          <button class="btn danger">Danger</button>
          <button class="btn success">Success</button>
        </dd>
      </dl>
    </section>

    <!-- DATA TABLE -->
    <section>
      <h3>Data Table</h3>
      <p>
        These are used to create rich lists of data that can be searched, manipulated, and filtered.
        Use these when you need more power over a standard list of elements than what the regular semantic
        <i>&lt;table&gt;</i> element can provide.
      </p>
      <dl>
        <dt>
          The minimum data table using the
          <i>:data</i> attribute. Header labels are generated automatically based on proper-casing the key names.
          <pre><code>{{`<DataTable :data='list.data' />`}}</code></pre>
        </dt>
        <dd>
          <DataTable :data="list.data" />
        </dd>
      </dl>

      <dl>
        <dt>Advanced table with scoped slots and filtering capability.</dt>
        <dd>
          <DataTable :header="list.header" :data="list.data">
            <template v-slot:row="rowProps">
              <td>{{rowProps.item.name}}</td>
              <td>{{rowProps.item.age}}</td>
              <td>
                <a :href="`mailto:${rowProps.item.email}`">{{rowProps.item.email}}</a>
              </td>
            </template>
          </DataTable>
        </dd>
      </dl>
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
        <Modal
          :visible="modal[3].visible"
          title="Form Modal"
          size="large"
          @close="modal[3].visible = false"
        >
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
</template>

<script>

import DataTable from "@/assets/components/DataTable";
import Modal from "@/assets/components/Modal";
//import Switch from "@/assets/components/Switch";

import AppHeaderComponent from "./components/AppHeaderComponent";

export default {
  name: "Test",
  components: { DataTable, Modal,AppHeaderComponent },
  data() {
    return {
      list: {
        header: [
          { label: "Name", key: "name" },
          { label: "Age", key: "age" },
          { label: "Email", key: "email" }
        ],
        data: [
          {
            name: "John Doe",
            age: 37,
            email: "jdoe@internet.com",
            category: "active"
          },
          {
            name: "Jane Doe",
            age: 34,
            email: "jane_doe@web.com",
            category: "not active"
          },
          {
            name: "Guy Incognito",
            age: 50,
            email: "nothinghere@somewhere.net",
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
.intro {
  font-size: 20px;
  font-weight: 300;
  padding: 2em;
  background-color: #333;
  color: #fff;
  box-shadow: 0 0 10px #2196f3; 
  margin-bottom: 80px;
}

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

i {
  background-color: #cfd8dc;
  padding: 2px 8px;
  color: #795548;
  font-style: normal;
  border-radius: 2px;
}

form > div {
  padding: 1em;
}

p {
  font-family: "Avenir";
  padding-left: 8px;
}


</style>