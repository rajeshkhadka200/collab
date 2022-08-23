import { userRepository } from "../schema/user.schema.js";

// auth
export const auth = async (req, res) => {
  const { googleId } = req.body;
  const isuser = await userRepository
    .search()
    .where("google_id")
    .eq(googleId)
    .return.all();

  // sending status 200 on old user
  if (isuser.length > 0) {
    return res.status(200).json({
      message: "Make login from client",
      token: googleId,
      user: req.body,
    });
  }

  const { name, imageUrl, email } = req.body;
  const newUser = userRepository.createEntity({
    user_name: name, // setting up the value in defined schema
    user_email: email,
    user_profile: imageUrl,
    google_id: googleId,
  });
  const id = await userRepository.save(newUser);
  // sending status 201 on new user
  if (id) {
    return res.status(201).json({
      message: "User registered !",
      token: googleId,
    });
  }
};

// get spicific user data
export const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await userRepository
    .search()
    .where("google_id")
    .eq(id)
    .return.all();
  res.status(200).json(user);
};
