import Book from "../model/book-model.js";
const bookController = async (req, res) => {
  try {
    const { userName, userContact, hostelName, hostelContact, userGmail,hostelLocation } =
      req.body;
    const book = await Book.create({
      userName,
      userGmail,
      userContact,
      hostelName,
      hostelContact,
      hostelLocation,
    });
    res.status(201).json({
      message: book,
    });
  } catch (error) {
    console.log(error);
  }
};
export default bookController;
