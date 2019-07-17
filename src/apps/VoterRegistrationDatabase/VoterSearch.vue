<template>
  <form class="voter-search-container">
    <div class="row">
      <div class="col-md-4 form-group">
        <label>First Name</label>
        <input
          type="text"
          class="form-control"
          v-model="voterSearch.firstName"
          autocomplete="voterFirstName"
        />
      </div>
      <div class="col-md-4 form-group">
        <label>Last Name</label>
        <input
          type="text"
          class="form-control"
          v-model="voterSearch.lastName"
          autocomplete="voterLastName"
        />
      </div>
      <div class="col-md-2 form-group">
        <label>Gender</label>
        <select class="form-control" v-model="voterSearch.gender">
          <option value selected="selected">Any</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
      </div>
      <div class="col-md-2 form-group">
        <label>Party</label>
        <select class="form-control" v-model="voterSearch.party">
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
          v-model="voterSearch.address"
          autocomplete="voterAddress"
        />
      </div>
      <div class="col-md-3 form-group">
        <label>City</label>
        <input type="text" class="form-control" v-model="voterSearch.city" autocomplete="voterCity" />
      </div>
      <div class="col-md-2 form-group">
        <label>Zip</label>
        <input type="text" class="form-control" v-model="voterSearch.zip" autocomplete="voterZip" />
      </div>
      <div class="col-md-3 form-group">
        <label>County</label>
        <select class="form-control" v-model="voterSearch.county">
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
        <button type="button" class="btn" @click="$emit('search', voterSearch)">Search</button>
      </div>
    </div>
  </form>
</template>


<script>
export default {
  name: "VoterSearch",
  data() {
    return {
      voterSearch: { gender: "", party: "", county: "" }
    };
  }
};
</script>

<style scoped>
.voter-search-container {
  max-width: 960px;
  width: 100%;
  margin: 50px auto;
  padding-bottom: 30px;
  border-bottom: 1px solid #ddd;
}

label {
  font-weight: bold;
  font-family: Arial;
  color: #555;
}
</style>