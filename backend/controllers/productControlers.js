// function for add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      image,
      description,
      sizes,
      price,
      category,
      available,
      bestseller,
      type,
    } = req.body;

    const image1 = req.files.image1[0];
    const image2 = req.files.image1[0];
    const image3 = req.files.image1[0];
    const image4 = req.files.image1[0];

    console.log(
      name,
      description,
      sizes,
      price,
      category,
      available,
      bestseller,
      type
    );
    console.log(image1, image2, image3, image4);
    res.json({});

    // Validate required fields
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//function for list product
const listProducts = async (req, res) => {};

//function for remove product
const removeProduct = async (req, res) => {};
//function for single product info
const singleProduct = async (req, res) => {};

export { listProducts, addProduct, removeProduct, singleProduct };
