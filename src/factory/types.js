// DEFINE ALL LISTENER SUBJECTS
const Subject = {
  // AUTH
  USER_CREATED: "user:created",
  USER_UPDATED: "user:updated",
  USER_PASSWORD_RESET_REQ: "user:password_reset_req",
  USER_PASSWORD_RESET_RES: "user:password_reset_res",
  // OFFERS
  OFFER_CREATED: "offer:created",
  OFFER_UPDATED: "offer:updated"
}

// DEFINE ALL LISTENER QUEUE GROUP NAMES
const QueueGroupName = {
  USER_SERVICE: "user-service",
  OFFER_SERVICE: "offer-service"
}

exports.Subject = Subject
exports.QueueGroupName = QueueGroupName
