import { Router } from "express";
import {
  refreshAccessToken,
  loginUser,
  logoutUser,
  registerUser,
  changeCurrentPassword,
  updateAvatar,
  updateCoverImage,
  updateFields,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();
router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);
router.route("/login").post(loginUser);
//protected or secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/reset-password").post(verifyJWT, changeCurrentPassword);
router
  .route("/update-avatar")
  .post(verifyJWT, upload.single("avatar"), updateAvatar);
router
  .route("/update-coverImage")
  .post(verifyJWT, upload.single("coverImage"), updateCoverImage);

router.route("/update-fields").post(verifyJWT, updateFields);

export default router;
