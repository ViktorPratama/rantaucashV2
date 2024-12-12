import { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Paper, Typography } from '@mui/material';
import BedIcon from '@mui/icons-material/Bed';
import Navbar from './Navbar';
import api from '../services/api'; // Impor api dari services

const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await api.get('/rooms/kamar');
        console.log('Rooms data:', response.data);  // Check if data is received
        setRooms(response.data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <>
      <Navbar />
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h5" gutterBottom>
          List of Rooms
        </Typography>
        <List>
          {rooms.length > 0 ? (
            rooms.map((room) => (
              <ListItem key={room.id}>
                <ListItemIcon>
                  <BedIcon />
                </ListItemIcon>
                <ListItemText
                  primary={`Room ${room.room_number}`}
                  secondary={`Price: Rp ${room.price.toLocaleString()} | Owner: ${room.users?.name || 'Unknown'}`}
                />
              </ListItem>
            ))
          ) : (
            <Typography variant="body1" color="textSecondary">
              No rooms available.
            </Typography>
          )}
        </List>
      </Paper>
    </>
  );
};

export default RoomList;