<template>
  <div class="app-container">
    <AppHeader>
      <template slot="description">
        A collection of commonly used phone and email addresses sorted by category.
        Click on the `More` arrow icon to see more contact info including cell/alternate # as well as notes.
        This is a staff curated list, so please update any records you notice are incorrect/out
        of date or add new contacts that you notice are missing.
      </template>
    </AppHeader>

    <Form class="voter-search-container" :data="form.data" @submit="search">
      <div class="row">
        <div class="col-md-4 form-group">
          <label>First Name</label>
          <input
            type="text"
            class="form-control"
            v-model="form.data.firstName"
            autocomplete="voterFirstName"
          />
        </div>
        <div class="col-md-4 form-group">
          <label>Last Name</label>
          <input
            type="text"
            class="form-control"
            v-model="form.data.lastName"
            autocomplete="voterLastName"
          />
        </div>
        <div class="col-md-2 form-group">
          <label>Gender</label>
          <select class="form-control" v-model="form.data.gender">
            <option value selected="selected">Any</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
        <div class="col-md-2 form-group">
          <label>Party</label>
          <select class="form-control" v-model="form.data.party">
            <option value selected="selected">Any</option>
            <option value="D">Democrat</option>
            <option value="R">Republican</option>
            <option value="O">Other</option>
            <option value="L">Libertarian</option>
            <option value="G">Green</option>
            <option value="C">Constitution</option>
            <option value="R">Reform</option>
            <option value="S">Socialist Workers</option>
            <option value="I">Independent</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 form-group">
          <label>Street</label>
          <input
            type="text"
            class="form-control"
            v-model="form.data.address"
            autocomplete="voterAddress"
          />
        </div>
        <div class="col-md-3 form-group">
          <label>City</label>
          <input type="text" class="form-control" v-model="form.data.city" autocomplete="voterCity" />
        </div>
        <div class="col-md-2 form-group">
          <label>Zip</label>
          <input type="text" class="form-control" v-model="form.data.zip" autocomplete="voterZip" />
        </div>
        <div class="col-md-3 form-group">
          <label>County</label>
          <select class="form-control" v-model="form.data.county">
            <option value selected="selected">Any</option>
            <option value="001">Adair</option>
            <option value="002">Allen</option>
            <option value="003">Anderson</option>
            <option value="004">Ballard</option>
            <option value="005">Barren</option>
            <option value="006">Bath</option>
            <option value="007">Bell</option>
            <option value="008">Boone</option>
            <option value="009">Bourbon</option>
            <option value="010">Boyd</option>
            <option value="011">Boyle</option>
            <option value="012">Bracken</option>
            <option value="013">Breathitt</option>
            <option value="014">Breckinridge</option>
            <option value="015">Bullitt</option>
            <option value="016">Butler</option>
            <option value="017">Caldwell</option>
            <option value="018">Calloway</option>
            <option value="019">Campbell</option>
            <option value="020">Carlisle</option>
            <option value="021">Carroll</option>
            <option value="022">Carter</option>
            <option value="023">Casey</option>
            <option value="024">Christian</option>
            <option value="025">Clark</option>
            <option value="026">Clay</option>
            <option value="027">Clinton</option>
            <option value="028">Crittenden</option>
            <option value="029">Cumberland</option>
            <option value="030">Daviess</option>
            <option value="031">Edmonson</option>
            <option value="032">Elliott</option>
            <option value="033">Estill</option>
            <option value="034">Fayette</option>
            <option value="035">Fleming</option>
            <option value="036">Floyd</option>
            <option value="037">Franklin</option>
            <option value="038">Fulton</option>
            <option value="039">Gallatin</option>
            <option value="040">Garrard</option>
            <option value="041">Grant</option>
            <option value="042">Graves</option>
            <option value="043">Grayson</option>
            <option value="044">Green</option>
            <option value="045">Greenup</option>
            <option value="046">Hancock</option>
            <option value="047">Hardin</option>
            <option value="048">Harlan</option>
            <option value="049">Harrison</option>
            <option value="050">Hart</option>
            <option value="051">Henderson</option>
            <option value="052">Henry</option>
            <option value="053">Hickman</option>
            <option value="054">Hopkins</option>
            <option value="055">Jackson</option>
            <option value="056">Jefferson</option>
            <option value="057">Jessamine</option>
            <option value="058">Johnson</option>
            <option value="059">Kenton</option>
            <option value="060">Knott</option>
            <option value="061">Knox</option>
            <option value="062">Larue</option>
            <option value="063">Laurel</option>
            <option value="064">Lawrence</option>
            <option value="065">Lee</option>
            <option value="066">Leslie</option>
            <option value="067">Letcher</option>
            <option value="068">Lewis</option>
            <option value="069">Lincoln</option>
            <option value="070">Livingston</option>
            <option value="071">Logan</option>
            <option value="072">Lyon</option>
            <option value="073">McCracken</option>
            <option value="074">McCreary</option>
            <option value="075">McLean</option>
            <option value="076">Madison</option>
            <option value="077">Magoffin</option>
            <option value="078">Marion</option>
            <option value="079">Marshall</option>
            <option value="080">Martin</option>
            <option value="081">Mason</option>
            <option value="082">Meade</option>
            <option value="083">Menifee</option>
            <option value="084">Mercer</option>
            <option value="085">Metcalfe</option>
            <option value="086">Monroe</option>
            <option value="087">Montgomery</option>
            <option value="088">Morgan</option>
            <option value="089">Muhlenberg</option>
            <option value="090">Nelson</option>
            <option value="091">Nicholas</option>
            <option value="092">Ohio</option>
            <option value="093">Oldham</option>
            <option value="094">Owen</option>
            <option value="095">Owsley</option>
            <option value="096">Pendleton</option>
            <option value="097">Perry</option>
            <option value="098">Pike</option>
            <option value="099">Powell</option>
            <option value="100">Pulaski</option>
            <option value="101">Robertson</option>
            <option value="102">Rockcastle</option>
            <option value="103">Rowan</option>
            <option value="104">Russell</option>
            <option value="105">Scott</option>
            <option value="106">Shelby</option>
            <option value="107">Simpson</option>
            <option value="108">Spencer</option>
            <option value="109">Taylor</option>
            <option value="110">Todd</option>
            <option value="111">Trigg</option>
            <option value="112">Trimble</option>
            <option value="113">Union</option>
            <option value="114">Warren</option>
            <option value="115">Washington</option>
            <option value="116">Wayne</option>
            <option value="117">Webster</option>
            <option value="118">Whitley</option>
            <option value="119">Wolfe</option>
            <option value="120">Woodford</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 form-group">
          <button type="submit" class="btn">Search</button>
        </div>
      </div>
    </Form>

    <DataTable
      v-if="dataTable.initiatedFirstSearch"
      :columns="dataTable.columns"
      :loading="dataTable.loading"
      :data="dataTable.data"
      @edit="editRecord"
    >
      <template v-slot:row="rowProps">
        <td>{{rowProps.item.name}}</td>
        <td>{{rowProps.item.party}}</td>
        <td>{{rowProps.item.gender}}</td>

        <td>{{rowProps.item.dob}}</td>
        <td>
          {{rowProps.item.phone}}
          <span v-if="rowProps.item.ext">x{{rowProps.item.ext}}</span>
          <span v-if="!rowProps.item.phone && rowProps.item.altPhone">(c) {{rowProps.item.altPhone}}</span>
        </td>
        <td>
          <a :href="`mailto:${rowProps.item.email}`">{{rowProps.item.email}}</a>
        </td>
        <td @click="editRecord(rowProps.item.id)" class="icon-more"></td>
      </template>
    </DataTable>

    <Modal v-if="modal.show" :title="modal.title" @close="closeModal">
      <p>Modal Data Goes Here</p>
      <p>Debug:</p>
      <pre>{{modal.data}}</pre>
    </Modal>
  </div>
