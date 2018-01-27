Vue.use(Vuetable);

new Vue({
  el: "#app",
  components: {
    "vuetable-pagination": Vuetable.VuetablePagination
  },
  data: {
    fields: [
      {
        name: "name",
        title:
          '<span class="glyphicon glyphicon-sort-by-alphabet"></span> Barlang neve',
        sortField: "name"
      },
      {
        name: "email",
        title: "Email",
        sortField: "email"
      },
      "birthdate",
      "nickname",
      {
        name: "gender",
        title: "Gender",
        sortField: "gender"
      },
      "__slot:actions"
    ],
    sortOrder: [{ field: "name", direction: "asc" }],
    css: {
      table: {
        tableClass: "table table-striped table-bordered table-hovered",
        loadingClass: "loading",
        ascendingIcon: "glyphicon glyphicon-chevron-up",
        descendingIcon: "glyphicon glyphicon-chevron-down",
        handleIcon: "glyphicon glyphicon-menu-hamburger"
      },
      pagination: {
        infoClass: "pull-left",
        wrapperClass: "vuetable-pagination pull-right",
        activeClass: "btn-primary",
        disabledClass: "disabled",
        pageClass: "btn btn-border",
        linkClass: "btn btn-border",
        icons: {
          first: "",
          prev: "",
          next: "",
          last: ""
        }
      }
    }
  },
  methods: {
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },
    deleteRow(rowData) {
      alert("You clicked delete on" + JSON.stringify(rowData));
    },
  }
});
