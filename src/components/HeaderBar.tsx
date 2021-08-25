import { computed, defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { debounce } from 'throttle-debounce';
import cxs from 'cxs';
import { useSearchKey } from '@/helpers/hooks';

const urlMap: { [index: number]: string } = {
  0: '/task-board',
  1: '/statistics-view'
};

export default defineComponent({
  name: 'HeaderBar',

  setup() {
    const router = useRouter();
    const flag = ref<0 | 1>(0);
    const onJump = () => {
      flag.value ^= 1;
      router.push({ path: urlMap[flag.value] });
    };

    const { searchKey, setSearchKey } = useSearchKey();
    const onInputChange = debounce(500, (e: Event) => {
      const value = (e.target as HTMLInputElement).value;
      setSearchKey(value);
    });

    const isTaskBoard = computed(() => router.currentRoute.value.path === urlMap[0]);
    return () => (
      <div class={style.wrapper}>
        <div>
          <span class={style.title}>ONE DAY</span>
          <svg class={['icon', style.jump]} aria-hidden="true" onClick={onJump}>
            <use xlinkHref="#icon-A1"></use>
          </svg>
          <div class={style.add} id="add-task"></div>
        </div>
        {isTaskBoard.value && (
          <input
            class={style.search}
            type="text"
            placeholder="search your tasks here"
            onInput={onInputChange}
            value={searchKey.value}
          />
        )}
      </div>
    );
  }
});

const style = {
  wrapper: cxs({
    position: 'relative',
    padding: '0 72px',
    height: '48px',
    lineHeight: '48px',
    display: 'flex',
    WebkitJustifyContent: 'space-between',
    boxShadow: 'black 0px 0px 10px -3px'
  }),

  title: cxs({
    fontSize: '24px',
    fontWeight: 700
  }),

  jump: cxs({
    fontSize: '24px',
    marginLeft: '16px',
    cursor: 'pointer'
  }),

  add: cxs({
    display: 'inline-block',
    marginLeft: '16px'
  }),

  search: cxs({
    position: 'absolute',
    top: '50%',
    right: '72px',
    transform: 'translateY(-50%)',
    height: '24px',
    lineHeight: '24px',
    width: '200px',
    padding: '3px'
  })
};
