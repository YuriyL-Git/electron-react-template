import { createStyles } from '../../common/helpers/create-styles';

export const styles = createStyles({
  container: {
    background: 'white',
    width: 'fit-content',
    height: '220px',
    minWidth: '500px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  list: {
    padding: '10px',
    overflowY: 'auto',
  },

  listItem: {
    cursor: 'pointer',
    padding: '0 45px 0 10px',
    borderRadius: '5px',
  },
  btnAdd: {
    marginTop: '5px',
  },
});
