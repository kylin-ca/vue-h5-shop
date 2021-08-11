<!--  -->
<template>
  <div class="address">
    <van-address-edit
      :area-list="areaList"
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      areaList,
      searchResult: []
    }
  },

//   components: {},

//   computed: {},

//   mounted: {},

  methods: {
      onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
  }
}
</script>
<style lang='scss' scoped>
</style>