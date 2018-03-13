import "normalize.css";
import "../scss/main.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";

import CustomSelect from "./CustomSelect";
import "./Timeline";
import "./FloatingHeader";
import "./ChartMenu";
import "./Chart";
import "./SearchBox";

window.jQuery = jQuery;
window.$ = jQuery;

new CustomSelect(".custom-select-box");

$('[data-toggle="tooltip"]').tooltip();