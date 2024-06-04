<script setup lang="ts">
const route = useRoute();

function alertRoute() {
  alert(route.path);
}
const a = 10;

if (a === 10) {
  console.log('a is 10');
}

const show = computed((a) => {
  return a === 10;
});

// named function
function ggg() {
  console.log('ggg');
}

// anonymous function
const f = function () {
  console.log('f');
};
// async arrow function
const h = async () => {
  console.log('h');
};

function hello() {

}

</script>

<template>
  <div>
    <div>
    </div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a
      href="https://nuxt.com/docs/getting-started/routing"
      target="_blank"
    >Learn more about Nuxt Routing</a>
  </div>
</template>
