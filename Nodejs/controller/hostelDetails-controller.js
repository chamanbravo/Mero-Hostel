const Hostel = require("../model/hostel-model");

const hostelDetailsController = async (req, res) => {
  try {
    const {
      hostelName,
      hostelType,
      hostelLocation,
      hostelPrice,
      hostelDescription,
      hostelRating,
      hostelContact,
    } = req.body;
    const hostelImage = req.file.filename;
    const hostel = await Hostel.create({
      hostelName,
      hostelType,
      hostelLocation,
      hostelPrice,
      hostelDescription,
      hostelImage,
      hostelRating,
      hostelContact,
    });
    res.status(201).json({
      message: hostel,
    });
  } catch (error) {
    console.log(error);
  }
};

const showHostelDetails = async (req, res) => {
  try {
    const hostel = await Hostel.find();
    if (!hostel) return res.status(404).json({ message: "No hostel found" });

    res.status(200).json({
      message: hostel,
    });
  } catch (error) {
    console.log(error);
  }
};
const showHostelOne = async (req, res) => {
  try {
    const id = req.params.id;
    const hostel = await Hostel.findById({ _id: id });
    if (!hostel) return res.status(404).json({ message: "No hostel found" });

    res.status(200).json({
      message: hostel,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateHostel = async (req, res) => {
  const id = req.params.id;
  const {
    hostelName,
    hostelType,
    hostelLocation,
    hostelPrice,
    hostelDescription,
    hostelImage,
    hostelRating,
    hostelContact,
  } = req.body;
  const hostel = await Hostel.updateOne(
    { _id: id },
    {
      $set: {
        hostelName,
        hostelType,
        hostelLocation,
        hostelPrice,
        hostelDescription,
        hostelImage,
        hostelRating,
        hostelContact,
      },
    }
  );

  res.status(200).json({
    message: hostel,
  });
};

const hostelDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const hostel = await Hostel.deleteOne({ _id: id });
    res.status(200).json({
      message: hostel,
    });
  } catch (error) {
    console.log(error);
  }
};
const searchDetails = async (req, res) => {
  try {
    const searchName = req.query.name;
    const searchLocation = req.query.location;
    const hostel = await Hostel.find({
      $or: [{ hostelName: searchName }, { hostelLocation: searchLocation }],
    });

    if (hostel.length === 0) {
      return res.status(404).json({ message: "No hostel found" });
    }

    res.status(200).json({
      message: hostel,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  hostelDetailsController,
  showHostelDetails,
  showHostelOne,
  updateHostel,
  hostelDelete,
  searchDetails,
};