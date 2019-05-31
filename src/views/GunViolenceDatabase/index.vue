<template>
  <div class="app-container">
    <AppHeaderSearch/>
    <ListView :list="incidents"/>
  </div>
</template>

<script>
import ListView from "./ListView";
import AppHeaderSearch from "@/components/AppHeaderSearch";

export default {
  name: "GunViolenceDatabase",
  components: { ListView, AppHeaderSearch },
  data() {
    return {
      incidents: [
  {
    "id": 0,
    "date": "2019-01-02",
    "time": "05:15:45",
    "address": "751 Strong Place",
    "city": "Baker",
    "state": "KY",
    "zip": 39045,
    "latitude": -66.867026,
    "longitude": -165.581584,
    "narrative": "Cupidatat sunt exercitation labore ex dolor. Nisi excepteur elit deserunt culpa. Aliqua nisi deserunt enim excepteur nisi deserunt mollit sint et. Eu sint qui reprehenderit amet in in aliquip laboris proident consectetur consequat fugiat irure.\r\n",
    "notes": "Irure laboris sint excepteur officia ad officia.",
    "guns": "in dolore tempor",
    "source": "Sint sint qui duis sunt Lorem est mollit. In enim cillum elit officia mollit pariatur anim sint culpa ut adipisicing dolor culpa dolor. Tempor officia mollit ipsum ullamco. Mollit aute est anim elit consectetur labore incididunt officia labore dolore aliquip veniam.\r\nOfficia ad do non fugiat officia ut enim consequat deserunt do cupidatat tempor sit est. Laborum tempor esse in id occaecat commodo duis do duis ullamco cupidatat. Cupidatat eu esse nulla eiusmod duis ullamco quis sint ad in commodo consectetur. Ullamco sit consequat ullamco cillum non. Anim voluptate aliquip exercitation elit tempor est voluptate incididunt proident excepteur duis.\r\n",
    "story": "https://www.courier-journal.com/story/news/2019/05/30/kentucky-supreme-court-hear-custody-case-involving-de-facto-parent/1212423001/",
    "updated": "2015-12-08",
    "victimCount": 1,
    "suspectCount": 2
  },
  {
    "id": 1,
    "date": "2017-02-24",
    "time": "10:44:29",
    "address": "371 Commerce Street",
    "city": "Topaz",
    "state": "KY",
    "zip": 88663,
    "latitude": -1.507725,
    "longitude": -51.528885,
    "narrative": "Occaecat irure non minim dolore. Sit commodo enim ea exercitation sit enim. Reprehenderit dolor velit deserunt non non qui non voluptate magna.\r\n",
    "notes": "Ad irure laboris non Lorem voluptate tempor nostrud mollit qui enim non nisi.",
    "guns": "proident dolor velit",
    "source": "Do adipisicing occaecat ea deserunt. Elit ea excepteur mollit ut veniam pariatur do duis. Laboris non nostrud laboris est tempor culpa occaecat consequat aliqua veniam exercitation incididunt non ut. In sit est consequat dolore eiusmod et cupidatat aliqua. Eiusmod duis tempor reprehenderit fugiat magna labore culpa est id sit irure. Nostrud adipisicing officia labore elit non.\r\nEiusmod aliqua eu ea exercitation reprehenderit fugiat consectetur. Exercitation non aliquip enim deserunt. Culpa eu reprehenderit ea tempor amet occaecat proident. Dolore nisi nulla aliquip deserunt quis deserunt occaecat.\r\n",
    "story": "https://www.courier-journal.com/story/news/2019/05/30/kentucky-supreme-court-hear-custody-case-involving-de-facto-parent/1212423001/",
    "updated": "2015-05-02",
    "victimCount": 3,
    "suspectCount": 1
  },
  {
    "id": 2,
    "date": "2015-11-14",
    "time": "01:00:10",
    "address": "743 Krier Place",
    "city": "Coalmont",
    "state": "KY",
    "zip": 85051,
    "latitude": -74.379107,
    "longitude": 107.155454,
    "narrative": "Quis nisi consectetur labore enim minim aliquip voluptate amet aliqua proident reprehenderit sunt labore laboris. Cupidatat ex elit consectetur velit do mollit amet tempor elit esse ex sit deserunt sit. Commodo eu consequat eu minim dolor magna. Ut voluptate velit non aliqua id. Et culpa adipisicing cillum elit qui tempor cupidatat tempor laboris elit deserunt non non. Velit id cupidatat veniam sit aute proident.\r\n",
    "notes": "Nulla commodo nisi cupidatat ipsum tempor nisi.",
    "guns": "incididunt reprehenderit reprehenderit",
    "source": "Ipsum culpa amet qui in eu laborum proident voluptate mollit occaecat ipsum. Sint dolore anim nisi dolore velit ullamco aliqua veniam ea exercitation aute. Nulla qui quis ullamco elit et duis deserunt id adipisicing aliqua cupidatat qui mollit occaecat.\r\nCupidatat exercitation culpa id aliquip est qui aute ad amet quis incididunt proident. Voluptate amet do aliquip qui. Culpa sit exercitation sit mollit ipsum magna.\r\n",
    "story": "https://www.courier-journal.com/story/news/2019/05/30/kentucky-supreme-court-hear-custody-case-involving-de-facto-parent/1212423001/",
    "updated": "2019-01-24",
    "victimCount": 1,
    "suspectCount": 2
  },
  {
    "id": 3,
    "date": "2016-09-29",
    "time": "02:17:45",
    "address": "496 Bayview Place",
    "city": "Harleigh",
    "state": "KY",
    "zip": 12334,
    "latitude": -89.440826,
    "longitude": 32.668129,
    "narrative": "Ullamco sunt mollit aute est incididunt sunt ad sunt sit eu mollit. Anim consequat amet veniam do excepteur dolor ad fugiat cillum. Officia Lorem Lorem velit ea labore tempor sit tempor amet consequat cupidatat magna amet. Veniam minim incididunt sunt mollit fugiat qui sint laboris non magna consectetur velit laboris.\r\n",
    "notes": "Ex cupidatat labore tempor laboris sit consectetur anim.",
    "guns": "quis excepteur do",
    "source": "Ullamco cupidatat elit velit exercitation consectetur eiusmod. Est voluptate sunt velit pariatur amet sint dolor do laborum. Non labore eiusmod eu qui adipisicing minim.\r\nEx adipisicing nulla aute adipisicing reprehenderit dolor culpa laboris dolor. Deserunt officia pariatur labore reprehenderit anim ullamco et non commodo cupidatat Lorem ad. Consequat cillum officia mollit reprehenderit aliqua laboris consequat Lorem. Non cupidatat in in ut nisi pariatur minim consequat et laborum irure.\r\n",
    "story": "https://www.courier-journal.com/story/news/2019/05/30/kentucky-supreme-court-hear-custody-case-involving-de-facto-parent/1212423001/",
    "updated": "2018-10-20",
    "victimCount": 4,
    "suspectCount": 0
  },
  {
    "id": 4,
    "date": "2014-07-11",
    "time": "04:35:06",
    "address": "651 Wakeman Place",
    "city": "Dixie",
    "state": "KY",
    "zip": 63251,
    "latitude": -17.338456,
    "longitude": -156.893098,
    "narrative": "Consequat dolore eu in consequat. Laborum sit commodo eiusmod velit fugiat ut ullamco sint elit. Eu officia voluptate dolor do aliquip anim laborum qui do ipsum sint anim voluptate sit. Deserunt amet enim reprehenderit reprehenderit dolor ipsum reprehenderit. Do dolor ut adipisicing fugiat officia cillum cupidatat officia est. Quis mollit duis ea laborum quis ipsum labore adipisicing esse culpa officia.\r\n",
    "notes": "Exercitation laboris aute sint proident consectetur nulla nostrud minim irure magna.",
    "guns": "consectetur fugiat ut",
    "source": "Amet aute anim fugiat ullamco Lorem id reprehenderit culpa sint qui quis nulla nisi amet. Aliquip et qui aliquip consequat ipsum. Est enim quis occaecat cillum magna mollit elit. Aliqua id sit ullamco in. Irure magna do incididunt mollit qui culpa.\r\nVeniam eu eiusmod ad eiusmod dolore proident excepteur nulla velit. Ex exercitation commodo labore duis do. In quis esse et ex minim culpa duis et. Consequat consectetur laboris cillum nostrud. Anim aliquip consequat enim occaecat cillum nostrud mollit ipsum laborum commodo veniam commodo.\r\n",
    "story": "https://www.courier-journal.com/story/news/2019/05/30/kentucky-supreme-court-hear-custody-case-involving-de-facto-parent/1212423001/",
    "updated": "2016-01-29",
    "victimCount": 0,
    "suspectCount": 2
  },
  {
    "id": 5,
    "date": "2015-02-10",
    "time": "09:41:29",
    "address": "842 Lancaster Avenue",
    "city": "Succasunna",
    "state": "KY",
    "zip": 41140,
    "latitude": -51.359246,
    "longitude": 136.6378,
    "narrative": "Nostrud sunt deserunt magna id cupidatat velit ad nulla proident sunt voluptate. Anim nostrud laboris esse aliquip. Cupidatat qui culpa ut reprehenderit qui aliquip cupidatat reprehenderit.\r\n",
    "notes": "Nulla cillum fugiat do quis nulla ut sint non ipsum ex ut.",
    "guns": "ipsum ad aliqua",
    "source": "Quis commodo cillum id dolore consequat cillum laborum voluptate dolore veniam. Anim mollit culpa duis laboris reprehenderit proident aliqua velit excepteur enim. Incididunt culpa dolore eiusmod dolor enim do.\r\nEst fugiat incididunt nulla est mollit exercitation ipsum ex ea. Incididunt Lorem magna dolore et proident ex. Mollit reprehenderit dolore commodo labore laboris incididunt exercitation consectetur sint cillum. Ut reprehenderit id duis adipisicing sunt eu deserunt esse Lorem nulla aute enim sunt. Duis mollit reprehenderit fugiat fugiat dolor exercitation ut esse voluptate. Lorem nisi nostrud incididunt enim minim eiusmod adipisicing do veniam reprehenderit voluptate. Occaecat commodo ea eu id amet officia cupidatat.\r\n",
    "story": "https://www.courier-journal.com/story/news/2019/05/30/kentucky-supreme-court-hear-custody-case-involving-de-facto-parent/1212423001/",
    "updated": "2017-09-09",
    "victimCount": 1,
    "suspectCount": 0
  },
  {
    "id": 6,
    "date": "2017-07-15",
    "time": "06:43:30",
    "address": "774 Knight Court",
    "city": "Greenock",
    "state": "KY",
    "zip": 66793,
    "latitude": 48.938467,
    "longitude": 22.373482,
    "narrative": "Culpa sit aute exercitation irure nisi eiusmod elit dolore incididunt amet mollit irure qui. Magna aute officia culpa dolore occaecat elit ex enim cupidatat consequat reprehenderit ex elit. Dolore non amet Lorem minim laboris duis incididunt eu Lorem deserunt. Laborum velit ad quis nisi duis qui culpa enim ad sint occaecat.\r\n",
    "notes": "Est laborum ex et in ut adipisicing adipisicing duis minim enim officia velit irure qui.",
    "guns": "quis nulla ea",
    "source": "Esse ea laboris cupidatat cupidatat in cupidatat sit aliqua elit aliqua. Amet laborum sint officia ullamco sint dolor adipisicing aliqua ut occaecat tempor. Lorem esse elit laboris nulla ad consequat aliqua minim consequat nostrud. Officia labore proident non voluptate. Irure consectetur et elit aliquip tempor consectetur laborum esse.\r\nOfficia excepteur aute aute et irure ad sunt velit adipisicing est magna do. Cupidatat Lorem cillum aute duis nisi nostrud labore labore aliquip cillum consectetur aliqua labore adipisicing. Aute voluptate culpa ad dolore anim ut sunt minim ea commodo ex anim aliquip adipisicing. Proident sint quis laborum id do magna non tempor adipisicing.\r\n",
    "story": "https://www.courier-journal.com/story/news/2019/05/30/kentucky-supreme-court-hear-custody-case-involving-de-facto-parent/1212423001/",
    "updated": "2019-02-11",
    "victimCount": 2,
    "suspectCount": 1
  },
  {
    "id": 7,
    "date": "2014-01-14",
    "time": "12:33:14",
    "address": "562 Doone Court",
    "city": "Thermal",
    "state": "KY",
    "zip": 53559,
    "latitude": -42.048461,
    "longitude": -4.661025,
    "narrative": "Cillum anim minim excepteur ut cillum sit anim irure labore occaecat voluptate laborum cupidatat non. Deserunt sunt do minim consectetur voluptate laboris. Ex laboris Lorem anim id deserunt ex aliqua reprehenderit. Excepteur mollit aliquip veniam nisi deserunt occaecat mollit reprehenderit esse aliqua do reprehenderit fugiat culpa.\r\n",
    "notes": "Sit cupidatat laboris esse do excepteur pariatur quis reprehenderit exercitation elit incididunt quis ut.",
    "guns": "commodo consectetur quis",
    "source": "Culpa qui labore pariatur sunt consectetur est qui dolor excepteur ut do exercitation. Tempor deserunt nulla tempor deserunt exercitation nisi sint duis fugiat amet labore nostrud ipsum. Magna exercitation ad laborum voluptate exercitation ipsum reprehenderit adipisicing aliquip qui. Officia esse anim mollit laborum officia anim amet commodo reprehenderit veniam dolore.\r\nLaboris excepteur cupidatat ad sint laborum deserunt commodo incididunt. Dolor magna nisi ad adipisicing. Voluptate consectetur id nulla deserunt nostrud non id esse tempor. Ad culpa est qui est.\r\n",
    "story": "https://www.courier-journal.com/story/news/2019/05/30/kentucky-supreme-court-hear-custody-case-involving-de-facto-parent/1212423001/",
    "updated": "2015-04-05",
    "victimCount": 4,
    "suspectCount": 0
  },
  {
    "id": 8,
    "date": "2017-06-18",
    "time": "12:15:07",
    "address": "198 Mill Avenue",
    "city": "Alderpoint",
    "state": "KY",
    "zip": 52228,
    "latitude": 72.51952,
    "longitude": -84.386252,
    "narrative": "Laborum ea laborum et incididunt cillum ea ex ullamco in ut eiusmod Lorem ullamco. Voluptate aliquip nostrud voluptate magna dolore velit irure et esse laboris incididunt. Minim proident in enim elit anim culpa cillum aliquip minim irure in nisi exercitation sunt.\r\n",
    "notes": "Exercitation minim aliquip ullamco ex consectetur ullamco occaecat voluptate non esse ad irure.",
    "guns": "sunt mollit reprehenderit",
    "source": "Ipsum cupidatat deserunt sunt quis. Reprehenderit ad et sint ad veniam. Cupidatat consequat duis labore et Lorem voluptate non qui magna velit. Sint excepteur velit velit ex ex incididunt eu qui dolore quis sit laboris duis. Mollit pariatur nisi velit non voluptate nisi et consequat nostrud ad aute. Proident in dolore amet ex ea.\r\nConsequat labore velit amet ad. Incididunt dolor ut nisi ut laborum nostrud magna sunt aliquip officia. Sunt dolor ipsum nisi ex amet eiusmod cupidatat aliqua sit Lorem non aute cillum.\r\n",
    "story": "https://www.courier-journal.com/story/news/2019/05/30/kentucky-supreme-court-hear-custody-case-involving-de-facto-parent/1212423001/",
    "updated": "2017-07-07",
    "victimCount": 1,
    "suspectCount": 0
  },
  {
    "id": 9,
    "date": "2017-11-02",
    "time": "09:52:12",
    "address": "472 Nolans Lane",
    "city": "Jackpot",
    "state": "KY",
    "zip": 35985,
    "latitude": -66.769452,
    "longitude": 42.199086,
    "narrative": "Fugiat minim nulla do incididunt voluptate aliquip sit minim sint elit nisi quis incididunt qui. Et aute aute ex ullamco adipisicing minim deserunt do. Magna qui ut officia quis exercitation minim nulla voluptate ad amet est Lorem. Nulla do ullamco elit cupidatat.\r\n",
    "notes": "Nostrud et id ut minim pariatur.",
    "guns": "deserunt mollit aute",
    "source": "Elit laborum aliqua do fugiat tempor pariatur excepteur nisi ad nostrud. Occaecat ipsum exercitation sit minim. Tempor mollit excepteur in enim laborum ut reprehenderit sint et adipisicing. Pariatur et dolore ea cillum deserunt proident commodo quis deserunt ea anim cillum. Sunt ipsum duis sunt anim in aute quis aliqua ex. Cillum cillum nisi occaecat id laboris sit elit culpa nulla consectetur id duis anim. Labore amet ullamco id dolor esse dolor in in officia est ex nostrud proident sunt.\r\nLaborum mollit nisi elit cupidatat labore irure commodo incididunt occaecat adipisicing amet proident anim. Culpa non sunt minim nulla exercitation. Elit laborum adipisicing pariatur nisi non adipisicing do consequat officia velit et nulla cillum dolor. Sunt nulla minim laborum tempor ea. Commodo in aliquip officia amet deserunt in sit Lorem consequat proident fugiat esse occaecat labore.\r\n",
    "story": "https://www.courier-journal.com/story/news/2019/05/30/kentucky-supreme-court-hear-custody-case-involving-de-facto-parent/1212423001/",
    "updated": "2017-06-23",
    "victimCount": 3,
    "suspectCount": 2
  },
  {
    "id": 10,
    "date": "2014-05-21",
    "time": "01:57:26",
    "address": "673 Clarkson Avenue",
    "city": "Nipinnawasee",
    "state": "KY",
    "zip": 36579,
    "latitude": 80.059788,
    "longitude": -37.807266,
    "narrative": "Velit aliqua aute labore aute labore. Cillum nulla anim culpa est duis magna exercitation in aliqua. Mollit eiusmod mollit et sunt ex nostrud duis. Dolore labore laborum reprehenderit duis laborum. Labore ut ea labore fugiat laboris sit incididunt qui. Esse reprehenderit nisi aute ipsum tempor excepteur non aliqua ad id id.\r\n",
    "notes": "Nisi ea ipsum id quis nisi duis dolor amet amet laborum sint occaecat ex adipisicing.",
    "guns": "ea ea veniam",
    "source": "Velit in ipsum ad aliqua officia deserunt elit est enim cillum dolor mollit sunt irure. Laborum ex ea commodo non Lorem cupidatat dolor officia. Aliqua exercitation consequat esse aute et excepteur laborum laborum ex sint exercitation. Sit excepteur exercitation non proident aliquip do sint minim quis reprehenderit do nisi. Voluptate magna esse pariatur ea nostrud dolore veniam. Magna eiusmod ut adipisicing mollit do irure aliqua. Voluptate sint et dolore do cupidatat non est dolor nostrud minim.\r\nCulpa exercitation incididunt nulla pariatur dolore ut laboris irure officia consectetur deserunt. Sit velit laboris do enim cupidatat incididunt et incididunt excepteur non ad enim ex est. Nulla non ipsum et aute commodo labore proident.\r\n",
    "story": "https://www.courier-journal.com/story/news/2019/05/30/kentucky-supreme-court-hear-custody-case-involving-de-facto-parent/1212423001/",
    "updated": "2014-05-23",
    "victimCount": 4,
    "suspectCount": 0
  },
  {
    "id": 11,
    "date": "2018-06-22",
    "time": "11:24:43",
    "address": "170 Etna Street",
    "city": "Baden",
    "state": "KY",
    "zip": 42988,
    "latitude": -87.694025,
    "longitude": -79.681559,
    "narrative": "Exercitation sit ex magna pariatur sint. Eiusmod tempor aliqua fugiat ad aliqua nisi sint cillum fugiat eu pariatur enim. Ullamco consequat eiusmod amet aute fugiat nostrud laboris. Est cupidatat id velit est dolore. Sunt deserunt sunt amet qui.\r\n",
    "notes": "Nostrud ullamco pariatur labore cupidatat commodo consequat culpa voluptate cupidatat enim nisi amet cupidatat aliqua.",
    "guns": "veniam laboris adipisicing",
    "source": "Duis in eiusmod consectetur non irure qui irure aute. Consectetur nisi occaecat duis est aliqua incididunt veniam consectetur aute duis Lorem. Nostrud culpa ullamco sit elit anim labore Lorem amet. Tempor esse sunt occaecat excepteur ea dolore mollit eu cupidatat enim anim excepteur.\r\nAute ex adipisicing excepteur esse reprehenderit minim elit ullamco fugiat ex cupidatat dolore. Eiusmod pariatur proident ad ullamco veniam. Dolore consequat consectetur enim sint laborum. Deserunt ullamco cupidatat occaecat velit irure consectetur elit nostrud. Voluptate veniam aute enim sit nulla ea officia nulla dolor. Reprehenderit ullamco dolore duis cillum aliquip nulla veniam consequat nisi.\r\n",
    "story": "https://www.courier-journal.com/story/news/2019/05/30/kentucky-supreme-court-hear-custody-case-involving-de-facto-parent/1212423001/",
    "updated": "2019-05-24",
    "victimCount": 2,
    "suspectCount": 0
  },
  {
    "id": 12,
    "date": "2015-01-15",
    "time": "05:20:48",
    "address": "519 Maujer Street",
    "city": "Canterwood",
    "state": "KY",
    "zip": 59613,
    "latitude": -33.557232,
    "longitude": -124.118773,
    "narrative": "Cupidatat minim occaecat et cupidatat ut eiusmod est eiusmod. Eu magna culpa laboris est occaecat quis. Duis anim Lorem adipisicing ut amet. Qui deserunt commodo ex laborum in do elit fugiat sint cupidatat dolore ipsum ad. Cupidatat in in amet in adipisicing exercitation aute anim culpa proident.\r\n",
    "notes": "Ipsum et magna eu qui enim commodo et incididunt voluptate cillum ex consequat.",
    "guns": "sit dolore est",
    "source": "Culpa quis do velit consequat veniam elit Lorem cupidatat duis nulla laborum nostrud. Cillum consectetur elit elit reprehenderit qui dolor nisi. Eiusmod amet quis anim aute amet qui ullamco nisi fugiat eiusmod voluptate.\r\nLorem eiusmod reprehenderit eiusmod laborum ex nisi ullamco. Adipisicing aliqua incididunt magna magna est reprehenderit ea aliquip. Non fugiat pariatur eu incididunt id eu elit qui voluptate occaecat id ipsum irure. Velit anim sunt id proident laborum. Irure occaecat velit ut excepteur laboris exercitation.\r\n",
    "story": "https://www.courier-journal.com/story/news/2019/05/30/kentucky-supreme-court-hear-custody-case-involving-de-facto-parent/1212423001/",
    "updated": "2018-12-04",
    "victimCount": 3,
    "suspectCount": 0
  },
  {
    "id": 13,
    "date": "2015-10-23",
    "time": "11:52:35",
    "address": "305 Clinton Street",
    "city": "Crawfordsville",
    "state": "KY",
    "zip": 52433,
    "latitude": -19.308405,
    "longitude": 89.626451,
    "narrative": "Qui officia ex quis ex cillum exercitation exercitation cillum laboris ullamco adipisicing eiusmod. Velit quis mollit aliqua qui aliqua irure et cillum et ex excepteur culpa. Ullamco veniam occaecat Lorem in. Quis mollit deserunt voluptate adipisicing voluptate laboris.\r\n",
    "notes": "Et eiusmod nisi exercitation amet dolore ad commodo dolor commodo deserunt labore anim.",
    "guns": "elit sunt excepteur",
    "source": "Est aute exercitation ad dolor. Pariatur Lorem exercitation anim ad aute mollit dolore ullamco. Et officia laboris aute quis amet tempor sit consectetur. Adipisicing tempor do minim consectetur nostrud aliqua officia proident amet do sit cillum occaecat reprehenderit.\r\nMinim voluptate officia magna incididunt deserunt nostrud quis cupidatat velit Lorem ullamco sunt proident. Nostrud consectetur pariatur minim tempor ex non nulla tempor. Exercitation exercitation eiusmod ut duis minim laborum quis commodo magna mollit reprehenderit amet nisi. Non sunt irure incididunt aliqua laborum ad.\r\n",
    "story": "https://www.courier-journal.com/story/news/2019/05/30/kentucky-supreme-court-hear-custody-case-involving-de-facto-parent/1212423001/",
    "updated": "2014-05-02",
    "victimCount": 3,
    "suspectCount": 0
  },
  {
    "id": 14,
    "date": "2018-08-24",
    "time": "04:41:35",
    "address": "225 Burnett Street",
    "city": "Garberville",
    "state": "KY",
    "zip": 30711,
    "latitude": 64.683246,
    "longitude": -93.900968,
    "narrative": "Cillum Lorem eiusmod voluptate laboris elit commodo ut. Voluptate fugiat ullamco est ullamco minim dolor excepteur occaecat officia. Commodo labore elit mollit irure quis in eu ipsum aliquip aliqua sint ullamco. Sint ex consequat cillum dolore voluptate pariatur dolor anim aliquip Lorem. Occaecat labore nisi nisi consectetur fugiat nulla aute. Commodo commodo anim labore sit culpa ad esse aliqua Lorem anim tempor non cupidatat. Laboris quis consequat enim elit adipisicing minim reprehenderit cupidatat qui.\r\n",
    "notes": "Exercitation officia adipisicing amet cupidatat.",
    "guns": "anim sint amet",
    "source": "Voluptate enim commodo eiusmod dolore ut nulla. Aute sunt minim sit ullamco deserunt commodo amet et esse pariatur minim sit. Culpa fugiat sint laboris labore officia aliqua fugiat duis mollit consequat aliqua incididunt excepteur. Nostrud laboris ut consectetur do. Officia velit aliquip proident sit ea dolore irure amet magna ullamco eiusmod sunt. Eu nulla in nostrud non eu quis nisi mollit incididunt.\r\nEnim culpa magna culpa excepteur in non sint laborum excepteur non ex sit nisi reprehenderit. Irure anim cillum incididunt in proident id cupidatat voluptate eiusmod fugiat eiusmod qui aute. Ipsum irure dolore aliqua incididunt non aliquip proident mollit eiusmod nulla.\r\n",
    "story": "https://www.courier-journal.com/story/news/2019/05/30/kentucky-supreme-court-hear-custody-case-involving-de-facto-parent/1212423001/",
    "updated": "2017-02-06",
    "victimCount": 3,
    "suspectCount": 0
  },
  {
    "id": 15,
    "date": "2019-03-27",
    "time": "01:19:36",
    "address": "554 Lynch Street",
    "city": "Caroline",
    "state": "KY",
    "zip": 73957,
    "latitude": 76.139113,
    "longitude": 97.577074,
    "narrative": "Non commodo laborum id deserunt reprehenderit laborum occaecat laborum veniam mollit. Qui pariatur reprehenderit ea aliquip magna elit excepteur. Lorem nostrud sit consectetur enim irure tempor et minim do qui aliquip minim. Quis veniam mollit id aliquip deserunt eiusmod ad tempor consequat ullamco dolore aliqua ipsum cupidatat. Nostrud enim nostrud et adipisicing esse consequat proident ex elit proident esse enim. Qui nostrud duis nulla culpa aliquip sint sint commodo reprehenderit deserunt mollit consectetur mollit adipisicing.\r\n",
    "notes": "Voluptate aute velit est laboris tempor amet dolor duis ad nostrud proident consequat id.",
    "guns": "nostrud duis duis",
    "source": "Qui incididunt ad adipisicing magna magna ad eu laboris in ea anim. Cupidatat non id amet laboris eiusmod. Qui velit id dolor quis est. Nostrud occaecat irure excepteur exercitation mollit est minim tempor culpa magna enim consectetur consectetur velit. Ad et dolore nostrud dolore deserunt.\r\nLabore ullamco magna eu deserunt cillum. Magna velit nulla pariatur reprehenderit. Fugiat anim qui officia consequat consequat deserunt ad amet. Officia et nisi esse dolore exercitation. Deserunt minim nisi incididunt officia nisi veniam excepteur mollit irure aliqua dolor. Aute veniam tempor sint tempor irure est occaecat voluptate quis eiusmod quis veniam. Dolor amet id excepteur consectetur laborum occaecat est.\r\n",
    "story": "https://www.courier-journal.com/story/news/2019/05/30/kentucky-supreme-court-hear-custody-case-involving-de-facto-parent/1212423001/",
    "updated": "2019-02-13",
    "victimCount": 2,
    "suspectCount": 0
  },
  {
    "id": 16,
    "date": "2015-12-09",
    "time": "06:28:30",
    "address": "494 Nixon Court",
    "city": "Convent",
    "state": "KY",
    "zip": 97004,
    "latitude": 26.895607,
    "longitude": -94.368507,
    "narrative": "Laboris minim ea consectetur pariatur. Anim minim id fugiat eiusmod est ipsum nisi sint mollit veniam occaecat sunt laboris. Tempor voluptate officia deserunt voluptate sint veniam. Mollit anim nulla laborum tempor excepteur ut Lorem laborum aliqua non dolor mollit id. Ut dolor esse eu sunt dolor. Deserunt velit sint officia mollit exercitation ullamco labore ex. Reprehenderit reprehenderit exercitation ipsum velit in ut.\r\n",
    "notes": "Qui non irure officia Lorem est amet deserunt.",
    "guns": "ullamco pariatur enim",
    "source": "Eiusmod Lorem proident dolor sint consectetur veniam reprehenderit dolor amet amet id pariatur. Ullamco proident velit irure qui incididunt. Irure deserunt duis deserunt occaecat dolor elit reprehenderit sint. Exercitation mollit sunt pariatur aliquip excepteur nostrud nisi enim.\r\nEst nisi esse cupidatat irure ut. Tempor culpa velit dolor adipisicing pariatur qui nostrud adipisicing do eiusmod ut incididunt enim in. Laborum commodo veniam commodo eu occaecat commodo pariatur officia deserunt et officia.\r\n",
    "story": "https://www.courier-journal.com/story/news/2019/05/30/kentucky-supreme-court-hear-custody-case-involving-de-facto-parent/1212423001/",
    "updated": "2014-05-20",
    "victimCount": 1,
    "suspectCount": 1
  },
  {
    "id": 17,
    "date": "2017-07-08",
    "time": "12:53:33",
    "address": "197 Pershing Loop",
    "city": "Hemlock",
    "state": "KY",
    "zip": 90952,
    "latitude": 35.665383,
    "longitude": -35.145213,
    "narrative": "Ut mollit officia sit tempor quis ut. Deserunt eu occaecat ea laboris dolor nulla est laborum irure. Excepteur quis deserunt et amet mollit nisi aute ea reprehenderit. Proident mollit non est enim tempor sit cupidatat minim. Consectetur ex reprehenderit et excepteur elit quis.\r\n",
    "notes": "Enim culpa non occaecat anim enim labore elit sint duis.",
    "guns": "nisi ut aliqua",
    "source": "Voluptate ex enim nisi quis esse exercitation consectetur minim. Voluptate enim eiusmod elit eiusmod aliquip in pariatur id deserunt. Commodo do voluptate tempor labore do anim duis ut nostrud tempor dolor esse.\r\nVeniam exercitation qui qui nostrud elit ex nulla elit eiusmod ea nostrud. Occaecat eiusmod et mollit cillum adipisicing anim cillum mollit eiusmod duis consequat. Incididunt consequat incididunt et proident occaecat occaecat laboris cillum eiusmod aliquip quis dolore tempor adipisicing. Enim consectetur mollit dolore mollit do. Excepteur nulla elit adipisicing occaecat dolore quis nisi. Ipsum non non occaecat nisi consectetur consectetur fugiat.\r\n",
    "story": "https://www.courier-journal.com/story/news/2019/05/30/kentucky-supreme-court-hear-custody-case-involving-de-facto-parent/1212423001/",
    "updated": "2014-12-12",
    "victimCount": 0,
    "suspectCount": 0
  },
  {
    "id": 18,
    "date": "2018-04-19",
    "time": "08:03:22",
    "address": "390 Holt Court",
    "city": "Logan",
    "state": "KY",
    "zip": 97910,
    "latitude": 0.376027,
    "longitude": 152.042438,
    "narrative": "Consectetur laboris ut ex nulla nulla exercitation. Incididunt elit ad velit dolor ex consectetur magna ipsum dolore cupidatat do. Do quis sint dolore sunt esse.\r\n",
    "notes": "Velit deserunt irure dolore dolore id et nostrud nostrud dolore ullamco sunt aliquip ea sit.",
    "guns": "eiusmod reprehenderit amet",
    "source": "Consectetur ea eiusmod consectetur eu culpa commodo ad elit quis velit. Officia eiusmod excepteur ea ullamco incididunt cupidatat eiusmod mollit est cillum. Eiusmod esse sint magna aliqua laboris do do consectetur aliqua laboris. Quis labore proident est aliqua fugiat reprehenderit officia qui aliqua eiusmod ad sint. Reprehenderit ipsum elit est laboris aute anim veniam dolor veniam exercitation amet proident in.\r\nExcepteur ad sunt proident dolore laboris tempor ad eu fugiat consequat do. Duis est magna eu exercitation minim ad cillum amet proident officia est nostrud officia nisi. Voluptate consequat do ex aliquip nostrud nisi nulla ipsum. Commodo eu sint do magna. Pariatur voluptate amet ullamco do culpa laborum ad ea dolor occaecat incididunt occaecat. Ea esse ullamco duis sit. Duis amet anim pariatur culpa duis laborum exercitation enim irure amet proident mollit exercitation irure.\r\n",
    "story": "https://www.courier-journal.com/story/news/2019/05/30/kentucky-supreme-court-hear-custody-case-involving-de-facto-parent/1212423001/",
    "updated": "2015-10-16",
    "victimCount": 4,
    "suspectCount": 1
  },
  {
    "id": 19,
    "date": "2018-06-08",
    "time": "04:37:08",
    "address": "189 Henry Street",
    "city": "Naomi",
    "state": "KY",
    "zip": 20083,
    "latitude": -48.894692,
    "longitude": -15.720778,
    "narrative": "Consequat nostrud Lorem dolore elit adipisicing aliquip ad aliqua irure ea sint deserunt amet sint. Sunt ipsum reprehenderit proident elit Lorem ad. Officia duis nisi do dolore occaecat dolor dolore in tempor do est. Eiusmod esse proident ea ipsum est sit est in.\r\n",
    "notes": "Occaecat ex anim enim dolore laborum aliqua ea ad nostrud labore deserunt amet aliqua.",
    "guns": "adipisicing adipisicing incididunt",
    "source": "Officia nisi id eu sit enim eu cupidatat nisi ullamco incididunt amet Lorem veniam. Sit laborum fugiat enim elit adipisicing irure officia ipsum elit. Aute consequat anim mollit ut ipsum duis ad magna sint. Duis est laboris excepteur eiusmod aliqua aliquip. Enim sint commodo anim culpa fugiat.\r\nNulla nostrud elit sunt enim eu duis aliqua duis fugiat laborum magna labore consectetur. Ad non proident labore quis Lorem laboris quis nulla nulla esse magna dolor dolore. Quis laboris fugiat non enim quis tempor commodo occaecat labore cillum proident nulla officia ea. Magna dolor amet occaecat ipsum. Cupidatat cupidatat aliquip adipisicing ut proident ex enim sunt. Laboris nulla pariatur quis voluptate fugiat nostrud cupidatat consequat ad laboris veniam ad.\r\n",
    "story": "https://www.courier-journal.com/story/news/2019/05/30/kentucky-supreme-court-hear-custody-case-involving-de-facto-parent/1212423001/",
    "updated": "2015-07-25",
    "victimCount": 2,
    "suspectCount": 2
  }
],
      suspects: [],
      victims: []
    };
  },
  methods: {
    getData() {
      fetch("/api/gun-violence-database/get-data")
        .then(res => res.json())
        .then(data => {
          this.incidents = data.incidents;
          this.suspects = data.suspects;
          this.victims = data.victims;
        })
        .catch(err => {});
    },
    upsertVictimData(id) {
      fetch("/api/gun-violence-database/upsert-victim", {
        method: "POST",
        body: null
      }).catch(err => {});
    },
    upsertSuspectData(id) {
      fetch("/api/gun-violence-database/upsert-suspect", {
        method: "POST",
        body: null
      }).catch(err => {});
    },
    upsertIncidentData(id) {
      fetch("/api/gun-violence-database/upsert-incident", {
        method: "POST",
        body: null
      }).catch(err => {});
    },
    deleteRecord(id, table) {
      fetch("/api/gun-violence-database/delete-record", {
        method: "DELETE",
        body: null
      }).catch(err => {});
    },
    saveImage() {}
  }
};
</script>