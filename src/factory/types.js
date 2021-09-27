// DEFINE ALL LISTENER SUBJECTS
const Subject = {
  // AUTH
  USER_CREATED: "user:created",
  USER_UPDATED: "user:updated",
  USER_PASSWORD_RESET_REQ: "user:password_reset_req",
  USER_PASSWORD_RESET_RES: "user:password_reset_res",
}

// DEFINE ALL LISTENER QUEUE GROUP NAMES
const QueueGroupName = {
  USER_SERVICE: "user-service",

}

exports.Subject = Subject
exports.QueueGroupName = QueueGroupName
