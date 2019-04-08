# vue-advanced-table

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Requirements

* [VueJS](http://vuejs.org/) ```^2.0.0```

## Usage
```html
<template>
  <div>
    <vue-advanced-table v-bind="tableConfig"></vue-advanced-table>	    
  </div>
</template>

<script>
import vueAdvancedTable from '../vue-advanced-table.vue'

export default {
  components: {
    vueAdvancedTable
  },
  data: function() {
    return {
      tableConfig: {
        primaryKey: 'id',
        rows: [{
            id: 0,
            employeeName: 'Oscar Dunbrough'
          },{
            id: 1,
            employeeName: 'Samantha Hutchence'
        }],
        columns: [{
          label: 'ID',
          name: 'id'
        },{
          label: 'Name',
          name: 'employeeName'
        }]
      }
    }
  }
}
</script>
```

## UMD Usage
After build, ```/dist/``` contains a universal module version of ```vue-advanced-table```. To add it to your application, use the following tags (modified for actual location):
```
<script src="../vueAdvancedTable.umd.js"></script>
<link rel="stylesheet" href="../vueAdvancedTable.css">
```
Note: Any Vue component files including the UMD version must include the tag ```module="true"```.
#### Example:
app.js
```
<script src="../vueAdvancedTable.umd.js"></script>
<link rel="stylesheet" href="../vueAdvancedTable.css">

<script src="table.js" module="true"></script>

<div id="app">
  <table></table>
</div>

<script>
new Vue({
  components: {
    table
  }
}).$mount('#app')
</script>

```
table.js
```
<script>
  <template>
    <div>
      <vue-advanced-table v-bind:rows="tableConfig.rows" v-bind:columns="tableConfig.columns" v-bind:primary-key="'id'"></vue-advanced-table>	    
    </div>
  </template>

  <script>
    export default {
      name: 'table',
      components: {
        vueAdvancedTable
      },
      data: function() {
        return {
          tableConfig: {
            rows: [{
              id: 0,
              employeeName: 'Oscar Dunbrough'
            },{
              id: 1,
              employeeName: 'Samantha Hutchence'
            }],
            columns: [{
              label: 'ID',
              name: 'id'
            },{
              label: 'Name',
              name: 'employeeName'
            }]
          }
        }
      }
    }
  </script>
</script>

```

## Props
|Name|Required|Format|Default value|Description|
|---|---|---|---|---|
|```primaryKey```   |```true``` |```String```|N/A|the primary key of the data set|
|```rows```         |```true``` |```Array```|N/A|the data set to be referenced|
|```columns```      |```true``` |```Array```|N/A|the columns to be referenced from each row of the data set|
|```selectedRows``` |```false```|```Array```|```[]```|an array of primary keys. Rows with these keys will receive class ```.active```|
|```buttons```      |```false```|```Array```|```[]```|buttons to be displayed with the table|
|```order```        |```false```|```Object```|```{column: '', direction: 'asc'}```|determines the column to sort table rows by, as well as the direction to sort|
|```orderable```    |```false```|```Boolean```|```true```|determines whether table rows can be reordered by column|
|```searchable```   |```false```|```Boolean```|```true```|assigns visibility of search input|
|```storage```      |```false```|```String```|```''```|location in ```localStorage``` in which to save table state for next time table is viewed. State is not saved if storage location is not provided|
|```classes```      |```false```|```String``` or ```object```|```''```|determines classes to be assigned to table if ```string```, or to elements matching keys if ```object```|

## Props details

### primaryKey
|Required|Format|Default value|
|---|---|---|
|```true``` |```String```|N/A|

A key that is present in all rows, with unique values among all rows.

### rows
|Required|Format|Default value|
|---|---|---|
|```true``` |```Array```|N/A|

The data set to be referenced by the component. Must be an array of objects. Example:
```
{
  id: 0 // primaryKey,
  firstName: 'Jenny',
  lastName: 'Kerrigan'
}
```

### columns
|Required|Format|Default value|
|---|---|---|
|```true``` |```Array```|N/A|

The columns to be referenced from each row of the data set. Must be an array of objects, including an object referencing the primary key. Example:
```
{
  label: 'ID',
  name: 'id'
}, {
  label: 'First Name',
  name: 'firstName'
}, {
  label: 'Last Name',
  name: 'lastName'
}
```
#### Props for columns
|Name|Required|Format|Default value|Description|
|---|---|---|---|---|
|```label``` |```true```|```String```|N/A|The column label to display in the table header|
|```name``` |```true```|```String```|N/A|The column in the data to assign to this column|
|```visible``` |```false```|```Boolean```|```true```|Determines whether column is visible or not|
|```orderable``` |```false```|```Boolean```|```true```|Determines whether column is orderable or not|
|```render``` |```false```|```Function```|N/A|Function that returns value to display instead of row's column value. Original value is passed into this function as only parameter|

##### Column render example
```
{
  label: 'Department',
  name: 'department',
  render: function(data) {
    return getDepartmentByID(data).name;
  }
}
```

### selectedRows
|Required|Format|Default value|
|---|---|---|
|```false``` |```Array```|[]|

An array of primary keys. Rows with these keys will receive class ```.active```.

### buttons
|Required|Format|Default value|
|---|---|---|
|```false``` |```Array```|[]|

Buttons to be displayed with the table.

Custom button format:
```
{
  label: 'Add Employee',
  action: function() {
    addEmployee();
  }
}
```
#### Props for buttons
|Name|Required|Format|Default value|Description|
|---|---|---|---|---|
|```label``` |```true```|```String```|N/A|The text to display inside the button|
|```action``` |```true```|```Function```|N/A|The function to run when the button is clicked. Top-level ```vue-advanced-table``` component is passed into this function as only parameter|
|```class``` |```false```|```String```|```true```|classes to be added to the button|
|```extend``` |```false```|```String```|N/A|preset button functionality to be extended to the button (supercedes ```action```)|

#### Preset buttons
|Name|Description|
|---|---|
|```columnVisibility``` |allows for column visibility toggling and reordering through modal interface. If ```storage``` assigned, column visibility/order is saved with table state|
|```exportExcel``` |allows for export of table data in Microsoft Excel format with current order/filter status|
|```exportCsv``` |allows for export of table data in comma-separated value format with current order/filter status|

Format to add preset buttons:
```
{
  'columnVisibility'
}
```
or if you wish to change the default label or class:
```
{
  label: 'ColVis', // required
  extend: 'columnVisibility', // required
  class: 'btn-primary' // optional
}
```

### order
|Required|Format|Default value|
|---|---|---|
|```false```|```Object```|```{column: '', direction: 'asc'}```|

Determines the column to sort table rows by, as well as the direction.

#### Props for order
|Name|Required|Format|Default value|Description|
|---|---|---|---|---|
|```column``` |```true```|```String```|''|The name of the column to sort by|
|```direction``` |```true```|```String```|'asc'|The direction to sort by. Acceptable values are ```asc``` and ```desc```

### orderable
|Required|Format|Default value|
|---|---|---|
|```false```|```Boolean```|```true```|

Determines whether table rows can be reordered by column.

### searchable
|Required|Format|Default value|
|---|---|---|
|```false```|```Boolean```|```true```|

Assigns visibility of search input.

### storage
|Required|Format|Default value|
|---|---|---|
|```false```|```String```|```''```|

Location in ```localStorage``` in which to save table state for next time table is viewed. State is not saved if storage location is not provided.

### classes
|Required|Format|Default value|
|---|---|---|
|```false```|```String``` or ```Object```|```''```|

Determines classes to be assigned to ```<table>``` element in component if ```string```, or to elements matching keys if ```object```.

To assign classes to individual elements, use an object with keys for each object you wish to assign classes to. Example:
```
{
  table: 'table table-sm table-striped',
  header: 'bg-primary text-white',
  buttons: 'btn-primary'
}
```

#### Available targets for classes
|Name|Description|
|---|---|
|```table```|```<table>``` element inside component|
|```header```|```<thead>``` element inside component|
|```headerCell```|column header inside table header|
|```body```|```<tbody>``` element inside component|
|```cell```|```<td>``` element inside table rows|
|```buttonContainer```|container element for buttons|
|```buttons```|each button (concatenated with classes assigned in ```buttons``` array of table)|
|```search```|input element for search|