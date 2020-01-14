<template>
  <div id="app">
    <div style="display: flex; flex-direction: column;">
      <div style="padding: 15px; background-color: #eee; flex-shrink: 0;">
        <h1 style="margin: 0px;">vue-advanced-table</h1>
      </div>
      <div style="padding: 15px; display: flex; flex-direction: column; flex-grow: 1; flex-shrink: 1;">
        <vue-advanced-table v-bind="employeeTable">
          <template slot="column-employeeID" slot-scope="data">
            <input type="text" v-model.lazy="data.row.employeeID" style="width: 100px;" />
          </template>
          <template slot="column-location" slot-scope="data">
            <select v-model="data.row.location">
              <option v-for="location in locations" v-bind:key="location.id" v-bind:value="location.id">
                {{ location.name }}
              </option>
            </select>
          </template>
          <template slot="footer-employeeID" slot-scope="data">
            <div v-bind:style="{'align-self': 'right'}">{{ data.table.length }}</div>
          </template>
        </vue-advanced-table>
      </div>
      <div style="padding: 15px; background-color: #eee; flex-shrink: 0; margin-top: 15px;">
        <h4 style="margin-top: 0px; margin-bottom: 4px;">Settings</h4>
        <table cellpadding="8">
          <tr>
            <td>
              <label>
                Searchable<br />
                <select v-model="employeeTable.searchable" style="margin-top: 2px;">
                  <option v-bind:value="true">Yes</option>
                  <option v-bind:value="false">No</option>
                </select>
              </label>
            </td>
            <td>
              <label>
                Orderable<br />
                <select v-model="employeeTable.orderable" style="margin-top: 2px;">
                  <option v-bind:value="true">Yes</option>
                  <option v-bind:value="false">No</option>
                </select>
              </label>
            </td>
            <td>
              <label>
                Order By<br />
                <select v-model="employeeTable.order.column" style="margin-top: 2px;">
                  <option v-for="column in employeeTable.columns" v-bind:key="column.name" v-bind:value="column.name">{{ column.label }}</option>
                </select>
              </label>
            </td>
            <td>
              <label>
                Direction<br />
                <select v-model="employeeTable.order.direction" style="margin-top: 2px;">
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </label>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import vueAdvancedTable from './components/vue-advanced-table.vue'

