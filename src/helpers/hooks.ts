import { Ref, ref } from 'vue';

interface UseSearchKeyRet {
  searchKey: Ref<string>;
  setSearchKey: (key: string) => void;
  reset: () => void;
}
const searchKey = ref('');
const setSearchKey = (key: string) => {
  searchKey.value = key;
};
const reset = () => {
  searchKey.value = '';
};
export const useSearchKey = (): UseSearchKeyRet => {
  return { searchKey, setSearchKey, reset };
};
