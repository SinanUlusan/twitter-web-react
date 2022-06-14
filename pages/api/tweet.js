import Twit from "../../lib/twit";

export default function handler(req, res) {
  Twit.get(
    "search/tweets",
    { from: "sinanisscott", count: 20 },
    function (err, data, response) {
      if (err) {
        return res.status(400).json({ data });
      }
      res.status(200).json(data);
    }
  );
}
