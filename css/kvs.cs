@import url("https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap");
.heading1 {
  font-size: 1.875rem;
  font-weight: 800;
  font-style: italic;
  color: #1F3BE3; }

.heading2 {
  font-size: 2.188rem;
  font-weight: 600;
  color: #000000;
  line-height: 3.25rem; }

.link-title {
  font-size: 0.625rem;
  font-weight: 600;
  color: #000000; }

.section-heading {
  font-size: 0.844rem;
  font-weight: 600;
  color: #F5A100;
  text-transform: uppercase;
  letter-spacing: 5.4px;
  margin-bottom: .938rem; }

.heading3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #000000; }

.body1 {
  font-size: 0.844rem;
  font-weight: 400;
  color: #000000; }

.body2 {
  font-size: 0.844rem;
  font-weight: 600;
  color: #000000; }

.span {
  font-size: 0.703rem;
  font-weight: 400;
  color: #9FA6F8; }

.sm-span {
  font-size: 0.656rem;
  font-weight: 400;
  color: #F8E71C; }

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .heading1 {
    font-size: 1.688rem; }

  .heading2 {
    font-size: 1.75rem; }

  .link-title {
    font-size: 0.563rem; }

  .section-heading {
    font-size: 0.725rem;
    margin-bottom: .625rem; }

  .heading3 {
    font-size: 1.125rem; }

  .body1 {
    font-size: 0.725rem; }

  .body2 {
    font-size: 0.725rem; }

  .span {
    font-size: 0.625rem; }

  .sm-span {
    font-size: 0.525rem; } }
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .heading1 {
    font-size: 1.425rem; }

  .heading2 {
    font-size: 1.325rem;
    line-height: 2.25rem; }

  .link-title {
    font-size: 0.5rem; }

  .section-heading {
    font-size: 0.625rem;
    margin-bottom: .625rem; }

  .heading3 {
    font-size: 1rem; }

  .body1 {
    font-size: 0.625rem; }

  .body2 {
    font-size: 0.625rem; }

  .span {
    font-size: 0.525rem; }

  .sm-span {
    font-size: 0.438rem; } }
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .heading1 {
    font-size: 1.325rem; }

  .heading2 {
    font-size: 1.125rem;
    line-height: 2rem; }

  .link-title {
    font-size: 0.5rem; }

  .section-heading {
    font-size: 0.625rem;
    margin-bottom: .625rem; }

  .heading3 {
    font-size: 1rem; }

  .body1 {
    font-size: 0.625rem; }

  .body2 {
    font-size: 0.625rem; }

  .span {
    font-size: 0.525rem; }

  .sm-span {
    font-size: 0.438rem; } }
@media only screen and (max-width: 767px) {
  .heading1 {
    font-size: 1.125rem; }

  .heading2 {
    font-size: 1rem;
    line-height: 2rem; }

  .link-title {
    font-size: 0.4rem; }

  .section-heading {
    font-size: 0.593rem;
    margin-bottom: .5rem; }

  .heading3 {
    font-size: 0.875rem; }

  .body1 {
    font-size: 0.593rem; }

  .body2 {
    font-size: 0.593rem; }

  .span {
    font-size: 0.5rem; }

  .sm-span {
    font-size: 0.425rem; } }
/*** box sizing border-box for all elements ***/
*,
*::before,
*::after {
  box-sizing: border-box; }

html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%; }

article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
  display: block; }

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: left; }

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible; }

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0; }

p {
  margin: 0;
  padding: 0; }

abbr[title],
abbr[data-original-title] {
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
  cursor: help;
  border-bottom: 0;
  -webkit-text-decoration-skip-ink: none;
  text-decoration-skip-ink: none; }

address {
  font-style: normal;
  line-height: inherit; }

dd,
dl,
ol ol,
ul ul,
ol ul,
ul ol {
  margin: 0;
  padding: 0;
  list-style: none; }

dt {
  font-weight: 700; }

blockquote {
  margin: 0 0 1rem; }

b,
strong {
  font-weight: bolder; }

small {
  font-size: 80%; }

sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline; }

sub {
  bottom: -.25em; }

sup {
  top: -.5em; }

a {
  text-decoration: none;
  background-color: transparent; }

a:hover {
  text-decoration: underline; }

a:not([href]):not([tabindex]) {
  color: inherit;
  text-decoration: none; }

a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {
  color: inherit;
  text-decoration: none; }

a:not([href]):not([tabindex]):focus {
  outline: 0; }

pre,
code,
kbd,
samp {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1em; }

pre {
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto; }

figure {
  margin: 0; }

img {
  vertical-align: middle;
  border-style: none;
  max-width: 100%;
  height: auto; }

svg {
  overflow: hidden;
  vertical-align: middle; }

table {
  border-collapse: collapse; }

caption {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  text-align: left;
  caption-side: bottom; }

th {
  text-align: inherit; }

label {
  display: inline-block; }

button {
  border-radius: 0; }

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color; }

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit; }

button,
input {
  overflow: visible; }

button,
select {
  text-transform: none; }

select {
  word-wrap: normal; }

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button; }

button:not(:disabled),
[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled) {
  cursor: pointer; }

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  padding: 0;
  border-style: none; }

input[type="radio"],
input[type="checkbox"] {
  box-sizing: border-box;
  padding: 0; }

input[type="date"],
input[type="time"],
input[type="datetime-local"],
input[type="month"] {
  -webkit-appearance: listbox; }

textarea {
  overflow: auto;
  resize: vertical; }

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0; }

legend {
  display: block;
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin-bottom: .5rem;
  font-size: 1.5rem;
  line-height: inherit;
  color: inherit;
  white-space: normal; }

progress {
  vertical-align: baseline; }

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto; }

[type="search"] {
  outline-offset: -2px;
  -webkit-appearance: none; }

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none; }

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button; }

output {
  display: inline-block; }

summary {
  display: list-item;
  cursor: pointer; }

template {
  display: none; }

[hidden] {
  display: none !important; }

cite {
  font-style: normal; }

fieldset {
  border-width: 0;
  padding: 0;
  margin: 0; }

body {
  font-family: "Poppins", sans-serif;
  background-color: #f0f0f0; }

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.7;
  font-weight: 600;
  font-family: "Poppins", sans-serif; }

p {
  color: #767676;
  line-height: 2;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  font-size: .875rem; }

a,
a:hover,
a:focus {
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  outline: 0 solid transparent;
  font-weight: 500; }

ul,
ol {
  margin: 0;
  padding: 0; }

ul li,
ol li {
  list-style: none;
  text-decoration: none; }

ul li:hover,
ol li:hover {
  list-style: none;
  text-decoration: none; }

img {
  max-width: 100%;
  height: auto; }

.main-wrapper aside.sidebar {
  width: 540px;
  float: left; }
.main-wrapper .main-content {
  width: calc(100% - 540px);
  float: right; }

.fade_in {
  animation-name: fade_in;
  -webkit-animation-name: fade_in;
  animation-duration: 3s;
  -webkit-animation-duration: 3s;
  animation-timing-function: ease-in-out;
  -webkit-animation-timing-function: ease-in-out; }

@keyframes fade_in {
  0% {
    opacity: .4; }
  25% {
    opacity: .7; }
  50% {
    opacity: 1; }
  100% {
    opacity: 1; } }
@-webkit-keyframes fade_in {
  0% {
    opacity: .4; }
  25% {
    opacity: .7; }
  50% {
    opacity: 1; }
  100% {
    opacity: 1; } }
.u-clickable {
  cursor: pointer !important; }

.u-flex {
  display: flex !important; }

/** hide **/
.u-hide {
  display: none !important; }