export default {
  name: 'app',
  components: {
    vueAdvancedTable
  },
  data: function () {
    const self = this;
    return {
      employeeTable: {
        primaryKey: 'employeeID',
        rows: [
          {
            "employeeID": "5e1d2fcb3f36767e97303d3f",
            "firstName": "Gomez",
            "lastName": "Russo",
            "department": 0,
            "location": 0,
            "startDate": "Wednesday, November 16, 2016 2:30 PM"
          },
          {
            "employeeID": "5e1d2fcb6d7d5ce8af9b277a",
            "firstName": "Leblanc",
            "lastName": "Singleton",
            "department": 1,
            "location": 1,
            "startDate": "Thursday, May 14, 2015 12:35 PM"
          },
          {
            "employeeID": "5e1d2fcb6e55604709a3f500",
            "firstName": "Millie",
            "lastName": "Wolf",
            "department": 1,
            "location": 1,
            "startDate": "Monday, May 29, 2017 11:35 AM"
          },
          {
            "employeeID": "5e1d2fcba85ad35813bb4247",
            "firstName": "Little",
            "lastName": "Love",
            "department": 1,
            "location": 1,
            "startDate": "Tuesday, July 30, 2019 8:08 PM"
          },
          {
            "employeeID": "5e1d2fcbcff01948d98d9e13",
            "firstName": "Lynn",
            "lastName": "Beasley",
            "department": 1,
            "location": 1,
            "startDate": "Friday, April 12, 2019 11:46 AM"
          },
          {
            "employeeID": "5e1d2fcb8cad93ecc7be03e0",
            "firstName": "Tammi",
            "lastName": "Snyder",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, February 2, 2016 3:49 PM"
          },
          {
            "employeeID": "5e1d2fcbf04e46621f83d6b0",
            "firstName": "Chandra",
            "lastName": "Mccall",
            "department": 1,
            "location": 1,
            "startDate": "Tuesday, December 29, 2015 8:36 PM"
          },
          {
            "employeeID": "5e1d2fcbbacce83a8ab2ca20",
            "firstName": "Joanna",
            "lastName": "Strong",
            "department": 1,
            "location": 0,
            "startDate": "Monday, July 24, 2017 10:38 PM"
          },
          {
            "employeeID": "5e1d2fcbc19268796aa54529",
            "firstName": "Whitney",
            "lastName": "Wilkerson",
            "department": 1,
            "location": 1,
            "startDate": "Monday, January 18, 2016 9:35 PM"
          },
          {
            "employeeID": "5e1d2fcbd92d1f67052c6e55",
            "firstName": "Ashlee",
            "lastName": "Sampson",
            "department": 1,
            "location": 0,
            "startDate": "Friday, May 4, 2018 1:38 AM"
          },
          {
            "employeeID": "5e1d2fcb612d49dd54f28bb9",
            "firstName": "Pam",
            "lastName": "Cobb",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, January 5, 2019 6:51 AM"
          },
          {
            "employeeID": "5e1d2fcb91761b1ac0a28b91",
            "firstName": "Marina",
            "lastName": "Dotson",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, November 1, 2017 5:40 PM"
          },
          {
            "employeeID": "5e1d2fcb3e8d0475c42285c9",
            "firstName": "June",
            "lastName": "Garza",
            "department": 1,
            "location": 0,
            "startDate": "Monday, February 23, 2015 7:40 AM"
          },
          {
            "employeeID": "5e1d2fcbd79b43091d3cbc15",
            "firstName": "Silvia",
            "lastName": "Davidson",
            "department": 1,
            "location": 1,
            "startDate": "Thursday, December 1, 2016 8:04 AM"
          },
          {
            "employeeID": "5e1d2fcb786d58833f387156",
            "firstName": "Brandie",
            "lastName": "Lancaster",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, July 18, 2018 11:59 PM"
          },
          {
            "employeeID": "5e1d2fcbbf8a8207ef5d45d1",
            "firstName": "Moran",
            "lastName": "Schmidt",
            "department": 1,
            "location": 1,
            "startDate": "Saturday, November 30, 2019 11:54 PM"
          },
          {
            "employeeID": "5e1d2fcb537b3a889c180500",
            "firstName": "Colleen",
            "lastName": "Riggs",
            "department": 1,
            "location": 0,
            "startDate": "Sunday, March 10, 2019 1:29 AM"
          },
          {
            "employeeID": "5e1d2fcbfe3ddd817638578c",
            "firstName": "Cain",
            "lastName": "Jimenez",
            "department": 0,
            "location": 0,
            "startDate": "Wednesday, September 24, 2014 10:22 AM"
          },
          {
            "employeeID": "5e1d2fcbd1907929ec1abedb",
            "firstName": "Alice",
            "lastName": "Herrera",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, July 5, 2018 2:31 PM"
          },
          {
            "employeeID": "5e1d2fcb1f850aa5950fc67e",
            "firstName": "Cleo",
            "lastName": "Banks",
            "department": 0,
            "location": 1,
            "startDate": "Friday, November 25, 2016 1:32 AM"
          },
          {
            "employeeID": "5e1d2fcbc1e2202fa5dd7ed1",
            "firstName": "Hickman",
            "lastName": "Berg",
            "department": 0,
            "location": 1,
            "startDate": "Friday, February 15, 2019 8:41 PM"
          },
          {
            "employeeID": "5e1d2fcbf7d52b367a5a65da",
            "firstName": "Catalina",
            "lastName": "Kline",
            "department": 1,
            "location": 0,
            "startDate": "Friday, December 2, 2016 5:20 PM"
          },
          {
            "employeeID": "5e1d2fcb8723454edca2768d",
            "firstName": "Walsh",
            "lastName": "Raymond",
            "department": 1,
            "location": 1,
            "startDate": "Thursday, June 23, 2016 3:05 PM"
          },
          {
            "employeeID": "5e1d2fcb8e74d9e1a3e0e745",
            "firstName": "Vance",
            "lastName": "Cantu",
            "department": 0,
            "location": 1,
            "startDate": "Friday, January 31, 2014 2:52 PM"
          },
          {
            "employeeID": "5e1d2fcb4a5b1415719c5c71",
            "firstName": "Patterson",
            "lastName": "Miles",
            "department": 0,
            "location": 1,
            "startDate": "Wednesday, September 10, 2014 5:23 PM"
          },
          {
            "employeeID": "5e1d2fcba325439aef2bbade",
            "firstName": "Ruth",
            "lastName": "Lane",
            "department": 1,
            "location": 0,
            "startDate": "Friday, March 21, 2014 7:31 AM"
          },
          {
            "employeeID": "5e1d2fcb73c60759abe0147c",
            "firstName": "Webb",
            "lastName": "Eaton",
            "department": 0,
            "location": 0,
            "startDate": "Tuesday, August 9, 2016 12:14 PM"
          },
          {
            "employeeID": "5e1d2fcb9a6e817a0a807855",
            "firstName": "Warren",
            "lastName": "Parrish",
            "department": 1,
            "location": 1,
            "startDate": "Saturday, January 24, 2015 9:59 PM"
          },
          {
            "employeeID": "5e1d2fcb5fe1f5de4e0a7fd6",
            "firstName": "Angelina",
            "lastName": "Jensen",
            "department": 0,
            "location": 1,
            "startDate": "Tuesday, September 9, 2014 12:43 AM"
          },
          {
            "employeeID": "5e1d2fcb11abd826b5bfc8ee",
            "firstName": "Ross",
            "lastName": "Cole",
            "department": 0,
            "location": 0,
            "startDate": "Monday, November 17, 2014 9:23 AM"
          },
          {
            "employeeID": "5e1d2fcba2b0c93487a00c37",
            "firstName": "Ratliff",
            "lastName": "Bruce",
            "department": 1,
            "location": 0,
            "startDate": "Monday, May 19, 2014 2:52 PM"
          },
          {
            "employeeID": "5e1d2fcbc62e6520189daeb7",
            "firstName": "Graham",
            "lastName": "Moore",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, March 14, 2017 5:53 PM"
          },
          {
            "employeeID": "5e1d2fcbf951bcb9ede1e9d4",
            "firstName": "Cathleen",
            "lastName": "Robles",
            "department": 0,
            "location": 1,
            "startDate": "Wednesday, September 24, 2014 5:58 PM"
          },
          {
            "employeeID": "5e1d2fcb41706340a6a4eb68",
            "firstName": "Bolton",
            "lastName": "Cooke",
            "department": 0,
            "location": 1,
            "startDate": "Wednesday, June 7, 2017 1:18 AM"
          },
          {
            "employeeID": "5e1d2fcb9c58c600e0b1734e",
            "firstName": "Vicky",
            "lastName": "Frost",
            "department": 1,
            "location": 0,
            "startDate": "Thursday, February 1, 2018 3:47 AM"
          },
          {
            "employeeID": "5e1d2fcbf056ffaa75370722",
            "firstName": "Mcfadden",
            "lastName": "Porter",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, September 22, 2018 3:57 AM"
          },
          {
            "employeeID": "5e1d2fcb3c6c22f1010a1907",
            "firstName": "Holder",
            "lastName": "Melton",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, July 14, 2016 4:32 AM"
          },
          {
            "employeeID": "5e1d2fcb7d85f7ffb0a04a36",
            "firstName": "Viola",
            "lastName": "Oneill",
            "department": 1,
            "location": 1,
            "startDate": "Thursday, November 1, 2018 8:32 PM"
          },
          {
            "employeeID": "5e1d2fcbe5854562041dd672",
            "firstName": "Johns",
            "lastName": "Talley",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, November 26, 2016 9:40 PM"
          },
          {
            "employeeID": "5e1d2fcbca7cb8e8973b999f",
            "firstName": "Doris",
            "lastName": "Sweet",
            "department": 1,
            "location": 0,
            "startDate": "Wednesday, November 23, 2016 1:08 PM"
          },
          {
            "employeeID": "5e1d2fcb94a2fc76c41fde8e",
            "firstName": "Vazquez",
            "lastName": "Adams",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, March 12, 2015 3:56 AM"
          },
          {
            "employeeID": "5e1d2fcb81488f50f5d87d00",
            "firstName": "Deann",
            "lastName": "Mcneil",
            "department": 0,
            "location": 1,
            "startDate": "Thursday, February 2, 2017 8:52 AM"
          },
          {
            "employeeID": "5e1d2fcb70347103c6cad27a",
            "firstName": "Maryanne",
            "lastName": "Murray",
            "department": 1,
            "location": 1,
            "startDate": "Thursday, December 6, 2018 10:13 PM"
          },
          {
            "employeeID": "5e1d2fcb0f2df353b5d71262",
            "firstName": "Gentry",
            "lastName": "Justice",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, November 11, 2017 11:40 PM"
          },
          {
            "employeeID": "5e1d2fcbe0786dee1bc5da3d",
            "firstName": "Garza",
            "lastName": "Cantrell",
            "department": 0,
            "location": 0,
            "startDate": "Sunday, November 3, 2019 10:20 PM"
          },
          {
            "employeeID": "5e1d2fcbc18a0d9e8aa7e967",
            "firstName": "Tyler",
            "lastName": "Hood",
            "department": 1,
            "location": 0,
            "startDate": "Thursday, August 3, 2017 12:48 AM"
          },
          {
            "employeeID": "5e1d2fcb904fe27a0d68c37b",
            "firstName": "Potts",
            "lastName": "Walsh",
            "department": 0,
            "location": 0,
            "startDate": "Wednesday, May 23, 2018 7:38 AM"
          },
          {
            "employeeID": "5e1d2fcba2ec180efe21a832",
            "firstName": "Lacy",
            "lastName": "Maldonado",
            "department": 0,
            "location": 0,
            "startDate": "Wednesday, February 14, 2018 1:01 PM"
          },
          {
            "employeeID": "5e1d2fcbbf2d851f20f4218c",
            "firstName": "Bryant",
            "lastName": "Hull",
            "department": 1,
            "location": 1,
            "startDate": "Saturday, June 23, 2018 8:43 PM"
          },
          {
            "employeeID": "5e1d2fcb6e9ad75d0cf85b00",
            "firstName": "Callie",
            "lastName": "Dalton",
            "department": 0,
            "location": 0,
            "startDate": "Sunday, November 22, 2015 4:05 AM"
          },
          {
            "employeeID": "5e1d2fcb7e07c3630e3bac0d",
            "firstName": "Daphne",
            "lastName": "Padilla",
            "department": 0,
            "location": 1,
            "startDate": "Tuesday, April 5, 2016 3:27 PM"
          },
          {
            "employeeID": "5e1d2fcbac48d77e5a6ebc45",
            "firstName": "Lucinda",
            "lastName": "Spencer",
            "department": 0,
            "location": 0,
            "startDate": "Friday, August 7, 2015 5:00 AM"
          },
          {
            "employeeID": "5e1d2fcb8cb37328c786b2ff",
            "firstName": "Schwartz",
            "lastName": "Castro",
            "department": 0,
            "location": 0,
            "startDate": "Wednesday, October 1, 2014 4:55 AM"
          },
          {
            "employeeID": "5e1d2fcb6704952cdf6338fb",
            "firstName": "Elaine",
            "lastName": "Wolfe",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, October 7, 2017 12:49 AM"
          },
          {
            "employeeID": "5e1d2fcb54060ead821bf771",
            "firstName": "Kellie",
            "lastName": "Dickson",
            "department": 1,
            "location": 1,
            "startDate": "Friday, February 13, 2015 5:41 PM"
          },
          {
            "employeeID": "5e1d2fcb55d4909472bbbd65",
            "firstName": "Nelda",
            "lastName": "Mcpherson",
            "department": 1,
            "location": 0,
            "startDate": "Thursday, December 28, 2017 3:23 AM"
          },
          {
            "employeeID": "5e1d2fcba465088e5e15b117",
            "firstName": "Beth",
            "lastName": "Livingston",
            "department": 0,
            "location": 1,
            "startDate": "Thursday, November 20, 2014 1:04 AM"
          },
          {
            "employeeID": "5e1d2fcb98e0da1158763e19",
            "firstName": "Rose",
            "lastName": "Collins",
            "department": 0,
            "location": 0,
            "startDate": "Sunday, January 5, 2014 1:26 PM"
          },
          {
            "employeeID": "5e1d2fcb02cd71ced7b62802",
            "firstName": "Rocha",
            "lastName": "West",
            "department": 0,
            "location": 0,
            "startDate": "Friday, August 3, 2018 3:19 AM"
          },
          {
            "employeeID": "5e1d2fcbac055a5f699b0721",
            "firstName": "Kelsey",
            "lastName": "Stephenson",
            "department": 1,
            "location": 0,
            "startDate": "Wednesday, November 20, 2019 8:57 AM"
          },
          {
            "employeeID": "5e1d2fcb97c5fee0376c2158",
            "firstName": "West",
            "lastName": "Mccullough",
            "department": 1,
            "location": 1,
            "startDate": "Friday, December 29, 2017 9:36 PM"
          },
          {
            "employeeID": "5e1d2fcbbda3133a76997402",
            "firstName": "Reyes",
            "lastName": "Ochoa",
            "department": 1,
            "location": 0,
            "startDate": "Thursday, September 4, 2014 5:19 PM"
          },
          {
            "employeeID": "5e1d2fcb31bc9fb61b1a84d2",
            "firstName": "Hamilton",
            "lastName": "Hooper",
            "department": 0,
            "location": 0,
            "startDate": "Friday, June 22, 2018 8:03 AM"
          },
          {
            "employeeID": "5e1d2fcbfbf5305e64d0ba1c",
            "firstName": "Williams",
            "lastName": "Bass",
            "department": 1,
            "location": 0,
            "startDate": "Saturday, May 13, 2017 6:28 AM"
          },
          {
            "employeeID": "5e1d2fcbe844262a4716f93c",
            "firstName": "Luz",
            "lastName": "Mejia",
            "department": 1,
            "location": 1,
            "startDate": "Friday, March 31, 2017 4:29 AM"
          },
          {
            "employeeID": "5e1d2fcbb0013d7aef54127d",
            "firstName": "Garrison",
            "lastName": "Adkins",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, December 28, 2016 1:15 PM"
          },
          {
            "employeeID": "5e1d2fcbb2910fdde7c48daf",
            "firstName": "Debora",
            "lastName": "Burch",
            "department": 0,
            "location": 0,
            "startDate": "Friday, October 4, 2019 1:42 PM"
          },
          {
            "employeeID": "5e1d2fcbd0177d6978d98f34",
            "firstName": "Pope",
            "lastName": "Jackson",
            "department": 0,
            "location": 0,
            "startDate": "Monday, December 9, 2019 10:14 PM"
          },
          {
            "employeeID": "5e1d2fcbc147c96f27812120",
            "firstName": "Terry",
            "lastName": "Macdonald",
            "department": 0,
            "location": 1,
            "startDate": "Tuesday, April 25, 2017 10:42 AM"
          },
          {
            "employeeID": "5e1d2fcb6e1e1654e097018e",
            "firstName": "Bates",
            "lastName": "Moody",
            "department": 1,
            "location": 1,
            "startDate": "Thursday, November 9, 2017 10:04 AM"
          },
          {
            "employeeID": "5e1d2fcbf449e629af43e635",
            "firstName": "Gilmore",
            "lastName": "Hamilton",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, May 2, 2018 2:36 AM"
          },
          {
            "employeeID": "5e1d2fcb702050dd6a5af7af",
            "firstName": "Chan",
            "lastName": "Freeman",
            "department": 0,
            "location": 0,
            "startDate": "Friday, March 13, 2015 7:19 AM"
          },
          {
            "employeeID": "5e1d2fcb326aa868405f1a80",
            "firstName": "Roberta",
            "lastName": "Fry",
            "department": 0,
            "location": 0,
            "startDate": "Monday, January 13, 2020 12:48 AM"
          },
          {
            "employeeID": "5e1d2fcba1272ccff482b95d",
            "firstName": "Gwen",
            "lastName": "Sanchez",
            "department": 0,
            "location": 0,
            "startDate": "Wednesday, May 2, 2018 2:56 AM"
          },
          {
            "employeeID": "5e1d2fcb7f8578f373c5f7f4",
            "firstName": "Kirk",
            "lastName": "Simpson",
            "department": 0,
            "location": 1,
            "startDate": "Friday, March 11, 2016 3:41 PM"
          },
          {
            "employeeID": "5e1d2fcbcc91e5eae68e20d8",
            "firstName": "Reeves",
            "lastName": "Walters",
            "department": 0,
            "location": 1,
            "startDate": "Sunday, November 19, 2017 4:13 AM"
          },
          {
            "employeeID": "5e1d2fcbbe5e7c8148b80d3f",
            "firstName": "Liza",
            "lastName": "Turner",
            "department": 0,
            "location": 1,
            "startDate": "Wednesday, April 29, 2015 8:54 AM"
          },
          {
            "employeeID": "5e1d2fcba0909d153d8bdeaa",
            "firstName": "Pitts",
            "lastName": "Guthrie",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, March 26, 2016 5:56 PM"
          },
          {
            "employeeID": "5e1d2fcb70eecfafed4257a3",
            "firstName": "Payne",
            "lastName": "Carter",
            "department": 0,
            "location": 1,
            "startDate": "Monday, January 2, 2017 10:51 AM"
          },
          {
            "employeeID": "5e1d2fcb1045992176a401f5",
            "firstName": "Hinton",
            "lastName": "Leblanc",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, February 8, 2018 11:31 AM"
          },
          {
            "employeeID": "5e1d2fcbc8768cee0a8356da",
            "firstName": "Knight",
            "lastName": "Lamb",
            "department": 1,
            "location": 1,
            "startDate": "Tuesday, February 18, 2014 2:34 PM"
          },
          {
            "employeeID": "5e1d2fcb64be008e493d9f30",
            "firstName": "Summer",
            "lastName": "Coleman",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, May 4, 2019 3:53 AM"
          },
          {
            "employeeID": "5e1d2fcb95b8dcad1a4169f6",
            "firstName": "Tran",
            "lastName": "Glenn",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, November 25, 2017 5:23 PM"
          },
          {
            "employeeID": "5e1d2fcbdb244621cc042c08",
            "firstName": "Michele",
            "lastName": "Wall",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, May 30, 2015 1:22 AM"
          },
          {
            "employeeID": "5e1d2fcb146240c46ec2fc5f",
            "firstName": "Sophia",
            "lastName": "Willis",
            "department": 0,
            "location": 1,
            "startDate": "Thursday, December 28, 2017 1:08 PM"
          },
          {
            "employeeID": "5e1d2fcb0eaaadcb537beb3a",
            "firstName": "Deleon",
            "lastName": "Abbott",
            "department": 0,
            "location": 0,
            "startDate": "Wednesday, November 16, 2016 12:48 AM"
          },
          {
            "employeeID": "5e1d2fcb2dbdd29077d2f5f2",
            "firstName": "Alfreda",
            "lastName": "Cain",
            "department": 1,
            "location": 1,
            "startDate": "Monday, February 3, 2014 12:32 PM"
          },
          {
            "employeeID": "5e1d2fcbb10aab8fd856623e",
            "firstName": "Consuelo",
            "lastName": "Weeks",
            "department": 1,
            "location": 1,
            "startDate": "Friday, December 13, 2019 11:15 PM"
          },
          {
            "employeeID": "5e1d2fcbd920768986977db0",
            "firstName": "Holman",
            "lastName": "Hewitt",
            "department": 1,
            "location": 0,
            "startDate": "Sunday, August 13, 2017 1:49 PM"
          },
          {
            "employeeID": "5e1d2fcb00278d6bbf368195",
            "firstName": "Sheryl",
            "lastName": "Barton",
            "department": 0,
            "location": 1,
            "startDate": "Tuesday, April 29, 2014 2:21 PM"
          },
          {
            "employeeID": "5e1d2fcb35445bd0c56e2715",
            "firstName": "Emma",
            "lastName": "Delacruz",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, August 31, 2019 8:02 PM"
          },
          {
            "employeeID": "5e1d2fcbd72584bba7d81f65",
            "firstName": "Joyce",
            "lastName": "Goodman",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, November 19, 2016 9:53 AM"
          },
          {
            "employeeID": "5e1d2fcba4c04ade3129f431",
            "firstName": "Savage",
            "lastName": "Peck",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, July 13, 2017 4:21 PM"
          },
          {
            "employeeID": "5e1d2fcb1bad86c64d52c5ce",
            "firstName": "Francis",
            "lastName": "Hoover",
            "department": 0,
            "location": 0,
            "startDate": "Tuesday, November 1, 2016 3:46 PM"
          },
          {
            "employeeID": "5e1d2fcb7097e687b533b6f8",
            "firstName": "Janna",
            "lastName": "Silva",
            "department": 1,
            "location": 1,
            "startDate": "Saturday, September 26, 2015 5:13 PM"
          },
          {
            "employeeID": "5e1d2fcb11852b20643af6bf",
            "firstName": "Reed",
            "lastName": "Henson",
            "department": 0,
            "location": 1,
            "startDate": "Sunday, June 9, 2019 2:37 PM"
          },
          {
            "employeeID": "5e1d2fcbf466c8fe2158627f",
            "firstName": "Earlene",
            "lastName": "Sanders",
            "department": 1,
            "location": 0,
            "startDate": "Wednesday, December 3, 2014 4:23 PM"
          },
          {
            "employeeID": "5e1d2fcbb3f9f6b9d934197d",
            "firstName": "Celina",
            "lastName": "Huber",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, June 10, 2017 6:52 PM"
          },
          {
            "employeeID": "5e1d2fcbfbcaa0c04ff80bc7",
            "firstName": "Harriett",
            "lastName": "Clark",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, October 26, 2017 3:23 PM"
          },
          {
            "employeeID": "5e1d2fcbcaa9d2839dd81e87",
            "firstName": "Alford",
            "lastName": "Dixon",
            "department": 1,
            "location": 0,
            "startDate": "Monday, August 12, 2019 9:19 PM"
          },
          {
            "employeeID": "5e1d304dc4468c37d8b8c478",
            "firstName": "Rosalinda",
            "lastName": "Roman",
            "department": 1,
            "location": 0,
            "startDate": "Saturday, July 7, 2018 8:37 PM"
          },
          {
            "employeeID": "5e1d304d4fc42581e0b934df",
            "firstName": "Shaffer",
            "lastName": "Buck",
            "department": 1,
            "location": 1,
            "startDate": "Saturday, December 13, 2014 7:32 PM"
          },
          {
            "employeeID": "5e1d304dc9eab9b6cdd39c61",
            "firstName": "Small",
            "lastName": "Maldonado",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, April 5, 2014 9:54 PM"
          },
          {
            "employeeID": "5e1d304d8c23db1967b7fd43",
            "firstName": "Nannie",
            "lastName": "Mendez",
            "department": 0,
            "location": 1,
            "startDate": "Friday, June 9, 2017 2:49 PM"
          },
          {
            "employeeID": "5e1d304d3837087c53fdffe5",
            "firstName": "Pope",
            "lastName": "Baker",
            "department": 0,
            "location": 1,
            "startDate": "Tuesday, May 28, 2019 4:35 PM"
          },
          {
            "employeeID": "5e1d304d396eff7d037e7db9",
            "firstName": "Belinda",
            "lastName": "Mcintosh",
            "department": 1,
            "location": 1,
            "startDate": "Sunday, May 4, 2014 8:52 AM"
          },
          {
            "employeeID": "5e1d304d6280fceccb898767",
            "firstName": "Burch",
            "lastName": "Gates",
            "department": 0,
            "location": 1,
            "startDate": "Sunday, November 16, 2014 12:42 AM"
          },
          {
            "employeeID": "5e1d304d1d5b3d8efcd311e3",
            "firstName": "Ernestine",
            "lastName": "Sellers",
            "department": 1,
            "location": 0,
            "startDate": "Sunday, September 21, 2014 10:44 PM"
          },
          {
            "employeeID": "5e1d304d4701ea42218ddf57",
            "firstName": "Maggie",
            "lastName": "Ross",
            "department": 1,
            "location": 1,
            "startDate": "Thursday, November 30, 2017 1:57 AM"
          },
          {
            "employeeID": "5e1d304db47ba347e856c228",
            "firstName": "Bradley",
            "lastName": "Carr",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, July 18, 2015 1:21 PM"
          },
          {
            "employeeID": "5e1d304d33e31f5ef113fb2d",
            "firstName": "Jenny",
            "lastName": "Lester",
            "department": 0,
            "location": 0,
            "startDate": "Sunday, October 30, 2016 10:06 AM"
          },
          {
            "employeeID": "5e1d304dc6bef77b04de69c2",
            "firstName": "Cecile",
            "lastName": "Flores",
            "department": 1,
            "location": 0,
            "startDate": "Sunday, August 17, 2014 2:26 PM"
          },
          {
            "employeeID": "5e1d304dac5d6f7cb79b38ba",
            "firstName": "Jarvis",
            "lastName": "Donaldson",
            "department": 1,
            "location": 1,
            "startDate": "Tuesday, December 9, 2014 10:49 AM"
          },
          {
            "employeeID": "5e1d304d249bf1cdaba063d0",
            "firstName": "Mercedes",
            "lastName": "Weiss",
            "department": 1,
            "location": 0,
            "startDate": "Saturday, August 6, 2016 10:16 AM"
          },
          {
            "employeeID": "5e1d304dd4ad461460b7b9ac",
            "firstName": "Carpenter",
            "lastName": "Matthews",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, May 29, 2018 1:52 PM"
          },
          {
            "employeeID": "5e1d304dd8df1d1b8d1736d1",
            "firstName": "Erica",
            "lastName": "Padilla",
            "department": 1,
            "location": 1,
            "startDate": "Saturday, August 13, 2016 5:51 PM"
          },
          {
            "employeeID": "5e1d304d9260a3bf207b9f7d",
            "firstName": "Lucille",
            "lastName": "Walsh",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, May 17, 2018 11:44 AM"
          },
          {
            "employeeID": "5e1d304d83fd728ec91e08cd",
            "firstName": "Eugenia",
            "lastName": "Wolf",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, August 20, 2014 7:23 PM"
          },
          {
            "employeeID": "5e1d304de2ce4739e20f3fbf",
            "firstName": "Genevieve",
            "lastName": "Bell",
            "department": 0,
            "location": 0,
            "startDate": "Sunday, May 24, 2015 1:16 PM"
          },
          {
            "employeeID": "5e1d304d9875856d686146e6",
            "firstName": "Hogan",
            "lastName": "Mcpherson",
            "department": 1,
            "location": 0,
            "startDate": "Sunday, May 5, 2019 7:24 PM"
          },
          {
            "employeeID": "5e1d304d77d4b14c26f86701",
            "firstName": "Kathryn",
            "lastName": "Curtis",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, November 1, 2014 11:27 AM"
          },
          {
            "employeeID": "5e1d304d5c55d93873abfa39",
            "firstName": "Rosetta",
            "lastName": "Conner",
            "department": 1,
            "location": 0,
            "startDate": "Wednesday, September 16, 2015 9:43 PM"
          },
          {
            "employeeID": "5e1d304deabde406f2e591b9",
            "firstName": "Kris",
            "lastName": "Norton",
            "department": 1,
            "location": 0,
            "startDate": "Saturday, December 15, 2018 12:53 AM"
          },
          {
            "employeeID": "5e1d304daa027780655c30d3",
            "firstName": "Vonda",
            "lastName": "Tyler",
            "department": 1,
            "location": 1,
            "startDate": "Tuesday, April 10, 2018 9:29 PM"
          },
          {
            "employeeID": "5e1d304dc34ab221f528d277",
            "firstName": "Isabel",
            "lastName": "Sanders",
            "department": 1,
            "location": 1,
            "startDate": "Tuesday, January 16, 2018 3:09 PM"
          },
          {
            "employeeID": "5e1d304d78d832139f9b7395",
            "firstName": "Josephine",
            "lastName": "Petty",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, June 25, 2016 8:59 PM"
          },
          {
            "employeeID": "5e1d304defc52039fb584c70",
            "firstName": "Beasley",
            "lastName": "Weaver",
            "department": 1,
            "location": 0,
            "startDate": "Sunday, January 5, 2020 8:28 PM"
          },
          {
            "employeeID": "5e1d304db8c74265195e8c67",
            "firstName": "Vargas",
            "lastName": "Vega",
            "department": 1,
            "location": 1,
            "startDate": "Thursday, June 1, 2017 4:53 AM"
          },
          {
            "employeeID": "5e1d304db945f42e8af2e364",
            "firstName": "Workman",
            "lastName": "Green",
            "department": 0,
            "location": 0,
            "startDate": "Tuesday, April 14, 2015 9:17 AM"
          },
          {
            "employeeID": "5e1d304dc44b2074f78157d5",
            "firstName": "Hyde",
            "lastName": "Herrera",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, December 7, 2016 5:31 PM"
          },
          {
            "employeeID": "5e1d304d46bdefdf072d5672",
            "firstName": "Warren",
            "lastName": "Boone",
            "department": 1,
            "location": 0,
            "startDate": "Saturday, November 3, 2018 10:20 PM"
          },
          {
            "employeeID": "5e1d304d9245bfc8f2cef488",
            "firstName": "Bonnie",
            "lastName": "Carpenter",
            "department": 0,
            "location": 0,
            "startDate": "Tuesday, February 13, 2018 2:41 PM"
          },
          {
            "employeeID": "5e1d304dd9e0a859615b9598",
            "firstName": "Le",
            "lastName": "Saunders",
            "department": 0,
            "location": 1,
            "startDate": "Monday, January 4, 2016 8:38 AM"
          },
          {
            "employeeID": "5e1d304d225f1065e29dfbaa",
            "firstName": "Grant",
            "lastName": "Woods",
            "department": 0,
            "location": 0,
            "startDate": "Friday, November 24, 2017 12:29 PM"
          },
          {
            "employeeID": "5e1d304db2563b4e54584ec5",
            "firstName": "Kendra",
            "lastName": "Williamson",
            "department": 1,
            "location": 1,
            "startDate": "Tuesday, November 15, 2016 12:35 PM"
          },
          {
            "employeeID": "5e1d304d32755653885b48f5",
            "firstName": "Benton",
            "lastName": "Casey",
            "department": 1,
            "location": 1,
            "startDate": "Tuesday, October 23, 2018 5:19 PM"
          },
          {
            "employeeID": "5e1d304d7e826a5450d3fcca",
            "firstName": "Steele",
            "lastName": "Cabrera",
            "department": 0,
            "location": 1,
            "startDate": "Friday, December 21, 2018 4:37 AM"
          },
          {
            "employeeID": "5e1d304dcb4baad71bf222dc",
            "firstName": "Wanda",
            "lastName": "Wilkins",
            "department": 0,
            "location": 1,
            "startDate": "Monday, September 26, 2016 10:00 AM"
          },
          {
            "employeeID": "5e1d304da6c9241962fcd040",
            "firstName": "Chandler",
            "lastName": "Carver",
            "department": 0,
            "location": 0,
            "startDate": "Friday, April 14, 2017 2:58 AM"
          },
          {
            "employeeID": "5e1d304d26b4c14a2b3ad2af",
            "firstName": "Russell",
            "lastName": "Dickson",
            "department": 0,
            "location": 1,
            "startDate": "Monday, May 27, 2019 11:13 PM"
          },
          {
            "employeeID": "5e1d304d8a0e6393570f0f3e",
            "firstName": "Rice",
            "lastName": "Durham",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, February 8, 2018 12:04 PM"
          },
          {
            "employeeID": "5e1d304d93f3c2e3a683f6e7",
            "firstName": "Holland",
            "lastName": "Stephens",
            "department": 0,
            "location": 0,
            "startDate": "Monday, November 12, 2018 10:28 AM"
          },
          {
            "employeeID": "5e1d304d13316f8856dfa82b",
            "firstName": "Patti",
            "lastName": "Mcbride",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, December 16, 2015 6:54 PM"
          },
          {
            "employeeID": "5e1d304d25c6e9891d6d4720",
            "firstName": "Burks",
            "lastName": "Fulton",
            "department": 1,
            "location": 0,
            "startDate": "Thursday, October 13, 2016 6:00 AM"
          },
          {
            "employeeID": "5e1d304d3b7da8557c711382",
            "firstName": "Amanda",
            "lastName": "Holcomb",
            "department": 0,
            "location": 1,
            "startDate": "Wednesday, October 29, 2014 5:29 PM"
          },
          {
            "employeeID": "5e1d304d2602e92c2e4ce313",
            "firstName": "Rush",
            "lastName": "Turner",
            "department": 0,
            "location": 0,
            "startDate": "Friday, June 19, 2015 11:47 AM"
          },
          {
            "employeeID": "5e1d304db39132754dd5e656",
            "firstName": "Dina",
            "lastName": "Hurley",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, July 14, 2016 4:14 PM"
          },
          {
            "employeeID": "5e1d304d48cec27fbbbc47d8",
            "firstName": "Jillian",
            "lastName": "Pickett",
            "department": 1,
            "location": 0,
            "startDate": "Monday, October 2, 2017 9:04 AM"
          },
          {
            "employeeID": "5e1d304d21e6b7a8872ee9d9",
            "firstName": "Weiss",
            "lastName": "Johnston",
            "department": 1,
            "location": 0,
            "startDate": "Thursday, September 14, 2017 7:49 PM"
          },
          {
            "employeeID": "5e1d304dbfd60b41a5af3d70",
            "firstName": "Gale",
            "lastName": "Crosby",
            "department": 0,
            "location": 1,
            "startDate": "Sunday, October 30, 2016 8:51 PM"
          },
          {
            "employeeID": "5e1d304dea46fbf5fc061ba5",
            "firstName": "Palmer",
            "lastName": "Faulkner",
            "department": 0,
            "location": 0,
            "startDate": "Sunday, February 24, 2019 9:42 AM"
          },
          {
            "employeeID": "5e1d304dfc7a57bd7b76bb51",
            "firstName": "Joyner",
            "lastName": "Watts",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, September 16, 2017 9:51 PM"
          },
          {
            "employeeID": "5e1d304dd95031f61b36ab6d",
            "firstName": "Best",
            "lastName": "Hester",
            "department": 0,
            "location": 1,
            "startDate": "Monday, March 12, 2018 9:48 PM"
          },
          {
            "employeeID": "5e1d304d5cef2707cb2f7e0c",
            "firstName": "Janell",
            "lastName": "Lynn",
            "department": 1,
            "location": 1,
            "startDate": "Friday, August 19, 2016 2:42 PM"
          },
          {
            "employeeID": "5e1d304dd7276ff642d94d57",
            "firstName": "Aimee",
            "lastName": "Mckenzie",
            "department": 0,
            "location": 1,
            "startDate": "Thursday, December 13, 2018 4:22 AM"
          },
          {
            "employeeID": "5e1d304dbbbc254b933c8f0d",
            "firstName": "Rosalie",
            "lastName": "Sampson",
            "department": 1,
            "location": 0,
            "startDate": "Wednesday, October 1, 2014 9:57 PM"
          },
          {
            "employeeID": "5e1d304d9c813a81fd6f6030",
            "firstName": "Michael",
            "lastName": "Levine",
            "department": 0,
            "location": 1,
            "startDate": "Tuesday, August 18, 2015 6:39 AM"
          },
          {
            "employeeID": "5e1d304d9a8d2f3bf2d23889",
            "firstName": "Saundra",
            "lastName": "Harrell",
            "department": 0,
            "location": 0,
            "startDate": "Tuesday, May 10, 2016 6:51 AM"
          },
          {
            "employeeID": "5e1d304dee4c8917a0255c1c",
            "firstName": "Colleen",
            "lastName": "Castillo",
            "department": 0,
            "location": 0,
            "startDate": "Friday, June 14, 2019 4:37 AM"
          },
          {
            "employeeID": "5e1d304da8c715d68117cc64",
            "firstName": "Leslie",
            "lastName": "Jordan",
            "department": 0,
            "location": 0,
            "startDate": "Sunday, November 24, 2019 5:36 PM"
          },
          {
            "employeeID": "5e1d304da718787a95735535",
            "firstName": "Sasha",
            "lastName": "Langley",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, February 6, 2018 8:20 AM"
          },
          {
            "employeeID": "5e1d304dd5b9ae3707b12ca0",
            "firstName": "Finley",
            "lastName": "Wilkinson",
            "department": 1,
            "location": 1,
            "startDate": "Thursday, January 24, 2019 5:11 PM"
          },
          {
            "employeeID": "5e1d304d53ec3a4061813fef",
            "firstName": "Hester",
            "lastName": "Reid",
            "department": 1,
            "location": 0,
            "startDate": "Saturday, February 27, 2016 1:06 AM"
          },
          {
            "employeeID": "5e1d304dc000eb6b2bc0d796",
            "firstName": "James",
            "lastName": "Gray",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, July 19, 2018 9:53 AM"
          },
          {
            "employeeID": "5e1d304de3c87acae4cbc767",
            "firstName": "Montoya",
            "lastName": "Morin",
            "department": 0,
            "location": 1,
            "startDate": "Monday, October 15, 2018 3:54 PM"
          },
          {
            "employeeID": "5e1d304da3453da55ca31eab",
            "firstName": "Donaldson",
            "lastName": "Roy",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, October 17, 2019 2:06 PM"
          },
          {
            "employeeID": "5e1d304d56b979cc40db07a7",
            "firstName": "May",
            "lastName": "Mayer",
            "department": 0,
            "location": 0,
            "startDate": "Tuesday, February 9, 2016 3:51 PM"
          },
          {
            "employeeID": "5e1d304d870a51878cd2e96b",
            "firstName": "Grimes",
            "lastName": "Peterson",
            "department": 1,
            "location": 0,
            "startDate": "Wednesday, December 27, 2017 9:43 PM"
          },
          {
            "employeeID": "5e1d304d4612da7c4f812d57",
            "firstName": "Virginia",
            "lastName": "Gonzalez",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, January 14, 2017 5:37 AM"
          },
          {
            "employeeID": "5e1d304d0e10c909dc0bacec",
            "firstName": "Catalina",
            "lastName": "Whitehead",
            "department": 1,
            "location": 0,
            "startDate": "Monday, April 9, 2018 3:05 PM"
          },
          {
            "employeeID": "5e1d304d438bb12934a8bf82",
            "firstName": "Alexis",
            "lastName": "Irwin",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, February 27, 2016 9:23 AM"
          },
          {
            "employeeID": "5e1d304dc38314702a182fb6",
            "firstName": "Maxine",
            "lastName": "Clark",
            "department": 1,
            "location": 1,
            "startDate": "Friday, February 24, 2017 7:00 PM"
          },
          {
            "employeeID": "5e1d304d079a8f4458176241",
            "firstName": "Nola",
            "lastName": "Blair",
            "department": 1,
            "location": 0,
            "startDate": "Saturday, December 22, 2018 5:33 AM"
          },
          {
            "employeeID": "5e1d304d2c13def4bf28d779",
            "firstName": "Morton",
            "lastName": "Mercado",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, November 5, 2015 2:18 AM"
          },
          {
            "employeeID": "5e1d304d66385f07c83f2dfc",
            "firstName": "Carr",
            "lastName": "Cooley",
            "department": 0,
            "location": 0,
            "startDate": "Friday, June 19, 2015 11:37 PM"
          },
          {
            "employeeID": "5e1d304d72920c232264fb86",
            "firstName": "Maxwell",
            "lastName": "Hobbs",
            "department": 1,
            "location": 1,
            "startDate": "Sunday, September 1, 2019 6:22 PM"
          },
          {
            "employeeID": "5e1d304d86ebc2b1860f54cf",
            "firstName": "Talley",
            "lastName": "Nicholson",
            "department": 1,
            "location": 0,
            "startDate": "Wednesday, December 7, 2016 11:30 AM"
          },
          {
            "employeeID": "5e1d304df12894fefadcfcc5",
            "firstName": "Marguerite",
            "lastName": "Vincent",
            "department": 1,
            "location": 0,
            "startDate": "Saturday, February 3, 2018 8:16 AM"
          },
          {
            "employeeID": "5e1d304d3ac4d4f336886126",
            "firstName": "Phoebe",
            "lastName": "Vaughn",
            "department": 1,
            "location": 0,
            "startDate": "Friday, March 23, 2018 9:42 PM"
          },
          {
            "employeeID": "5e1d304da7a496ad18d27d0b",
            "firstName": "Sybil",
            "lastName": "Spears",
            "department": 0,
            "location": 1,
            "startDate": "Sunday, May 24, 2015 7:34 AM"
          },
          {
            "employeeID": "5e1d304d4360ad4437e1fa2b",
            "firstName": "Johnston",
            "lastName": "Pope",
            "department": 0,
            "location": 1,
            "startDate": "Monday, May 11, 2015 6:15 AM"
          },
          {
            "employeeID": "5e1d304d2471ab8f0e6dd8d1",
            "firstName": "Brooke",
            "lastName": "Hays",
            "department": 0,
            "location": 0,
            "startDate": "Wednesday, November 28, 2018 10:26 AM"
          },
          {
            "employeeID": "5e1d304d97716952cbbbd842",
            "firstName": "Todd",
            "lastName": "Huffman",
            "department": 0,
            "location": 0,
            "startDate": "Friday, November 25, 2016 4:28 AM"
          },
          {
            "employeeID": "5e1d304d01adec3b727b4923",
            "firstName": "Adrian",
            "lastName": "Peck",
            "department": 1,
            "location": 1,
            "startDate": "Friday, June 27, 2014 12:59 AM"
          },
          {
            "employeeID": "5e1d304dec8bde97b5e3dbeb",
            "firstName": "Hope",
            "lastName": "Shields",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, October 31, 2019 2:10 AM"
          },
          {
            "employeeID": "5e1d304d7c8eeb620fbcb006",
            "firstName": "Jessie",
            "lastName": "Foreman",
            "department": 0,
            "location": 0,
            "startDate": "Monday, October 8, 2018 10:37 AM"
          },
          {
            "employeeID": "5e1d304d652d068194c0768b",
            "firstName": "Audra",
            "lastName": "Simmons",
            "department": 0,
            "location": 0,
            "startDate": "Sunday, September 7, 2014 4:15 PM"
          },
          {
            "employeeID": "5e1d304d11e6f667bf578831",
            "firstName": "Lenora",
            "lastName": "Horton",
            "department": 0,
            "location": 1,
            "startDate": "Thursday, August 21, 2014 6:09 AM"
          },
          {
            "employeeID": "5e1d304d1a50c8e3437c0df6",
            "firstName": "Carlene",
            "lastName": "Gay",
            "department": 1,
            "location": 1,
            "startDate": "Tuesday, October 31, 2017 7:53 AM"
          },
          {
            "employeeID": "5e1d304d9eb2052d1968a906",
            "firstName": "Guerra",
            "lastName": "Smith",
            "department": 0,
            "location": 0,
            "startDate": "Friday, March 29, 2019 6:30 AM"
          },
          {
            "employeeID": "5e1d304d6ebd86c7a75630cb",
            "firstName": "Susanna",
            "lastName": "Knight",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, November 9, 2017 3:48 PM"
          },
          {
            "employeeID": "5e1d304d3f8400f8e5843ff9",
            "firstName": "Schwartz",
            "lastName": "Jefferson",
            "department": 0,
            "location": 1,
            "startDate": "Wednesday, July 4, 2018 2:16 AM"
          },
          {
            "employeeID": "5e1d304d1d04f5a827a5f783",
            "firstName": "Ingram",
            "lastName": "Barrett",
            "department": 1,
            "location": 1,
            "startDate": "Sunday, August 25, 2019 11:47 AM"
          },
          {
            "employeeID": "5e1d304d75f307c15090cec1",
            "firstName": "Berry",
            "lastName": "Bass",
            "department": 1,
            "location": 1,
            "startDate": "Friday, August 24, 2018 4:03 PM"
          },
          {
            "employeeID": "5e1d304d67c6222407e8c942",
            "firstName": "Evelyn",
            "lastName": "Humphrey",
            "department": 0,
            "location": 0,
            "startDate": "Sunday, April 12, 2015 10:08 AM"
          },
          {
            "employeeID": "5e1d304d6acff239de40b9c0",
            "firstName": "Holden",
            "lastName": "Bentley",
            "department": 1,
            "location": 1,
            "startDate": "Thursday, June 4, 2015 4:57 AM"
          },
          {
            "employeeID": "5e1d304de487c7869fed0ac0",
            "firstName": "Mcdaniel",
            "lastName": "Spence",
            "department": 0,
            "location": 0,
            "startDate": "Sunday, December 21, 2014 10:35 AM"
          },
          {
            "employeeID": "5e1d304d495b06888b24b84a",
            "firstName": "Madeline",
            "lastName": "Shaffer",
            "department": 1,
            "location": 0,
            "startDate": "Monday, May 21, 2018 2:44 AM"
          },
          {
            "employeeID": "5e1d304d291e71423602078e",
            "firstName": "Chavez",
            "lastName": "Haley",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, April 6, 2016 2:21 PM"
          },
          {
            "employeeID": "5e1d304d5f236cfee930a800",
            "firstName": "Cochran",
            "lastName": "Frazier",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, November 28, 2015 8:54 AM"
          },
          {
            "employeeID": "5e1d306a1b3cfa172b08e5a5",
            "firstName": "Debora",
            "lastName": "Guerrero",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, September 29, 2015 10:48 AM"
          },
          {
            "employeeID": "5e1d306a15df1920638c9d91",
            "firstName": "Garner",
            "lastName": "Hooper",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, September 3, 2014 1:42 PM"
          },
          {
            "employeeID": "5e1d306a6ba520cbb9dff9ae",
            "firstName": "Gay",
            "lastName": "Mayer",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, September 27, 2018 10:08 PM"
          },
          {
            "employeeID": "5e1d306ad6ebfdaa95c6db25",
            "firstName": "Danielle",
            "lastName": "Kerr",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, March 3, 2015 12:32 AM"
          },
          {
            "employeeID": "5e1d306a6e41f783106f60ca",
            "firstName": "Ingrid",
            "lastName": "Haley",
            "department": 0,
            "location": 0,
            "startDate": "Wednesday, April 25, 2018 7:44 PM"
          },
          {
            "employeeID": "5e1d306ae84c7d81e183b3d3",
            "firstName": "Michele",
            "lastName": "Olsen",
            "department": 0,
            "location": 1,
            "startDate": "Sunday, March 3, 2019 10:42 AM"
          },
          {
            "employeeID": "5e1d306a8e22bf47fa1e6663",
            "firstName": "Denise",
            "lastName": "Hall",
            "department": 1,
            "location": 1,
            "startDate": "Monday, May 14, 2018 12:09 PM"
          },
          {
            "employeeID": "5e1d306af4b4721948c0d341",
            "firstName": "Fuentes",
            "lastName": "Kirkland",
            "department": 0,
            "location": 1,
            "startDate": "Sunday, July 7, 2019 2:07 AM"
          },
          {
            "employeeID": "5e1d306a042b76a39ab1da6b",
            "firstName": "Browning",
            "lastName": "Bullock",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, April 16, 2019 12:34 AM"
          },
          {
            "employeeID": "5e1d306ac4acb30421e59b0a",
            "firstName": "Lynda",
            "lastName": "Talley",
            "department": 1,
            "location": 1,
            "startDate": "Friday, September 14, 2018 10:13 AM"
          },
          {
            "employeeID": "5e1d306aa0687c68fa6c4aed",
            "firstName": "Norton",
            "lastName": "Mathis",
            "department": 0,
            "location": 0,
            "startDate": "Friday, August 29, 2014 7:33 PM"
          },
          {
            "employeeID": "5e1d306ac38f013bb5cd37c8",
            "firstName": "Bettye",
            "lastName": "Anderson",
            "department": 1,
            "location": 0,
            "startDate": "Thursday, June 2, 2016 4:22 AM"
          },
          {
            "employeeID": "5e1d306a807673e895dfcea5",
            "firstName": "Jasmine",
            "lastName": "Charles",
            "department": 0,
            "location": 0,
            "startDate": "Wednesday, November 18, 2015 6:57 AM"
          },
          {
            "employeeID": "5e1d306a8c41ef1156676c7c",
            "firstName": "Chen",
            "lastName": "Paul",
            "department": 0,
            "location": 1,
            "startDate": "Thursday, August 14, 2014 9:55 AM"
          },
          {
            "employeeID": "5e1d306aaeac8825a35260ff",
            "firstName": "Jessie",
            "lastName": "Hester",
            "department": 1,
            "location": 0,
            "startDate": "Saturday, December 22, 2018 9:01 AM"
          },
          {
            "employeeID": "5e1d306a8a44bc764202d6d8",
            "firstName": "Lou",
            "lastName": "Nixon",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, May 19, 2018 6:58 PM"
          },
          {
            "employeeID": "5e1d306afd2fc77668a49733",
            "firstName": "Kirkland",
            "lastName": "Rasmussen",
            "department": 0,
            "location": 1,
            "startDate": "Wednesday, March 2, 2016 5:08 PM"
          },
          {
            "employeeID": "5e1d306abf1434113989516c",
            "firstName": "Alexander",
            "lastName": "Brady",
            "department": 1,
            "location": 0,
            "startDate": "Saturday, October 22, 2016 4:38 PM"
          },
          {
            "employeeID": "5e1d306a99c4649c96da8c5b",
            "firstName": "Ernestine",
            "lastName": "Guzman",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, October 29, 2019 3:52 AM"
          },
          {
            "employeeID": "5e1d306a848611c8c7f8099e",
            "firstName": "Roslyn",
            "lastName": "Wyatt",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, May 30, 2017 2:42 PM"
          },
          {
            "employeeID": "5e1d306ae0903cc333699fc2",
            "firstName": "Katharine",
            "lastName": "Strong",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, February 14, 2018 8:12 PM"
          },
          {
            "employeeID": "5e1d306a0f6b56b8b0179208",
            "firstName": "Valarie",
            "lastName": "Beck",
            "department": 1,
            "location": 1,
            "startDate": "Thursday, November 5, 2015 8:03 PM"
          },
          {
            "employeeID": "5e1d306ae70149ec98cd5c29",
            "firstName": "Trevino",
            "lastName": "Richardson",
            "department": 0,
            "location": 0,
            "startDate": "Tuesday, June 2, 2015 7:28 PM"
          },
          {
            "employeeID": "5e1d306a3962f0aa5eb3aac3",
            "firstName": "Cherry",
            "lastName": "Pearson",
            "department": 0,
            "location": 1,
            "startDate": "Monday, September 7, 2015 3:59 AM"
          },
          {
            "employeeID": "5e1d306a05ab5b4117d1309b",
            "firstName": "Mendoza",
            "lastName": "Avery",
            "department": 0,
            "location": 1,
            "startDate": "Friday, January 2, 2015 4:24 AM"
          },
          {
            "employeeID": "5e1d306a6a2f593bbe72185a",
            "firstName": "Kari",
            "lastName": "Gilbert",
            "department": 0,
            "location": 1,
            "startDate": "Tuesday, April 3, 2018 9:34 PM"
          },
          {
            "employeeID": "5e1d306ad2a50ca51e09d006",
            "firstName": "Mary",
            "lastName": "Bond",
            "department": 0,
            "location": 1,
            "startDate": "Sunday, June 2, 2019 6:36 PM"
          },
          {
            "employeeID": "5e1d306aace6da1d3570841e",
            "firstName": "Benita",
            "lastName": "Chavez",
            "department": 1,
            "location": 0,
            "startDate": "Wednesday, July 9, 2014 12:29 PM"
          },
          {
            "employeeID": "5e1d306a439b75ec506e6fcc",
            "firstName": "Barron",
            "lastName": "Haynes",
            "department": 0,
            "location": 0,
            "startDate": "Monday, January 6, 2020 6:54 PM"
          },
          {
            "employeeID": "5e1d306a044c4c33a2547b48",
            "firstName": "Bobbi",
            "lastName": "Mendoza",
            "department": 0,
            "location": 1,
            "startDate": "Sunday, May 4, 2014 5:39 AM"
          },
          {
            "employeeID": "5e1d306ae6fa0820d1430778",
            "firstName": "Laura",
            "lastName": "York",
            "department": 0,
            "location": 1,
            "startDate": "Wednesday, April 2, 2014 10:35 PM"
          },
          {
            "employeeID": "5e1d306a28f2a3f40baadb06",
            "firstName": "Deana",
            "lastName": "Fry",
            "department": 0,
            "location": 0,
            "startDate": "Tuesday, December 29, 2015 5:55 AM"
          },
          {
            "employeeID": "5e1d306ace881e293db4d4c3",
            "firstName": "Sherman",
            "lastName": "Moon",
            "department": 1,
            "location": 1,
            "startDate": "Thursday, May 29, 2014 10:13 PM"
          },
          {
            "employeeID": "5e1d306ae197abd29945c400",
            "firstName": "Schultz",
            "lastName": "Hahn",
            "department": 0,
            "location": 1,
            "startDate": "Monday, March 4, 2019 5:41 AM"
          },
          {
            "employeeID": "5e1d306ad0ec9aa3b5f85295",
            "firstName": "Rachelle",
            "lastName": "Graves",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, May 7, 2015 6:33 PM"
          },
          {
            "employeeID": "5e1d306a56fc533d815ea713",
            "firstName": "Cardenas",
            "lastName": "Mckee",
            "department": 0,
            "location": 1,
            "startDate": "Wednesday, October 30, 2019 11:18 PM"
          },
          {
            "employeeID": "5e1d306a992f85caeb3153a1",
            "firstName": "Jaclyn",
            "lastName": "Moody",
            "department": 0,
            "location": 1,
            "startDate": "Monday, July 31, 2017 12:33 AM"
          },
          {
            "employeeID": "5e1d306a2c1257c70f299ec2",
            "firstName": "Patrick",
            "lastName": "Britt",
            "department": 1,
            "location": 0,
            "startDate": "Sunday, April 26, 2015 3:37 PM"
          },
          {
            "employeeID": "5e1d306a0dc5ef9b39882df1",
            "firstName": "Jennings",
            "lastName": "Castillo",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, March 8, 2016 8:10 PM"
          },
          {
            "employeeID": "5e1d306a274e6b0ee3da28af",
            "firstName": "Lora",
            "lastName": "Barnett",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, November 19, 2016 6:43 PM"
          },
          {
            "employeeID": "5e1d306a7879a4a15c3fba08",
            "firstName": "Glover",
            "lastName": "Goodman",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, September 15, 2018 10:26 PM"
          },
          {
            "employeeID": "5e1d306a07cbb1b68ab62ac0",
            "firstName": "Walsh",
            "lastName": "Bauer",
            "department": 1,
            "location": 1,
            "startDate": "Tuesday, July 29, 2014 6:34 AM"
          },
          {
            "employeeID": "5e1d306af620e72c73fab077",
            "firstName": "Cora",
            "lastName": "Kline",
            "department": 1,
            "location": 0,
            "startDate": "Monday, October 15, 2018 2:33 PM"
          },
          {
            "employeeID": "5e1d306a0597d176098a971e",
            "firstName": "Jennie",
            "lastName": "Trujillo",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, February 1, 2018 7:03 PM"
          },
          {
            "employeeID": "5e1d306acdadee4b88eb3511",
            "firstName": "Jeri",
            "lastName": "Hubbard",
            "department": 1,
            "location": 0,
            "startDate": "Sunday, March 15, 2015 2:07 AM"
          },
          {
            "employeeID": "5e1d306a95b0c2cb30729bbc",
            "firstName": "Steele",
            "lastName": "Rodgers",
            "department": 1,
            "location": 1,
            "startDate": "Sunday, June 30, 2019 3:47 PM"
          },
          {
            "employeeID": "5e1d306a5901b21d7d6f3ed8",
            "firstName": "Abby",
            "lastName": "Chapman",
            "department": 1,
            "location": 1,
            "startDate": "Friday, February 20, 2015 4:29 PM"
          },
          {
            "employeeID": "5e1d306a5f3119f54886c4f9",
            "firstName": "Isabel",
            "lastName": "Moss",
            "department": 1,
            "location": 1,
            "startDate": "Friday, August 10, 2018 7:16 PM"
          },
          {
            "employeeID": "5e1d306a94db4a6f933b7657",
            "firstName": "Keith",
            "lastName": "Hart",
            "department": 0,
            "location": 0,
            "startDate": "Wednesday, July 30, 2014 3:32 PM"
          },
          {
            "employeeID": "5e1d306ab1f001b7126ed8eb",
            "firstName": "Terry",
            "lastName": "Higgins",
            "department": 0,
            "location": 0,
            "startDate": "Wednesday, April 9, 2014 6:16 AM"
          },
          {
            "employeeID": "5e1d306a8fb81ed333f37169",
            "firstName": "Barrera",
            "lastName": "Wolfe",
            "department": 1,
            "location": 1,
            "startDate": "Thursday, June 30, 2016 2:44 PM"
          },
          {
            "employeeID": "5e1d306a1d9815fec62d7e98",
            "firstName": "Chavez",
            "lastName": "Emerson",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, June 27, 2019 9:24 PM"
          },
          {
            "employeeID": "5e1d306a4af82457d0476ebe",
            "firstName": "Evangelina",
            "lastName": "Brooks",
            "department": 0,
            "location": 0,
            "startDate": "Wednesday, July 20, 2016 4:45 PM"
          },
          {
            "employeeID": "5e1d306a17b83461239d1e81",
            "firstName": "Fran",
            "lastName": "Ware",
            "department": 0,
            "location": 1,
            "startDate": "Tuesday, April 9, 2019 7:01 AM"
          },
          {
            "employeeID": "5e1d306a24e53c47f30c67f5",
            "firstName": "Vaughn",
            "lastName": "Cabrera",
            "department": 1,
            "location": 1,
            "startDate": "Sunday, July 22, 2018 12:37 PM"
          },
          {
            "employeeID": "5e1d306a1fee74728c15772e",
            "firstName": "Mckinney",
            "lastName": "Roth",
            "department": 0,
            "location": 1,
            "startDate": "Thursday, September 10, 2015 6:53 AM"
          },
          {
            "employeeID": "5e1d306a57e8107f9fd32109",
            "firstName": "Curry",
            "lastName": "Owen",
            "department": 0,
            "location": 0,
            "startDate": "Friday, January 6, 2017 9:48 PM"
          },
          {
            "employeeID": "5e1d306ae59b4d15ec0b21e1",
            "firstName": "Doris",
            "lastName": "Oneill",
            "department": 1,
            "location": 1,
            "startDate": "Thursday, November 9, 2017 5:57 PM"
          },
          {
            "employeeID": "5e1d306a6daf29d1f58f29ec",
            "firstName": "Earline",
            "lastName": "Frye",
            "department": 1,
            "location": 1,
            "startDate": "Tuesday, April 14, 2015 5:33 AM"
          },
          {
            "employeeID": "5e1d306a3fc7f2d0b84d48bd",
            "firstName": "Loraine",
            "lastName": "Fitzpatrick",
            "department": 1,
            "location": 1,
            "startDate": "Monday, December 11, 2017 3:26 AM"
          },
          {
            "employeeID": "5e1d306af79b9873ccaf355e",
            "firstName": "Woodard",
            "lastName": "Logan",
            "department": 1,
            "location": 0,
            "startDate": "Thursday, February 25, 2016 3:37 PM"
          },
          {
            "employeeID": "5e1d306ac4b87739c57f5a79",
            "firstName": "Lucas",
            "lastName": "Wilkins",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, November 3, 2018 12:03 PM"
          },
          {
            "employeeID": "5e1d306aa48c03c5555595d6",
            "firstName": "Pam",
            "lastName": "Nicholson",
            "department": 0,
            "location": 0,
            "startDate": "Wednesday, September 16, 2015 10:13 AM"
          },
          {
            "employeeID": "5e1d306aa41dc105dc665958",
            "firstName": "Huffman",
            "lastName": "Petty",
            "department": 0,
            "location": 1,
            "startDate": "Friday, April 5, 2019 8:18 AM"
          },
          {
            "employeeID": "5e1d306a82aaf5cbfc9ea64f",
            "firstName": "Ramirez",
            "lastName": "Daniels",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, May 4, 2019 3:00 AM"
          },
          {
            "employeeID": "5e1d306a78781eb66f32bffd",
            "firstName": "Meredith",
            "lastName": "Neal",
            "department": 1,
            "location": 0,
            "startDate": "Monday, September 2, 2019 9:17 PM"
          },
          {
            "employeeID": "5e1d306ad6d78ff4454a3cf8",
            "firstName": "Lauri",
            "lastName": "Sykes",
            "department": 0,
            "location": 0,
            "startDate": "Wednesday, May 28, 2014 6:13 PM"
          },
          {
            "employeeID": "5e1d306a325bed2ef8b3af51",
            "firstName": "Park",
            "lastName": "Dotson",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, October 24, 2015 11:50 PM"
          },
          {
            "employeeID": "5e1d306a4c9db1b673a228c4",
            "firstName": "Janette",
            "lastName": "Morrison",
            "department": 1,
            "location": 0,
            "startDate": "Saturday, August 6, 2016 10:22 AM"
          },
          {
            "employeeID": "5e1d306a6d53933291e23cec",
            "firstName": "Bertie",
            "lastName": "Acosta",
            "department": 1,
            "location": 0,
            "startDate": "Saturday, May 14, 2016 3:00 AM"
          },
          {
            "employeeID": "5e1d306a491467138da0da3f",
            "firstName": "Beverly",
            "lastName": "Ayers",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, January 30, 2018 3:07 PM"
          },
          {
            "employeeID": "5e1d306a18411b48ba118eae",
            "firstName": "Kristie",
            "lastName": "Newton",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, January 22, 2019 6:02 AM"
          },
          {
            "employeeID": "5e1d306a6ec0a5b1e1fbaeb9",
            "firstName": "Glenn",
            "lastName": "Soto",
            "department": 0,
            "location": 0,
            "startDate": "Friday, November 11, 2016 11:17 AM"
          },
          {
            "employeeID": "5e1d306a50c6208c7c149efb",
            "firstName": "Vance",
            "lastName": "Witt",
            "department": 0,
            "location": 0,
            "startDate": "Wednesday, November 25, 2015 1:06 AM"
          },
          {
            "employeeID": "5e1d306a513f200a020a06f5",
            "firstName": "Roth",
            "lastName": "Bartlett",
            "department": 1,
            "location": 0,
            "startDate": "Sunday, February 22, 2015 4:51 PM"
          },
          {
            "employeeID": "5e1d306a8af4f4762682b55b",
            "firstName": "Rhonda",
            "lastName": "Gutierrez",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, July 28, 2016 7:02 AM"
          },
          {
            "employeeID": "5e1d306acb4ac77169326db4",
            "firstName": "Boyer",
            "lastName": "Weeks",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, September 19, 2017 3:20 PM"
          },
          {
            "employeeID": "5e1d306a4776d84f40e2220f",
            "firstName": "Morse",
            "lastName": "Hamilton",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, December 24, 2014 8:10 PM"
          },
          {
            "employeeID": "5e1d306acfeb25767aad738a",
            "firstName": "Rosanna",
            "lastName": "Small",
            "department": 0,
            "location": 0,
            "startDate": "Friday, August 10, 2018 3:51 PM"
          },
          {
            "employeeID": "5e1d306ac9aa3ce099207289",
            "firstName": "Carroll",
            "lastName": "Quinn",
            "department": 1,
            "location": 1,
            "startDate": "Monday, May 22, 2017 7:34 PM"
          },
          {
            "employeeID": "5e1d306a4710a69a3a4cb08c",
            "firstName": "Haley",
            "lastName": "Riggs",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, August 9, 2016 3:56 PM"
          },
          {
            "employeeID": "5e1d306a9ec75669efbb5cf3",
            "firstName": "Delaney",
            "lastName": "Spears",
            "department": 1,
            "location": 1,
            "startDate": "Tuesday, March 13, 2018 9:57 AM"
          },
          {
            "employeeID": "5e1d306aac69fb1e2f65ea85",
            "firstName": "Callahan",
            "lastName": "Gordon",
            "department": 0,
            "location": 0,
            "startDate": "Tuesday, June 20, 2017 1:25 AM"
          },
          {
            "employeeID": "5e1d306ac90fe7455ea577e6",
            "firstName": "Pugh",
            "lastName": "Stanley",
            "department": 0,
            "location": 1,
            "startDate": "Wednesday, May 20, 2015 7:00 AM"
          },
          {
            "employeeID": "5e1d306a7dd43106bbe9c091",
            "firstName": "Evelyn",
            "lastName": "Cook",
            "department": 0,
            "location": 1,
            "startDate": "Tuesday, August 21, 2018 12:12 PM"
          },
          {
            "employeeID": "5e1d306a2c8f55ccf8113a6a",
            "firstName": "Nancy",
            "lastName": "Rutledge",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, June 5, 2014 5:47 AM"
          },
          {
            "employeeID": "5e1d306af271f9054f39fba4",
            "firstName": "Sabrina",
            "lastName": "Spencer",
            "department": 1,
            "location": 1,
            "startDate": "Tuesday, July 22, 2014 4:03 PM"
          },
          {
            "employeeID": "5e1d306a096b9aefe4831494",
            "firstName": "Richmond",
            "lastName": "Tate",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, July 6, 2017 1:41 PM"
          },
          {
            "employeeID": "5e1d306a1c97b87aaf1f286d",
            "firstName": "Dora",
            "lastName": "Jacobson",
            "department": 0,
            "location": 1,
            "startDate": "Thursday, July 21, 2016 9:29 AM"
          },
          {
            "employeeID": "5e1d306ac87e30321ad1405f",
            "firstName": "Colette",
            "lastName": "Pugh",
            "department": 1,
            "location": 0,
            "startDate": "Saturday, June 30, 2018 3:37 AM"
          },
          {
            "employeeID": "5e1d306a16ec2c6b04988827",
            "firstName": "Joyce",
            "lastName": "Barron",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, June 2, 2015 7:45 AM"
          },
          {
            "employeeID": "5e1d306a6c82025408483fc3",
            "firstName": "Therese",
            "lastName": "Buckley",
            "department": 0,
            "location": 1,
            "startDate": "Monday, October 27, 2014 8:06 AM"
          },
          {
            "employeeID": "5e1d306a3e1961cf38b3b6cb",
            "firstName": "Wolfe",
            "lastName": "Duran",
            "department": 1,
            "location": 0,
            "startDate": "Saturday, January 11, 2020 8:11 PM"
          },
          {
            "employeeID": "5e1d306aa98d56c0ec93d7bb",
            "firstName": "Bonner",
            "lastName": "Rogers",
            "department": 0,
            "location": 1,
            "startDate": "Tuesday, April 14, 2015 4:39 PM"
          },
          {
            "employeeID": "5e1d306adfff71363ac114ac",
            "firstName": "Winifred",
            "lastName": "Harvey",
            "department": 0,
            "location": 0,
            "startDate": "Friday, July 15, 2016 1:59 PM"
          },
          {
            "employeeID": "5e1d306aa8bc0c46ae747c80",
            "firstName": "Rae",
            "lastName": "Joseph",
            "department": 0,
            "location": 0,
            "startDate": "Friday, December 27, 2019 6:16 PM"
          },
          {
            "employeeID": "5e1d306abc40c7ac2508fcf5",
            "firstName": "Morrison",
            "lastName": "Holloway",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, August 9, 2014 7:22 PM"
          },
          {
            "employeeID": "5e1d306a978aa563cf72acb6",
            "firstName": "Weber",
            "lastName": "Parrish",
            "department": 0,
            "location": 1,
            "startDate": "Wednesday, June 19, 2019 2:55 PM"
          },
          {
            "employeeID": "5e1d306a04eb8f19aff1f9fa",
            "firstName": "Dean",
            "lastName": "Ortega",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, June 14, 2018 12:28 PM"
          },
          {
            "employeeID": "5e1d306a59e5e4ee5e8f5c9b",
            "firstName": "Paula",
            "lastName": "Perry",
            "department": 0,
            "location": 0,
            "startDate": "Monday, January 1, 2018 9:18 PM"
          },
          {
            "employeeID": "5e1d30d782bddd53b9dc98a7",
            "firstName": "Whitaker",
            "lastName": "Duffy",
            "department": 0,
            "location": 0,
            "startDate": "Sunday, December 7, 2014 9:54 PM"
          },
          {
            "employeeID": "5e1d30d79703cbd93ad73706",
            "firstName": "Lana",
            "lastName": "May",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, December 24, 2016 4:06 AM"
          },
          {
            "employeeID": "5e1d30d7ad47156906e6cbbe",
            "firstName": "Vance",
            "lastName": "Maldonado",
            "department": 0,
            "location": 0,
            "startDate": "Wednesday, December 25, 2019 5:51 AM"
          },
          {
            "employeeID": "5e1d30d7e97672923ca0ae3e",
            "firstName": "Briggs",
            "lastName": "Avila",
            "department": 0,
            "location": 0,
            "startDate": "Friday, October 9, 2015 9:10 AM"
          },
          {
            "employeeID": "5e1d30d71d6ff374f18645ab",
            "firstName": "Whitehead",
            "lastName": "Klein",
            "department": 1,
            "location": 0,
            "startDate": "Monday, August 24, 2015 10:44 PM"
          },
          {
            "employeeID": "5e1d30d7dd5e9f055646912d",
            "firstName": "Hamilton",
            "lastName": "Mathis",
            "department": 0,
            "location": 1,
            "startDate": "Thursday, June 21, 2018 2:01 PM"
          },
          {
            "employeeID": "5e1d30d7bf4ed1a1da32b776",
            "firstName": "Ofelia",
            "lastName": "Mckee",
            "department": 0,
            "location": 1,
            "startDate": "Tuesday, May 22, 2018 4:12 PM"
          },
          {
            "employeeID": "5e1d30d7effa642456dd9f44",
            "firstName": "Nielsen",
            "lastName": "Giles",
            "department": 1,
            "location": 1,
            "startDate": "Saturday, May 13, 2017 4:43 AM"
          },
          {
            "employeeID": "5e1d30d7a0e6b3d9f1e12d88",
            "firstName": "Campos",
            "lastName": "Stein",
            "department": 0,
            "location": 0,
            "startDate": "Wednesday, May 22, 2019 6:39 PM"
          },
          {
            "employeeID": "5e1d30d722bb2d2da1f4c6b8",
            "firstName": "Whitney",
            "lastName": "Wooten",
            "department": 0,
            "location": 1,
            "startDate": "Tuesday, August 23, 2016 7:36 PM"
          },
          {
            "employeeID": "5e1d30d7ad15d08a9f243fbb",
            "firstName": "Dejesus",
            "lastName": "Downs",
            "department": 1,
            "location": 0,
            "startDate": "Monday, April 1, 2019 11:29 AM"
          },
          {
            "employeeID": "5e1d30d7a400a30010ae82e7",
            "firstName": "Kimberly",
            "lastName": "Stanton",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, September 2, 2014 5:30 PM"
          },
          {
            "employeeID": "5e1d30d7f5b71a51cfae4bae",
            "firstName": "Greta",
            "lastName": "Wright",
            "department": 0,
            "location": 0,
            "startDate": "Wednesday, September 28, 2016 12:36 PM"
          },
          {
            "employeeID": "5e1d30d71dcd50bf35565aeb",
            "firstName": "Lila",
            "lastName": "Doyle",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, November 13, 2018 9:31 AM"
          },
          {
            "employeeID": "5e1d30d75197221322337e39",
            "firstName": "Bright",
            "lastName": "Lowery",
            "department": 0,
            "location": 0,
            "startDate": "Sunday, November 29, 2015 7:28 PM"
          },
          {
            "employeeID": "5e1d30d77a5fb8d7d5c00122",
            "firstName": "Shelton",
            "lastName": "Cannon",
            "department": 0,
            "location": 1,
            "startDate": "Tuesday, November 4, 2014 4:05 PM"
          },
          {
            "employeeID": "5e1d30d76f8ac720780cac67",
            "firstName": "Fay",
            "lastName": "Marquez",
            "department": 1,
            "location": 0,
            "startDate": "Monday, May 20, 2019 11:44 PM"
          },
          {
            "employeeID": "5e1d30d7f7ad3a9c2ba7e9e5",
            "firstName": "Pacheco",
            "lastName": "Patterson",
            "department": 1,
            "location": 1,
            "startDate": "Monday, May 19, 2014 8:53 PM"
          },
          {
            "employeeID": "5e1d30d743f6b430092af12b",
            "firstName": "Melanie",
            "lastName": "Stokes",
            "department": 1,
            "location": 1,
            "startDate": "Saturday, April 28, 2018 11:47 AM"
          },
          {
            "employeeID": "5e1d30d74adb4ecf525536d2",
            "firstName": "Gena",
            "lastName": "Schultz",
            "department": 1,
            "location": 0,
            "startDate": "Wednesday, March 29, 2017 11:30 AM"
          },
          {
            "employeeID": "5e1d30d7dab3532cda97f45a",
            "firstName": "Golden",
            "lastName": "Reese",
            "department": 1,
            "location": 1,
            "startDate": "Monday, May 2, 2016 3:13 AM"
          },
          {
            "employeeID": "5e1d30d7a063fbf924d51cfa",
            "firstName": "Mccall",
            "lastName": "Clark",
            "department": 0,
            "location": 0,
            "startDate": "Friday, December 6, 2019 3:34 PM"
          },
          {
            "employeeID": "5e1d30d79a2091e531734229",
            "firstName": "Armstrong",
            "lastName": "Noble",
            "department": 1,
            "location": 1,
            "startDate": "Monday, November 4, 2019 12:14 PM"
          },
          {
            "employeeID": "5e1d30d78070c5efda68c45e",
            "firstName": "Sims",
            "lastName": "Randolph",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, August 18, 2016 6:44 AM"
          },
          {
            "employeeID": "5e1d30d7d3b6151620080bc4",
            "firstName": "Deidre",
            "lastName": "Garrett",
            "department": 1,
            "location": 0,
            "startDate": "Thursday, March 3, 2016 10:26 AM"
          },
          {
            "employeeID": "5e1d30d70a76d75f502bdd70",
            "firstName": "Isabella",
            "lastName": "Lane",
            "department": 1,
            "location": 1,
            "startDate": "Friday, September 2, 2016 12:47 PM"
          },
          {
            "employeeID": "5e1d30d759f260a4a404da67",
            "firstName": "Guzman",
            "lastName": "Castro",
            "department": 0,
            "location": 1,
            "startDate": "Monday, July 21, 2014 6:51 AM"
          },
          {
            "employeeID": "5e1d30d7552ae2e50152c123",
            "firstName": "Crane",
            "lastName": "Guerra",
            "department": 0,
            "location": 1,
            "startDate": "Tuesday, May 19, 2015 10:10 PM"
          },
          {
            "employeeID": "5e1d30d74bedd5fae5a1db3e",
            "firstName": "Karin",
            "lastName": "Melton",
            "department": 0,
            "location": 1,
            "startDate": "Sunday, February 16, 2014 8:33 AM"
          },
          {
            "employeeID": "5e1d30d7e504e8ca3821fed3",
            "firstName": "Jacobs",
            "lastName": "Sanford",
            "department": 0,
            "location": 0,
            "startDate": "Tuesday, November 19, 2019 11:29 AM"
          },
          {
            "employeeID": "5e1d30d7717b52deaa91506f",
            "firstName": "Fulton",
            "lastName": "Boyd",
            "department": 1,
            "location": 0,
            "startDate": "Wednesday, June 17, 2015 7:14 AM"
          },
          {
            "employeeID": "5e1d30d7738d86cbc54ddb09",
            "firstName": "Goldie",
            "lastName": "Haney",
            "department": 0,
            "location": 0,
            "startDate": "Sunday, June 15, 2014 7:55 AM"
          },
          {
            "employeeID": "5e1d30d717d5e577ab997399",
            "firstName": "Kimberley",
            "lastName": "Shields",
            "department": 0,
            "location": 1,
            "startDate": "Sunday, March 6, 2016 7:42 PM"
          },
          {
            "employeeID": "5e1d30d7462f36e93cfddd5f",
            "firstName": "Marina",
            "lastName": "Irwin",
            "department": 0,
            "location": 0,
            "startDate": "Wednesday, July 9, 2014 6:08 AM"
          },
          {
            "employeeID": "5e1d30d7446a3eeb7556dfef",
            "firstName": "Sylvia",
            "lastName": "Cooke",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, December 16, 2014 1:27 AM"
          },
          {
            "employeeID": "5e1d30d745f10100dd4869db",
            "firstName": "Carrie",
            "lastName": "Harris",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, November 30, 2019 1:47 PM"
          },
          {
            "employeeID": "5e1d30d7d9d70947f8c96097",
            "firstName": "Garrett",
            "lastName": "Burnett",
            "department": 1,
            "location": 0,
            "startDate": "Sunday, October 30, 2016 8:54 AM"
          },
          {
            "employeeID": "5e1d30d7558b3109c7d8e000",
            "firstName": "Etta",
            "lastName": "Jacobson",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, February 16, 2019 5:38 PM"
          },
          {
            "employeeID": "5e1d30d76764f58283dc119f",
            "firstName": "Kathie",
            "lastName": "Velazquez",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, June 18, 2015 2:21 PM"
          },
          {
            "employeeID": "5e1d30d78477f9a4232d5da0",
            "firstName": "Klein",
            "lastName": "Bird",
            "department": 0,
            "location": 1,
            "startDate": "Friday, September 9, 2016 1:30 AM"
          },
          {
            "employeeID": "5e1d30d7898ae70797137e55",
            "firstName": "Banks",
            "lastName": "Crawford",
            "department": 1,
            "location": 0,
            "startDate": "Sunday, July 13, 2014 5:21 PM"
          },
          {
            "employeeID": "5e1d30d722965ae70e8dd006",
            "firstName": "Thelma",
            "lastName": "Roach",
            "department": 1,
            "location": 1,
            "startDate": "Saturday, March 31, 2018 9:36 PM"
          },
          {
            "employeeID": "5e1d30d7ca1847677aac8cb3",
            "firstName": "Lowery",
            "lastName": "Hopper",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, January 18, 2018 1:25 PM"
          },
          {
            "employeeID": "5e1d30d70ca2d86eaddd4a59",
            "firstName": "Juana",
            "lastName": "Mckay",
            "department": 0,
            "location": 1,
            "startDate": "Friday, April 19, 2019 3:45 PM"
          },
          {
            "employeeID": "5e1d30d715a7835a81721889",
            "firstName": "Macdonald",
            "lastName": "Ballard",
            "department": 1,
            "location": 0,
            "startDate": "Friday, September 9, 2016 7:44 AM"
          },
          {
            "employeeID": "5e1d30d7af842d13c49daf97",
            "firstName": "Myra",
            "lastName": "Small",
            "department": 1,
            "location": 0,
            "startDate": "Saturday, September 20, 2014 8:48 AM"
          },
          {
            "employeeID": "5e1d30d7fbd396c4c09d4930",
            "firstName": "Doreen",
            "lastName": "Kent",
            "department": 1,
            "location": 1,
            "startDate": "Saturday, January 11, 2014 11:39 AM"
          },
          {
            "employeeID": "5e1d30d7a7669d0d774440d0",
            "firstName": "Fern",
            "lastName": "Salas",
            "department": 1,
            "location": 1,
            "startDate": "Monday, February 13, 2017 12:02 AM"
          },
          {
            "employeeID": "5e1d30d70defa2cde131c029",
            "firstName": "Bailey",
            "lastName": "Rush",
            "department": 1,
            "location": 0,
            "startDate": "Saturday, October 18, 2014 8:37 AM"
          },
          {
            "employeeID": "5e1d30d766aae2eb1a8044c8",
            "firstName": "Young",
            "lastName": "Slater",
            "department": 0,
            "location": 1,
            "startDate": "Tuesday, February 7, 2017 9:19 AM"
          },
          {
            "employeeID": "5e1d30d7603a4d58324b08cc",
            "firstName": "Henderson",
            "lastName": "Cummings",
            "department": 1,
            "location": 1,
            "startDate": "Monday, April 28, 2014 3:37 AM"
          },
          {
            "employeeID": "5e1d30d75d585c1086fd570f",
            "firstName": "Aurora",
            "lastName": "Blackwell",
            "department": 0,
            "location": 0,
            "startDate": "Tuesday, March 3, 2015 10:38 AM"
          },
          {
            "employeeID": "5e1d30d74c65359280f6bec7",
            "firstName": "Mamie",
            "lastName": "Marsh",
            "department": 1,
            "location": 0,
            "startDate": "Monday, June 15, 2015 8:29 AM"
          },
          {
            "employeeID": "5e1d30d724428600115c8761",
            "firstName": "Guerra",
            "lastName": "Oneil",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, October 31, 2017 2:25 PM"
          },
          {
            "employeeID": "5e1d30d73f3d60d7601b6b96",
            "firstName": "Kaufman",
            "lastName": "Mays",
            "department": 0,
            "location": 1,
            "startDate": "Friday, September 22, 2017 3:44 AM"
          },
          {
            "employeeID": "5e1d30d74e6c0beef2a5f70d",
            "firstName": "Roy",
            "lastName": "James",
            "department": 0,
            "location": 1,
            "startDate": "Thursday, July 12, 2018 4:47 AM"
          },
          {
            "employeeID": "5e1d30d761c2d959bab3e15a",
            "firstName": "Burris",
            "lastName": "William",
            "department": 1,
            "location": 0,
            "startDate": "Monday, December 8, 2014 1:05 PM"
          },
          {
            "employeeID": "5e1d30d739c8ba69c165e198",
            "firstName": "Danielle",
            "lastName": "Gonzales",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, October 19, 2019 5:02 PM"
          },
          {
            "employeeID": "5e1d30d74a3fe792017bb25f",
            "firstName": "Humphrey",
            "lastName": "Odom",
            "department": 1,
            "location": 0,
            "startDate": "Wednesday, November 20, 2019 6:59 AM"
          },
          {
            "employeeID": "5e1d30d75e3d8cfd1d0df869",
            "firstName": "Belinda",
            "lastName": "Ruiz",
            "department": 1,
            "location": 1,
            "startDate": "Tuesday, March 21, 2017 11:40 AM"
          },
          {
            "employeeID": "5e1d30d7fbfbc70d7a1c2225",
            "firstName": "Roxanne",
            "lastName": "Owen",
            "department": 1,
            "location": 1,
            "startDate": "Friday, March 21, 2014 7:47 PM"
          },
          {
            "employeeID": "5e1d30d74824094de761b201",
            "firstName": "Marjorie",
            "lastName": "Cervantes",
            "department": 1,
            "location": 0,
            "startDate": "Sunday, July 7, 2019 7:45 AM"
          },
          {
            "employeeID": "5e1d30d7e13561f50175b07c",
            "firstName": "Grant",
            "lastName": "Mack",
            "department": 1,
            "location": 1,
            "startDate": "Sunday, December 22, 2019 1:09 AM"
          },
          {
            "employeeID": "5e1d30d7ca9aa3a5f8efcc79",
            "firstName": "Yvonne",
            "lastName": "Whitley",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, July 22, 2017 5:01 AM"
          },
          {
            "employeeID": "5e1d30d7c64308f807419c88",
            "firstName": "Yvette",
            "lastName": "Collier",
            "department": 0,
            "location": 0,
            "startDate": "Sunday, August 26, 2018 10:11 PM"
          },
          {
            "employeeID": "5e1d30d70c8256fdd3698e81",
            "firstName": "Louisa",
            "lastName": "Brady",
            "department": 0,
            "location": 1,
            "startDate": "Sunday, May 22, 2016 2:05 AM"
          },
          {
            "employeeID": "5e1d30d7160cebf709f605e8",
            "firstName": "Valerie",
            "lastName": "Kerr",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, July 15, 2015 3:27 AM"
          },
          {
            "employeeID": "5e1d30d77d6c0224ce056e75",
            "firstName": "Bird",
            "lastName": "Grant",
            "department": 1,
            "location": 1,
            "startDate": "Thursday, April 7, 2016 1:10 PM"
          },
          {
            "employeeID": "5e1d30d74f99b6409aad7c29",
            "firstName": "Suzanne",
            "lastName": "Bell",
            "department": 1,
            "location": 0,
            "startDate": "Sunday, August 27, 2017 3:32 AM"
          },
          {
            "employeeID": "5e1d30d782a1d75ef4aac1fd",
            "firstName": "Randolph",
            "lastName": "Dotson",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, May 31, 2014 4:35 AM"
          },
          {
            "employeeID": "5e1d30d7f66d7236cddade1c",
            "firstName": "Bauer",
            "lastName": "Meyers",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, October 1, 2016 7:30 PM"
          },
          {
            "employeeID": "5e1d30d7afd99f6e01c72199",
            "firstName": "Medina",
            "lastName": "House",
            "department": 1,
            "location": 1,
            "startDate": "Saturday, September 17, 2016 12:47 AM"
          },
          {
            "employeeID": "5e1d30d7aaabf00848cdb9ef",
            "firstName": "Hodges",
            "lastName": "Booker",
            "department": 1,
            "location": 0,
            "startDate": "Saturday, April 25, 2015 2:59 PM"
          },
          {
            "employeeID": "5e1d30d78f744889a3184301",
            "firstName": "Candace",
            "lastName": "Delacruz",
            "department": 0,
            "location": 1,
            "startDate": "Thursday, July 6, 2017 12:00 AM"
          },
          {
            "employeeID": "5e1d30d7d7fb3c6c1478ca40",
            "firstName": "Georgia",
            "lastName": "Kidd",
            "department": 1,
            "location": 1,
            "startDate": "Tuesday, July 9, 2019 4:46 PM"
          },
          {
            "employeeID": "5e1d30d7ff4776144d13064c",
            "firstName": "Rose",
            "lastName": "Berg",
            "department": 0,
            "location": 0,
            "startDate": "Sunday, July 9, 2017 11:17 AM"
          },
          {
            "employeeID": "5e1d30d79a60294ef2241a61",
            "firstName": "Justine",
            "lastName": "Spencer",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, May 28, 2016 6:32 PM"
          },
          {
            "employeeID": "5e1d30d7fe069b11cbee7242",
            "firstName": "Lenora",
            "lastName": "Salazar",
            "department": 1,
            "location": 0,
            "startDate": "Thursday, September 11, 2014 6:22 AM"
          },
          {
            "employeeID": "5e1d30d7ff1a4f835cfc4678",
            "firstName": "Hale",
            "lastName": "Davenport",
            "department": 0,
            "location": 0,
            "startDate": "Monday, January 19, 2015 8:33 PM"
          },
          {
            "employeeID": "5e1d30d79b790bde51addcd0",
            "firstName": "Mcfadden",
            "lastName": "Wiggins",
            "department": 1,
            "location": 1,
            "startDate": "Friday, January 12, 2018 7:22 PM"
          },
          {
            "employeeID": "5e1d30d729ed4cfe27c95f68",
            "firstName": "Sadie",
            "lastName": "Morin",
            "department": 0,
            "location": 1,
            "startDate": "Sunday, May 22, 2016 11:41 PM"
          },
          {
            "employeeID": "5e1d30d70c8932ed121f8a09",
            "firstName": "Lilly",
            "lastName": "Barnes",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, July 17, 2018 2:15 PM"
          },
          {
            "employeeID": "5e1d30d783bf5b021dd52a5a",
            "firstName": "Hinton",
            "lastName": "Robbins",
            "department": 0,
            "location": 0,
            "startDate": "Friday, May 15, 2015 9:05 PM"
          },
          {
            "employeeID": "5e1d30d7a14fcd4bb56de1f9",
            "firstName": "Collins",
            "lastName": "Shelton",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, November 14, 2018 5:26 PM"
          },
          {
            "employeeID": "5e1d30d77381c23a07fcd236",
            "firstName": "Becker",
            "lastName": "Zamora",
            "department": 1,
            "location": 0,
            "startDate": "Wednesday, October 16, 2019 5:54 AM"
          },
          {
            "employeeID": "5e1d30d71bde17cfc8ced7f6",
            "firstName": "Miller",
            "lastName": "Mcgee",
            "department": 1,
            "location": 0,
            "startDate": "Monday, May 20, 2019 7:33 PM"
          },
          {
            "employeeID": "5e1d30d7e6c4b8fc64a37f75",
            "firstName": "Marylou",
            "lastName": "Cameron",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, July 22, 2017 7:45 AM"
          },
          {
            "employeeID": "5e1d30d7d515cca078193de6",
            "firstName": "Sarah",
            "lastName": "Evans",
            "department": 0,
            "location": 1,
            "startDate": "Friday, November 21, 2014 3:16 PM"
          },
          {
            "employeeID": "5e1d30d7c48bb9c2b14cce25",
            "firstName": "Rebecca",
            "lastName": "Drake",
            "department": 1,
            "location": 1,
            "startDate": "Friday, October 16, 2015 2:37 AM"
          },
          {
            "employeeID": "5e1d30d706ad6a30fc27cd98",
            "firstName": "Ayala",
            "lastName": "Guerrero",
            "department": 0,
            "location": 1,
            "startDate": "Tuesday, September 10, 2019 6:53 PM"
          },
          {
            "employeeID": "5e1d30d7365a3b28ccca4c2b",
            "firstName": "Latonya",
            "lastName": "Kirk",
            "department": 1,
            "location": 0,
            "startDate": "Thursday, September 5, 2019 1:53 PM"
          },
          {
            "employeeID": "5e1d30d7b3c65a4a6db1d34a",
            "firstName": "Pena",
            "lastName": "Le",
            "department": 1,
            "location": 1,
            "startDate": "Monday, October 5, 2015 5:48 PM"
          },
          {
            "employeeID": "5e1d30d732322f36377270b8",
            "firstName": "Ina",
            "lastName": "Glass",
            "department": 0,
            "location": 1,
            "startDate": "Monday, October 19, 2015 9:36 PM"
          },
          {
            "employeeID": "5e1d30d75db2d55b1f2f1c1b",
            "firstName": "Mcfarland",
            "lastName": "Craig",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, September 18, 2019 9:12 AM"
          },
          {
            "employeeID": "5e1d30d72a15b339a076509a",
            "firstName": "Lambert",
            "lastName": "Wynn",
            "department": 1,
            "location": 1,
            "startDate": "Thursday, January 31, 2019 5:14 AM"
          },
          {
            "employeeID": "5e1d30d7358cb6ee7297ad18",
            "firstName": "Marsh",
            "lastName": "George",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, September 2, 2015 8:11 AM"
          },
          {
            "employeeID": "5e1d30d7410f6d133bd90d26",
            "firstName": "English",
            "lastName": "Russell",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, December 28, 2017 5:20 AM"
          },
          {
            "employeeID": "5e1d30d7c7f6561e5eaa0a88",
            "firstName": "Mcbride",
            "lastName": "Lyons",
            "department": 0,
            "location": 0,
            "startDate": "Sunday, July 24, 2016 3:29 AM"
          },
          {
            "employeeID": "5e1d30d7392e9289cfd2d81a",
            "firstName": "Harrell",
            "lastName": "Greer",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, March 14, 2015 11:17 PM"
          },
          {
            "employeeID": "5e1d30d75ac92018438b478d",
            "firstName": "Candice",
            "lastName": "Ewing",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, June 14, 2014 5:24 PM"
          },
          {
            "employeeID": "5e1d30e220827b6b09d92e42",
            "firstName": "Maureen",
            "lastName": "Travis",
            "department": 1,
            "location": 0,
            "startDate": "Wednesday, January 27, 2016 12:57 PM"
          },
          {
            "employeeID": "5e1d30e2eeb52a1f1c0a9059",
            "firstName": "Rowe",
            "lastName": "Ferguson",
            "department": 0,
            "location": 0,
            "startDate": "Friday, December 11, 2015 6:44 AM"
          },
          {
            "employeeID": "5e1d30e2f321c82e924ddabf",
            "firstName": "Bette",
            "lastName": "Mcclain",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, January 17, 2015 11:10 PM"
          },
          {
            "employeeID": "5e1d30e25a3e0bdaa5167b15",
            "firstName": "Rowland",
            "lastName": "Foley",
            "department": 0,
            "location": 1,
            "startDate": "Wednesday, February 25, 2015 11:39 AM"
          },
          {
            "employeeID": "5e1d30e27e0c7022eaabae27",
            "firstName": "Claudia",
            "lastName": "Beard",
            "department": 1,
            "location": 1,
            "startDate": "Saturday, June 4, 2016 6:34 AM"
          },
          {
            "employeeID": "5e1d30e21d50e2a2970bda87",
            "firstName": "Tamera",
            "lastName": "Kinney",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, August 14, 2019 5:36 AM"
          },
          {
            "employeeID": "5e1d30e240f03b319ec86f98",
            "firstName": "Galloway",
            "lastName": "Underwood",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, January 9, 2016 8:32 PM"
          },
          {
            "employeeID": "5e1d30e2795583c8111a9392",
            "firstName": "Lillie",
            "lastName": "Orr",
            "department": 1,
            "location": 1,
            "startDate": "Saturday, August 29, 2015 8:56 PM"
          },
          {
            "employeeID": "5e1d30e2711d44ce9760513e",
            "firstName": "Mari",
            "lastName": "Bright",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, January 11, 2014 6:06 PM"
          },
          {
            "employeeID": "5e1d30e219f71d22db862b00",
            "firstName": "Wilcox",
            "lastName": "Hammond",
            "department": 1,
            "location": 1,
            "startDate": "Friday, April 19, 2019 5:32 PM"
          },
          {
            "employeeID": "5e1d30e2a8c29671fc48e733",
            "firstName": "Roxie",
            "lastName": "Garner",
            "department": 0,
            "location": 0,
            "startDate": "Tuesday, November 7, 2017 12:17 AM"
          },
          {
            "employeeID": "5e1d30e24b052e51c47ed468",
            "firstName": "Lindsey",
            "lastName": "Mueller",
            "department": 1,
            "location": 1,
            "startDate": "Friday, December 15, 2017 11:54 PM"
          },
          {
            "employeeID": "5e1d30e26707a2c7acf0f3f4",
            "firstName": "Burns",
            "lastName": "Rodriquez",
            "department": 1,
            "location": 0,
            "startDate": "Sunday, January 7, 2018 11:04 AM"
          },
          {
            "employeeID": "5e1d30e2a5939839e90fed72",
            "firstName": "Becker",
            "lastName": "Kennedy",
            "department": 0,
            "location": 1,
            "startDate": "Friday, May 25, 2018 1:59 AM"
          },
          {
            "employeeID": "5e1d30e2f84e2ca80c83d82b",
            "firstName": "Mendez",
            "lastName": "Huffman",
            "department": 0,
            "location": 0,
            "startDate": "Sunday, June 30, 2019 11:26 PM"
          },
          {
            "employeeID": "5e1d30e27316c7410d0e2347",
            "firstName": "Preston",
            "lastName": "Stark",
            "department": 1,
            "location": 1,
            "startDate": "Saturday, June 1, 2019 1:47 PM"
          },
          {
            "employeeID": "5e1d30e2506920cb57f75ecc",
            "firstName": "Mann",
            "lastName": "Conrad",
            "department": 1,
            "location": 0,
            "startDate": "Friday, January 6, 2017 8:51 PM"
          },
          {
            "employeeID": "5e1d30e23bf713dad282fa21",
            "firstName": "Johanna",
            "lastName": "Colon",
            "department": 1,
            "location": 1,
            "startDate": "Tuesday, September 18, 2018 10:16 PM"
          },
          {
            "employeeID": "5e1d30e2f010f585e81ac623",
            "firstName": "Katy",
            "lastName": "Sexton",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, May 16, 2017 2:15 PM"
          },
          {
            "employeeID": "5e1d30e2fcd0a080d3f4aaa1",
            "firstName": "Day",
            "lastName": "Griffith",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, November 18, 2017 11:29 AM"
          },
          {
            "employeeID": "5e1d30e2058af8c99c23f97c",
            "firstName": "Rosella",
            "lastName": "Church",
            "department": 0,
            "location": 0,
            "startDate": "Wednesday, July 23, 2014 8:23 PM"
          },
          {
            "employeeID": "5e1d30e26cf306b0817f3488",
            "firstName": "Fran",
            "lastName": "Bradshaw",
            "department": 0,
            "location": 1,
            "startDate": "Wednesday, March 7, 2018 2:08 AM"
          },
          {
            "employeeID": "5e1d30e21929cfab1d33da1b",
            "firstName": "Caroline",
            "lastName": "Goff",
            "department": 0,
            "location": 0,
            "startDate": "Monday, July 27, 2015 9:44 PM"
          },
          {
            "employeeID": "5e1d30e2810c92102830db19",
            "firstName": "Villarreal",
            "lastName": "Hobbs",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, December 26, 2015 12:11 AM"
          },
          {
            "employeeID": "5e1d30e231734f558d54468a",
            "firstName": "Mclaughlin",
            "lastName": "Freeman",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, June 15, 2017 1:42 AM"
          },
          {
            "employeeID": "5e1d30e2984d778cf71dc2bc",
            "firstName": "Carmella",
            "lastName": "Bryant",
            "department": 1,
            "location": 0,
            "startDate": "Sunday, March 30, 2014 9:59 AM"
          },
          {
            "employeeID": "5e1d30e2268f12990785fec1",
            "firstName": "Saundra",
            "lastName": "Morin",
            "department": 0,
            "location": 1,
            "startDate": "Sunday, February 2, 2014 6:50 AM"
          },
          {
            "employeeID": "5e1d30e20b182f632e383fb4",
            "firstName": "Eddie",
            "lastName": "Odom",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, November 5, 2014 4:06 AM"
          },
          {
            "employeeID": "5e1d30e2348cde655665ded4",
            "firstName": "Lewis",
            "lastName": "Collier",
            "department": 0,
            "location": 0,
            "startDate": "Wednesday, December 12, 2018 10:24 AM"
          },
          {
            "employeeID": "5e1d30e2133f4f8365f5b799",
            "firstName": "Karina",
            "lastName": "Cross",
            "department": 0,
            "location": 1,
            "startDate": "Wednesday, May 29, 2019 11:31 AM"
          },
          {
            "employeeID": "5e1d30e25aa377011482f8f1",
            "firstName": "Calderon",
            "lastName": "Carney",
            "department": 0,
            "location": 1,
            "startDate": "Wednesday, July 11, 2018 6:27 PM"
          },
          {
            "employeeID": "5e1d30e2afae497dfa5cc76f",
            "firstName": "Collier",
            "lastName": "Sims",
            "department": 0,
            "location": 0,
            "startDate": "Friday, May 10, 2019 6:39 PM"
          },
          {
            "employeeID": "5e1d30e2975998cb7441d3f9",
            "firstName": "Hays",
            "lastName": "Mcneil",
            "department": 1,
            "location": 1,
            "startDate": "Sunday, July 12, 2015 4:53 AM"
          },
          {
            "employeeID": "5e1d30e2f909de26ac6ba239",
            "firstName": "Odessa",
            "lastName": "Blankenship",
            "department": 1,
            "location": 0,
            "startDate": "Wednesday, January 22, 2014 3:19 AM"
          },
          {
            "employeeID": "5e1d30e2ae1260a383bd0228",
            "firstName": "Tracie",
            "lastName": "Leonard",
            "department": 0,
            "location": 1,
            "startDate": "Friday, November 18, 2016 11:27 PM"
          },
          {
            "employeeID": "5e1d30e223f6f959aff824ed",
            "firstName": "Shauna",
            "lastName": "Hess",
            "department": 0,
            "location": 1,
            "startDate": "Sunday, April 21, 2019 6:06 PM"
          },
          {
            "employeeID": "5e1d30e2ff23d638b0a7131c",
            "firstName": "French",
            "lastName": "Evans",
            "department": 0,
            "location": 0,
            "startDate": "Sunday, March 24, 2019 8:40 AM"
          },
          {
            "employeeID": "5e1d30e2935e10e996265331",
            "firstName": "Leanna",
            "lastName": "Maxwell",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, June 28, 2014 2:10 PM"
          },
          {
            "employeeID": "5e1d30e2bfb32f630e534b46",
            "firstName": "Valencia",
            "lastName": "Strickland",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, May 12, 2015 8:21 PM"
          },
          {
            "employeeID": "5e1d30e2a8dabdd169c3e227",
            "firstName": "Mcclain",
            "lastName": "Russo",
            "department": 1,
            "location": 0,
            "startDate": "Monday, January 20, 2014 1:40 PM"
          },
          {
            "employeeID": "5e1d30e287ea1bbae3c110f1",
            "firstName": "Banks",
            "lastName": "May",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, April 1, 2017 10:17 AM"
          },
          {
            "employeeID": "5e1d30e233d085ee29bd0180",
            "firstName": "Letitia",
            "lastName": "Middleton",
            "department": 0,
            "location": 1,
            "startDate": "Friday, March 1, 2019 11:43 PM"
          },
          {
            "employeeID": "5e1d30e2763d6245e540a53d",
            "firstName": "Sexton",
            "lastName": "Baker",
            "department": 0,
            "location": 1,
            "startDate": "Sunday, December 9, 2018 11:53 AM"
          },
          {
            "employeeID": "5e1d30e25b528090423152ea",
            "firstName": "Jenifer",
            "lastName": "Salas",
            "department": 1,
            "location": 0,
            "startDate": "Thursday, December 18, 2014 8:32 AM"
          },
          {
            "employeeID": "5e1d30e2c0d3a5d4cef54f54",
            "firstName": "Hoffman",
            "lastName": "Perkins",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, November 10, 2016 10:38 AM"
          },
          {
            "employeeID": "5e1d30e2139a88caceac06e3",
            "firstName": "Boone",
            "lastName": "Bonner",
            "department": 1,
            "location": 1,
            "startDate": "Thursday, November 17, 2016 6:28 AM"
          },
          {
            "employeeID": "5e1d30e2bb83f40bc7ac164c",
            "firstName": "Jackie",
            "lastName": "Workman",
            "department": 1,
            "location": 0,
            "startDate": "Saturday, September 26, 2015 1:35 PM"
          },
          {
            "employeeID": "5e1d30e201c7c8b224f54193",
            "firstName": "Morin",
            "lastName": "Gates",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, February 9, 2019 2:52 AM"
          },
          {
            "employeeID": "5e1d30e2c65d99a66217469a",
            "firstName": "Houston",
            "lastName": "Armstrong",
            "department": 1,
            "location": 1,
            "startDate": "Tuesday, June 4, 2019 6:26 PM"
          },
          {
            "employeeID": "5e1d30e21eb2845fc6d6597e",
            "firstName": "Harmon",
            "lastName": "Bird",
            "department": 1,
            "location": 0,
            "startDate": "Wednesday, December 18, 2019 1:07 AM"
          },
          {
            "employeeID": "5e1d30e2886173066c184140",
            "firstName": "Rena",
            "lastName": "Brooks",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, February 26, 2019 3:21 AM"
          },
          {
            "employeeID": "5e1d30e23bc7fcfc1d2158eb",
            "firstName": "Paige",
            "lastName": "Kemp",
            "department": 1,
            "location": 1,
            "startDate": "Thursday, April 30, 2015 8:30 PM"
          },
          {
            "employeeID": "5e1d30e2ef4e727c459d6156",
            "firstName": "Burke",
            "lastName": "Gallagher",
            "department": 0,
            "location": 0,
            "startDate": "Tuesday, August 25, 2015 1:51 AM"
          },
          {
            "employeeID": "5e1d30e2af098d7f2d15f673",
            "firstName": "Rosa",
            "lastName": "Allen",
            "department": 1,
            "location": 0,
            "startDate": "Friday, July 20, 2018 2:56 AM"
          },
          {
            "employeeID": "5e1d30e23d448c64b334a9ed",
            "firstName": "Justice",
            "lastName": "Barry",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, June 25, 2015 9:38 PM"
          },
          {
            "employeeID": "5e1d30e295fe85c88661c891",
            "firstName": "Clarissa",
            "lastName": "Shaffer",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, August 13, 2016 2:11 AM"
          },
          {
            "employeeID": "5e1d30e209c2ed0f193c02b3",
            "firstName": "Teresa",
            "lastName": "Pickett",
            "department": 0,
            "location": 1,
            "startDate": "Monday, February 9, 2015 9:00 PM"
          },
          {
            "employeeID": "5e1d30e293b5f8bf93537780",
            "firstName": "Harrington",
            "lastName": "Deleon",
            "department": 1,
            "location": 0,
            "startDate": "Wednesday, June 11, 2014 2:04 AM"
          },
          {
            "employeeID": "5e1d30e22a099a525a12c457",
            "firstName": "Kate",
            "lastName": "Gilliam",
            "department": 1,
            "location": 0,
            "startDate": "Monday, July 18, 2016 7:18 PM"
          },
          {
            "employeeID": "5e1d30e2903037130add676d",
            "firstName": "Hopkins",
            "lastName": "David",
            "department": 0,
            "location": 0,
            "startDate": "Friday, May 29, 2015 4:29 PM"
          },
          {
            "employeeID": "5e1d30e223adbac926a32d89",
            "firstName": "Chrystal",
            "lastName": "Bridges",
            "department": 1,
            "location": 0,
            "startDate": "Saturday, April 11, 2015 9:42 PM"
          },
          {
            "employeeID": "5e1d30e2fdd317892e095b13",
            "firstName": "Sanchez",
            "lastName": "Hoover",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, December 13, 2014 1:56 AM"
          },
          {
            "employeeID": "5e1d30e25fa38ef5fdebd04b",
            "firstName": "Genevieve",
            "lastName": "Schneider",
            "department": 1,
            "location": 1,
            "startDate": "Tuesday, October 9, 2018 6:53 PM"
          },
          {
            "employeeID": "5e1d30e2f979112bda52d856",
            "firstName": "Nola",
            "lastName": "Coleman",
            "department": 1,
            "location": 0,
            "startDate": "Sunday, November 30, 2014 9:37 AM"
          },
          {
            "employeeID": "5e1d30e273471724bf5a4188",
            "firstName": "Sherman",
            "lastName": "Franks",
            "department": 1,
            "location": 0,
            "startDate": "Saturday, February 11, 2017 10:52 AM"
          },
          {
            "employeeID": "5e1d30e2461be91c4836cf50",
            "firstName": "Glass",
            "lastName": "Barnett",
            "department": 0,
            "location": 1,
            "startDate": "Thursday, February 14, 2019 4:30 AM"
          },
          {
            "employeeID": "5e1d30e2b119423cb5b24f62",
            "firstName": "Moon",
            "lastName": "Sargent",
            "department": 1,
            "location": 1,
            "startDate": "Sunday, June 10, 2018 7:30 PM"
          },
          {
            "employeeID": "5e1d30e24af1a8bddf92be99",
            "firstName": "Pruitt",
            "lastName": "Ramirez",
            "department": 0,
            "location": 1,
            "startDate": "Friday, May 19, 2017 6:44 PM"
          },
          {
            "employeeID": "5e1d30e2fd3be862c3c5c8ba",
            "firstName": "Marlene",
            "lastName": "Young",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, August 15, 2019 10:17 PM"
          },
          {
            "employeeID": "5e1d30e2d6a93f3b33f7c8b0",
            "firstName": "Amie",
            "lastName": "Estrada",
            "department": 0,
            "location": 0,
            "startDate": "Tuesday, October 9, 2018 10:30 PM"
          },
          {
            "employeeID": "5e1d30e2c3b5a7b99b511f38",
            "firstName": "Latoya",
            "lastName": "Le",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, January 23, 2018 11:05 PM"
          },
          {
            "employeeID": "5e1d30e2b3db87457aab43af",
            "firstName": "Chavez",
            "lastName": "Mclaughlin",
            "department": 0,
            "location": 0,
            "startDate": "Friday, August 14, 2015 10:07 PM"
          },
          {
            "employeeID": "5e1d30e2cd7cc7818797ce5e",
            "firstName": "Espinoza",
            "lastName": "Carr",
            "department": 1,
            "location": 1,
            "startDate": "Sunday, October 7, 2018 1:54 PM"
          },
          {
            "employeeID": "5e1d30e2b0872da6cfbc94e8",
            "firstName": "Janis",
            "lastName": "Clements",
            "department": 1,
            "location": 1,
            "startDate": "Tuesday, November 7, 2017 8:37 PM"
          },
          {
            "employeeID": "5e1d30e25548d1de67c601b8",
            "firstName": "Doreen",
            "lastName": "Sutton",
            "department": 1,
            "location": 1,
            "startDate": "Sunday, July 27, 2014 10:06 PM"
          },
          {
            "employeeID": "5e1d30e2e8a6749312a3da72",
            "firstName": "Jones",
            "lastName": "Hoffman",
            "department": 1,
            "location": 0,
            "startDate": "Saturday, September 22, 2018 6:38 PM"
          },
          {
            "employeeID": "5e1d30e2ded1acb5380ace61",
            "firstName": "Dolores",
            "lastName": "Ayala",
            "department": 1,
            "location": 0,
            "startDate": "Wednesday, August 24, 2016 6:42 PM"
          },
          {
            "employeeID": "5e1d30e28a6980afa38bffa5",
            "firstName": "Zelma",
            "lastName": "Horn",
            "department": 1,
            "location": 0,
            "startDate": "Sunday, January 20, 2019 7:27 PM"
          },
          {
            "employeeID": "5e1d30e2e505d324f458e903",
            "firstName": "Roth",
            "lastName": "Mcdaniel",
            "department": 0,
            "location": 1,
            "startDate": "Tuesday, November 13, 2018 4:04 AM"
          },
          {
            "employeeID": "5e1d30e2e483bb1e362a558f",
            "firstName": "Huff",
            "lastName": "Wise",
            "department": 0,
            "location": 0,
            "startDate": "Friday, October 14, 2016 4:57 PM"
          },
          {
            "employeeID": "5e1d30e2e93a9b7e9fd77560",
            "firstName": "Rosales",
            "lastName": "Bean",
            "department": 1,
            "location": 1,
            "startDate": "Sunday, September 14, 2014 8:14 PM"
          },
          {
            "employeeID": "5e1d30e2403b4833351b567f",
            "firstName": "Dodson",
            "lastName": "Jimenez",
            "department": 1,
            "location": 0,
            "startDate": "Saturday, July 27, 2019 2:44 AM"
          },
          {
            "employeeID": "5e1d30e28121bb1f94e69419",
            "firstName": "Julia",
            "lastName": "English",
            "department": 0,
            "location": 1,
            "startDate": "Sunday, February 26, 2017 2:01 PM"
          },
          {
            "employeeID": "5e1d30e2638476109a359072",
            "firstName": "Dionne",
            "lastName": "Haney",
            "department": 1,
            "location": 1,
            "startDate": "Sunday, March 6, 2016 8:56 AM"
          },
          {
            "employeeID": "5e1d30e2567cc9f2b7806d8d",
            "firstName": "Merritt",
            "lastName": "Landry",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, January 4, 2017 5:45 AM"
          },
          {
            "employeeID": "5e1d30e2cd20943bf9d4d59d",
            "firstName": "Beasley",
            "lastName": "Reilly",
            "department": 1,
            "location": 1,
            "startDate": "Tuesday, August 14, 2018 12:22 PM"
          },
          {
            "employeeID": "5e1d30e2d5311e88e974b6fb",
            "firstName": "Candace",
            "lastName": "Hampton",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, August 22, 2015 11:21 PM"
          },
          {
            "employeeID": "5e1d30e2323ef1d71a6be0db",
            "firstName": "Armstrong",
            "lastName": "Stein",
            "department": 1,
            "location": 0,
            "startDate": "Saturday, March 17, 2018 9:05 PM"
          },
          {
            "employeeID": "5e1d30e2434a20c9a73c908a",
            "firstName": "Karla",
            "lastName": "Eaton",
            "department": 1,
            "location": 0,
            "startDate": "Monday, May 27, 2019 1:58 PM"
          },
          {
            "employeeID": "5e1d30e29c672c8ca55abbce",
            "firstName": "Noble",
            "lastName": "Lynch",
            "department": 1,
            "location": 1,
            "startDate": "Sunday, March 2, 2014 4:21 AM"
          },
          {
            "employeeID": "5e1d30e23a5f8aa603ac3217",
            "firstName": "Willis",
            "lastName": "Melendez",
            "department": 1,
            "location": 1,
            "startDate": "Friday, August 2, 2019 11:20 AM"
          },
          {
            "employeeID": "5e1d30e248571cec392888d6",
            "firstName": "Angie",
            "lastName": "Reid",
            "department": 1,
            "location": 1,
            "startDate": "Thursday, September 20, 2018 3:08 AM"
          },
          {
            "employeeID": "5e1d30e281b6dc9847822251",
            "firstName": "Jensen",
            "lastName": "Moss",
            "department": 0,
            "location": 0,
            "startDate": "Wednesday, November 14, 2018 1:01 AM"
          },
          {
            "employeeID": "5e1d30e23bdfa647dc002770",
            "firstName": "Corina",
            "lastName": "Marks",
            "department": 1,
            "location": 0,
            "startDate": "Wednesday, January 6, 2016 4:43 PM"
          },
          {
            "employeeID": "5e1d30e2e0389139eaf08859",
            "firstName": "Hester",
            "lastName": "Phelps",
            "department": 0,
            "location": 1,
            "startDate": "Wednesday, September 27, 2017 4:21 AM"
          },
          {
            "employeeID": "5e1d30e2e4f5004a92ca2142",
            "firstName": "Campbell",
            "lastName": "Hurley",
            "department": 0,
            "location": 0,
            "startDate": "Friday, February 16, 2018 11:27 PM"
          },
          {
            "employeeID": "5e1d30e2ebad7ea6741d2878",
            "firstName": "Todd",
            "lastName": "Mercer",
            "department": 0,
            "location": 1,
            "startDate": "Tuesday, April 15, 2014 5:44 PM"
          },
          {
            "employeeID": "5e1d30e27a0ce25c4b6819b5",
            "firstName": "Greta",
            "lastName": "Harmon",
            "department": 0,
            "location": 0,
            "startDate": "Sunday, May 29, 2016 2:46 PM"
          },
          {
            "employeeID": "5e1d30e2ea7fe26f23ec7a8e",
            "firstName": "Dawson",
            "lastName": "Hall",
            "department": 1,
            "location": 1,
            "startDate": "Tuesday, February 14, 2017 2:34 PM"
          },
          {
            "employeeID": "5e1d30e2e40c53cb1e003f07",
            "firstName": "Payne",
            "lastName": "Welch",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, October 5, 2019 2:55 PM"
          },
          {
            "employeeID": "5e1d30ec0da1ef1d602ef525",
            "firstName": "Luz",
            "lastName": "Boyd",
            "department": 0,
            "location": 1,
            "startDate": "Monday, August 26, 2019 3:08 AM"
          },
          {
            "employeeID": "5e1d30ec30e8ba5c1d801af6",
            "firstName": "Jewell",
            "lastName": "Cook",
            "department": 1,
            "location": 1,
            "startDate": "Tuesday, March 11, 2014 7:08 PM"
          },
          {
            "employeeID": "5e1d30ec190398aade1a4f00",
            "firstName": "Hartman",
            "lastName": "James",
            "department": 1,
            "location": 1,
            "startDate": "Friday, August 23, 2019 3:49 PM"
          },
          {
            "employeeID": "5e1d30ec6ba04d9a7c7fe0f7",
            "firstName": "Sophia",
            "lastName": "Haley",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, May 21, 2019 1:47 PM"
          },
          {
            "employeeID": "5e1d30ec3fc04a12ce6a83ac",
            "firstName": "Liz",
            "lastName": "Peck",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, March 28, 2019 5:45 PM"
          },
          {
            "employeeID": "5e1d30ec25b82b732c64a70c",
            "firstName": "Verna",
            "lastName": "Romero",
            "department": 1,
            "location": 0,
            "startDate": "Wednesday, January 9, 2019 11:29 AM"
          },
          {
            "employeeID": "5e1d30ecb5cc11ed9bac33fe",
            "firstName": "Barlow",
            "lastName": "Neal",
            "department": 0,
            "location": 1,
            "startDate": "Thursday, May 25, 2017 4:35 AM"
          },
          {
            "employeeID": "5e1d30ec60c8b8488c18b20d",
            "firstName": "Lawanda",
            "lastName": "Eaton",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, July 1, 2017 10:29 AM"
          },
          {
            "employeeID": "5e1d30ec63f20f2145bededf",
            "firstName": "Jennifer",
            "lastName": "Willis",
            "department": 1,
            "location": 1,
            "startDate": "Thursday, November 22, 2018 6:41 PM"
          },
          {
            "employeeID": "5e1d30ec91988cf94c9b9897",
            "firstName": "Gloria",
            "lastName": "Keith",
            "department": 0,
            "location": 0,
            "startDate": "Tuesday, May 12, 2015 5:32 PM"
          },
          {
            "employeeID": "5e1d30ecaffd4f3a38102a64",
            "firstName": "Kristine",
            "lastName": "Britt",
            "department": 1,
            "location": 0,
            "startDate": "Friday, August 21, 2015 1:44 AM"
          },
          {
            "employeeID": "5e1d30ec47d84100dc719428",
            "firstName": "Tracey",
            "lastName": "Ware",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, September 28, 2016 11:42 PM"
          },
          {
            "employeeID": "5e1d30ecac25cbafa315a9b5",
            "firstName": "Kate",
            "lastName": "Hurley",
            "department": 0,
            "location": 0,
            "startDate": "Tuesday, September 12, 2017 6:53 PM"
          },
          {
            "employeeID": "5e1d30ec9fc1929fdfd06ac6",
            "firstName": "Sherry",
            "lastName": "Miller",
            "department": 1,
            "location": 1,
            "startDate": "Friday, October 31, 2014 11:46 PM"
          },
          {
            "employeeID": "5e1d30ecc1647126329a0a29",
            "firstName": "Sanchez",
            "lastName": "Sims",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, October 11, 2017 6:45 PM"
          },
          {
            "employeeID": "5e1d30ec83c4f21ab09e25ee",
            "firstName": "Robbie",
            "lastName": "Herrera",
            "department": 0,
            "location": 1,
            "startDate": "Wednesday, May 6, 2015 10:31 PM"
          },
          {
            "employeeID": "5e1d30ec193765b3e5c26ba8",
            "firstName": "Lucia",
            "lastName": "Kent",
            "department": 1,
            "location": 0,
            "startDate": "Sunday, December 18, 2016 10:57 PM"
          },
          {
            "employeeID": "5e1d30ec8762236ac6e3c446",
            "firstName": "Winifred",
            "lastName": "Mcgowan",
            "department": 1,
            "location": 1,
            "startDate": "Thursday, May 23, 2019 8:13 AM"
          },
          {
            "employeeID": "5e1d30ec4c563244fb0572c6",
            "firstName": "Michael",
            "lastName": "Hunt",
            "department": 1,
            "location": 1,
            "startDate": "Sunday, August 4, 2019 7:12 AM"
          },
          {
            "employeeID": "5e1d30ec30bbf32b921bed45",
            "firstName": "Rochelle",
            "lastName": "Curry",
            "department": 1,
            "location": 0,
            "startDate": "Monday, May 14, 2018 4:02 PM"
          },
          {
            "employeeID": "5e1d30ec46fd3f509c17002c",
            "firstName": "Joyce",
            "lastName": "Ferrell",
            "department": 0,
            "location": 1,
            "startDate": "Friday, December 18, 2015 7:13 AM"
          },
          {
            "employeeID": "5e1d30ec21d3c061cd0f9ee7",
            "firstName": "Mayer",
            "lastName": "Chaney",
            "department": 0,
            "location": 0,
            "startDate": "Friday, July 20, 2018 4:19 PM"
          },
          {
            "employeeID": "5e1d30ec971aa11397ca009f",
            "firstName": "Pittman",
            "lastName": "Williams",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, August 21, 2014 4:57 AM"
          },
          {
            "employeeID": "5e1d30ec28660de613539b38",
            "firstName": "Francisca",
            "lastName": "Olson",
            "department": 1,
            "location": 0,
            "startDate": "Friday, December 12, 2014 5:38 AM"
          },
          {
            "employeeID": "5e1d30ecea4e45e91b9fcfbc",
            "firstName": "Courtney",
            "lastName": "Hale",
            "department": 0,
            "location": 0,
            "startDate": "Tuesday, January 3, 2017 11:54 PM"
          },
          {
            "employeeID": "5e1d30ec8fa1fce5df16d0a8",
            "firstName": "Teri",
            "lastName": "Petersen",
            "department": 1,
            "location": 1,
            "startDate": "Sunday, July 12, 2015 3:27 AM"
          },
          {
            "employeeID": "5e1d30ecb917f6e204a51eda",
            "firstName": "Freeman",
            "lastName": "Fowler",
            "department": 1,
            "location": 1,
            "startDate": "Saturday, December 13, 2014 9:34 AM"
          },
          {
            "employeeID": "5e1d30ec46a49be9f21ffc86",
            "firstName": "Lloyd",
            "lastName": "William",
            "department": 1,
            "location": 1,
            "startDate": "Saturday, April 27, 2019 3:24 AM"
          },
          {
            "employeeID": "5e1d30ecc3a736fd2013c234",
            "firstName": "Eleanor",
            "lastName": "Flowers",
            "department": 1,
            "location": 1,
            "startDate": "Monday, August 21, 2017 4:01 AM"
          },
          {
            "employeeID": "5e1d30ec58e8175547906dc7",
            "firstName": "Bonita",
            "lastName": "Dickson",
            "department": 0,
            "location": 1,
            "startDate": "Wednesday, August 8, 2018 4:40 AM"
          },
          {
            "employeeID": "5e1d30ec56acf5175445fe91",
            "firstName": "Sharron",
            "lastName": "Martinez",
            "department": 0,
            "location": 0,
            "startDate": "Wednesday, April 13, 2016 6:44 PM"
          },
          {
            "employeeID": "5e1d30ec63494d161d7e3cf1",
            "firstName": "Chris",
            "lastName": "Jarvis",
            "department": 1,
            "location": 1,
            "startDate": "Monday, April 23, 2018 11:41 PM"
          },
          {
            "employeeID": "5e1d30ecc6be3a004fd60261",
            "firstName": "Steele",
            "lastName": "Mendoza",
            "department": 1,
            "location": 1,
            "startDate": "Tuesday, August 30, 2016 7:58 PM"
          },
          {
            "employeeID": "5e1d30ec927b4150dc6d102a",
            "firstName": "Vega",
            "lastName": "Patton",
            "department": 0,
            "location": 1,
            "startDate": "Sunday, July 15, 2018 8:39 PM"
          },
          {
            "employeeID": "5e1d30ec3ea493609fc56dd6",
            "firstName": "Gibson",
            "lastName": "Oconnor",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, May 20, 2015 2:34 AM"
          },
          {
            "employeeID": "5e1d30ecee105ba2b7118b32",
            "firstName": "Maxine",
            "lastName": "Moody",
            "department": 1,
            "location": 0,
            "startDate": "Sunday, September 13, 2015 3:17 PM"
          },
          {
            "employeeID": "5e1d30ecade9bab7f8f281bb",
            "firstName": "Belinda",
            "lastName": "Prince",
            "department": 0,
            "location": 0,
            "startDate": "Friday, January 10, 2014 5:39 AM"
          },
          {
            "employeeID": "5e1d30ec808430efba227901",
            "firstName": "Taylor",
            "lastName": "Camacho",
            "department": 1,
            "location": 0,
            "startDate": "Thursday, March 24, 2016 10:48 AM"
          },
          {
            "employeeID": "5e1d30ec1f382f8d1fb758c8",
            "firstName": "Louisa",
            "lastName": "Hoffman",
            "department": 0,
            "location": 1,
            "startDate": "Thursday, April 17, 2014 1:11 AM"
          },
          {
            "employeeID": "5e1d30ec9137fbb15c27c4ba",
            "firstName": "Garza",
            "lastName": "Bender",
            "department": 1,
            "location": 1,
            "startDate": "Tuesday, March 15, 2016 2:54 PM"
          },
          {
            "employeeID": "5e1d30ecbaf9a0d13d1159bd",
            "firstName": "Antonia",
            "lastName": "Love",
            "department": 1,
            "location": 1,
            "startDate": "Monday, August 18, 2014 5:44 PM"
          },
          {
            "employeeID": "5e1d30ec300255eebd0a4eda",
            "firstName": "Parks",
            "lastName": "Weaver",
            "department": 1,
            "location": 0,
            "startDate": "Saturday, August 15, 2015 5:06 AM"
          },
          {
            "employeeID": "5e1d30ecd9032bef4494ce55",
            "firstName": "Nelda",
            "lastName": "Sanders",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, August 3, 2017 7:24 PM"
          },
          {
            "employeeID": "5e1d30ecc6cb47976f9a82c9",
            "firstName": "Acosta",
            "lastName": "Wise",
            "department": 1,
            "location": 0,
            "startDate": "Monday, January 15, 2018 8:01 AM"
          },
          {
            "employeeID": "5e1d30ec7b82dd4f366a9ae3",
            "firstName": "Knowles",
            "lastName": "Maxwell",
            "department": 1,
            "location": 0,
            "startDate": "Saturday, November 18, 2017 3:19 AM"
          },
          {
            "employeeID": "5e1d30ec1d2ac8bc247e284c",
            "firstName": "Lindsay",
            "lastName": "Compton",
            "department": 1,
            "location": 0,
            "startDate": "Sunday, June 10, 2018 7:22 AM"
          },
          {
            "employeeID": "5e1d30ecea4dcaf45467ecae",
            "firstName": "Newman",
            "lastName": "Franco",
            "department": 1,
            "location": 1,
            "startDate": "Sunday, September 1, 2019 1:57 PM"
          },
          {
            "employeeID": "5e1d30ec1262a16c88bd3b48",
            "firstName": "Hopper",
            "lastName": "Gibson",
            "department": 0,
            "location": 0,
            "startDate": "Sunday, August 9, 2015 6:48 PM"
          },
          {
            "employeeID": "5e1d30ec60434a768e92167b",
            "firstName": "Lela",
            "lastName": "Glover",
            "department": 0,
            "location": 1,
            "startDate": "Wednesday, January 1, 2014 1:48 PM"
          },
          {
            "employeeID": "5e1d30eca1616b678523d215",
            "firstName": "Mccarthy",
            "lastName": "Blanchard",
            "department": 1,
            "location": 1,
            "startDate": "Thursday, February 11, 2016 5:10 AM"
          },
          {
            "employeeID": "5e1d30ec197652502ef4869d",
            "firstName": "Stark",
            "lastName": "Scott",
            "department": 1,
            "location": 0,
            "startDate": "Wednesday, March 19, 2014 8:20 PM"
          },
          {
            "employeeID": "5e1d30ec0be67e4b7262f246",
            "firstName": "Lorena",
            "lastName": "Jacobson",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, May 16, 2015 12:01 AM"
          },
          {
            "employeeID": "5e1d30ecb40b3296ebc369bb",
            "firstName": "Mcmahon",
            "lastName": "Anderson",
            "department": 0,
            "location": 1,
            "startDate": "Sunday, January 4, 2015 1:50 PM"
          },
          {
            "employeeID": "5e1d30ecc4264da50007ac51",
            "firstName": "Susanna",
            "lastName": "Hutchinson",
            "department": 0,
            "location": 1,
            "startDate": "Friday, September 27, 2019 9:56 PM"
          },
          {
            "employeeID": "5e1d30ec1f4c9f5c88e7f320",
            "firstName": "Addie",
            "lastName": "Mcdaniel",
            "department": 0,
            "location": 0,
            "startDate": "Tuesday, December 9, 2014 11:11 PM"
          },
          {
            "employeeID": "5e1d30ec4a94a96aa229756c",
            "firstName": "Gilmore",
            "lastName": "Gilliam",
            "department": 0,
            "location": 1,
            "startDate": "Monday, March 12, 2018 1:12 AM"
          },
          {
            "employeeID": "5e1d30ec5c8057199e683447",
            "firstName": "Candy",
            "lastName": "Coleman",
            "department": 1,
            "location": 0,
            "startDate": "Wednesday, July 12, 2017 1:50 PM"
          },
          {
            "employeeID": "5e1d30ec72f24d0da01f37f8",
            "firstName": "Frye",
            "lastName": "Berg",
            "department": 1,
            "location": 0,
            "startDate": "Monday, February 8, 2016 3:27 AM"
          },
          {
            "employeeID": "5e1d30ec8efaa4d74e64fe8a",
            "firstName": "Floyd",
            "lastName": "Mcfadden",
            "department": 0,
            "location": 1,
            "startDate": "Sunday, August 10, 2014 12:59 AM"
          },
          {
            "employeeID": "5e1d30ecf97be2e2ed694a4f",
            "firstName": "Waller",
            "lastName": "Barlow",
            "department": 1,
            "location": 0,
            "startDate": "Sunday, September 4, 2016 2:35 PM"
          },
          {
            "employeeID": "5e1d30ec89eead35871d347d",
            "firstName": "Julie",
            "lastName": "Hudson",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, February 26, 2015 5:30 PM"
          },
          {
            "employeeID": "5e1d30ec2ab7d01afe584d6f",
            "firstName": "Arline",
            "lastName": "Holloway",
            "department": 1,
            "location": 1,
            "startDate": "Monday, January 19, 2015 12:21 AM"
          },
          {
            "employeeID": "5e1d30ecd9db3e3c7342675d",
            "firstName": "Shannon",
            "lastName": "Colon",
            "department": 0,
            "location": 1,
            "startDate": "Tuesday, July 23, 2019 12:01 PM"
          },
          {
            "employeeID": "5e1d30ec61279c0a97d55b6a",
            "firstName": "Natasha",
            "lastName": "Powers",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, April 4, 2017 7:55 PM"
          },
          {
            "employeeID": "5e1d30ec084f7097f1dc2ffb",
            "firstName": "Cunningham",
            "lastName": "Dale",
            "department": 1,
            "location": 1,
            "startDate": "Tuesday, August 6, 2019 10:37 AM"
          },
          {
            "employeeID": "5e1d30eca0ae1d9d74ea0c0a",
            "firstName": "Jackie",
            "lastName": "Carpenter",
            "department": 1,
            "location": 1,
            "startDate": "Friday, April 5, 2019 2:45 PM"
          },
          {
            "employeeID": "5e1d30ec5cee0076c9b352ef",
            "firstName": "Ethel",
            "lastName": "Poole",
            "department": 1,
            "location": 0,
            "startDate": "Sunday, November 6, 2016 8:38 AM"
          },
          {
            "employeeID": "5e1d30ec1aa9f1d32cd20208",
            "firstName": "Holden",
            "lastName": "Hopper",
            "department": 1,
            "location": 0,
            "startDate": "Friday, December 28, 2018 5:28 AM"
          },
          {
            "employeeID": "5e1d30ec3240e58f6e6a0d82",
            "firstName": "Clara",
            "lastName": "Curtis",
            "department": 1,
            "location": 1,
            "startDate": "Friday, May 4, 2018 1:16 PM"
          },
          {
            "employeeID": "5e1d30ecf1e347c299e7833a",
            "firstName": "Mclaughlin",
            "lastName": "Reese",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, November 28, 2018 3:56 AM"
          },
          {
            "employeeID": "5e1d30ecec78f8a559decd7d",
            "firstName": "Reva",
            "lastName": "Greer",
            "department": 0,
            "location": 0,
            "startDate": "Monday, March 9, 2015 9:08 AM"
          },
          {
            "employeeID": "5e1d30ec1ccab719711bf8bf",
            "firstName": "Eunice",
            "lastName": "Silva",
            "department": 1,
            "location": 0,
            "startDate": "Sunday, August 7, 2016 11:47 AM"
          },
          {
            "employeeID": "5e1d30ec838556eb549e639e",
            "firstName": "Marissa",
            "lastName": "Pittman",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, July 30, 2016 8:47 PM"
          },
          {
            "employeeID": "5e1d30ec6c724de59f9af945",
            "firstName": "Buck",
            "lastName": "Mclean",
            "department": 1,
            "location": 1,
            "startDate": "Friday, May 25, 2018 4:53 PM"
          },
          {
            "employeeID": "5e1d30ec17e713efb7752869",
            "firstName": "Workman",
            "lastName": "Valencia",
            "department": 1,
            "location": 0,
            "startDate": "Sunday, January 17, 2016 1:21 PM"
          },
          {
            "employeeID": "5e1d30ecdac2bce8417bd1ec",
            "firstName": "Gibbs",
            "lastName": "Crosby",
            "department": 1,
            "location": 0,
            "startDate": "Sunday, February 17, 2019 9:16 AM"
          },
          {
            "employeeID": "5e1d30ec1ea2d069e6e2e126",
            "firstName": "Hudson",
            "lastName": "Henry",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, May 7, 2016 10:30 PM"
          },
          {
            "employeeID": "5e1d30ec3473f43dcfae5960",
            "firstName": "Dolly",
            "lastName": "Kennedy",
            "department": 1,
            "location": 1,
            "startDate": "Friday, December 1, 2017 12:24 PM"
          },
          {
            "employeeID": "5e1d30ec3bd54877f80ffcb2",
            "firstName": "Rae",
            "lastName": "Roman",
            "department": 1,
            "location": 0,
            "startDate": "Wednesday, January 10, 2018 3:15 AM"
          },
          {
            "employeeID": "5e1d30ec8ed8d9371b2ccdcb",
            "firstName": "Sadie",
            "lastName": "Dominguez",
            "department": 1,
            "location": 1,
            "startDate": "Friday, June 17, 2016 9:44 PM"
          },
          {
            "employeeID": "5e1d30ecdef3a204fdbde407",
            "firstName": "Griffin",
            "lastName": "Kramer",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, March 23, 2017 10:00 AM"
          },
          {
            "employeeID": "5e1d30ecd4e6befd26751198",
            "firstName": "Marion",
            "lastName": "Garner",
            "department": 0,
            "location": 1,
            "startDate": "Sunday, December 29, 2019 3:34 PM"
          },
          {
            "employeeID": "5e1d30eca94fdb2bd2d9d666",
            "firstName": "Leah",
            "lastName": "Newton",
            "department": 1,
            "location": 0,
            "startDate": "Saturday, April 23, 2016 10:28 AM"
          },
          {
            "employeeID": "5e1d30ecb271681fd05c5d51",
            "firstName": "Santos",
            "lastName": "Whitehead",
            "department": 0,
            "location": 0,
            "startDate": "Monday, August 3, 2015 3:26 PM"
          },
          {
            "employeeID": "5e1d30ecaa7d4576ff7bbc88",
            "firstName": "Solomon",
            "lastName": "Knowles",
            "department": 0,
            "location": 0,
            "startDate": "Sunday, November 22, 2015 12:39 AM"
          },
          {
            "employeeID": "5e1d30ec156cbb978d769718",
            "firstName": "Marci",
            "lastName": "Riggs",
            "department": 0,
            "location": 1,
            "startDate": "Tuesday, January 5, 2016 11:34 AM"
          },
          {
            "employeeID": "5e1d30ecbe5a28a7f718ae2f",
            "firstName": "Delia",
            "lastName": "Drake",
            "department": 0,
            "location": 1,
            "startDate": "Monday, April 6, 2015 4:44 AM"
          },
          {
            "employeeID": "5e1d30ec2b813dd54a881b00",
            "firstName": "Waters",
            "lastName": "Vega",
            "department": 0,
            "location": 1,
            "startDate": "Thursday, June 29, 2017 2:23 PM"
          },
          {
            "employeeID": "5e1d30ecf7a613caab11fc79",
            "firstName": "Brooks",
            "lastName": "Wilkerson",
            "department": 0,
            "location": 1,
            "startDate": "Monday, January 2, 2017 1:09 AM"
          },
          {
            "employeeID": "5e1d30ec2725fe9a60d70b27",
            "firstName": "Landry",
            "lastName": "Parsons",
            "department": 0,
            "location": 0,
            "startDate": "Monday, August 17, 2015 3:03 AM"
          },
          {
            "employeeID": "5e1d30ec1fae6eb4bea2e80c",
            "firstName": "Rasmussen",
            "lastName": "Burch",
            "department": 0,
            "location": 1,
            "startDate": "Tuesday, June 18, 2019 3:23 PM"
          },
          {
            "employeeID": "5e1d30ec2c74ac16449fd7f9",
            "firstName": "Fitzgerald",
            "lastName": "Tillman",
            "department": 1,
            "location": 0,
            "startDate": "Friday, April 26, 2019 2:43 PM"
          },
          {
            "employeeID": "5e1d30ecbea02a621f25c8d9",
            "firstName": "Lavonne",
            "lastName": "Livingston",
            "department": 0,
            "location": 0,
            "startDate": "Tuesday, October 13, 2015 9:00 AM"
          },
          {
            "employeeID": "5e1d30ecd9e0190d7063a417",
            "firstName": "Lilian",
            "lastName": "Maddox",
            "department": 0,
            "location": 1,
            "startDate": "Sunday, March 8, 2015 8:06 PM"
          },
          {
            "employeeID": "5e1d30ece503b7b27dc2561c",
            "firstName": "Beatrice",
            "lastName": "Whitney",
            "department": 0,
            "location": 1,
            "startDate": "Wednesday, December 7, 2016 2:18 AM"
          },
          {
            "employeeID": "5e1d30ec3482b3fcfa24ab33",
            "firstName": "Estes",
            "lastName": "Pate",
            "department": 1,
            "location": 1,
            "startDate": "Friday, September 20, 2019 9:07 PM"
          },
          {
            "employeeID": "5e1d30ecc0cdafea26a1c3f2",
            "firstName": "Rosetta",
            "lastName": "Petty",
            "department": 0,
            "location": 1,
            "startDate": "Sunday, August 24, 2014 5:31 PM"
          },
          {
            "employeeID": "5e1d30ec90cb7d0364a239c1",
            "firstName": "Spears",
            "lastName": "Goodman",
            "department": 0,
            "location": 1,
            "startDate": "Wednesday, February 8, 2017 2:33 PM"
          },
          {
            "employeeID": "5e1d30ecaaeaafb066399fec",
            "firstName": "Helene",
            "lastName": "Madden",
            "department": 1,
            "location": 1,
            "startDate": "Monday, January 13, 2014 12:10 AM"
          },
          {
            "employeeID": "5e1d30ec961f735f7111c5f8",
            "firstName": "Cecilia",
            "lastName": "Hoover",
            "department": 0,
            "location": 1,
            "startDate": "Thursday, December 17, 2015 5:41 PM"
          },
          {
            "employeeID": "5e1d30f91f24b8b85bf3914b",
            "firstName": "Benjamin",
            "lastName": "Garrison",
            "department": 0,
            "location": 0,
            "startDate": "Monday, July 20, 2015 12:59 PM"
          },
          {
            "employeeID": "5e1d30f9c9f06607dfc2433b",
            "firstName": "Bailey",
            "lastName": "Yang",
            "department": 0,
            "location": 1,
            "startDate": "Wednesday, March 29, 2017 7:18 PM"
          },
          {
            "employeeID": "5e1d30f93342c3342bdab581",
            "firstName": "Carver",
            "lastName": "Franklin",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, March 16, 2017 7:09 AM"
          },
          {
            "employeeID": "5e1d30f9d28f2ed356f0b0f0",
            "firstName": "Manuela",
            "lastName": "Scott",
            "department": 1,
            "location": 0,
            "startDate": "Saturday, October 21, 2017 2:01 AM"
          },
          {
            "employeeID": "5e1d30f9992016f3c55cd13a",
            "firstName": "Patterson",
            "lastName": "Clements",
            "department": 1,
            "location": 0,
            "startDate": "Monday, April 11, 2016 3:21 AM"
          },
          {
            "employeeID": "5e1d30f9b0257613b35dbfea",
            "firstName": "Buckley",
            "lastName": "Lynch",
            "department": 0,
            "location": 0,
            "startDate": "Wednesday, June 20, 2018 7:56 AM"
          },
          {
            "employeeID": "5e1d30f9fe850638e7ae9091",
            "firstName": "Calderon",
            "lastName": "Romero",
            "department": 0,
            "location": 1,
            "startDate": "Monday, March 19, 2018 2:40 PM"
          },
          {
            "employeeID": "5e1d30f914e34abf1dab9a55",
            "firstName": "Conrad",
            "lastName": "Merritt",
            "department": 0,
            "location": 1,
            "startDate": "Tuesday, March 13, 2018 1:44 AM"
          },
          {
            "employeeID": "5e1d30f925f1bc43a14be229",
            "firstName": "Serena",
            "lastName": "Jenkins",
            "department": 1,
            "location": 1,
            "startDate": "Monday, March 28, 2016 8:37 PM"
          },
          {
            "employeeID": "5e1d30f92fab2ccd9db03e90",
            "firstName": "Odessa",
            "lastName": "Alvarez",
            "department": 1,
            "location": 1,
            "startDate": "Sunday, October 1, 2017 7:18 AM"
          },
          {
            "employeeID": "5e1d30f964d5453b49e30165",
            "firstName": "Estrada",
            "lastName": "Hurst",
            "department": 1,
            "location": 1,
            "startDate": "Thursday, July 4, 2019 2:19 PM"
          },
          {
            "employeeID": "5e1d30f9475452ce0f1d8402",
            "firstName": "Hodge",
            "lastName": "Tate",
            "department": 0,
            "location": 1,
            "startDate": "Thursday, March 5, 2015 12:22 AM"
          },
          {
            "employeeID": "5e1d30f9ba236929216c77f2",
            "firstName": "Roberson",
            "lastName": "Schultz",
            "department": 0,
            "location": 1,
            "startDate": "Monday, January 14, 2019 8:37 PM"
          },
          {
            "employeeID": "5e1d30f926fa1e45d058646e",
            "firstName": "Freeman",
            "lastName": "Love",
            "department": 1,
            "location": 1,
            "startDate": "Tuesday, May 21, 2019 10:32 PM"
          },
          {
            "employeeID": "5e1d30f9873b1e9a1888f0ab",
            "firstName": "Walker",
            "lastName": "Tran",
            "department": 1,
            "location": 1,
            "startDate": "Sunday, August 25, 2019 6:50 PM"
          },
          {
            "employeeID": "5e1d30f9b256d419e9ea4923",
            "firstName": "Chase",
            "lastName": "Kennedy",
            "department": 0,
            "location": 0,
            "startDate": "Wednesday, October 9, 2019 8:45 PM"
          },
          {
            "employeeID": "5e1d30f9b21a1aa2f8c066a0",
            "firstName": "Dorsey",
            "lastName": "Stewart",
            "department": 0,
            "location": 1,
            "startDate": "Tuesday, October 27, 2015 10:47 AM"
          },
          {
            "employeeID": "5e1d30f988ee93b1d35fc150",
            "firstName": "Graves",
            "lastName": "Gill",
            "department": 1,
            "location": 0,
            "startDate": "Monday, October 2, 2017 11:25 PM"
          },
          {
            "employeeID": "5e1d30f96efeb8397c745355",
            "firstName": "Figueroa",
            "lastName": "Hewitt",
            "department": 1,
            "location": 0,
            "startDate": "Monday, September 16, 2019 5:51 PM"
          },
          {
            "employeeID": "5e1d30f92b35bba230c85262",
            "firstName": "Alvarado",
            "lastName": "Roman",
            "department": 0,
            "location": 1,
            "startDate": "Thursday, July 24, 2014 9:12 PM"
          },
          {
            "employeeID": "5e1d30f9b4309ee36854f94d",
            "firstName": "Nelson",
            "lastName": "Dyer",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, April 12, 2016 9:00 PM"
          },
          {
            "employeeID": "5e1d30f93ad6adf819119d1c",
            "firstName": "Martin",
            "lastName": "Mcdonald",
            "department": 1,
            "location": 1,
            "startDate": "Thursday, July 16, 2015 7:01 AM"
          },
          {
            "employeeID": "5e1d30f967af0bacc2ba4857",
            "firstName": "Kendra",
            "lastName": "Morrison",
            "department": 1,
            "location": 0,
            "startDate": "Wednesday, March 2, 2016 12:51 PM"
          },
          {
            "employeeID": "5e1d30f9b3cd7c7e86d023e4",
            "firstName": "Dianna",
            "lastName": "Barry",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, August 5, 2015 8:33 AM"
          },
          {
            "employeeID": "5e1d30f9514ec18111fe8026",
            "firstName": "Gertrude",
            "lastName": "Evans",
            "department": 0,
            "location": 0,
            "startDate": "Tuesday, August 27, 2019 1:20 AM"
          },
          {
            "employeeID": "5e1d30f93e2b0fec512401c5",
            "firstName": "Genevieve",
            "lastName": "Valdez",
            "department": 0,
            "location": 0,
            "startDate": "Wednesday, December 30, 2015 2:39 PM"
          },
          {
            "employeeID": "5e1d30f9133ae0e277251cd9",
            "firstName": "Patton",
            "lastName": "Mcintosh",
            "department": 1,
            "location": 0,
            "startDate": "Thursday, August 23, 2018 2:35 PM"
          },
          {
            "employeeID": "5e1d30f98d56981841022410",
            "firstName": "Katelyn",
            "lastName": "Hoover",
            "department": 0,
            "location": 0,
            "startDate": "Friday, March 9, 2018 1:31 AM"
          },
          {
            "employeeID": "5e1d30f923662843fae1165f",
            "firstName": "Booker",
            "lastName": "George",
            "department": 1,
            "location": 0,
            "startDate": "Sunday, October 14, 2018 8:09 AM"
          },
          {
            "employeeID": "5e1d30f92b7f61a4106be406",
            "firstName": "Sharpe",
            "lastName": "Weiss",
            "department": 0,
            "location": 1,
            "startDate": "Friday, April 22, 2016 10:28 AM"
          },
          {
            "employeeID": "5e1d30f9c16766805805d79e",
            "firstName": "Love",
            "lastName": "Cross",
            "department": 0,
            "location": 1,
            "startDate": "Tuesday, April 7, 2015 2:20 PM"
          },
          {
            "employeeID": "5e1d30f9aa75393eafdd9ff4",
            "firstName": "Hansen",
            "lastName": "Dunlap",
            "department": 1,
            "location": 0,
            "startDate": "Monday, April 30, 2018 6:12 AM"
          },
          {
            "employeeID": "5e1d30f972f81e9d254a7f07",
            "firstName": "Denise",
            "lastName": "Clarke",
            "department": 0,
            "location": 0,
            "startDate": "Monday, October 23, 2017 2:15 PM"
          },
          {
            "employeeID": "5e1d30f96c7e70774241d10c",
            "firstName": "Pam",
            "lastName": "Ratliff",
            "department": 1,
            "location": 1,
            "startDate": "Thursday, August 29, 2019 3:32 PM"
          },
          {
            "employeeID": "5e1d30f925852d4ec691198f",
            "firstName": "Darlene",
            "lastName": "Sparks",
            "department": 1,
            "location": 0,
            "startDate": "Friday, June 7, 2019 12:09 AM"
          },
          {
            "employeeID": "5e1d30f99b932b718ab9d020",
            "firstName": "Berg",
            "lastName": "Tyler",
            "department": 0,
            "location": 1,
            "startDate": "Friday, September 5, 2014 4:27 PM"
          },
          {
            "employeeID": "5e1d30f91f7eae70bcd1509e",
            "firstName": "Coleen",
            "lastName": "Pittman",
            "department": 1,
            "location": 1,
            "startDate": "Saturday, March 14, 2015 9:30 PM"
          },
          {
            "employeeID": "5e1d30f94188173035e46f0b",
            "firstName": "Janine",
            "lastName": "Sheppard",
            "department": 1,
            "location": 1,
            "startDate": "Sunday, March 6, 2016 1:47 AM"
          },
          {
            "employeeID": "5e1d30f90f94b8e7fa420716",
            "firstName": "Kemp",
            "lastName": "Landry",
            "department": 1,
            "location": 1,
            "startDate": "Thursday, September 27, 2018 4:33 PM"
          },
          {
            "employeeID": "5e1d30f9c7e0140619cf1b7f",
            "firstName": "Roy",
            "lastName": "Benjamin",
            "department": 1,
            "location": 1,
            "startDate": "Monday, May 1, 2017 5:08 AM"
          },
          {
            "employeeID": "5e1d30f90b96438e65b1c9dc",
            "firstName": "Mildred",
            "lastName": "Wright",
            "department": 0,
            "location": 0,
            "startDate": "Sunday, August 7, 2016 3:51 AM"
          },
          {
            "employeeID": "5e1d30f9b70af9216686a275",
            "firstName": "Prince",
            "lastName": "Mejia",
            "department": 1,
            "location": 1,
            "startDate": "Friday, May 18, 2018 9:52 AM"
          },
          {
            "employeeID": "5e1d30f9c3d340881bb09307",
            "firstName": "Lopez",
            "lastName": "Bryant",
            "department": 1,
            "location": 0,
            "startDate": "Wednesday, December 30, 2015 7:18 AM"
          },
          {
            "employeeID": "5e1d30f95c552a69f1e9caa9",
            "firstName": "Chen",
            "lastName": "Kelley",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, November 6, 2014 10:21 AM"
          },
          {
            "employeeID": "5e1d30f937e82aa154abb712",
            "firstName": "Lina",
            "lastName": "Kemp",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, July 8, 2015 1:54 PM"
          },
          {
            "employeeID": "5e1d30f937e7a7f1449b6f14",
            "firstName": "Cantu",
            "lastName": "Vasquez",
            "department": 1,
            "location": 0,
            "startDate": "Thursday, November 3, 2016 4:15 AM"
          },
          {
            "employeeID": "5e1d30f93aa3d649c5cc7b70",
            "firstName": "Kristina",
            "lastName": "Lowe",
            "department": 0,
            "location": 1,
            "startDate": "Tuesday, July 5, 2016 3:00 PM"
          },
          {
            "employeeID": "5e1d30f9f7a992e8b6a9fdbe",
            "firstName": "Christian",
            "lastName": "Sharp",
            "department": 0,
            "location": 1,
            "startDate": "Friday, March 16, 2018 2:04 PM"
          },
          {
            "employeeID": "5e1d30f93ea7931788694514",
            "firstName": "Mcknight",
            "lastName": "Bray",
            "department": 1,
            "location": 0,
            "startDate": "Monday, January 6, 2014 9:46 PM"
          },
          {
            "employeeID": "5e1d30f97b7a909cacae9939",
            "firstName": "Mai",
            "lastName": "Perry",
            "department": 0,
            "location": 0,
            "startDate": "Sunday, December 6, 2015 4:42 AM"
          },
          {
            "employeeID": "5e1d30f973defb1aae30a9ee",
            "firstName": "Hill",
            "lastName": "Herman",
            "department": 1,
            "location": 1,
            "startDate": "Monday, April 11, 2016 12:15 PM"
          },
          {
            "employeeID": "5e1d30f9470bc42375163ef6",
            "firstName": "Dennis",
            "lastName": "Webster",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, January 17, 2018 2:58 AM"
          },
          {
            "employeeID": "5e1d30f9896e3b7645ed901b",
            "firstName": "Adkins",
            "lastName": "Bridges",
            "department": 0,
            "location": 1,
            "startDate": "Friday, April 10, 2015 10:17 PM"
          },
          {
            "employeeID": "5e1d30f9bb4d32dfedc01383",
            "firstName": "Drake",
            "lastName": "Mendoza",
            "department": 0,
            "location": 0,
            "startDate": "Sunday, November 27, 2016 11:08 PM"
          },
          {
            "employeeID": "5e1d30f92e57f5a441306ce4",
            "firstName": "Mclaughlin",
            "lastName": "Page",
            "department": 0,
            "location": 1,
            "startDate": "Monday, November 9, 2015 9:04 AM"
          },
          {
            "employeeID": "5e1d30f907627569aa469895",
            "firstName": "Hall",
            "lastName": "Mathis",
            "department": 0,
            "location": 1,
            "startDate": "Thursday, October 2, 2014 11:03 PM"
          },
          {
            "employeeID": "5e1d30f9799f68fd53a22aa8",
            "firstName": "Finley",
            "lastName": "Cote",
            "department": 0,
            "location": 1,
            "startDate": "Friday, August 4, 2017 9:32 PM"
          },
          {
            "employeeID": "5e1d30f9fa645eb68961a518",
            "firstName": "Marian",
            "lastName": "Ryan",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, November 22, 2014 9:07 AM"
          },
          {
            "employeeID": "5e1d30f9de69ced2e88ce733",
            "firstName": "Vazquez",
            "lastName": "Gibbs",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, March 28, 2018 6:18 PM"
          },
          {
            "employeeID": "5e1d30f96e7c9703567109fb",
            "firstName": "Concetta",
            "lastName": "Beck",
            "department": 0,
            "location": 1,
            "startDate": "Wednesday, November 16, 2016 2:42 PM"
          },
          {
            "employeeID": "5e1d30f9337c3da22edf66d7",
            "firstName": "Claire",
            "lastName": "Mosley",
            "department": 0,
            "location": 1,
            "startDate": "Sunday, January 22, 2017 9:36 AM"
          },
          {
            "employeeID": "5e1d30f9c11020b793cc65d6",
            "firstName": "Schneider",
            "lastName": "Hicks",
            "department": 1,
            "location": 0,
            "startDate": "Wednesday, October 5, 2016 12:22 PM"
          },
          {
            "employeeID": "5e1d30f9f87fe88ba2836410",
            "firstName": "Iva",
            "lastName": "Baxter",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, May 28, 2016 7:38 PM"
          },
          {
            "employeeID": "5e1d30f95fdd2df9d26e7e40",
            "firstName": "Hammond",
            "lastName": "Gregory",
            "department": 1,
            "location": 0,
            "startDate": "Wednesday, December 6, 2017 12:48 AM"
          },
          {
            "employeeID": "5e1d30f9eca73b2d32b763ab",
            "firstName": "Poole",
            "lastName": "Wise",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, April 18, 2018 5:44 AM"
          },
          {
            "employeeID": "5e1d30f9b99b40342287b817",
            "firstName": "Corine",
            "lastName": "Thomas",
            "department": 0,
            "location": 1,
            "startDate": "Tuesday, September 24, 2019 10:39 PM"
          },
          {
            "employeeID": "5e1d30f9509e1a7702bf43c2",
            "firstName": "Oneal",
            "lastName": "Logan",
            "department": 0,
            "location": 1,
            "startDate": "Tuesday, April 12, 2016 6:44 PM"
          },
          {
            "employeeID": "5e1d30f9db03548b5449bbf8",
            "firstName": "Kane",
            "lastName": "Guzman",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, February 25, 2017 10:36 PM"
          },
          {
            "employeeID": "5e1d30f926682dce0cd45b1b",
            "firstName": "Rivas",
            "lastName": "Walsh",
            "department": 1,
            "location": 0,
            "startDate": "Wednesday, July 8, 2015 9:56 PM"
          },
          {
            "employeeID": "5e1d30f971790365997832af",
            "firstName": "Elvira",
            "lastName": "Solomon",
            "department": 1,
            "location": 0,
            "startDate": "Saturday, June 28, 2014 2:16 PM"
          },
          {
            "employeeID": "5e1d30f9e8234330e3d67957",
            "firstName": "Jaclyn",
            "lastName": "Knight",
            "department": 0,
            "location": 1,
            "startDate": "Monday, August 4, 2014 11:40 PM"
          },
          {
            "employeeID": "5e1d30f9bc0d26c61dccaf9d",
            "firstName": "Constance",
            "lastName": "Christian",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, February 1, 2017 10:58 PM"
          },
          {
            "employeeID": "5e1d30f9ecaf0368013bd244",
            "firstName": "Cindy",
            "lastName": "Perkins",
            "department": 0,
            "location": 1,
            "startDate": "Thursday, July 19, 2018 8:16 AM"
          },
          {
            "employeeID": "5e1d30f964b66c62d7b193bc",
            "firstName": "Virgie",
            "lastName": "Knapp",
            "department": 0,
            "location": 1,
            "startDate": "Friday, April 24, 2015 4:59 AM"
          },
          {
            "employeeID": "5e1d30f9acc37330b45d6019",
            "firstName": "Mccoy",
            "lastName": "Roy",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, December 27, 2017 10:22 AM"
          },
          {
            "employeeID": "5e1d30f94d4bea5f63c4545e",
            "firstName": "Vickie",
            "lastName": "Steele",
            "department": 1,
            "location": 1,
            "startDate": "Tuesday, July 3, 2018 8:10 PM"
          },
          {
            "employeeID": "5e1d30f942214633e844fd25",
            "firstName": "Tracy",
            "lastName": "Mullen",
            "department": 0,
            "location": 0,
            "startDate": "Monday, May 30, 2016 3:11 PM"
          },
          {
            "employeeID": "5e1d30f9adaa67894dd0e467",
            "firstName": "Burch",
            "lastName": "Austin",
            "department": 1,
            "location": 0,
            "startDate": "Friday, November 16, 2018 3:16 PM"
          },
          {
            "employeeID": "5e1d30f984b6fdc1f89c816b",
            "firstName": "Carrillo",
            "lastName": "Conley",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, July 12, 2016 4:00 PM"
          },
          {
            "employeeID": "5e1d30f95678b72ee3fcfab8",
            "firstName": "Hope",
            "lastName": "Sargent",
            "department": 0,
            "location": 1,
            "startDate": "Sunday, August 9, 2015 1:11 PM"
          },
          {
            "employeeID": "5e1d30f96ede9d08a3ad831d",
            "firstName": "Padilla",
            "lastName": "Case",
            "department": 1,
            "location": 0,
            "startDate": "Monday, December 3, 2018 7:10 AM"
          },
          {
            "employeeID": "5e1d30f9e64a3005e7b076fb",
            "firstName": "Clements",
            "lastName": "Rogers",
            "department": 1,
            "location": 0,
            "startDate": "Tuesday, April 3, 2018 8:34 AM"
          },
          {
            "employeeID": "5e1d30f9c445109c370be38a",
            "firstName": "Janette",
            "lastName": "Frazier",
            "department": 1,
            "location": 1,
            "startDate": "Wednesday, January 8, 2020 3:13 PM"
          },
          {
            "employeeID": "5e1d30f9c07adc21ec856cb4",
            "firstName": "Davis",
            "lastName": "Olsen",
            "department": 1,
            "location": 0,
            "startDate": "Friday, June 7, 2019 10:01 AM"
          },
          {
            "employeeID": "5e1d30f95ef7bcd86209c9a8",
            "firstName": "Simmons",
            "lastName": "Riley",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, April 5, 2014 10:18 PM"
          },
          {
            "employeeID": "5e1d30f9125acf827e1d620a",
            "firstName": "Hayes",
            "lastName": "Nixon",
            "department": 0,
            "location": 0,
            "startDate": "Wednesday, October 10, 2018 9:29 PM"
          },
          {
            "employeeID": "5e1d30f99d852b8e51728725",
            "firstName": "Nichole",
            "lastName": "Hardin",
            "department": 0,
            "location": 0,
            "startDate": "Thursday, January 23, 2014 6:45 PM"
          },
          {
            "employeeID": "5e1d30f948cd3be273658568",
            "firstName": "Alissa",
            "lastName": "Cantrell",
            "department": 1,
            "location": 1,
            "startDate": "Thursday, November 22, 2018 4:30 AM"
          },
          {
            "employeeID": "5e1d30f9a682d8f95fa696f5",
            "firstName": "Parks",
            "lastName": "Moreno",
            "department": 1,
            "location": 0,
            "startDate": "Wednesday, December 18, 2019 5:36 PM"
          },
          {
            "employeeID": "5e1d30f98d88b2796aefef05",
            "firstName": "Valenzuela",
            "lastName": "Lambert",
            "department": 0,
            "location": 1,
            "startDate": "Sunday, February 1, 2015 4:23 PM"
          },
          {
            "employeeID": "5e1d30f9e87ab4cfb35b4a08",
            "firstName": "Janna",
            "lastName": "Henderson",
            "department": 1,
            "location": 1,
            "startDate": "Friday, August 11, 2017 3:33 PM"
          },
          {
            "employeeID": "5e1d30f92abe1c6e84705e3c",
            "firstName": "Jocelyn",
            "lastName": "Mccarthy",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, January 11, 2020 8:46 AM"
          },
          {
            "employeeID": "5e1d30f972f5f3bc2c69748c",
            "firstName": "Walters",
            "lastName": "Kirkland",
            "department": 1,
            "location": 0,
            "startDate": "Monday, November 20, 2017 10:14 PM"
          },
          {
            "employeeID": "5e1d30f99dd5aa3f4ce04b41",
            "firstName": "Debra",
            "lastName": "Schroeder",
            "department": 0,
            "location": 1,
            "startDate": "Monday, January 23, 2017 7:22 AM"
          },
          {
            "employeeID": "5e1d30f9c5b9b42d278db8a2",
            "firstName": "Walls",
            "lastName": "Patton",
            "department": 0,
            "location": 0,
            "startDate": "Monday, August 11, 2014 3:08 AM"
          },
          {
            "employeeID": "5e1d30f96b4dc0d9f2000f34",
            "firstName": "Jana",
            "lastName": "Reed",
            "department": 0,
            "location": 1,
            "startDate": "Saturday, September 13, 2014 9:36 PM"
          },
          {
            "employeeID": "5e1d30f9343b1a2b33ec1896",
            "firstName": "Bettye",
            "lastName": "Mcleod",
            "department": 0,
            "location": 1,
            "startDate": "Tuesday, July 31, 2018 1:19 AM"
          },
          {
            "employeeID": "5e1d30f9f2e55b462806a9f0",
            "firstName": "Quinn",
            "lastName": "Daugherty",
            "department": 1,
            "location": 0,
            "startDate": "Thursday, November 3, 2016 2:46 PM"
          },
          {
            "employeeID": "5e1d30f999f7a8479e9632c2",
            "firstName": "Edna",
            "lastName": "Mckay",
            "department": 0,
            "location": 1,
            "startDate": "Thursday, January 2, 2020 6:58 AM"
          },
          {
            "employeeID": "5e1d30f9d6ca4d5e6f29cd72",
            "firstName": "Hart",
            "lastName": "Puckett",
            "department": 0,
            "location": 0,
            "startDate": "Saturday, October 12, 2019 9:17 AM"
          }
        ],
        columns: [{
          label: 'ID',
          name: 'employeeID'
        }, {
          label: 'First Name',
          name: 'firstName'
        }, {
          label: 'Last Name',
          name: 'lastName'
        }, {
          label: 'Department',
          name: 'department',
          render: function(data) {
            return self.getDepartmentByID(data).name;
          }
        }, {
          label: 'Start Date',
          name: 'startDate',
          format: 'date'
        }, {
          label: 'Location',
          name: 'location'
        }],
        order: {
          column: 'firstName',
          direction: 'asc'
        },
        buttons: [
          'columnVisibility',
          'exportCSV'
        ],
        orderable: true,
        searchable: true,
        storage: 'employeeSearch'
      },
      departments: [{
        id: '0',
        name: 'Operations'
      }, {
        id: '1',
        name: 'Asset Management'
      }],
      locations: [{
        id: '0',
        name: 'Baltimore'
      }, {
        id: '1',
        name: 'Buffalo'
      }]
    }
  },
  methods: {
    getDepartmentByID: function(departmentID) {
      const self = this;
      return self.departments.find(function(department) {
        return department.id.toString() === departmentID.toString();
      });
    },
    getLocationByID: function(locationID) {
      const self = this;
      return self.locations.find(function(location) {
        return location.id.toString() === locationID.toString();
      });
    }
  }
}
</script>

<style>
html {
  height: 100%;
}
body {
  margin: 0px;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px;
  height: 100%;
}
</style>
