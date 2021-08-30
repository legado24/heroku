package com.legado.appventa.controller;

import com.legado.appventa.response.CompanyListResponse;
import com.legado.appventa.response.SedeListResponse;
import com.legado.appventa.service.CompanyService;
import com.legado.appventa.service.SedeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class CustomerController {
  @Value("${spring.application.name}")
  String appName;

  @Autowired
  private CompanyService companyService;

  @Autowired
  private SedeService sedeService;

  @GetMapping("/")
  public String getHome(Model model) {
    // SedeListResponse sedeListResponse = sedeService.listSedes("01");

    // model.addAttribute("appName", sedeListResponse.getSedeList().size());

    return "home";
  }

  @GetMapping(value = "/getCompanys", produces = "application/json; charset=UTF-8")
  @ResponseBody
  public CompanyListResponse getCompanys() {

    CompanyListResponse companyResponse = companyService.listCompany();

    // System.out.println("Longitud:"+companyResponse.getCompanies().size());
    /* model.addAttribute("appName", appName); */
    return companyResponse;
  }

  @GetMapping(value = "/getSedes", produces = "application/json; charset=UTF-8")
  @ResponseBody
  public SedeListResponse getSedes(@RequestParam String codeCompany) {

    SedeListResponse sedeListResponse = sedeService.listSedes(codeCompany);

    // System.out.println("Longitud:"+companyResponse.getCompanies().size());
    /* model.addAttribute("appName", appName); */
    return sedeListResponse;
  }

}
