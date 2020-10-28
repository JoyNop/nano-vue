<template>
  <div class="todo-list text-center mg20">
    <!-- <Button @click="getIndex">onclick</Button> -->
    <!-- <div>
      {{ a }}
      {{ bb }}
    </div> -->

    <h3 class="mg10">Todo List</h3>
    <div class="flex lfex-center">
      <input ref="todoInput" v-focus="200" v-model="addTodoName" />
      <input ref="todoInput2" v-focus="200" v-model="addTodoName" />
      <Button @click="addTodoAction" size="small" type="primary"
        >新增清单</Button
      >
    </div>

    <div>
      <h3 class="mg10">任务清单</h3>

      <CellGroup>
        <Cell v-for="item in undoneTodoList" :key="item.id">
          <template #title>
            <span>===={{ item.name }}====</span>
          </template>
          <template #right-icon>
            <Button @click="doneTodo(item)" size="small" type="success"
              >已完成</Button
            >
            <Button
              @click="delTodoAction(item, true)"
              size="small"
              type="danger"
              >删除</Button
            >
          </template>
        </Cell>
      </CellGroup>
    </div>
    <div class="done-todo-area">
      <h3 class="mg10">已完成的任务清单</h3>
      <CellGroup>
        <Cell :key="item.id" v-for="item in completedTodoList">
          <template #title>
            <span>---{{ item.name }}---</span>
          </template>
          <template #right-icon>
            <Button
              @click="delTodoAction(item, false)"
              size="small"
              type="danger"
              >删除</Button
            >
          </template>
        </Cell>
      </CellGroup>
    </div>
    <div class="mg10">
      <Button @click="goAddress" block type="primary">地址列表</Button>
    </div>
    <div class="mg10 mg-t20">
      <Button @click="goChat" block type="primary">聊天室</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { Button, Cell, CellGroup } from "vant";
import router from "@/router";
import { defineComponent, getCurrentInstance, reactive, ref } from "vue";
export default defineComponent({
  name: "ToDoList",
  components: {
    Button,
    Cell,
    CellGroup,
  },

  setup() {
    //getCurrentInstance 方法获取当前组件的实例，然后通过 ctx 属性获得当前上下文，这样我们就能在setup中使用router和vuex了
    const CurrentInstance = getCurrentInstance();
    const addTodoName = ref(""); //input 绑定值

    //清单列表
    const undoneTodoList = reactive([
      {
        id: Date.now(),
        name: "吃饭",
      },
    ]);

    const completedTodoList = reactive([
      {
        id: Date.now(),
        name: "睡觉",
      },
    ]);

    const addTodoAction = () => {
      if (addTodoName.value === "") {
        console.log(CurrentInstance);
        
        return (CurrentInstance?.refs?.todoInput as HTMLInputElement).focus();
      }
      const obj = {
        id: Date.now(),
        name: addTodoName.value,
      };
      undoneTodoList.push(obj);
      addTodoName.value = "";
    };

    const delTodoAction = (
      item: {
        id: number;
      },
      todo: boolean
    ) => {
      if (todo) {
        undoneTodoList.splice(
          undoneTodoList.findIndex((i) => i.id === item.id),
          1
        );
      } else {
        completedTodoList.splice(
          completedTodoList.findIndex((i) => i.id === item.id),
          1
        );
      }
    };

    const doneTodo = (item: { id: number; name: string }) => {
      undoneTodoList.splice(
        undoneTodoList.findIndex((i) => i.id === item.id),
        1
      );
      completedTodoList.push(item);
    };

    const goAddress = () => {
      router.push("/address/list");
    };

    const goChat = () => {
      router.push("/chat/list");
    };

    // let bb = 0;
    // const a = ref(0);
    // const getIndex = () => {
    //   const aa = Math.random();
    //   a.value = aa;
    //   console.log(a.value);
    //   bb = aa;
    // };

    return {
      addTodoName,
      addTodoAction,
      delTodoAction,
      doneTodo,
      undoneTodoList,
      completedTodoList,
      goAddress,
      goChat,
      // a,bb,  getIndex,
    };
  },
});
</script>

<style>
</style>
