package com.legado.appventa.controller;

import org.springframework.web.bind.annotation.RestController;

import com.legado.appventa.response.CompanyListResponse;
import com.legado.appventa.service.CompanyService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@RestController
public class ApiController {
    @Autowired
    private CompanyService companyService;

    @GetMapping(value="listCompany")
    @ResponseBody
    public  CompanyListResponse listaCompany() {
        CompanyListResponse companyListResponse=companyService.listCompany();
        
        return companyListResponse;
    }
    

    
}
