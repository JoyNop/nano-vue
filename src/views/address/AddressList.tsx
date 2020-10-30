import { defineComponent, reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { AddressList, NavBar } from "vant";
import { getLocalStorage, setLocalStorage } from "@/utils/storage";
import { AddressInfo } from "./address";

export default defineComponent(() => {
  const router = useRouter();
  const store = useStore();
  const chosenAddressId = ref();
  const localAddress = getLocalStorage("addressList");
  const list: Array<AddressInfo> = reactive(
    localAddress || [
      {
        id: 1,
        name: "张三",
        tel: "16653556608",
        address: "山东省济南市历下区文化西路10号体育嘉苑9-1-801",
        ads: "文化西路 10 号体育嘉苑9-1-801",
        city: ["山东省", "济南市", "历下区"],
        isDefault: true,
      },
      {
        id: 2,
        name: "李四",
        tel: "123456788",
        address: "山东省济南市历下区文化西路11号体育嘉苑旁边9-1-801",
        ads: "文化西路 11 号体育嘉苑旁边9-1-801",
        city: ["山东省", "济南市", "历下区"],
        isDefault: true,
      },
      {
        id: 3,
        name: "王五",
        tel: "18888888888",
        address: "山东省济南市历下区文化西路12号体育嘉苑旁边的旁边9-1-801",
        ads: "文化西路 12 号体育嘉苑旁边的旁边9-1-801",
        city: ["山东省", "济南市", "历下区"],
        isDefault: true,
      },
    ]
  );

  if (!localAddress) setLocalStorage("addressList", list);

  const onAdd = () => {
    router.push("/address/edit");
  };
  const onEdit = (item: any) => {
    store.commit("setSelectAddress", item);
    router.push("/address/edit");
  };

  const onClickLeft = () => {
    console.log(1111);
    
    router.back()
  };

  return () => {
    return (
      <div class="pd-nav" style="background:#f7f8fa;min-height:100vh">
        <NavBar
          fixed
          title="地址管理"
          left-text="返回"
          left-arrow
          onClick-left={onClickLeft}
        />
        <AddressList
          v-model={chosenAddressId.value}
          list={list}
          defaultTagText="默认"
          onAdd={onAdd}
          onEdit={onEdit}
        />

      </div>
    );
  };
});
