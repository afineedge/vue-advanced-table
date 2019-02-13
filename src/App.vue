<template>
  <div id="app">
    <div style="position: fixed; top: 0; left: 0; bottom: 0; right: 0; display: flex; flex-direction: column;">
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
        rows: [{
          firstName: 'Eric',
          lastName: 'Edgerton',
          employeeID: 'EPAREE2',
          department: '0',
          location: '0'
        }, {
          firstName: 'Kevin',
          lastName: 'Morris',
          employeeID: 'EPARYJ6',
          department: '0',
          location: '0'
        }, {
          firstName: 'Tatiana',
          lastName: 'Nikolaeva',
          employeeID: 'EPARTN0',
          department: '0',
          location: '0'
        }, {
          firstName: 'Aramis',
          lastName: 'Camacho',
          employeeID: 'EPARAC7',
          department: '0',
          location: '0'
        }, {
          firstName: 'Eric',
          lastName: 'Edgerton',
          employeeID: 'EPAREE2',
          department: '0',
          location: '0'
        }, {
          firstName: 'Kevin',
          lastName: 'Morris',
          employeeID: 'EPARYJ6',
          department: '0',
          location: '0'
        }, {
          firstName: 'Tatiana',
          lastName: 'Nikolaeva',
          employeeID: 'EPARTN0',
          department: '0',
          location: '0'
        }, {
          firstName: 'Aramis',
          lastName: 'Camacho',
          employeeID: 'EPARAC7',
          department: '0',
          location: '0'
        }, {
          firstName: 'Eric',
          lastName: 'Edgerton',
          employeeID: 'EPAREE2',
          department: '0',
          location: '0'
        }, {
          firstName: 'Kevin',
          lastName: 'Morris',
          employeeID: 'EPARYJ6',
          department: '0',
          location: '0'
        }, {
          firstName: 'Tatiana',
          lastName: 'Nikolaeva',
          employeeID: 'EPARTN0',
          department: '0',
          location: '0'
        }, {
          firstName: 'Aramis',
          lastName: 'Camacho',
          employeeID: 'EPARAC7',
          department: '0',
          location: '0'
        }, {
          firstName: 'Eric',
          lastName: 'Edgerton',
          employeeID: 'EPAREE2',
          department: '0',
          location: '0'
        }, {
          firstName: 'Kevin',
          lastName: 'Morris',
          employeeID: 'EPARYJ6',
          department: '0',
          location: '0'
        }, {
          firstName: 'Tatiana',
          lastName: 'Nikolaeva',
          employeeID: 'EPARTN0',
          department: '0',
          location: '0'
        }, {
          firstName: 'Aramis',
          lastName: 'Camacho',
          employeeID: 'EPARAC7',
          department: '0',
          location: '0'
        }, {
          firstName: 'Eric',
          lastName: 'Edgerton',
          employeeID: 'EPAREE2',
          department: '0',
          location: '0'
        }, {
          firstName: 'Kevin',
          lastName: 'Morris',
          employeeID: 'EPARYJ6',
          department: '0',
          location: '0'
        }, {
          firstName: 'Tatiana',
          lastName: 'Nikolaeva',
          employeeID: 'EPARTN0',
          department: '0',
          location: '0'
        }, {
          firstName: 'Aramis',
          lastName: 'Camacho',
          employeeID: 'EPARAC7',
          department: '0',
          location: '0'
        }, {
          firstName: 'Eric',
          lastName: 'Edgerton',
          employeeID: 'EPAREE2',
          department: '0',
          location: '0'
        }, {
          firstName: 'Kevin',
          lastName: 'Morris',
          employeeID: 'EPARYJ6',
          department: '0',
          location: '0'
        }, {
          firstName: 'Tatiana',
          lastName: 'Nikolaeva',
          employeeID: 'EPARTN0',
          department: '0',
          location: '0'
        }, {
          firstName: 'Aramis',
          lastName: 'Camacho',
          employeeID: 'EPARAC7',
          department: '0',
          location: '0'
        }, {
          firstName: 'Eric',
          lastName: 'Edgerton',
          employeeID: 'EPAREE2',
          department: '0',
          location: '0'
        }, {
          firstName: 'Kevin',
          lastName: 'Morris',
          employeeID: 'EPARYJ6',
          department: '0',
          location: '0'
        }, {
          firstName: 'Tatiana',
          lastName: 'Nikolaeva',
          employeeID: 'EPARTN0',
          department: '0',
          location: '0'
        }, {
          firstName: 'Aramis',
          lastName: 'Camacho',
          employeeID: 'EPARAC7',
          department: '0',
          location: '0'
        }],
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
          label: 'Location',
          name: 'location'
        }],
        order: {
          column: 'firstName',
          direction: 'asc'
        },
        buttons: [
          'columnVisibility'
        ],
        orderable: true,
        searchable: true
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
        return department.id === departmentID;
      });
    },
    getLocationByID: function(locationID) {
      const self = this;
      return self.locations.find(function(location) {
        return location.id === locationID;
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 15px;
}
</style>
