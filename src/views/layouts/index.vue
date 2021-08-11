<template>
  <div class="app-container">
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
    <!-- <div class="layout-footer">
      <TabBar :data="tabbars" @change="handleChange" />
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'AppLayout',
  data() {
    return {
    }
  },
  components: {
    
  },
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>
</style>