import "./index.css";
import smallImage from "./image/small.png";
import bigImage from "./image/big.png";

const colorElement = document.createElement("div");
colorElement.setAttribute("class", "color");
colorElement.innerText = "my-webpack-config";
document.body.appendChild(colorElement);

const smallImageElement = document.createElement("img");
smallImageElement.setAttribute("src", smallImage);
document.body.appendChild(smallImageElement);

const bigImageElement = document.createElement("img");
bigImageElement.setAttribute("src", bigImage);
document.body.appendChild(bigImageElement);
