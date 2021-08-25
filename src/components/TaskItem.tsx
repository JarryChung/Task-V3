import { Task } from '@/assets/json/tasks';
import { formatTime } from '@/helpers/utils';
import cxs from 'cxs';
import { VNode } from 'vue';

interface Props {
  task: Task;
  deleteFn: () => void;
}

export default (props: Props): VNode => {
  const onDelete = (ev: MouseEvent) => {
    ev.stopPropagation();
    ev.preventDefault();
    props.deleteFn();
  };
  return (
    <div class={style.task}>
      <p class={style.content}>{props.task.content}</p>
      <p class={style.time}>{formatTime(props.task.time)}</p>
      <svg class={['icon', style.delete]} aria-hidden="true" onClick={onDelete}>
        <use xlinkHref="#icon-jiajiabaojie-tubiao-"></use>
      </svg>
    </div>
  );
};

const style = {
  task: cxs({
    position: 'relative',
    padding: '8px',
    margin: '4px',
    backgroundColor: '#eee',
    borderRadius: '4px',
    cursor: 'grab'
  }),

  content: cxs({
    margin: 0,
    fontSize: '14px',
    marginBottom: '4px'
  }),

  time: cxs({
    margin: 0,
    fontSize: '12px',
    color: '#666'
  }),

  delete: cxs({
    position: 'absolute',
    bottom: '2px',
    right: '2px',
    cursor: 'pointer'
  })
};
