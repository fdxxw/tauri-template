import { defineComponent, onMounted, Ref, ref, watch, computed } from "vue";
import { NLayout } from "naive-ui";
import Greet from "./Greet";
const Main = defineComponent({
  name: "Main",
  emits: [],
  setup(props) {
    return () => {
      return (
        <NLayout has-sider style="height: 100%">
          <div class="full flex middle center column" style="width: 100%">
            <Greet />
          </div>
        </NLayout>
      );
    };
  },
});
export default Main;
