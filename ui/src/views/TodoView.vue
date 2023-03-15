<template>
  <div class="sc-about-container">
    <div class="sc-about-nav">
      <h1>Todo List</h1>
      <!--Down Group: Add new todo button -->
      <div style="display: flex" class="sc-about-new-menu">
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-width="200"
          offset-x
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn @click="menu = true"> Yeni Ekle </v-btn>
          </template>
          <v-card>
            <v-list>
              <div class="sc-about-new-todo">
                <v-textarea
                  label="Eklemek istediğin Todo"
                  auto-grow
                  outlined
                  rows="1"
                  row-height="15"
                  v-model="addJob"
                  required
                ></v-textarea>
                <v-textarea
                  label="Detaylar için açıklama"
                  auto-grow
                  outlined
                  rows="1"
                  row-height="15"
                  v-model="addDesc"
                ></v-textarea>
              </div>
            </v-list>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text @click="menu = false"> İptal Et </v-btn>
              <v-btn color="primary" text @click="addTodo()"> Kaydet </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </div>
    </div>
    <!-- Down Group: Todo list -->
    <div class="sc-about-todo-list" v-for="item in items" :key="item.id">
      <v-checkbox
        class="sc-about-todo-item"
        :label="`${item.job}`"
        v-model="item.isFinished"
        @click="changeStatus(item.id)"
      ></v-checkbox>
      <button
        class="sc-about-todo-remove-button"
        @click="openMenu(item.id, item.job, item.description)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="sc-about-update-svg"
        >
          <path
            d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
          />
        </svg>
      </button>
      <button @click="removeTodo(item.id)" class="sc-about-todo-remove-button">
        <svg
          class="sc-about-remove-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M22,3H7C6.31,3 5.77,3.35 5.41,3.88L0,12L5.41,20.11C5.77,20.64 6.31,21 7,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M19,15.59L17.59,17L14,13.41L10.41,17L9,15.59L12.59,12L9,8.41L10.41,7L14,10.59L17.59,7L19,8.41L15.41,12"
          />
        </svg>
      </button>
    </div>
    <!-- Down Group: Update Todo menu  -->
    <div class="sc-about-update-menu">
      <v-menu v-model="upMenu" :close-on-content-click="false">
        <v-card>
          <v-list>
            <div class="sc-about-new-todo">
              <v-textarea
                label="Düzenlemek istediğin Todo"
                auto-grow
                outlined
                rows="1"
                row-height="15"
                v-model="updateJob"
                required
              ></v-textarea>
              <v-textarea
                label="Düzenlemek istediğin açıklama"
                auto-grow
                outlined
                rows="1"
                row-height="15"
                v-model="updateDesc"
              ></v-textarea>
            </div>
          </v-list>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="upMenu = false"> İptal Et </v-btn>
            <v-btn color="primary" text @click="updateTodo()"> Kaydet </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </div>
    <!-- Down Group:  -->
  </div>
</template>

