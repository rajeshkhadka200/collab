import { codeRepository } from "../schema/code.schema.js";

// post code
export const postCode = async (req, res) => {
  const code = codeRepository.createEntity(req.body);
  const id = await codeRepository.save(code);
  if (!id) {
    return res.status(404).json({
      message: "Something went wrong !",
    });
  }
  res.status(201).json({
    message: "Posted !!",
  });
};

// get the code of specific user by user id
export const getMycode = async (req, res) => {
  // const person = await codeRepository.fetch(req.params.user_id);
  const { user_id } = req.params;
  const myCode = await codeRepository
    .search()
    .where("user_id")
    .eq(user_id)
    .return.all();
  res.status(200).json(myCode);
};

// delete code by id
export const deleteCode = async (req, res) => {
  // console.log(req.params);
  const result = await codeRepository.remove(req.params.code_id);
  if (!result) {
    return res.status(400).json({
      message: "Could not delete",
    });
  }
  res.status(200).json({
    message: "Deleted",
  });
};
