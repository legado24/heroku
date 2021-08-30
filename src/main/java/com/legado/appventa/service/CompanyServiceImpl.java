package com.legado.appventa.service;

import com.legado.appventa.dao.CompanyDao;
import com.legado.appventa.response.CompanyListResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CompanyServiceImpl implements CompanyService {

    @Autowired
    private CompanyDao companyDao;

    @Override
    public CompanyListResponse listCompany() {

        return companyDao.listCompany();
    }

}
