<template>
  <div class="w-[10rem]" :class="[typeInput === 'checkbox' ? 'w-[1rem]' : '']">
    <div>
      <label :for="labelFor">{{ labelText }}</label>
    </div>
    <input
      :class="[typeInput === 'checkbox' ? 'input__check-out' : '']"
      :type="typeInput"
      :id="inputId"
      :name="inputName"
      :value="value"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "cInput",
  props: {
    labelText: {
      type: String,
      default: "Tasks",
    },
    typeInput: {
      type: String,
      default: "input",
    },
    labelFor: {
      type: String,
      default: "fname",
    },
    inputId: {
      type: [Number, String],
      default: "fname",
    },
    inputName: {
      type: String,
      default: "fname",
    },
    value: {
      type: String,
    },
    placeholder: {
      type: String,
      default: "Write a task",
    },
  },

  setup(props, { emit }) {
    const handleChange = (event) => {
      emit("custom-change", event.target);
    };
    return {
      handleChange,
    };
  },
};
</script>

<style scoped>
@tailwind components;
@layer components {
  input {
    @apply w-[10rem]
    h-[2rem]
    rounded-lg
  bg-slate-400
    placeholder-current
    block
    px-3
    py-1.5
    text-base
    font-normal
  text-gray-700
  focus:border-blue-600 focus:outline-none;
  }
  .input__check-out {
    @apply w-[1rem] h-[1rem];
  }
}
</style>
