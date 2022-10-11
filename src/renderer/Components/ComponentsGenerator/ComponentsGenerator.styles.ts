import { createStyles } from '../../common/helpers/create-styles';

export const styles = createStyles({
  container: {
    marginTop: '20px',
    width: '100%',
    maxWidth: '500px',
    borderRadius: '5px',
    border: '1px solid #9999bc',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '10px',
  },
  title: {
    color: 'blue',
    marginBottom: '20px',
  },
  sectionWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    margin: '0 auto 10px',
  },
  sectionBtn: {
    height: '40px',
    width: '212px',
  },
  sectionInput: {
    fontSize: '18px',
    height: '40px',
  },
});
