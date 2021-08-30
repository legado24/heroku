import {
  fuctionAsincronaExpresada,
  functionAsincronaDeclarada,
  listCompany,
  listSedes,
} from "./customerService.js";
import { print, _$ } from "./util.js";

const $companySelect = $("#company-select"); //_$('company-select');
const $sedeSelect = $("#sede-select"); //_$('company-select');
const $fragmentCompanySelect = document.createDocumentFragment();
let companyDefault = null;
async function loadDependencies() {
  try {
     
    comboCompany();

    $companySelect.on("change", async function (e) {
      comboSedes($companySelect.val());
    });
  } catch (error) {
    //crear fx para mensajes
    console.log(error);
  }
}

async function comboCompany() {
  $companySelect.html("");
  $companySelect.selectpicker("refresh");
  const $fragmentCompanySelect = document.createDocumentFragment();
  const listCompanyResponse = await listCompany();

  const statusResponseCompany = listCompanyResponse.statusResponse;
  const companyList = listCompanyResponse.companyList;

  if (statusResponseCompany.code !== 1) throw statusResponseCompany;
  companyList.forEach((company) => {
    if (companyDefault == null) companyDefault = company;
    const $option = document.createElement("option");
    $option.value = company.code;
    $option.innerHTML = company.code + "-" + company.description;
    $fragmentCompanySelect.appendChild($option);
  });

  $companySelect.append($fragmentCompanySelect);
  $companySelect.selectpicker();
  $companySelect.selectpicker("refresh");

  comboSedes(companyDefault.code);
}

async function comboSedes(codeCompany) {
  $sedeSelect.html("");
  $sedeSelect.selectpicker("refresh");
  const $fragmentSedeSelect = document.createDocumentFragment();
  const listSedeResponse = await listSedes({
    codeCompany: codeCompany,
  });

  const statusResponseSede = listSedeResponse.statusResponse;
  const sedeList = listSedeResponse.sedeList;
  console.log(sedeList);
  if (statusResponseSede.code !== 1) throw statusResponseSede;
  sedeList.forEach((sede) => {
    // if (companyDefault == null) companyDefault = company;
    const $option = document.createElement("option");
    $option.value = sede.code;
    $option.innerHTML = sede.code + "-" + sede.description;
    $fragmentSedeSelect.appendChild($option);
  });

  $sedeSelect.append($fragmentSedeSelect);
  $sedeSelect.selectpicker();
  $sedeSelect.selectpicker("refresh");
}

class CustomerJs {
  loadInit = () => loadDependencies();
}

(() => {
  const customerJs = new CustomerJs();
  customerJs.loadInit();
})();
