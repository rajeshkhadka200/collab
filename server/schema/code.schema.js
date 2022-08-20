import { Entity, Schema } from "redis-om";
import client from "../db/db.js";
class Code extends Entity {
  toJSON() {
    return {
      code_id: this.entityId,
      code_title: this.code_title,
      code_doc: this.code_doc,
      user_id: this.user_id,
      code: this.code,
    };
  }
}

export const codeSchema = new Schema(
  Code,
  {
    code_title: {
      type: "text",
    },
    code: {
      type: "text",
    },
    code_doc: {
      type: "text",
    },
    user_id: {
      type: "string",
    },
  },
  {
    dataStructure: "JSON",
  }
);

export const codeRepository = client.fetchRepository(codeSchema);
await codeRepository.createIndex();
