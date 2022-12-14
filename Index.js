const http = require("http");
const fs = require("fs");
const formidable = require("formidable");
const path = require("path");
const { products, profile, basket } = require("./Api");
http
  .createServer((request, response) => {
    switch (request.url) {
      case "/":
        response.write("Home");
        break;
      case "/products":
        response.write(JSON.stringify(products));
        break;
      case "/profile":
        response.write(JSON.stringify(profile));
        break;
      case "/basket":
        const productIds = basket.map((item) => item.productId);
        const myBasket = products
          .filter((product) => productIds.includes(product.id))
          .map((item) => {
            item.count = basket.find(
              (basket) => basket.productId == item.id
            ).count;
            item.productPrice = item.count * item.price;
            return item;
          });
        response.write(JSON.stringify(myBasket));
        break;

      case "/fileupload":
        if (request.method.toLowerCase() == "post") {
          if (!fs.existsSync(path.join(__dirname, "uploads", "files"))) {
            fs.mkdirSync(path.join(__dirname, "uploads", "files"));
          }
          const form = new formidable.IncomingForm({
            uploadDir: path.join(__dirname, "uploads", "files"),
            keepExtensions: true,
            multiples: true,
            maxFields: 5 * 1024 * 1024,
            allowEmptyFiles: false,
          });
          form.parse(request, function (error, feilds, files) {});
        } else {
          const htmlForm = fs.readFileSync("./FileUpload.html", "utf-8");
          response.write(htmlForm);
        }
        break;
      default:
        response.write(
          JSON.stringify({
            status: 404,
            message: "Not found",
          })
        );
    }

    response.end();
  })
  .listen(3002, () => console.log("http://localhost:3002"));

module.exports = {
  http,
};