.main-header {
  margin-bottom: 0;
  border: none;
  border-radius: 0;
  padding: 0;
  -webkit-transition: margin-left 0.3s ease-in-out;
  -o-transition: margin-left 0.3s ease-in-out;
  transition: margin-left 0.3s ease-in-out;
  padding: .66125rem 0;
  background-color: #ffffff; }
  .main-header.header-mod {
    padding: 1.25rem 0 .5rem; }
  .main-header .navbar {
    align-items: center; }
    .main-header .navbar .input-group {
      max-width: 360px;
      background-color: #0023cc1a;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      -ms-border-radius: 5px;
      border-radius: 5px; }
      .main-header .navbar .input-group .input-group-text {
        background: transparent;
        border: none;
        color: #0000004d;
        font-size: 1.625rem;
        padding-right: 0; }
      .main-header .navbar .input-group input.form-control {
        border: 0;
        background: transparent;
        height: 2.8rem;
        font-size: .75rem; }
        .main-header .navbar .input-group input.form-control.placeholder {
          font-size: .75rem; }
        .main-header .navbar .input-group input.form-control:-moz-placeholder {
          font-size: .75rem; }
        .main-header .navbar .input-group input.form-control::-moz-placeholder {
          font-size: .75rem; }
        .main-header .navbar .input-group input.form-control:-ms-input-placeholder {
          font-size: .75rem; }
        .main-header .navbar .input-group input.form-control::-webkit-input-placeholder {
          font-size: .75rem; }
    .main-header .navbar .navbar-left {
      /* img{
          width: 4.125rem;
      } */ }
      .main-header .navbar .navbar-left .logo {
        font-size: 2rem;
        font-weight: 900;
        font-style: italic;
        line-height: 2.938rem;
        color: #1F3BE3; }
        .main-header .navbar .navbar-left .logo span {
          color: #F5A100; }
    .main-header .navbar .navbar-right {
      display: flex;
      justify-content: flex-end;
      align-items: center; }
      .main-header .navbar .navbar-right .dropdown-toggle {
        padding-right: 1.5rem;
        position: relative; }
        .main-header .navbar .navbar-right .dropdown-toggle::after {
          display: none; }
        .main-header .navbar .navbar-right .dropdown-toggle:before {
          position: absolute;
          right: 0;
          font-family: 'Material Icons';
          content: 'expand_more';
          font-size: 1.5rem;
          color: #757575; }
      .main-header .navbar .navbar-right .dropdown-menu {
        right: 0;
        padding: 0;
        -webkit-transition: all 0.4s ease-in-out;
        -o-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
        top: 180%;
        display: initial;
        opacity: 0;
        visibility: hidden; }
        .main-header .navbar .navbar-right .dropdown-menu li {
          border-bottom: 1px solid #ffffff; }
          .main-header .navbar .navbar-right .dropdown-menu li a {
            display: block;
            font-size: 0.88rem;
            padding: 0.625rem 1.25rem;
            color: #0000004d; }
          .main-header .navbar .navbar-right .dropdown-menu li:last-child {
            border-bottom: 0; }
          .main-header .navbar .navbar-right .dropdown-menu li.dropdown-header {
            background-color: #0023cc1a;
            border-bottom: 1px solid #ffffff;
            padding-bottom: 0.94rem;
            padding: 1.25rem 1.25rem 0.63rem;
            color: #0023CC;
            font-size: 1rem;
            margin-bottom: 0.63rem; }
          .main-header .navbar .navbar-right .dropdown-menu li.dropdown-footer a {
            padding: 0.94rem 1.25rem;
            font-weight: 600;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            justify-content: flex-start;
            align-items: center; }
            .main-header .navbar .navbar-right .dropdown-menu li.dropdown-footer a i {
              margin-right: 0.5rem;
              font-size: 1.2rem; }
        .main-header .navbar .navbar-right .dropdown-menu.show {
          display: initial;
          top: 130%;
          opacity: 1;
          visibility: visible; }
      .main-header .navbar .navbar-right .user-menu .dropdown-toggle {
        padding: 0 1.5rem 0 1rem;
        display: inline-block;
        background-color: transparent;
        box-shadow: none;
        border: none;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        align-items: center; }
        .main-header .navbar .navbar-right .user-menu .dropdown-toggle .user-info {
          text-align: left;
          padding-left: .6125rem;
          padding-right: .938rem; }
          .main-header .navbar .navbar-right .user-menu .dropdown-toggle .user-info h6 {
            text-transform: capitalize;
            margin: 0;
            font-weight: 600;
            font-size: .875rem;
            line-height: 1.063; }
          .main-header .navbar .navbar-right .user-menu .dropdown-toggle .user-info span {
            color: #00000099;
            text-transform: capitalize;
            font-size: .75rem; }
        .main-header .navbar .navbar-right .user-menu .dropdown-toggle:focus {
          box-shadow: none;
          -webkit-outline: none;
          outline: none; }
      .main-header .navbar .navbar-right .user-menu .dropdown-menu {
        background-color: #f7f6f7;
        border: 0;
        -webkit-box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16); }
      .main-header .navbar .navbar-right .user-menu .user-image {
        width: 40px;
        height: 40px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        border-radius: 50%;
        border-radius: .25rem; }

@media only screen and (max-width: 767px) {
  .main-header.header-mod {
    padding: 1rem 0 .25rem; }
  .main-header .navbar .navbar-left .logo {
    font-size: 1.75rem; }
  .main-header .navbar .navbar-right .user-menu .dropdown-toggle:before {
    font-size: 1.25rem; }
  .main-header .navbar .navbar-right .user-menu .dropdown-toggle .user-info {
    padding: 0; }
    .main-header .navbar .navbar-right .user-menu .dropdown-toggle .user-info h6 {
      font-size: .75rem; }
    .main-header .navbar .navbar-right .user-menu .dropdown-toggle .user-info span {
      font-size: .625rem; } }
aside.sidebar {
  height: 100vh;
  position: relative; }
  aside.sidebar .card {
    background-color: #1F3BE3;
    border-radius: 0;
    position: relative; }
    aside.sidebar .card .card-header {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      background-color: transparent;
      border: 0;
      padding: 1.5rem; }
      aside.sidebar .card .card-header ul.sidebar-nav {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center; }
        aside.sidebar .card .card-header ul.sidebar-nav li {
          text-transform: capitalize;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 600;
          position: relative;
          text-align: right;
          padding-bottom: .25rem;
          cursor: pointer;
          font-size: .75rem;
          -webkit-transition: all 0.5s linear;
          -o-transition: all 0.5s linear;
          transition: all 0.5s linear; }
          aside.sidebar .card .card-header ul.sidebar-nav li::after {
            opacity: 0;
            visibility: hidden;
            content: '';
            position: absolute;
            left: 0;
            width: 0;
            height: 1.5px;
            bottom: 0;
            background-color: transparent; }
          aside.sidebar .card .card-header ul.sidebar-nav li.current {
            color: #ffffff; }
            aside.sidebar .card .card-header ul.sidebar-nav li.current::after {
              width: 30px;
              background-color: #F7D315;
              opacity: 1;
              visibility: visible; }
          aside.sidebar .card .card-header ul.sidebar-nav li:hover {
            color: #ffffff; }
            aside.sidebar .card .card-header ul.sidebar-nav li:hover::after {
              width: 100%;
              background-color: #F7D315;
              opacity: 1;
              visibility: visible;
              -webkit-transition: width 0.4s linear;
              -o-transition: width 0.4s linear;
              transition: width 0.4s linear; }
          aside.sidebar .card .card-header ul.sidebar-nav li:not(:last-child) {
            margin-right: 2rem; }
    aside.sidebar .card .card-body {
      background-color: #1F3BE3;
      padding: 1.5rem; }
      aside.sidebar .card .card-body .filter h2 {
        color: #ffffff;
        text-transform: capitalize;
        font-size: 1.5rem;
        margin-bottom: 2rem; }
        aside.sidebar .card .card-body .filter h2 span {
          color: #F7D315;
          margin-right: .25rem;
          text-transform: capitalize; }
      aside.sidebar .card .card-body .filter form .wrap-bg .more .toggle_form .form-group .kvs-select .select-wrapper .radiobtn-style li .custom-radio .custom-control-input:checked ~ .custom-control-label::before {
        background-color: #1F3BE3; }
      aside.sidebar .card .card-body .filter form .wrap-bg .more .toggle_form .form-group .kvs-select .select-wrapper .radiobtn-style li .custom-radio label {
        color: black;
        font-weight: 400; }
        aside.sidebar .card .card-body .filter form .wrap-bg .more .toggle_form .form-group .kvs-select .select-wrapper .radiobtn-style li .custom-radio label.custom-control-label::before {
          background-color: #9ed2f9; }
      aside.sidebar .card .card-body .filter form .wrap-bg .more .toggle_form.toggle_form_animate {
        opacity: 0;
        visibility: hidden;
        height: 0 !important;
        -webkit-transition: height 0.5s ease-in-out;
        -o-transition: height 0.5s ease-in-out;
        transition: height 0.5s ease-in-out; }
      aside.sidebar .card .card-body .inline-form {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center; }
        aside.sidebar .card .card-body .inline-form .inline-label {
          color: #ffffff;
          font-size: .75rem;
          margin: 0;
          max-width: 100px; }
      aside.sidebar .card .card-body .overview {
        margin: 3rem 0 1rem 0; }
        aside.sidebar .card .card-body .overview .overview-header {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.5);
          padding-bottom: .5rem; }
          aside.sidebar .card .card-body .overview .overview-header h3 {
            font-size: 0.938rem;
            text-transform: uppercase;
            color: #ffffff;
            letter-spacing: 4px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            justify-content: flex-start;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center; }
            aside.sidebar .card .card-body .overview .overview-header h3 i {
              margin-right: 1rem; }
        aside.sidebar .card .card-body .overview .overview-body .overview-row .overview-item {
          margin-top: 1rem; }
          aside.sidebar .card .card-body .overview .overview-body .overview-row .overview-item .overview-data h4 {
            color: #F7D315;
            font-size: 1.125rem; }
          aside.sidebar .card .card-body .overview .overview-body .overview-row .overview-item .overview-data h6 {
            font-size: .75rem;
            color: #ffffff;
            text-transform: capitalize; }
          aside.sidebar .card .card-body .overview .overview-body .overview-row .overview-item.overview-inline .overview-data {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            justify-content: flex-start;
            -webkit-box-align: start;
            -ms-flex-align: start;
            align-items: flex-start; }
            aside.sidebar .card .card-body .overview .overview-body .overview-row .overview-item.overview-inline .overview-data:not(:last-child) {
              margin-right: .6125rem; }
            aside.sidebar .card .card-body .overview .overview-body .overview-row .overview-item.overview-inline .overview-data h4 i {
              max-width: 12px;
              display: inline-block; }
            aside.sidebar .card .card-body .overview .overview-body .overview-row .overview-item.overview-inline .overview-data h4:not(:last-child) {
              margin-right: 2rem; }
          aside.sidebar .card .card-body .overview .overview-body .overview-row .overview-item.overview-inline h6 {
            font-size: .75rem;
            color: #ffffff;
            text-transform: capitalize; }
        aside.sidebar .card .card-body .overview .overview-body .progress-data {
          width: 100%;
          margin: .5rem 0; }
          aside.sidebar .card .card-body .overview .overview-body .progress-data .progress-wrapper {
            height: 10px;
            background-color: #F37600;
            display: block;
            position: relative;
            -webkit-border-radius: 24px;
            -moz-border-radius: 24px;
            -ms-border-radius: 24px;
            border-radius: 24px; }
            aside.sidebar .card .card-body .overview .overview-body .progress-data .progress-wrapper .progress-value {
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              bottom: 0;
              height: 100%;
              background-color: #F7D315;
              z-index: 2;
              -webkit-border-radius: 24px;
              -moz-border-radius: 24px;
              -ms-border-radius: 24px;
              border-radius: 24px; }
          aside.sidebar .card .card-body .overview .overview-body .progress-data.flex-data {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center; }
            aside.sidebar .card .card-body .overview .overview-body .progress-data.flex-data .progress-wrapper {
              -webkit-box-flex: 0;
              -ms-flex: 1 1 auto;
              flex: 1 1 auto;
              background-color: #0023CC; }
          aside.sidebar .card .card-body .overview .overview-body .progress-data .progress-result {
            color: #ffffff;
            margin-left: 2rem;
            padding: 0 1rem; }
        aside.sidebar .card .card-body .overview .overview-body .male-female-percent {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: start;
          -ms-flex-pack: start;
          justify-content: flex-start;
          -webkit-box-align: start;
          -ms-flex-align: start;
          align-items: flex-start; }
          aside.sidebar .card .card-body .overview .overview-body .male-female-percent .male-female-item i {
            max-width: 14px;
            display: inline-block; }
          aside.sidebar .card .card-body .overview .overview-body .male-female-percent .male-female-item span {
            font-size: .75rem;
            color: #ffffff;
            text-transform: capitalize; }
          aside.sidebar .card .card-body .overview .overview-body .male-female-percent .male-female-item:not(:last-child) {
            margin-right: 2rem; }
        aside.sidebar .card .card-body .overview.overview-list {
          margin: 2rem 0 1rem 0; }
          aside.sidebar .card .card-body .overview.overview-list .overview-header {
            border: 0; }
          aside.sidebar .card .card-body .overview.overview-list .overview-row .overview-item {
            padding: 2rem 0;
            border-bottom: 2px solid #0023CC;
            margin: 0; }
          aside.sidebar .card .card-body .overview.overview-list .overview-row.label-row {
            margin-top: 2rem;
            padding-bottom: 2rem;
            border-bottom: 2px solid #0023CC; }
            aside.sidebar .card .card-body .overview.overview-list .overview-row.label-row h5 {
              font-size: .875rem;
              color: #ffffff;
              text-transform: capitalize; }
            aside.sidebar .card .card-body .overview.overview-list .overview-row.label-row .overview-item {
              padding: .5rem 0;
              border: 0; }
              aside.sidebar .card .card-body .overview.overview-list .overview-row.label-row .overview-item label {
                font-size: .775rem;
                color: #9FA6F8;
                text-transform: capitalize;
                font-weight: 500;
                margin: 0; }
              aside.sidebar .card .card-body .overview.overview-list .overview-row.label-row .overview-item .overview-content {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center; }
                aside.sidebar .card .card-body .overview.overview-list .overview-row.label-row .overview-item .overview-content h4 {
                  color: #F7D315;
                  font-size: 1.125rem;
                  margin-right: 2rem; }
            aside.sidebar .card .card-body .overview.overview-list .overview-row.label-row .progress-data.flex-data .progress-wrapper {
              -webkit-box-flex: 0;
              -ms-flex: 1 1 auto;
              flex: 1 1 auto;
              background-color: transparent; }
            aside.sidebar .card .card-body .overview.overview-list .overview-row.label-row .progress-data .progress-result {
              color: #ffffff;
              margin-left: 2rem;
              padding: 0 1rem; }
aside.login-sidebar {
  height: 100vh;
  background-size: cover;
  background-position: center; }
  aside.login-sidebar .card {
    background-color: transparent; }
    aside.login-sidebar .card .card-body {
      color: #ffffff;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      background-color: transparent; }
      aside.login-sidebar .card .card-body .login-sidebar-content {
        max-width: 330px;
        margin: auto;
        text-align: center; }
        aside.login-sidebar .card .card-body .login-sidebar-content h2 {
          font-size: 1.5rem; }
          aside.login-sidebar .card .card-body .login-sidebar-content h2 span {
            color: #F7D315; }
        aside.login-sidebar .card .card-body .login-sidebar-content p {
          color: #ffffff;
          font-size: .845rem; }
  aside.login-sidebar .copy-right {
    margin: 0 auto;
    text-align: center;
    font-size: .75rem;
    color: #F7D315;
    font-weight: 500;
    margin-bottom: 1rem; }

.tab {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.5);
  right: 0;
  width: 100%; }
  .tab ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center; }
    .tab ul li {
      min-width: 80px;
      position: relative;
      -webkit-transition: all 0.5s linear;
      -o-transition: all 0.5s linear;
      transition: all 0.5s linear;
      padding-bottom: .25rem;
      font-weight: 600;
      text-transform: capitalize;
      cursor: pointer;
      font-size: .875rem; }
      .tab ul li::after {
        opacity: 0;
        visibility: hidden;
        content: '';
        position: absolute;
        left: 0;
        width: 0;
        height: 2px;
        bottom: 0;
        background-color: transparent; }
      .tab ul li.current {
        color: #000000; }
        .tab ul li.current::after {
          width: 20px;
          background-color: #1F3BE3;
          opacity: 1;
          visibility: visible; }
      .tab ul li:hover {
        color: #000000; }
        .tab ul li:hover::after {
          width: 20px;
          background-color: #1F3BE3;
          opacity: 1;
          visibility: visible;
          -webkit-transition: width 0.4s linear;
          -o-transition: width 0.4s linear;
          transition: width 0.4s linear; }

input {
  font-size: .875rem; }
  input.form-control {
    color: #000000; }
    input.form-control.placeholder {
      color: #0000004d;
      font-size: .875rem;
      text-transform: capitalize; }
    input.form-control:-moz-placeholder {
      color: #0000004d;
      font-size: .875rem;
      text-transform: capitalize; }
    input.form-control::-moz-placeholder {
      color: #0000004d;
      font-size: .875rem;
      text-transform: capitalize; }
    input.form-control:-ms-input-placeholder {
      color: #0000004d;
      font-size: .875rem;
      text-transform: capitalize; }
    input.form-control::-webkit-input-placeholder {
      color: #0000004d;
      font-size: .875rem;
      text-transform: capitalize; }
    input.form-control:focus {
      box-shadow: none;
      outline: none;
      -webkit-outline: none; }

.custom-checkbox label {
  color: #000000;
  font-size: .75rem; }
  .custom-checkbox label.custom-control-label::before {
    border: 1.5px solid #0000004d;
    background-color: #ffffff;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -ms-border-radius: 0;
    border-radius: 0; }
.custom-checkbox .custom-control-input:active ~ .custom-control-label::before {
  background-color: transparent; }
.custom-checkbox .custom-control-input:checked ~ .custom-control-label {
  color: #1F3BE3; }
  .custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
    background-color: #1F3BE3;
    border-color: #1F3BE3; }

.custom-radio label {
  color: #ffffff;
  font-size: .75rem;
  font-weight: 600; }
  .custom-radio label.custom-control-label::before {
    background-color: #ffffff; }
.custom-radio .custom-control-input:active ~ .custom-control-label::before {
  background-color: #1F3BE3; }
.custom-radio .custom-control-input:checked ~ .custom-control-label {
  color: #ffffff; }
  .custom-radio .custom-control-input:checked ~ .custom-control-label::before {
    background-color: #F7D315; }
.custom-radio.inline-flex {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  margin-right: .6125rem;
  align-items: center; }

.kvs-select {
  position: relative; }
  .kvs-select .select-wrapper {
    position: relative;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.5);
    position: relative;
    display: inline-block;
    width: 100%;
    height: calc(2rem + 2px);
    padding: .375rem 1.75rem .375rem .75rem;
    vertical-align: middle;
    background-size: 8px 10px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    border-radius: 5px;
    line-height: 1.2;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out; }
    .kvs-select .select-wrapper span.select-item {
      color: #ffffff;
      font-size: .75rem;
      text-transform: capitalize;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden; }
    .kvs-select .select-wrapper ul {
      position: absolute;
      width: 100%;
      top: 140%;
      left: 0;
      right: 0;
      background-color: #ffffff;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      -ms-border-radius: 5px;
      border-radius: 5px;
      opacity: 0;
      visibility: hidden;
      -webkit-transition: all 0.5s ease-in-out;
      -o-transition: all 0.5s ease-in-out;
      transition: all 0.5s ease-in-out;
      z-index: 2; }
      .kvs-select .select-wrapper ul li {
        line-height: 1.3;
        padding: .25rem .6125rem;
        -webkit-transition: all 0.3s linear;
        -o-transition: all 0.3s linear;
        transition: all 0.3s linear; }
        .kvs-select .select-wrapper ul li.active, .kvs-select .select-wrapper ul li:hover {
          background-color: #0023cc1a; }
    .kvs-select .select-wrapper::after {
      position: absolute;
      right: .6125rem;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      -o-transform: translateY(-50%);
      transform: translateY(-50%);
      content: 'unfold_more';
      font-family: 'Material Icons';
      z-index: 2;
      color: #ffffff;
      pointer-events: none; }
    .kvs-select .select-wrapper.select-toggle {
      background-color: #ffffff; }
      .kvs-select .select-wrapper.select-toggle span.select-item {
        color: #000000; }
      .kvs-select .select-wrapper.select-toggle::after {
        color: #000000; }
      .kvs-select .select-wrapper.select-toggle ul {
        top: 100%;
        opacity: 1;
        visibility: visible; }
  .kvs-select .selected-data {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    z-index: 1; }
    .kvs-select .selected-data span {
      padding: .25rem .5rem;
      background-color: #ffffff;
      font-size: .75rem;
      color: #000000;
      margin-top: 1rem;
      -webkit-border-radius: 24px;
      -moz-border-radius: 24px;
      -ms-border-radius: 24px;
      border-radius: 24px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center; }
      .kvs-select .selected-data span:not(:last-child) {
        margin-right: .25rem; }
      .kvs-select .selected-data span small {
        margin-left: .5rem;
        cursor: pointer;
        font-size: .8rem; }
        .kvs-select .selected-data span small:hover {
          color: #F7D315; }

[class*=common-button] {
  /* common styles */
  /* states class */
  font-size: .75rem;
  text-transform: capitalize;
  min-width: 100px;
  padding: .6125rem 1rem;
  text-align: center;
  border: 0;
  box-shadow: none;
  font-weight: 600; }

/*types*/
.common-button-bg {
  background-color: #F7D315;
  color: #1F3BE3;
  -webkit-border-radius: 24px;
  -moz-border-radius: 24px;
  -ms-border-radius: 24px;
  border-radius: 24px; }

.common-button-border {
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  border-radius: 5px;
  color: rgba(255, 255, 255, 0.5); }
  .common-button-border.icon-button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: none;
    padding: 0;
    color: #ffffff; }
    .common-button-border.icon-button i {
      margin-right: .25rem; }
    .common-button-border.icon-button:focus {
      outline: none; }

.buttons {
  margin-top: 1rem; }
  .buttons button:not(:last-child) {
    margin-right: .6125rem; }

.common-table thead {
  background-color: #ffffff; }
  .common-table thead th {
    font-size: .75rem;
    text-transform: capitalize;
    color: #0000004d;
    font-weight: 500; }
.common-table tbody tr {
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out; }
  .common-table tbody tr td {
    font-size: .75rem;
    color: #000000; }
    .common-table tbody tr td span.security i {
      font-size: 1.1rem; }
    .common-table tbody tr td span.security.check {
      color: #71c016; }
    .common-table tbody tr td span.security.cross {
      color: #F32F30; }
    .common-table tbody tr td span.download i {
      -webkit-transform: rotate(90deg);
      -moz-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      -o-transform: rotate(90deg);
      transform: rotate(90deg);
      font-size: 1.1rem; }
  .common-table tbody tr:hover {
    -webkit-box-shadow: 0 17px 16px rgba(0, 0, 0, 0.1);
    box-shadow: 0 17px 16px rgba(0, 0, 0, 0.1);
    background-color: #F7F7F7; }

.banner {
  padding-top: 110px;
  background-image: url("./.././img/banner-bg.png");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat; }
  .banner .banner-wrap-center {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center; }
    .banner .banner-wrap-center .banner-content {
      max-width: 690px; }
      .banner .banner-wrap-center .banner-content figure {
        text-align: center;
        margin-bottom: 2.688rem; }
        .banner .banner-wrap-center .banner-content figure img {
          width: 110px;
          height: 90px; }
      .banner .banner-wrap-center .banner-content h2 {
        text-align: center; }
        .banner .banner-wrap-center .banner-content h2 span {
          color: #1F3BE3; }

.user-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  line-height: 2.25; }

.user-span16 {
  font-size: .75rem;
  font-weight: 400;
  color: #9FA6F8;
  line-height: 1.125rem;
  text-transform: capitalize; }

.user-span18 {
  font-size: .844rem;
  font-weight: 600;
  line-height: 1.125rem;
  color: #F8E71C; }

.user-span14 {
  font-size: .656rem;
  font-weight: 400;
  line-height: 1.219rem;
  text-transform: capitalize;
  color: #000000; }

.kvs-wrapper .main-content {
  padding-top: 90px; }
  .kvs-wrapper .main-content .main-wrapper {
    padding: 3.5rem 0 2.813rem;
    /* user-profile */
    /* user-info */ }
    .kvs-wrapper .main-content .main-wrapper figure {
      margin-bottom: 1.625rem; }
      .kvs-wrapper .main-content .main-wrapper figure a:hover {
        cursor: pointer; }
      .kvs-wrapper .main-content .main-wrapper figure a img {
        width: 1.125rem; }
    .kvs-wrapper .main-content .main-wrapper .sticky-sidebar {
      position: relative;
      position: -webkit-sticky;
      position: sticky;
      top: 80px; }
    .kvs-wrapper .main-content .main-wrapper .user-profile {
      background: #1F3BE3;
      -webkit-border-radius: 3.75px;
      -moz-border-radius: 3.75px;
      -ms-border-radius: 3.75px;
      border-radius: 3.75px; }
      .kvs-wrapper .main-content .main-wrapper .user-profile .user-profile-top {
        padding: 1.375rem 0;
        text-align: center;
        border-bottom: 1px solid #11238b; }
        .kvs-wrapper .main-content .main-wrapper .user-profile .user-profile-top figure {
          margin-bottom: 0; }
          .kvs-wrapper .main-content .main-wrapper .user-profile .user-profile-top figure img {
            width: 113px; }
        .kvs-wrapper .main-content .main-wrapper .user-profile .user-profile-top .text-wrap {
          margin-top: .625rem; }
          .kvs-wrapper .main-content .main-wrapper .user-profile .user-profile-top .text-wrap span {
            display: block; }
            .kvs-wrapper .main-content .main-wrapper .user-profile .user-profile-top .text-wrap span:first-child {
              padding-bottom: 6px; }
            .kvs-wrapper .main-content .main-wrapper .user-profile .user-profile-top .text-wrap span:nth-child(2) {
              max-width: 150px;
              margin: 0 auto; }
            .kvs-wrapper .main-content .main-wrapper .user-profile .user-profile-top .text-wrap span:last-child {
              padding-top: 12px; }
      .kvs-wrapper .main-content .main-wrapper .user-profile .user-profile-bottom {
        padding: 1.375rem 1.875rem 2rem; }
        .kvs-wrapper .main-content .main-wrapper .user-profile .user-profile-bottom ul li {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          padding-bottom: 1.125rem; }
          .kvs-wrapper .main-content .main-wrapper .user-profile .user-profile-bottom ul li span {
            display: block; }
            .kvs-wrapper .main-content .main-wrapper .user-profile .user-profile-bottom ul li span:not(:last-child) {
              padding-bottom: 3px; }
          .kvs-wrapper .main-content .main-wrapper .user-profile .user-profile-bottom ul li div:not(:last-child) {
            flex: 0 0 60%;
            max-width: 60%; }
          .kvs-wrapper .main-content .main-wrapper .user-profile .user-profile-bottom ul li:last-child {
            padding-bottom: 0; }
            .kvs-wrapper .main-content .main-wrapper .user-profile .user-profile-bottom ul li:last-child .left span {
              position: relative; }
              .kvs-wrapper .main-content .main-wrapper .user-profile .user-profile-bottom ul li:last-child .left span:last-child::before {
                position: absolute;
                top: -5px;
                left: 0;
                font-family: 'Material Icons';
                content: 'done';
                font-size: 1rem;
                color: #5ACE52; }
    .kvs-wrapper .main-content .main-wrapper .user-profile-para {
      margin-top: 1.875rem; }
      .kvs-wrapper .main-content .main-wrapper .user-profile-para:hover {
        cursor: pointer; }
        .kvs-wrapper .main-content .main-wrapper .user-profile-para:hover span {
          opacity: 1; }
      .kvs-wrapper .main-content .main-wrapper .user-profile-para img {
        width: .75rem;
        height: .75rem; }
      .kvs-wrapper .main-content .main-wrapper .user-profile-para span {
        -webkit-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        padding-left: .5rem;
        font-size: .75rem;
        color: #000000;
        opacity: 0.5;
        font-weight: 600; }
    .kvs-wrapper .main-content .main-wrapper .user-info {
      padding-left: 5.625rem; }
      .kvs-wrapper .main-content .main-wrapper .user-info .user-info-header ul {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex; }
        .kvs-wrapper .main-content .main-wrapper .user-info .user-info-header ul li {
          position: relative;
          -webkit-transition: all 0.4s ease-in-out;
          -o-transition: all 0.4s ease-in-out;
          transition: all 0.4s ease-in-out; }
          .kvs-wrapper .main-content .main-wrapper .user-info .user-info-header ul li.user-span18 {
            color: #999999; }
          .kvs-wrapper .main-content .main-wrapper .user-info .user-info-header ul li.current {
            color: #000000; }
            .kvs-wrapper .main-content .main-wrapper .user-info .user-info-header ul li.current:after {
              opacity: 1;
              visibility: visible;
              width: .938rem;
              background-color: #1F3BE3; }
          .kvs-wrapper .main-content .main-wrapper .user-info .user-info-header ul li:not(:last-child) {
            margin-right: 1.875rem; }
          .kvs-wrapper .main-content .main-wrapper .user-info .user-info-header ul li:hover {
            color: #000000;
            cursor: pointer; }
            .kvs-wrapper .main-content .main-wrapper .user-info .user-info-header ul li:hover::after {
              width: 100%;
              background-color: #1F3BE3;
              opacity: 1;
              visibility: visible;
              -webkit-transition: width 0.4s ease-in-out;
              -o-transition: width 0.4s ease-in-out;
              transition: width 0.4s ease-in-out; }
          .kvs-wrapper .main-content .main-wrapper .user-info .user-info-header ul li::after {
            opacity: 0;
            visibility: hidden;
            content: '';
            position: absolute;
            left: 0;
            width: 0;
            height: 1.5px;
            bottom: -2px;
            background-color: transparent; }
      .kvs-wrapper .main-content .main-wrapper .user-info .user-info-body {
        margin-top: 2.125rem; }
        .kvs-wrapper .main-content .main-wrapper .user-info .user-info-body ul {
          background: #ffffff;
          -webkit-box-shadow: 0 0.25rem 0.75rem #00000029;
          box-shadow: 0 0.25rem 0.75rem #00000029; }
          .kvs-wrapper .main-content .main-wrapper .user-info .user-info-body ul li {
            padding: .625rem 1.25rem;
            border-bottom: 1px solid #00000029; }
            .kvs-wrapper .main-content .main-wrapper .user-info .user-info-body ul li span {
              display: inline-block; }
              .kvs-wrapper .main-content .main-wrapper .user-info .user-info-body ul li span:not(:last-child) {
                flex: 0 0 40%;
                width: 40%;
                opacity: .5; }

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .user-title {
    font-size: 1.25rem; }

  .user-span18 {
    font-size: .813rem; }

  .user-span16 {
    font-size: .688rem;
    text-transform: capitalize; }

  .user-span14 {
    font-size: .563rem; }

  .kvs-wrapper .main-content .main-wrapper .user-profile-para span {
    font-size: .625rem; } }
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .user-title {
    font-size: 1.125rem; }

  .user-span18 {
    font-size: .725rem; }

  .user-span16 {
    font-size: .688rem;
    text-transform: capitalize; }

  .user-span14 {
    font-size: .563rem; }

  .kvs-wrapper .main-content .main-wrapper .user-info {
    padding-left: 3.625rem; }
  .kvs-wrapper .main-content .main-wrapper .user-profile-para span {
    font-size: .625rem; } }
@media only screen and (max-width: 767px) {
  .user-title {
    font-size: 1rem; }

  .user-span18 {
    font-size: .688rem; }

  .user-span16 {
    font-size: .625rem;
    text-transform: capitalize; }

  .user-span14 {
    font-size: .563rem; }

  .kvs-wrapper .main-content .main-wrapper {
    padding: 2rem 0 2.813rem; }
    .kvs-wrapper .main-content .main-wrapper figure {
      margin-bottom: 1rem; }
      .kvs-wrapper .main-content .main-wrapper figure a img {
        width: .875rem; }
    .kvs-wrapper .main-content .main-wrapper .user-profile .user-profile-top figure img {
      width: 100px; }
    .kvs-wrapper .main-content .main-wrapper .user-profile .user-profile-top .text-wrap span:first-child {
      padding-bottom: 0; }
    .kvs-wrapper .main-content .main-wrapper .user-profile .user-profile-top .text-wrap span:nth-child(2) {
      max-width: 110px; }
    .kvs-wrapper .main-content .main-wrapper .user-profile .user-profile-top .text-wrap span:last-child {
      padding-top: 6px; }
    .kvs-wrapper .main-content .main-wrapper .user-profile .user-profile-bottom ul li {
      padding-bottom: .875rem; }
      .kvs-wrapper .main-content .main-wrapper .user-profile .user-profile-bottom ul li span:not(:last-child) {
        padding-bottom: 1px; }
    .kvs-wrapper .main-content .main-wrapper .user-profile-para {
      margin-top: .75rem; }
      .kvs-wrapper .main-content .main-wrapper .user-profile-para span {
        font-size: .588rem; }
    .kvs-wrapper .main-content .main-wrapper .user-info {
      margin-top: 1.75rem; }
      .kvs-wrapper .main-content .main-wrapper .user-info .user-info-body {
        margin-top: 1rem; } }
@media only screen and (min-width: 480px) and (max-width: 767px) {
  .kvs-wrapper .main-content .main-wrapper .user-info {
    padding-left: 0; } }
@media only screen and (max-width: 480px) {
  .kvs-wrapper .main-content .main-wrapper .user-info {
    padding-left: 0; } }
.map-wrapper {
  position: relative; }

.leaflet-control-container .leaflet-left {
  left: 2rem; }
  .leaflet-control-container .leaflet-left .leaflet-control {
    margin: 0 !important; }
  .leaflet-control-container .leaflet-left.leaflet-top {
    top: auto;
    bottom: 5rem; }
  .leaflet-control-container .leaflet-left .leaflet-bar {
    border: none; }
    .leaflet-control-container .leaflet-left .leaflet-bar a {
      width: 2rem;
      height: 2rem;
      line-height: 2rem;
      color: #767676;
      border: 0;
      font-size: 1.5rem; }
      .leaflet-control-container .leaflet-left .leaflet-bar a:hover {
        background-color: #0023cc1a;
        color: #0023CC;
        font-weight: normal; }
  .leaflet-control-container .leaflet-left .loc {
    width: 30px;
    height: 30px;
    line-height: 40px;
    color: #0023CC;
    background-color: #ffffff;
    text-align: center;
    border: 0;
    margin-top: 1.2rem !important; }
    .leaflet-control-container .leaflet-left .loc i {
      font-size: 1rem; }
    .leaflet-control-container .leaflet-left .loc:hover {
      background-color: #E8F8E7;
      color: #5ACE52; }
.leaflet-control-container .leaflet-control-layers-toggle {
  width: 36px;
  height: 36px;
  background-size: 16px 16px; }

.leaflet-popup-content-wrapper {
  font-size: 1rem;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  border-radius: 5px;
  background-color: #1F3BE3; }
  .leaflet-popup-content-wrapper .leaflet-popup-content {
    width: 300px !important;
    overflow: auto;
    margin: 0;
    padding: 1rem; }
    .leaflet-popup-content-wrapper .leaflet-popup-content a {
      color: #ffffff;
      text-transform: capitalize;
      padding: 0.275rem 0.5rem;
      font-size: 0.775rem; }
    .leaflet-popup-content-wrapper .leaflet-popup-content .bind-header {
      margin-bottom: 0.5rem; }
      .leaflet-popup-content-wrapper .leaflet-popup-content .bind-header h5 {
        font-size: 1rem;
        color: #F7D315;
        text-transform: capitalize;
        margin-bottom: 0.2rem;
        font-weight: 600;
        font-family: "Poppins", sans-serif; }
      .leaflet-popup-content-wrapper .leaflet-popup-content .bind-header p {
        margin: 0;
        font-size: 0.675rem;
        line-height: 1;
        color: #ffffff; }
        .leaflet-popup-content-wrapper .leaflet-popup-content .bind-header p span,
        .leaflet-popup-content-wrapper .leaflet-popup-content .bind-header p i {
          font-weight: 600;
          margin-right: 0.25rem;
          color: #ffffff; }
      .leaflet-popup-content-wrapper .leaflet-popup-content .bind-header em {
        font-size: 0.675rem;
        line-height: 0.875; }
        .leaflet-popup-content-wrapper .leaflet-popup-content .bind-header em span {
          font-weight: 600;
          margin-right: 0.25rem;
          color: #ffffff; }

.leaflet-popup-tip-container .leaflet-popup-tip {
  background-color: #1F3BE3; }

.leaflet-popup-close-button {
  color: #ffffff; }

.table-responsive {
  padding: 54px 1rem 1rem 1rem; }

.pdt-80 {
  padding-top: 5rem !important; }

.pdb-80 {
  padding-bottom: 5rem !important; }

.pdb-155 {
  padding-bottom: 9.688rem !important; }

.pdt-110 {
  padding-top: 6.875rem !important; }

.pdb-110 {
  padding-bottom: 6.875rem !important; }

.pdt-50 {
  padding-top: 3.125rem !important; }

.pdb-50 {
  padding-bottom: 3.125rem !important; }

.kvs-wrapper {
  /* header */
  /* about */
  /* summary */
  /* features */
  /* features */
  /* footer */ }
  .kvs-wrapper header {
    padding: 1.875rem 0;
    background: #ffffff;
    position: fixed;
    width: 100%;
    z-index: 1; }
    .kvs-wrapper header .nav-wrap {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center; }
      .kvs-wrapper header .nav-wrap .nav-left a:hover {
        cursor: pointer; }
      .kvs-wrapper header .nav-wrap .nav-left a h1 span {
        color: #F5A100; }
      .kvs-wrapper header .nav-wrap .nav-right ul {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center; }
        .kvs-wrapper header .nav-wrap .nav-right ul li {
          -webkit-transition: all 0.4s linear;
          -o-transition: all 0.4s linear;
          transition: all 0.4s linear; }
          .kvs-wrapper header .nav-wrap .nav-right ul li:not(:last-child) {
            margin-right: 3.281rem; }
          .kvs-wrapper header .nav-wrap .nav-right ul li:hover {
            cursor: pointer; }
            .kvs-wrapper header .nav-wrap .nav-right ul li:hover a {
              opacity: 1; }
            .kvs-wrapper header .nav-wrap .nav-right ul li:hover:last-child {
              background: #eac608; }
          .kvs-wrapper header .nav-wrap .nav-right ul li a {
            color: #000000;
            opacity: .4;
            -webkit-transition: all 0.4s linear;
            -o-transition: all 0.4s linear;
            transition: all 0.4s linear; }
          .kvs-wrapper header .nav-wrap .nav-right ul li:last-child {
            -webkit-border-radius: 1.625rem;
            -moz-border-radius: 1.625rem;
            -ms-border-radius: 1.625rem;
            border-radius: 1.625rem;
            padding: .797rem 2.975rem;
            background: #F7D315; }
  .kvs-wrapper .about {
    background-color: #ffffff; }
    .kvs-wrapper .about figure img {
      width: 618px;
      position: relative;
      left: -3%; }
    .kvs-wrapper .about .about-wrap-center {
      height: 100%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center; }
      .kvs-wrapper .about .about-wrap-center .about-wrap span {
        display: block; }
      .kvs-wrapper .about .about-wrap-center .about-wrap .heading3 {
        max-width: 504px;
        padding-bottom: 1.875rem; }
        .kvs-wrapper .about .about-wrap-center .about-wrap .heading3 span {
          display: inline;
          padding-bottom: 0;
          color: #1F3BE3; }
      .kvs-wrapper .about .about-wrap-center .about-wrap p {
        max-width: 500px; }
  .kvs-wrapper .summary {
    background: #1F3BE3; }
    .kvs-wrapper .summary .text-wrap {
      margin-bottom: 3.438rem;
      text-align: center; }
      .kvs-wrapper .summary .text-wrap span {
        display: block; }
      .kvs-wrapper .summary .text-wrap h3 {
        margin-top: .938rem;
        color: #ffffff; }
        .kvs-wrapper .summary .text-wrap h3 span {
          display: inline;
          color: #F8E71C; }
    .kvs-wrapper .summary .flex-series-boxes {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex; }
      .kvs-wrapper .summary .flex-series-boxes .flex-sm-boxes {
        flex: 0 0 18%;
        max-width: 18%;
        text-align: center;
        border: 1px solid #0000BB;
        padding: 2.625rem 0; }
        .kvs-wrapper .summary .flex-series-boxes .flex-sm-boxes:not(:last-child) {
          margin-right: 1.375rem; }
        .kvs-wrapper .summary .flex-series-boxes .flex-sm-boxes span {
          color: #F8E71C;
          display: block;
          padding-bottom: 1.5px; }
        .kvs-wrapper .summary .flex-series-boxes .flex-sm-boxes .heading3 {
          color: #ffffff;
          opacity: .92; }
  .kvs-wrapper .features {
    background-image: url("./.././img/Group-149.png");
    background-repeat: no-repeat;
    background-position: 185% center;
    background-size: 980px; }
    .kvs-wrapper .features .row-wrap .content-wrap span {
      display: block; }
    .kvs-wrapper .features .row-wrap .content-wrap h3 {
      max-width: 550px; }
      .kvs-wrapper .features .row-wrap .content-wrap h3 span {
        padding: 0;
        display: inline;
        color: #1F3BE3; }
    .kvs-wrapper .features .row-wrap .content-wrap ul {
      margin-top: 2.813rem; }
      .kvs-wrapper .features .row-wrap .content-wrap ul li {
        margin-bottom: 1rem;
        text-transform: capitalize; }
        .kvs-wrapper .features .row-wrap .content-wrap ul li i {
          padding-bottom: 3px;
          vertical-align: middle;
          color: #5ACE52;
          font-size: 1.25rem;
          margin-right: 10px;
          font-weight: 700; }
  .kvs-wrapper .features-lr .features-left {
    width: calc(100% - 40%);
    float: left; }
    .kvs-wrapper .features-lr .features-left .content-wrap {
      margin: 0 auto;
      max-width: 550px; }
      .kvs-wrapper .features-lr .features-left .content-wrap span {
        display: block; }
      .kvs-wrapper .features-lr .features-left .content-wrap h3 span {
        padding: 0;
        display: inline;
        color: #1F3BE3; }
      .kvs-wrapper .features-lr .features-left .content-wrap ul {
        margin-top: 2.813rem; }
        .kvs-wrapper .features-lr .features-left .content-wrap ul li {
          margin-bottom: 1rem;
          text-transform: capitalize; }
          .kvs-wrapper .features-lr .features-left .content-wrap ul li i {
            padding-bottom: 3px;
            vertical-align: middle;
            color: #5ACE52;
            font-size: 1.25rem;
            margin-right: 10px;
            font-weight: 700; }
  .kvs-wrapper .features-lr .features-right {
    width: calc(100% - 60%);
    float: right; }
    .kvs-wrapper .features-lr .features-right figure {
      /*    background-image: url('./.././img/Group-149.png');
         background-repeat: no-repeat;
         background-position: 18% center;
         background-size: 680px;
         position: relative; */ }
      .kvs-wrapper .features-lr .features-right figure img {
        right: 0; }
  .kvs-wrapper footer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex; }
    .kvs-wrapper footer .footer-left {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      flex: 0 0 60%;
      background: #1F3BE3; }
      .kvs-wrapper footer .footer-left .footer-left-wrap {
        max-width: 550px; }
        .kvs-wrapper footer .footer-left .footer-left-wrap span {
          display: block; }
        .kvs-wrapper footer .footer-left .footer-left-wrap p {
          margin-top: .938rem;
          color: #ffffff; }
        .kvs-wrapper footer .footer-left .footer-left-wrap .logo-wrap {
          margin-top: 1.875rem; }
          .kvs-wrapper footer .footer-left .footer-left-wrap .logo-wrap span {
            font-weight: 600;
            display: block; }
          .kvs-wrapper footer .footer-left .footer-left-wrap .logo-wrap .logo-img {
            padding-top: .656rem; }
            .kvs-wrapper footer .footer-left .footer-left-wrap .logo-wrap .logo-img figure img {
              width: 90px; }
    .kvs-wrapper footer .footer-right {
      flex: 0 0 40%;
      background: #0000BB; }
      .kvs-wrapper footer .footer-right .footer-right-wrap {
        padding-left: 55px; }
        .kvs-wrapper footer .footer-right .footer-right-wrap ul {
          margin-top: 1.25rem; }
          .kvs-wrapper footer .footer-right .footer-right-wrap ul li:not(:last-child) {
            margin-bottom: .75rem; }
          .kvs-wrapper footer .footer-right .footer-right-wrap ul li span:not(:last-child) {
            padding-right: 1.125rem;
            vertical-align: middle;
            color: #F8E71C; }
          .kvs-wrapper footer .footer-right .footer-right-wrap ul li span i {
            font-size: 1.25rem; }
          .kvs-wrapper footer .footer-right .footer-right-wrap ul li span:last-child {
            color: #ffffff; }
        .kvs-wrapper footer .footer-right .footer-right-wrap .copy-right {
          margin-top: 76px; }
          .kvs-wrapper footer .footer-right .footer-right-wrap .copy-right .sm-span .bold-span {
            font-weight: 600; }

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .kvs-wrapper .about figure img {
    width: 550px;
    left: -4%; }
  .kvs-wrapper .about .about-wrap-center .about-wrap .heading3 {
    max-width: 420px;
    padding-bottom: 1.5rem; }
  .kvs-wrapper .summary .text-wrap {
    margin-bottom: 3rem; }
    .kvs-wrapper .summary .text-wrap h3 {
      margin-top: .625rem; }
  .kvs-wrapper .features {
    background-size: 800px; }
    .kvs-wrapper .features .row-wrap .content-wrap h3 {
      max-width: 420px; }
    .kvs-wrapper .features .row-wrap .content-wrap ul {
      margin-top: 1.813rem; }
      .kvs-wrapper .features .row-wrap .content-wrap ul li {
        margin-bottom: .5rem; }
        .kvs-wrapper .features .row-wrap .content-wrap ul li i {
          font-size: 1rem; }
  .kvs-wrapper footer .footer-left .footer-left-wrap .logo-wrap .logo-img figure img {
    width: 75px; }
  .kvs-wrapper footer .footer-right .footer-right-wrap ul li:not(:last-child) {
    margin-bottom: .325rem;
    padding-right: .75rem; }
  .kvs-wrapper footer .footer-right .footer-right-wrap ul li span i {
    font-size: 1.125rem; }
  .kvs-wrapper footer .footer-right .footer-right-wrap .copy-right {
    margin-top: 3.125rem; }

  .banner .banner-wrap-center .banner-content figure img {
    width: 90px;
    height: 80px; } }
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .kvs-wrapper .about figure img {
    width: 450px;
    left: -4%; }
  .kvs-wrapper .about .about-wrap-center {
    padding-left: 1.25rem; }
    .kvs-wrapper .about .about-wrap-center .about-wrap p {
      max-width: 370px; }
    .kvs-wrapper .about .about-wrap-center .about-wrap .heading3 {
      max-width: 350px;
      padding-bottom: 1.25rem; }
  .kvs-wrapper .summary .text-wrap {
    margin-bottom: 3rem; }
    .kvs-wrapper .summary .text-wrap h3 {
      margin-top: .625rem; }
  .kvs-wrapper .features {
    background-size: 700px; }
    .kvs-wrapper .features .row-wrap .content-wrap h3 {
      max-width: 390px; }
    .kvs-wrapper .features .row-wrap .content-wrap ul {
      margin-top: 1.813rem; }
      .kvs-wrapper .features .row-wrap .content-wrap ul li {
        margin-bottom: .5rem; }
        .kvs-wrapper .features .row-wrap .content-wrap ul li i {
          font-size: 1rem; }
  .kvs-wrapper footer .footer-left .footer-left-wrap {
    max-width: 400px; }
    .kvs-wrapper footer .footer-left .footer-left-wrap .logo-wrap .logo-img figure img {
      width: 60px; }
  .kvs-wrapper footer .footer-right .footer-right-wrap {
    padding-left: 40px; }
    .kvs-wrapper footer .footer-right .footer-right-wrap ul li:not(:last-child) {
      margin-bottom: .5rem; }
    .kvs-wrapper footer .footer-right .footer-right-wrap ul li span:not(:last-child) {
      margin-bottom: .2rem;
      padding-right: .5rem; }
    .kvs-wrapper footer .footer-right .footer-right-wrap ul li span i {
      font-size: 1rem; }
    .kvs-wrapper footer .footer-right .footer-right-wrap .copy-right {
      margin-top: 2.125rem; }

  .banner .banner-wrap-center .banner-content {
    max-width: 418px; }
    .banner .banner-wrap-center .banner-content figure img {
      width: 80px;
      height: 70px; } }
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .kvs-wrapper header .nav-wrap .nav-right ul li:not(:last-child) {
    margin-right: 2rem; }
  .kvs-wrapper .about figure {
    text-align: center; }
    .kvs-wrapper .about figure img {
      width: 400px;
      left: 0; }
  .kvs-wrapper .about .about-wrap-center {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center; }
    .kvs-wrapper .about .about-wrap-center .about-wrap {
      margin-top: 2rem;
      text-align: center; }
      .kvs-wrapper .about .about-wrap-center .about-wrap p {
        max-width: 370px; }
      .kvs-wrapper .about .about-wrap-center .about-wrap .heading3 {
        max-width: 350px;
        padding-bottom: 1.25rem; }
  .kvs-wrapper .summary .text-wrap {
    margin-bottom: 3rem; }
    .kvs-wrapper .summary .text-wrap h3 {
      margin-top: .625rem; }
  .kvs-wrapper .summary .flex-series-boxes .flex-sm-boxes {
    flex: 0 0 18%;
    max-width: 18%;
    padding: 2rem 0; }
    .kvs-wrapper .summary .flex-series-boxes .flex-sm-boxes:not(:last-child) {
      margin-right: 1rem; }
  .kvs-wrapper .features {
    background-size: 800px; }
    .kvs-wrapper .features .row-wrap .content-wrap h3 {
      max-width: 390px; }
    .kvs-wrapper .features .row-wrap .content-wrap ul {
      margin-top: 1.813rem; }
      .kvs-wrapper .features .row-wrap .content-wrap ul li {
        margin-bottom: .4rem; }
        .kvs-wrapper .features .row-wrap .content-wrap ul li i {
          font-size: .938rem; }
  .kvs-wrapper footer .footer-left .footer-left-wrap {
    max-width: 300px; }
    .kvs-wrapper footer .footer-left .footer-left-wrap .logo-wrap .logo-img figure img {
      width: 50px; }
  .kvs-wrapper footer .footer-right .footer-right-wrap {
    padding-left: 25px; }
    .kvs-wrapper footer .footer-right .footer-right-wrap ul {
      margin-top: 1.125rem; }
      .kvs-wrapper footer .footer-right .footer-right-wrap ul li:not(:last-child) {
        margin-bottom: .2rem; }
      .kvs-wrapper footer .footer-right .footer-right-wrap ul li span:not(:last-child) {
        margin-bottom: .2rem;
        padding-right: .5rem; }
      .kvs-wrapper footer .footer-right .footer-right-wrap ul li span i {
        font-size: .938rem; }
    .kvs-wrapper footer .footer-right .footer-right-wrap .copy-right {
      margin-top: 3.5rem; }

  .banner .banner-wrap-center .banner-content {
    max-width: 355px; }
    .banner .banner-wrap-center .banner-content figure {
      margin-bottom: 2rem; }
      .banner .banner-wrap-center .banner-content figure img {
        width: 70px;
        height: 60px; } }
@media only screen and (min-width: 480px) and (max-width: 767px) {
  .kvs-wrapper header .nav-wrap .nav-right ul li:not(:last-child) {
    margin-right: 2rem; }
  .kvs-wrapper .about figure {
    text-align: center; }
    .kvs-wrapper .about figure img {
      width: 400px;
      left: 0; }
  .kvs-wrapper .about .about-wrap-center {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center; }
    .kvs-wrapper .about .about-wrap-center .about-wrap {
      margin-top: 2rem;
      text-align: center; }
      .kvs-wrapper .about .about-wrap-center .about-wrap p {
        max-width: 370px; }
      .kvs-wrapper .about .about-wrap-center .about-wrap .heading3 {
        max-width: 350px;
        padding-bottom: 1.25rem; }
  .kvs-wrapper .summary .text-wrap {
    margin-bottom: 3rem; }
    .kvs-wrapper .summary .text-wrap h3 {
      margin-top: .625rem; }
  .kvs-wrapper .summary .flex-series-boxes .flex-sm-boxes {
    flex: 0 0 18%;
    max-width: 18%;
    padding: 2rem 0; }
    .kvs-wrapper .summary .flex-series-boxes .flex-sm-boxes:not(:last-child) {
      margin-right: 1rem; }
  .kvs-wrapper .features {
    background-size: 800px; }
    .kvs-wrapper .features .row-wrap .content-wrap h3 {
      max-width: 390px; }
    .kvs-wrapper .features .row-wrap .content-wrap ul {
      margin-top: 1.813rem; }
      .kvs-wrapper .features .row-wrap .content-wrap ul li {
        margin-bottom: .4rem; }
        .kvs-wrapper .features .row-wrap .content-wrap ul li i {
          font-size: .938rem; }
  .kvs-wrapper footer .footer-left .footer-left-wrap {
    max-width: 300px; }
    .kvs-wrapper footer .footer-left .footer-left-wrap .logo-wrap .logo-img figure img {
      width: 50px; }
  .kvs-wrapper footer .footer-right .footer-right-wrap {
    padding-left: 25px; }
    .kvs-wrapper footer .footer-right .footer-right-wrap ul {
      margin-top: 1.125rem; }
      .kvs-wrapper footer .footer-right .footer-right-wrap ul li:not(:last-child) {
        margin-bottom: .2rem; }
      .kvs-wrapper footer .footer-right .footer-right-wrap ul li span:not(:last-child) {
        margin-bottom: .2rem;
        padding-right: .5rem; }
      .kvs-wrapper footer .footer-right .footer-right-wrap ul li span i {
        font-size: .938rem; }
    .kvs-wrapper footer .footer-right .footer-right-wrap .copy-right {
      margin-top: 3.5rem; }

  .banner .banner-wrap-center .banner-content {
    max-width: 355px; }
    .banner .banner-wrap-center .banner-content figure {
      margin-bottom: 2rem; }
      .banner .banner-wrap-center .banner-content figure img {
        width: 70px;
        height: 60px; } }

/*# sourceMappingURL=kvs.cs.map */
