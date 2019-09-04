<template>
  <div id="app">
    <header class="main-header">
      <div class="logo">
        <span class="logo-news">NEWS</span>
        <span class="logo-carr">CARR</span>
      </div>
    </header>
    <main id="app-container">
      <router-view />
    </main>
  </div>
</template>

<style lang="less" scoped>
@import "~@/assets/styles/palette.less";
.main-header {
  background-color: #333;
  height: 50px;
  display: flex;
  align-items: center;
  flex: 0 1 auto;
  font-family: Lato, sans-serif;
}

.logo {
  font-size: 2rem;
  font-weight: 300;
  margin-left: 20px;
}

.logo-news {
  color: @blue-primary;
}

.logo-carr {
  color: #9c9c9c;
}

#app-container {
  flex: 1 1 auto;
  padding: 20px;
  overflow: auto;
  max-width: 1080px;
  margin: 0 auto;
}

</style>