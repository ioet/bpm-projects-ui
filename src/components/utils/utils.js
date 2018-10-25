export const newProject = () => ({
  uid: "tbs",
  short_name: "",
  comments: "",
  active: false
});

export const validateField = input => !(input === undefined || input === '');
