import { codeRepository } from "../schema/code.schema.js";

// post code to the redis json db
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
  try {
    await codeRepository.remove(req.params.code_id);
    res.status(200).send("Deleted");
  } catch (error) {
    res.status(400).send(error);
  }
};
// search code
export const searchCode = async (req, res) => {
  const { search_term } = req.params;
  try {
    const result = await codeRepository
      .search()
      .where("code_title")
      .match(search_term)
      .return.all();
    if (result.length < 1) {
      return res.status(204).json({
        message: "No code found !",
      });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(error);
  }
};
