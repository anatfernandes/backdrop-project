import { registerEnumType } from "type-graphql";

enum NotificationType {
  LIKE = "LIKE",
  COMMENT = "COMMENT",
}

registerEnumType(NotificationType, {
  name: "NotificationType",
});

export { NotificationType };
