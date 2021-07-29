import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { weekdayCalculator } from './weekday.js';

$("#formOne").submit(function(event){
  event.preventDefault();
  const userDate = $("#userDate").val();
  const htmlForResults = `<h3>The day of the week is <span id = 'dayOutput'><span>.</h3>`;
  $("#results").show();
  $("#results").html(htmlForResults);
  $("#dayOutput").text(weekdayCalculator(userDate));
});
