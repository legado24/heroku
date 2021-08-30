package com.legado.appventa.service;

import com.legado.appventa.dao.SedeDao;
import com.legado.appventa.response.SedeListResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class SedeServiceImpl implements SedeService {
@Autowired
private SedeDao sedeDao;

    @Override
    public SedeListResponse listSedes(String codCompany) {
         return sedeDao.listSedes(codCompany);
    }
    
}
