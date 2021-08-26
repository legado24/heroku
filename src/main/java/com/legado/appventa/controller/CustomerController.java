package com.legado.appventa.controller;

import com.legado.appventa.response.CompanyResponse;
import com.legado.appventa.service.CompanyService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class CustomerController {
    @Value("${spring.application.name}")
    String appName;

    @Autowired
    private CompanyService companyService;
    
    
    @GetMapping("/")
    public String getHome(Model model) {
        System.out.println("x");
        CompanyResponse companyResponse=companyService.listCompany();
 
        System.out.println("Longitud:"+companyResponse.getCompanies().size());
        model.addAttribute("appName", companyResponse.getCompanies().size());
        return "inicio";
    }

    @PostMapping("/getEmpresas")
    public String getEmpresas(Model model) {
         
        CompanyResponse companyResponse=companyService.listCompany();
 
        System.out.println("Longitud:"+companyResponse.getCompanies().size());
        model.addAttribute("appName", appName);
        return "inicio";
    }

}
