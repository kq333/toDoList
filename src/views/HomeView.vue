<template>
  <main class="w-[40%] min-h-[40%] m-auto rounded-lg bg- p-4 ">
    <section class="flex justify-center">
      <div class="flex">
        <c-Input @input="handleChange" :value="inputValue" />

        <c-Button
          class="mt-6 ml-2"
          :disabled="!disabledBtb"
          @click="clickEvent"
        />
      </div>
    </section>

    <section class="mt-10">
      <div>
        <ul v-for="(task, index) in displaytask" :key="task">
          <li class="flex mt-[2rem] min-h-[3rem] p-2 bg-slate-400 rounded-md">
            <span
              :class="[task.done === true ? 'item' : '']"
              class="break-words max-w-[15rem]"
            >
              {{ task.task }}</span
            >

            <span class="ml-[1rem] m-auto">
              <c-Input
                type-input="checkbox"
                label-text=""
                @input="checkBoxValue"
                :input-id="index"
                :input-name="task + index"
              />
            </span>
            <span class="flex justify-end items-center">
              <c-Button text="delate" @click="delateTask(task)" />
            </span>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import cInput from "@/components/input.component.vue";
import cButton from "@/components/button.component.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "vHome",
  components: {
    cInput,
    cButton,
  },

  setup() {
    const store = useStore();

    const disabledBtb = computed(() => store.getters.getInputValue);
    const inputValue = computed(() => store.state.inputValue);
    const displaytask = computed(() => store.state.toDoTasks);
    const isChecked = computed(() => store.state.isCheckBoxChecked);

    function handleChange(payload) {
      store.dispatch("addToTask", payload.target.value);
    }

    function clickEvent() {
      store.dispatch("addEvent", false);
    }

    function checkBoxValue(payload) {
      store.dispatch("checkBoxValue", {
        id: Number(payload.target.id),
        done: payload.target.checked,
      });
    }

    function delateTask(payload) {
      store.dispatch("delateTask", payload);
    }

    return {
      handleChange,
      clickEvent,
      disabledBtb,
      inputValue,
      displaytask,
      checkBoxValue,
      isChecked,
      delateTask,
    };
  },
};
</script>

<style scoped>
@tailwind components;
@layer components {
  .item {
    @apply text-white line-through;
  }
}
</style>
