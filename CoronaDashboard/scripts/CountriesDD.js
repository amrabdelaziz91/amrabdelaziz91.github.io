function formatCountry(country) {
  if (!country.id) {
    return country.text;
  }
  var $country = $(
    '<span class="flag-icon flag-icon-' +
      country.id.toLowerCase() +
      ' flag-icon-squared"></span>' +
      '<span class="flag-text">' +
      country.text +
      "</span>"
  );
  return $country;
}

//Assuming you have a select element with name country
// e.g. <select name="name"></select>

createCountriesDD = countries => {
  $("[name='country']")
    .select2({
      placeholder: "Select a country",
      templateResult: formatCountry,
      templateSelection: formatCountry,
      data: countries
    })
    .on("select2:select", function(e) {
      var data = e.params.data;
      selectCountry(data.id);
      console.log("hey");
    });
};

function countriesDropDownSelectOption(id) {
  //let opt = isoCountries.find(e => e.id == id);
  $("[name='country']")
    .val(id)
    .trigger("change");
}
