export const save = (key,data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

export const load = key => {
  try {
    const contacts = localStorage.getItem(key);
    return contacts === null ? undefined : JSON.parse(contacts);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};