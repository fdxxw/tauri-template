// import { RouterView } from 'vue-router'
import GlobalProvider from "@/components/AppProvider";
import { defineComponent } from "vue";
import Main from "./components/Main";
export default defineComponent({
  render() {
    return (
      <GlobalProvider>
        {/* <RouterView /> */}
        <Main />
      </GlobalProvider>
    );
  },
});
