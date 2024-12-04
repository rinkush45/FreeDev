export const setupWebSockets = (io) => {
  const rooms = new Map();

  io.on('connection', (socket) => {
    socket.on('join_room', (roomId) => {
      socket.join(roomId);
      if (!rooms.has(roomId)) {
        rooms.set(roomId, new Set());
      }
      rooms.get(roomId).add(socket.id);
    });

    socket.on('leave_room', (roomId) => {
      socket.leave(roomId);
      if (rooms.has(roomId)) {
        rooms.get(roomId).delete(socket.id);
      }
    });

    socket.on('send_message', (data) => {
      io.to(data.roomId).emit('receive_message', {
        ...data,
        timestamp: new Date()
      });
    });

    socket.on('typing', (data) => {
      socket.to(data.roomId).emit('user_typing', {
        userId: data.userId,
        typing: data.typing
      });
    });

    socket.on('disconnect', () => {
      rooms.forEach((users, roomId) => {
        if (users.has(socket.id)) {
          users.delete(socket.id);
          if (users.size === 0) {
            rooms.delete(roomId);
          }
        }
      });
    });
  });
};