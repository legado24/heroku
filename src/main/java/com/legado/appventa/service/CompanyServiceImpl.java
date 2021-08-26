package com.legado.appventa.service;

import com.legado.appventa.dao.CompanyDao;
import com.legado.appventa.response.CompanyResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CompanyServiceImpl implements CompanyService {

    @Autowired
    private CompanyDao companyDao;

    @Override
    public CompanyResponse listCompany() {

        return companyDao.listCompany();
    }

}
