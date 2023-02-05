const Types = {
  ERROR: "warning",
  SUCCESS: "success",
  INFO: "info",
};

const notificationProps = {
  [Types.ERROR]: { color: "red" },
  [Types.SUCCESS]: { color: "green" },
  [Types.INFO]: { color: "aliceblue" },
};

function createNotification(type = info, { title, message, icon }) {
  return {
    title,
    message,
    icon,
    ...notificationProps[type],
  };
}

module.exports = {
  createNotification,
  Types,
};
