<template>
  <div>
    <toolbar>
      <h1>Beautiful UI</h1>
    </toolbar>
    <p>
      Welcome to Vue Beautiful UI (bUI) !
    </p>
    <h4>Buttons</h4>
    <button>The Useless Button</button>
    <!-- main view -->
    <router-view
            class="view"
            transition
            transition-mode="out-in">
    </router-view>
  </div>
</template>

<script type="javascript">
import Button from '../components/Button';
import Toolbar from '../components/Toolbar';

export default {
  components: {
    Button,
    Toolbar,
  },
};
</script>

<style>
body {
  justify-content: center;
}

#app {
  color: #2c3e50;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

a {
  //color: #42b983;
  text-decoration: none;
}
</style>
