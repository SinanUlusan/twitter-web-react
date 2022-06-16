import Twit from "../../lib/twit";

export default (req, res) => {
  Twit.get(
    "search/tweets",
    { from: "sinanisscott", count: 100 },
    function (err, data, response) {
      if (err) {
        return res.status(400).json(data);
      }

      res.status(200).json(data);
    }
  );
};
