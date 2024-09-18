const STORAGE_KEY = "users";

export const initializeUsers = (initialUsers) => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialUsers));
  }
};

export const getUsers = () => {
  const users = localStorage.getItem(STORAGE_KEY);
  return users ? JSON.parse(users) : [];
};

export const addUser = (user) => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

export const updateUser = (updatedUser) => {
  const users = getUsers();
  const index = users.findIndex((user) => user.email === updatedUser.email);
  if (index !== -1) {
    users[index] = updatedUser;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  }
};

export const deleteUser = (email) => {
  const users = getUsers();
  const filteredUsers = users.filter((user) => user.email !== email);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredUsers));
  window.location.reload();
};