</template>

<script>
import AppHeader from "@/assets/components/AppHeader";
import Form from "@/assets/components/Form";
import DataTable from "@/assets/components/DataTable";
import Modal from "@/assets/components/Modal";
import api from "@/assets/libs/api";

export default {
  name: "VoterRegistrationDatabase",
  components: { AppHeader, Form, DataTable, Modal },
  data() {
    return {
      dataTable: {
        loading: false,
        initiatedFirstSearch: false,
        columns: [
          { label: "Name", width: 30 },
          { label: "Party", width: 10 },
          { label: "Gender", width: 10 },
          { label: "Address", width: 30 },
          { label: "DOB", width: 15 },
          { label: "More", width: 5 }
        ],
        data: []
      },
      modal: {
        show: false,
        title: ""
      },
      form: {
        data: {}
      }
    };
  },
  methods: {
    search() {
      this.dataTable.initiatedFirstSearch = true;
      this.dataTable.loading = true;
      console.log(this.form.data);
      api.get("voter-database/search", this.form.data).then(data => {
        console.log(data);
        this.dataTable.loading = false;
      });
    },
    editRecord() {},
    serialize(obj) {
      var str = [];
      for (var p in obj)
        if (obj.hasOwnProperty(p)) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
      return str.join("&");
    }
  }
};
</script>