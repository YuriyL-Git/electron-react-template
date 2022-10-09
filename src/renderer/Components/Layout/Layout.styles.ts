import { createStyles } from '../../common/helpers/create-styles';

export const styles = createStyles({
  container: {
    height: '100%',
  },
  mainWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 'calc(100vh - 102px)',
  },
  panel: {
    width: '250px',
    background: 'orange',
  },
});
