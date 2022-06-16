import Twit from "../../lib/twit";

export default function handler(req, res) {
  res.status(200).json({ message: "Tweet gonderme basarili!" });

  // Benim adıma tweet gönderilmesin diye bu kısmı yoruma aldım.

  // const { tweet } = req.body;

  //if (!tweet) return res.status(400).json({ message: "Tweet boş olamaz!" });

  //Twit.post(
  //"statuses/update",
  //{ status: "TEST " + tweet + " sent from @sinanisscott" },
  //function (err, data, response) {
  //if (err) {
  //return res.status(400).json(data);
  //}
  //res.status(200).json(data);
  //}
  //);
}
