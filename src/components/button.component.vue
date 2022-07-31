<template>
  <button
    class="bg-red-700 rounded round-xl w-[3rem] h-[2rem] hover:opacity-75"
    type="button"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "cButton",
  props: {
    text: {
      type: String,
      default: "add",
    },
  },
};
</script>
