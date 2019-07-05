<template>
  <form class="voter-search-container">
    <div class="row">
      <div class="col-md-4 form-group">
        <label>First Name</label>
        <input
          type="text"
          class="form-control ng-pristine ng-untouched ng-valid ng-empty"
          ng-model="query.firstName"
        />
      </div>
      <div class="col-md-4 form-group">
        <label>Last Name</label>
        <input
          type="text"
          class="form-control ng-pristine ng-untouched ng-valid ng-empty"
          ng-model="query.lastName"
        />
      </div>
      <div class="col-md-2 form-group">
        <label>Gender</label>
        <select
          class="form-control ng-pristine ng-untouched ng-valid ng-empty"
          ng-model="query.gender"
        >
          <option value selected="selected">Any</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
      </div>
      <div class="col-md-2 form-group">
        <label>Party</label>
        <select
          class="form-control ng-pristine ng-untouched ng-valid ng-empty"
          ng-model="query.party"
        >
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
        <input type="text" class="form-control" />
      </div>
      <div class="col-md-3 form-group">
        <label>City</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col-md-2 form-group">
        <label>Zip</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col-md-3 form-group">
        <label>County</label>
        <select class="form-control">
          <option value selected="selected">Any</option>
          <option value>Adair</option>
          <option value>Allen</option>
          <option value>Anderson</option>
          <option value>Ballard</option>
          <option value>Barren</option>
          <option value>Bath</option>
          <option value>Bell</option>
          <option value>Boone</option>
          <option value>Bourbon</option>
          <option value>Boyd</option>
          <option value>Boyle</option>
          <option value>Bracken</option>
          <option value>Breathitt</option>
          <option value>Breckinridge</option>
          <option value>Bullitt</option>
          <option value>Butler</option>
          <option value>Caldwell</option>
          <option value>Calloway</option>
          <option value>Campbell</option>
          <option value>Carlisle</option>
          <option value>Carroll</option>
          <option value>Carter</option>
          <option value>Casey</option>
          <option value>Christian</option>
          <option value>Clark</option>
          <option value>Clay</option>
          <option value>Clinton</option>
          <option value>Crittenden</option>
          <option value>Cumberland</option>
          <option value>Daviess</option>
          <option value>Edmonson</option>
          <option value>Elliott</option>
          <option value>Estill</option>
          <option value>Fayette</option>
          <option value>Fleming</option>
          <option value>Floyd</option>
          <option value>Franklin</option>
          <option value>Fulton</option>
          <option value>Gallatin</option>
          <option value>Garrard</option>
          <option value>Grant</option>
          <option value>Graves</option>
          <option value>Grayson</option>
          <option value>Green</option>
          <option value>Greenup</option>
          <option value>Hancock</option>
          <option value>Hardin</option>
          <option value>Harlan</option>
          <option value>Harrison</option>
          <option value>Hart</option>
          <option value>Henderson</option>
          <option value>Henry</option>
          <option value>Hickman</option>
          <option value>Hopkins</option>
          <option value>Jackson</option>
          <option value>Jefferson</option>
          <option value>Jessamine</option>
          <option value>Johnson</option>
          <option value>Kenton</option>
          <option value>Knott</option>
          <option value>Knox</option>
          <option value>Larue</option>
          <option value>Laurel</option>
          <option value>Lawrence</option>
          <option value>Lee</option>
          <option value>Leslie</option>
          <option value>Letcher</option>
          <option value>Lewis</option>
          <option value>Lincoln</option>
          <option value>Livingston</option>
          <option value>Logan</option>
          <option value>Lyon</option>
          <option value>McCracken</option>
          <option value>McCreary</option>
          <option value>McLean</option>
          <option value>Madison</option>
          <option value>Magoffin</option>
          <option value>Marion</option>
          <option value>Marshall</option>
          <option value>Martin</option>
          <option value>Mason</option>
          <option value>Meade</option>
          <option value>Menifee</option>
          <option value>Mercer</option>
          <option value>Metcalfe</option>
          <option value>Monroe</option>
          <option value>Montgomery</option>
          <option value>Morgan</option>
          <option value>Muhlenberg</option>
          <option value>Nelson</option>
          <option value>Nicholas</option>
          <option value>Ohio</option>
          <option value>Oldham</option>
          <option value>Owen</option>
          <option value>Owsley</option>
          <option value>Pendleton</option>
          <option value>Perry</option>
          <option value>Pike</option>
          <option value>Powell</option>
          <option value>Pulaski</option>
          <option value>Robertson</option>
          <option value>Rockcastle</option>
          <option value>Rowan</option>
          <option value>Russell</option>
          <option value>Scott</option>
          <option value>Shelby</option>
          <option value>Simpson</option>
          <option value>Spencer</option>
          <option value>Taylor</option>
          <option value>Todd</option>
          <option value>Trigg</option>
          <option value>Trimble</option>
          <option value>Union</option>
          <option value>Warren</option>
          <option value>Washington</option>
          <option value>Wayne</option>
          <option value>Webster</option>
          <option value>Whitley</option>
          <option value>Wolfe</option>
          <option value>Woodford</option>
        </select>
      </div>
    </div>
    <div class="row">
      <button type="button" class="btn" @click="$emit('search', {foo:'bar'})">Search</button>
    </div>
  </form>
</template>


<script>
export default {
  name: "VoterSearch",
};
</script>

<style scoped>
.voter-search-container {
  max-width: 960px;
  margin: 0 auto;
}
</style>