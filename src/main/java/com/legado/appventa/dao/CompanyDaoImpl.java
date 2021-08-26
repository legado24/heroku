package com.legado.appventa.dao;

import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.Types;
import java.util.ArrayList;
import java.util.List;

import com.legado.appventa.model.Company;
import com.legado.appventa.response.CompanyResponse;
import com.legado.appventa.response.StatusResponse;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CompanyDaoImpl implements CompanyDao{

    @Autowired
    private SessionFactory sessionFactory;

 
    @Override
    public CompanyResponse listCompany() {
        
        return sessionFactory.getCurrentSession().doReturningWork(connection->{
            try {
                CompanyResponse companyResponse=new CompanyResponse();
                StatusResponse statusResponse=new StatusResponse();
                CallableStatement cs=connection.prepareCall("{?= call list_company()}");
                cs.setObject(1,Types.OTHER);
                cs.execute();
                ResultSet rs=(ResultSet) cs.getObject(1);
                List<Company> companies=new ArrayList<>();
                if(rs!=null){
                    while (rs.next()) {
                        Company company=new Company();
                        company.setCode(rs.getString("CODE"));
                        company.setDescription(rs.getString("DESCRIPTION"));
                        companies.add(company);
                    }
                    rs.close();
                    cs.close();

                }
                companyResponse.setCompanies(companies);
                companyResponse.setStatusResponse(statusResponse);
                
                return companyResponse;

            } catch (Exception e) {
                
                return null;
            }
            }
        );
    }
    
}
