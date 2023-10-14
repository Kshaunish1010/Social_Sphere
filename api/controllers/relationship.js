import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getRelationships = (req, res) => {
  const q = `SELECT followerUserid FROM relationships WHERE followedUserid = ?`;

  db.query(q, [req.query.followerUserid], (err, data) => {
    console.log(data);
    if (err) return res.status(500).json(err);
    return res
      .status(200)
      .json(data.map((relationship) => relationship.followerUserid));
  });
};

export const addRelationship = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");
    const q =
      "INSERT INTO relationships (`followerUserid`,`folowedUserid`) VALUES (?)";
    const values = [userInfo.id, req.body.userid];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      res.status(200).json({ message: "Following" });
    });
  });
};

export const deleteRelationship = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "DELETE FROM relationships WHERE `followerUserid` = ? AND `followedUserid` = ?";

    db.query(q, [userInfo.id, req.query.userid], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Unfollowing");
    });
  });
};
