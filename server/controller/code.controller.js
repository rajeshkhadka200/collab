import { codeRepository } from "../schema/code.schema.js";

// post code
export const postCode = async (req, res) => {
  const code = codeRepository.createEntity(req.body);
  const id = await codeRepository.save(code);
  if (!code) {
    return res.status(403).json({
      message: "Unable to post data",
    });
  }

  res.status(201).json({
    id,
    message: "Posted successfully !",
  });
};

// get the code of specific user by user id
export const getMycode = async (req, res) => {
  const person = await codeRepository.fetch(req.params.user_id);
};

// delete code by id
export const deleteCode = async (req, res) => {};
// get all code
export const getAllcode = async (req, res) => {
  const code = await codeRepository.search().return.all();
  res.status(200).json({
    code,
  });
};