<script>
export default {
  name: 'Todo',
  data: () => ({
    addDesc: '',
    addJob: '',
    updateDesc: '',
    updateJob: '',
    updateId: null,
    upMenu: false,
    menu: false,
    items: null,
    todoUrl: 'http://localhost:3000/todo',
  }),
  created() {
    fetch(this.todoUrl)
      .then((response) => response.json())
      .then((data) => {
        this.items = data;
        this.items.sort((a, b) => a.id - b.id);
      })
      .catch((err) => console.error(err));
  },
  mounted() {},
  methods: {
    openMenu(idv, job, desc) {
      this.updateJob = job;
      this.updateDesc = desc;
      this.upMenu = true;
      this.updateId = idv;
    },
    async updateTodo() {
      if (this.updateJob.length > 3 && this.updateDesc.length > 3) {
        const url = `${this.todoUrl}/update?id=${this.updateId}`;
        let todoData = {
          job: this.updateJob,
          description: this.updateDesc,
        };
        let fetchData = {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(todoData),
        };
        await fetch(url, fetchData)
          .then((response) => response.json())
          .then((json) => {
            fetch(this.todoUrl)
              .then((response) => response.json())
              .then((data) => {
                this.upMenu = false;
                this.items = data;
                this.items.sort((a, b) => a.id - b.id);
                // console.log(this.items);
              })
              .catch((err) => console.error(err));
          })
          .catch((err) => console.log(err));
      }
    },
    async changeStatus(idv) {
      const url = `${this.todoUrl}/status?id=${idv}`;
      let fetchData = {
        method: 'POST',
        body: '',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };
      const res = await fetch(url, fetchData)
        .then((data) => {
          // window.location.reload();
        })
        .catch(function (err) {
          console.log('error: ', err);
        });
    },
    async removeTodo(idv) {
      const url = `${this.todoUrl}/remove?id=${idv}`;
      let fetchData = {
        method: 'POST',
        body: '',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await fetch(url, fetchData)
        .then(function (data) {
          // console.log(data.status);
        })
        .catch(function (err) {
          console.log('error: ', err);
        });
      let index = this.items.findIndex((item) => item.id === idv);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    },
    async addTodo() {
      if (this.addJob.length > 3 && this.addDesc.length > 3) {
        this.menu = false;
        const url = `${this.todoUrl}/add`;
        let todoData = {
          job: this.addJob,
          description: this.addDesc,
        };
        let fetchData = {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(todoData),
        };
        await fetch(url, fetchData)
          .then((response) => response.json())
          .then((json) => {
            fetch(this.todoUrl)
              .then((response) => response.json())
              .then((data) => {
                this.items = data;
                this.items.sort((a, b) => a.id - b.id);
                this.addJob = '';
                this.addDesc = '';
                // console.log(this.items);
              })
              .catch((err) => console.error(err));
          })
          .catch((err) => console.log(err));
      }
    },
    focusout() {
      this.upMenu = false;
    },
  },
  computed: {},
  watch: {},
  components: {},
};
</script>
<style lang="scss">
.sdroot {
  --primaryBack: #eeeeee;
  --secondaryBack: white;
  --thirdBack: white;
  --fourthBack: #cacaca;
  --buttonText: #404258;
}
.sc-about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0px;
  text-align: center;
  color: var(--buttonText);
}
.sc-about-nav {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--buttonText);
}
.sc-about-new-menu {
  .v-btn {
    background-color: var(--buttonText) !important;
    color: var(--thirdBack) !important;
  }
}
.sc-about-todo-list {
  margin: 0px auto;
  width: 90%;
  display: flex;
  padding: 2px 10px 2px 0px;
  align-items: center;
  background-color: var(--thirdBack) !important;
  color: var(--buttonText) !important;
  justify-content: space-between;
  border-bottom: 1px solid #00000045;
  .theme--light.v-label {
    background-color: var(--thirdBack) !important;
    color: var(--buttonText) !important;
  }
}
.sc-about-new-todo {
  padding: 10px 10px;
  .v-text-field__details {
    display: none;
  }
  .v-input__slot {
    margin: 6px 0px !important;
  }
  .v-input__control {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
}
.sc-about-todo-item {
  margin: 0px !important;
  padding: 0px;
  width: 90%;
  .v-input__slot {
    margin: 0px;
    padding: 10px;
  }
  .theme--light.v-messages {
    display: none;
  }
}
// .sc-about-todo-item .v-input__slot:checked {
//   background-color: aqua;
// }
.sc-about-todo-remove-button {
  margin: 0px;
  margin: 0px;
  width: 36px;
  height: 36px;
  display: flex;
  :hover {
    opacity: 0.8;
  }
  :active {
    opacity: 0.5;
  }
  .sc-about-update-svg path {
    fill: var(--buttonText) !important;
  }
  .sc-about-remove-svg path {
    fill: var(--buttonText) !important;
  }
}
.sc-about-update-menu {
  position: absolute;
  padding: 20px;
  top: 150px;
  right: 200px;
  .v-btn {
    margin: 6px 10px !important;
  }
}
</style>
