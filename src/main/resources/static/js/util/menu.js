(async () => {
  const response = await fetch("json/data_menu.json"),
    jsonRpta = await response.json();
  //console.log(jsonRpta);
  jsonRpta.forEach((element) => {
    console.log(element);
  });
})();
