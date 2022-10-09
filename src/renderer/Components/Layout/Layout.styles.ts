import { createStyles } from '../../common/helpers/create-styles';

export const styles = createStyles({
  container: {
    height: '100%',
  },
  mainWrapper: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr min-content',
    height: 'calc(100vh - 102px)',
  },
  panel: {
    width: '300px',
    background: 'orange',
  },
});
