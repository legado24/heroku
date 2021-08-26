package com.legado.appventa.controller;

import com.legado.appventa.model.Company;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class CustomerController {
    @Value("${spring.application.name}")
    String appName;
    
    @GetMapping("/")
    public String getHome(Model model) {
        System.out.println("x");
        model.addAttribute("appName", appName);
        return "inicio";
    }

    @PostMapping("/getEmpresas")
    public String getEmpresas(Model model) {
        System.out.println("x");
        Company company=new Company();
        company.setCode("");
        company.setDescription("description");

       
        model.addAttribute("appName", appName);
        return "inicio";
    }

}
