<template>
  <div class="about">
    <h1>This is an Task page</h1>
    <div>
      <button @click="getAll" style="margin-right: 5px">Get All</button>
      <br>
      <br>
      <input type="text" v-model="elementID">
      <button @click="getItemByID" style="margin-right: 5px">Get Item(id)</button>
      <br>
      <br>
      <input type="text" v-model="parentID">
      <button @click="getItemsByParentId" style="margin-right: 5px">Get Children</button>
      <br>
      <br>
      <input type="text" v-model="parentId">
      <button @click="getAllChildrenByParentId" style="margin-right: 5px">Get All Children</button>
      <br>
      <br>
      <input type="text" v-model="childID">
      <button @click="getAllParentByChildId" style="margin-right: 5px">Get All Parents</button>
    </div>
    <div class="show" style="width: 500px; margin: 25px auto;">
      {{ showResult }}
    </div>
  </div>
</template>

<script>
import TreeStoreClass from "@/assets/js/classes/TreeStoreClass";

export default {
  name: 'Task',
  data() {
    return {
      ts: null,
      showResult: null,
      elementID: null,
      parentID: null,
      parentId: null,
      childID: null,
      items: [
        {id: 1, parent: 'root'},
        {id: 2, parent: 1, type: 'test'},
        {id: 3, parent: 5, type: 'test'},

        {id: 4, parent: 2, type: 'test'},
        {id: 5, parent: 2, type: 'test'},
        {id: 6, parent: 2, type: 'test'},

        {id: 7, parent: 4, type: null},
        {id: 8, parent: 4, type: null},
      ]
    }
  },

  methods: {
    getAll() {
      this.showResult = this.ts.getAll();
    },
    getItemByID() {
      this.showResult = this.ts.getItem(this.elementID);
    },
    getItemsByParentId() {
      this.showResult = this.ts.getChildren(this.parentID);
    },
    getAllChildrenByParentId() {
      this.showResult = this.ts.getAllChildren(this.parentId);
    },
    getAllParentByChildId() {
      this.showResult = this.ts.getAllParents(this.childID);
    }
  },
  mounted() {
    this.ts = new TreeStoreClass(this.items);
  }
}
</script>
