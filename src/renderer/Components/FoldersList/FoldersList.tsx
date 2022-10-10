import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { styles } from './FoldersList.styles';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import {
  addFolder,
  removeFolder,
  setSelectedIndex,
  setSelectedPath,
} from '../../store/slices/settings-slice';

export const FoldersList = () => {
  const dispatch = useDispatch();

  const { foldersList, selectedFolderIndex } = useTypedSelector(
    (state) => state.settins
  );
  const handleListItemClick = (index: number, path: string) => {
    dispatch(setSelectedIndex({ index }));
    dispatch(setSelectedPath({ path }));
  };

  const handleDelete = (folderName: string) => {
    dispatch(removeFolder({ folderName }));
  };

  const handleOpenDialog = () => {
    window.electron.ipcRenderer.sendMessage('file-request', []);
    window.electron.ipcRenderer.on('file-request', (folderName) => {
      if (folderName) {
        dispatch(addFolder({ folderName: folderName as string }));
      }
    });
  };

  return (
    <Box style={styles.container}>
      <List style={styles.list}>
        {foldersList.map((path, index) => (
          <ListItem
            key={path}
            style={styles.listItem}
            sx={{
              background: selectedFolderIndex === index ? '#d6e5de' : 'none',
            }}
            onClick={() => handleListItemClick(index, path)}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDelete(path)}
              >
                <Delete />
              </IconButton>
            }
          >
            <ListItemText primary={path} />
          </ListItem>
        ))}
      </List>
      <Button
        style={styles.btnAdd}
        startIcon={<Add />}
        onClick={handleOpenDialog}
      >
        Add folder
      </Button>
    </Box>
  );
};
