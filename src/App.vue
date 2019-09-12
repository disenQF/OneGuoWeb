<template>
  <div id="app">
    <div id="content">
      <router-view />
    </div>

    <div id="footer">
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/cate">分类</router-link>
        </li>
        <li>
          <router-link to="/eat">吃饭吧</router-link>
        </li>
        <li>
          <router-link to="/cart">购物车</router-link>
        </li>
        <li>
          <router-link to="/me">我的易果</router-link>
        </li>
        <div class="clearfix"></div>
      </ul>
    </div>

  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#content{
  background: whitesmoke;
  margin-bottom: 50px;
}

#footer {
  margin: 0px;
  z-index: 99;
  position: fixed;
  border-top: 1px solid darkgray;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  background: #fff;
}
#footer ul,li{
  list-style: none;
}

#footer ul{
  width: 100%;
}
#footer li {
  border-right: 1px solid lightgray;
  text-align: center;
  width: 20%;
  float: left;
  padding: 5px;
  background-color: darkseagreen;
}

#footer a {
  font-weight: bold;
  color: #2c3e50;
  line-height: 50px;
  text-decoration: none;
}

#footer a.router-link-exact-active {
  color: white;
}
</style>

