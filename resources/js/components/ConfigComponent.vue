<template>
  <div class="row g-3">
    <div class="col-auto">
      <div class="input-group mb-3">
        <span class="input-group-text">{{cle}}</span>
        <input type="text" class="form-control" v-model="this.val" placeholder aria-label />
      </div>
    </div>
    <div class="col-auto">
      <button @click="save" class="btn btn-primary mb-3">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["skey", "value"],
  data() {
    let parts = this.skey.split(".");
    let l = parts.length - 1;
    let cle = parts[l].toUpperCase();
    return {
      cle: cle,
      val: this.value,
    };
  },
  mounted() {
    console.log("Config Component mounted.");
  },
  methods: {
    save() {},
  },
};
</script>
