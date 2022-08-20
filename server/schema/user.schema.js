import { Entity, Schema } from "redis-om";
import client from "../db/db.js";
class User extends Entity {
  toJSON() {
    return {
      user_id: this.entityId,
      user_name: this.user_name,
      user_email: this.user_email,
      user_profile: this.user_profile,
    };
  }
}

export const userSchema = new Schema(
  User,
  {
    user_name: {
      type: "text",
    },
    user_profile: {
      type: "text",
    },
    user_email: {
      type: "text",
    },
  },
  {
    dataStructure: "JSON",
  }
);

export const userRepository = client.fetchRepository(userSchema);
await userRepository.createIndex();
