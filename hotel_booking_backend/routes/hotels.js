const router = require("express").Router();
const Hotel = require("../models/Hotel");


router.get("/", async(req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (error) {
    console.log(error)
  }
   
});


router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    if (!hotel) {
      return res.status(404).json({
        message: "Hotel not found",
      });
    }

    res.json(hotel);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}); 

module.exports = router;