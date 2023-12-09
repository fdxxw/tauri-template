import { defineComponent, onMounted, Ref, ref, watch, computed } from "vue";
import GreetVue from "./Greet.vue";
import { NLayout } from "naive-ui";
const Main = defineComponent({
  name: "Main",
  emits: [],
  setup(props) {
    return () => {
      return (
        <NLayout has-sider style="height: 100%">
          <div class="full flex middle center column" style="width: 100%">
            <GreetVue></GreetVue>
          </div>
        </NLayout>
      );
    };
  },
});
export default Main;
